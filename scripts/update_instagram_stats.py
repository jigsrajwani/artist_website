import json
import os
import datetime
import time

try:
    import instaloader
except ImportError:
    print("Please install instaloader by running: pip install instaloader")
    exit(1)

def format_number(num):
    if num >= 1_000_000:
        return f"{num / 1_000_000:.1f}".rstrip('0').rstrip('.') + "M+"
    if num >= 1_000:
        return f"{num // 1000}k+"
    return str(num)

def format_number_raw(num):
    if num >= 1_000_000:
        return int(num / 1_000_000), "M+"
    if num >= 1_000:
        return int(num // 1000), "k+"
    return num, ""

def get_youtube_subs(username):
    url = f"https://www.youtube.com/{username}"
    try:
        import requests
        import re
        html = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}).text
        matches = re.findall(r'([\d\.]+[KMB]*)\s*subscribers', html, re.IGNORECASE)
        if matches:
            max_val = -1
            best_str = ""
            for subs_str in matches:
                subs_str_upper = subs_str.upper()
                if "M" in subs_str_upper:
                    val = float(subs_str_upper.replace("M", "")) * 1000000
                elif "K" in subs_str_upper:
                    val = float(subs_str_upper.replace("K", "")) * 1000
                else:
                    val = float(subs_str_upper)
                
                if val > max_val:
                    max_val = val
                    best_str = subs_str_upper
            
            if "M" in best_str:
                return float(best_str.replace("M", "")), "M+"
            elif "K" in best_str:
                return float(best_str.replace("K", "")), "K+"
            else:
                return int(best_str), ""
    except Exception as e:
        print(f"Failed to fetch YouTube stats: {e}")
    return None, None

def update_stats(username):
    print(f"Fetching data for @{username}...")
    L = instaloader.Instaloader()
    
    # Update User-Agent to prevent 401 Unauthorized errors
    L.context._session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    })
    
    # Read .env file directly (no pip packages needed)
    env_path = os.path.join(os.path.dirname(__file__), '../.env')
    ig_user = None
    ig_pass = None
    ig_sessionid = None
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if '=' in line and not line.startswith('#'):
                    key, val = line.strip().split('=', 1)
                    if key == "IG_USERNAME": ig_user = val
                    elif key == "IG_PASSWORD": ig_pass = val
                    elif key == "IG_SESSIONID": ig_sessionid = val

    # 1. Try to login with cookies from .env first
    if ig_sessionid and ig_sessionid != "your_session_id_here":
        try:
            L.context._session.cookies.update({"sessionid": ig_sessionid})
            print(f"✅ Loaded authentication from IG_SESSIONID cookie!")
        except Exception as e:
            print(f"❌ Failed to set cookie: {e}")
            return
            
    # 2. If no valid session ID in .env, attempt Auto-Extract from Browser
    else:
        print("Attempting to auto-extract Instagram cookie from your local browser...")
        try:
            import browser_cookie3
            cj = browser_cookie3.load(domain_name='instagram.com')
            extracted_sessionid = None
            for cookie in cj:
                if cookie.name == 'sessionid':
                    extracted_sessionid = cookie.value
                    break
            
            if extracted_sessionid:
                L.context._session.cookies.update({"sessionid": extracted_sessionid})
                print("✅ Successfully auto-extracted Instagram session cookie from your browser!")
            # 3. If no browser cookie, fallback to standard username/password login
            elif ig_user and ig_pass and ig_pass != "your_password_here":
                try:
                    print("⚠️ Could not find browser cookies. Trying password login...")
                    L.login(ig_user, ig_pass)
                    print(f"✅ Successfully logged in as {ig_user} using .env credentials!")
                except Exception as e:
                    print(f"❌ Failed to login: {e}")
                    return
            else:
                print("❌ No cookies found and no password provided. Please log into instagram.com.")
                return
        except ImportError:
            # Fallback to password logic if browser_cookie3 isn't installed
            print("❌ 'browser-cookie3' not installed. Falling back to password...")
            if ig_user and ig_pass and ig_pass != "your_password_here":
                try:
                    L.login(ig_user, ig_pass)
                    print(f"✅ Successfully logged in as {ig_user} using .env credentials!")
                except Exception as e:
                    print(f"❌ Failed to login: {e}")
                    return
            else:
                print("❌ Plase run 'pip install browser-cookie3' to use the auto extraction feature.")
                return
        except Exception as e:
            print(f"❌ Failed to extract browser cookies: {e}. Falling back to password...")
            if ig_user and ig_pass and ig_pass != "your_password_here":
                try:
                    L.login(ig_user, ig_pass)
                    print(f"✅ Successfully logged in as {ig_user} using .env credentials!")
                except Exception as e:
                    print(f"❌ Failed to login: {e}")
                    return
            else:
                return
    
    try:
        profile = instaloader.Profile.from_username(L.context, username)
        
        followers_count = profile.followers
        follower_val, follower_suffix = format_number_raw(followers_count)

        # Load existing data from stats.json to preserve manual edits
        filepath = os.path.join(os.path.dirname(__file__), '../app/data/stats.json')
        existing_data = {}
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r') as f:
                    existing_data = json.load(f)
            except Exception:
                pass
        
        # Merge new follower stats into existing data
        data = existing_data.copy()
        data["instagramFollowers"] = follower_val
        data["instagramFollowersSuffix"] = follower_suffix
        data["lastUpdated"] = datetime.datetime.now().isoformat()
        
        # Merge YouTube stats
        yt_val, yt_suffix = get_youtube_subs("@hpomashups")
        if yt_val is not None:
            data["youtubeSubscribers"] = yt_val
            data["youtubeSubscribersSuffix"] = yt_suffix
            print(f"YouTube Subscribers: {yt_val}{yt_suffix}")
        
        # Ensure total reel views format exists (if user hasn't created it yet)
        if "totalReelViews" not in data:
            data["totalReelViews"] = 70
            data["totalReelViewsSuffix"] = "M+"
            
        # Ensure reels dict exists
        if "reels" not in data:
            data["reels"] = {}
        
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2)
            
        print(f"✅ Successfully updated followers in {filepath}!")
        print("Note: Specific reel views and total reel views are preserved from the JSON for manual edits.")

    except Exception as e:
        print(f"❌ Error fetching data: {e}")

if __name__ == "__main__":
    update_stats("mashbyhpo")
