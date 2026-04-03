import requests
import re

html = requests.get('https://www.youtube.com/@hpomashups', headers={'User-Agent': 'Mozilla/5.0'}).text
matches = re.findall(r'"subscriberCountText".*?"simpleText":"(.*?)"', html, re.IGNORECASE)
print(f"subscriberCountText simpleText matches: {matches}")
