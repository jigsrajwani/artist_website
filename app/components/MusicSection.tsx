'use client';

const YOUTUBE_VIDEO_ID = 'lJsoBJ6mhbU';
const SPOTIFY_ARTIST_ID = '1SJUQAt9760R13860NjAEJ';
const YOUTUBE_CHANNEL = 'https://www.youtube.com/@mashbyhpo';
const SPOTIFY_ARTIST_URL = `https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`;
const SOUNDCLOUD_URL = 'https://m.soundcloud.com/hardik-puri-oal';

// const featuredArtists = [
//   'Vishal Mishra', 'Aditya Rikhari', 'Armaan Malik',
//   'Jubin Nautiyal', 'Arijit Singh', 'Neha Kakkar',
// ];

const soundcloudTracks = [
  { id: 'sc1', title: 'Midnight Vibes – Extended Set',    duration: '45:23', plays: '12K', bg: 'linear-gradient(135deg,#f97316,#d97706)' },
  { id: 'sc2', title: 'Bollywood Mashup Compilation',     duration: '32:10', plays: '28K', bg: 'linear-gradient(135deg,#00D4FF,#2563eb)' },
  { id: 'sc3', title: 'Club Night Special Mix',           duration: '58:45', plays: '9K',  bg: 'linear-gradient(135deg,#8B5CF6,#7c3aed)' },
];

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '0.75rem', background: '#000' }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

function SpotifyEmbed({ artistId, title }: { artistId: string; title: string }) {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src={`https://open.spotify.com/embed/artist/${artistId}?utm_source=generator`}
        style={{ width: '100%', height: '352px', border: 'none', display: 'block', borderRadius: '12px' }}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        title={title}
      />
    </div>
  );
}

const ytIconPath = 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z';
const spIconPath = 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z';
const playIconPath = 'M8 5v14l11-7z';
const extLinkPath = 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14';

export default function MusicSection() {
  return (
    <section id="music" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG glows */}
      <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '24rem', height: '24rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '24rem', height: '24rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Original Productions</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
            Download &amp;{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Listen</span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto' }}>
            Stream original mixes and productions directly. Available on all platforms.
          </p>
        </div>

        {/* ── 2-column grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>

          {/* ── LEFT: YouTube ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg style={{ width: '16px', height: '16px', fill: 'white' }} viewBox="0 0 24 24"><path d={ytIconPath} /></svg>
              </div>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>YouTube</h3>
            </div>

            {/* Featured artists pills */}
            {/* <div>
              <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>🎵 Mashups on songs by</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {featuredArtists.map((artist) => (
                  <span key={artist} style={{ padding: '0.25rem 0.7rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 600, color: '#a78bfa', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
                    {artist}
                  </span>
                ))}
              </div>
            </div> */}

            <YouTubeEmbed videoId={YOUTUBE_VIDEO_ID} title="DJ HPO – Bollywood Fusion Mix" />

            <a
              id="youtube-channel-btn"
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', borderRadius: '9999px', border: '1px solid rgba(239,68,68,0.4)', color: '#ef4444', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(239,68,68,0.08)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
            >
              <svg style={{ width: '16px', height: '16px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d={ytIconPath} /></svg>
              Subscribe on YouTube
            </a>
          </div>

          {/* ── RIGHT: Spotify + Sets ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Spotify */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '16px', height: '16px', fill: '#000' }} viewBox="0 0 24 24"><path d={spIconPath} /></svg>
                </div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>Spotify</h3>
              </div>

              <SpotifyEmbed artistId={SPOTIFY_ARTIST_ID} title="DJ HPO on Spotify" />

              <a
                id="spotify-follow-btn"
                href={SPOTIFY_ARTIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', borderRadius: '9999px', border: '1px solid rgba(34,197,94,0.4)', color: '#22c55e', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginTop: '0.75rem', transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.08)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
              >
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d={spIconPath} /></svg>
                Follow on Spotify
              </a>

              {/* SoundCloud */}
              <a
                id="soundcloud-follow-btn"
                href={SOUNDCLOUD_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '0.75rem', borderRadius: '9999px', border: '1px solid rgba(249,115,22,0.4)', color: '#f97316', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(249,115,22,0.08)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
              >
                <svg style={{ width: '16px', height: '16px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M11.56 8.87V17h8.76c.95 0 1.68-.75 1.68-1.68 0-.93-.74-1.69-1.68-1.69-.1 0-.2.01-.3.03C19.9 11.92 18.6 11 17.07 11c-.1 0-.19.01-.29.02C16.25 9.28 14.55 8 12.57 8c-.36 0-.7.05-1.01.14zM0 15.32C0 16.25.75 17 1.68 17s1.68-.75 1.68-1.68V11.9c0-.93-.75-1.68-1.68-1.68S0 10.97 0 11.9v3.42zm5.04 1.01c0 .56.45 1.01 1.01 1.01s1.01-.45 1.01-1.01V9.67c0-.56-.45-1.01-1.01-1.01S5.04 9.11 5.04 9.67v6.66zm3.36.34c0 .37.3.67.67.67s.67-.3.67-.67V8.53c0-.37-.3-.67-.67-.67s-.67.3-.67.67v8.14zm3.36.33c0 .18.15.33.34.33.18 0 .33-.15.33-.33V8.87c-.1-.03-.22-.05-.33-.05-.19 0-.34.15-.34.34v8.14z"/></svg>
                Listen on SoundCloud
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
