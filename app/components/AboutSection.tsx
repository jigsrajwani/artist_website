'use client';

import Image from 'next/image';

const achievements = [
  { icon: '🎵', value: '50M+', label: 'Total Reel Views' },
  { icon: '👥', value: '100k+', label: 'Instagram Followers' },
  { icon: '🎧', value: '5+', label: 'Mashup Pack Volumes' },
  { icon: '🎤', value: '100+', label: 'Events Performed' },
  { icon: '🔥', value: '100+', label: 'Viral Mashups Created' },
  { icon: '🌏', value: '5+', label: 'Years in Scene' },
];

const tags = ['Bollywood Mashups', 'EDM', 'Club DJ', 'Viral Reels', 'Wedding DJ', 'Brand Collab'];

const stageHighlights = [
  { label: 'Nucleya',         emoji: '🎛️', color: 'rgba(0,212,255,0.12)',  border: 'rgba(0,212,255,0.3)'  },
  { label: 'Jassie Gill',     emoji: '🎤', color: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.4)' },
  { label: 'Parmish Verma',   emoji: '🔥', color: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.35)' },
  { label: 'Darshan Rawal',   emoji: '🎵', color: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.35)' },
  { label: 'Seedhe Maut',     emoji: '⚡', color: 'rgba(234,179,8,0.12)',  border: 'rgba(234,179,8,0.35)'  },
  { label: 'Jass Manak',      emoji: '🎙️', color: 'rgba(20,184,166,0.12)', border: 'rgba(20,184,166,0.35)' },
  { label: 'Arjun Kanungo',   emoji: '🌟', color: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.35)' },
  { label: 'Almost Human',    emoji: '🎧', color: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)' },
  { label: 'Rebel Kid',       emoji: '💥', color: 'rgba(239,68,68,0.12)',  border: 'rgba(239,68,68,0.35)'  },
];

const featuredArtists = ['Vishal Mishra', 'Aditya Rikhari'];

const waveHeights = [6, 20, 10, 28, 8, 24, 32, 12, 26, 6, 18, 30, 10, 22, 8, 28, 14, 24, 10, 18];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG glow */}
      <div style={{ position: 'absolute', top: '30%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* 2-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* ── LEFT: Profile Card ── */}
          <div style={{ position: 'relative' }}>
            {/* Glass card */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(16px)',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              position: 'relative',
            }}>
              {/* Artist photo circle */}
              <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 1.5rem' }}>
                {/* Outer rotating neon ring */}
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  border: '2px dashed rgba(0,212,255,0.35)',
                  animation: 'spin 12s linear infinite',
                }} />
                {/* Inner purple ring */}
                <div style={{ position: 'absolute', inset: '6px', borderRadius: '50%', border: '1px solid rgba(139,92,246,0.45)' }} />
                {/* Photo */}
                <div style={{ position: 'absolute', inset: '14px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(0,212,255,0.25)' }}>
                  <Image
                    src="/artist.jpg"
                    alt="DJ HPO"
                    fill
                    quality={90}
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="180px"
                  />
                </div>
                {/* Glow */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(10px)', pointerEvents: 'none' }} />
              </div>

              {/* Name */}
              <h3 style={{ color: 'white', fontWeight: 900, fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif', marginBottom: '0.25rem' }}>DJ HPO</h3>
              <p style={{ color: '#00D4FF', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.2rem' }}>@mashbyhpo</p>
              <p style={{ fontSize: '0.75rem', marginBottom: '1.5rem' }}>
                <a href="https://www.instagram.com/hpo_music/" target="_blank" rel="noopener noreferrer" style={{ color: '#f472b6', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em' }}>@hpo_music</a>
                <span style={{ color: 'rgba(107,114,128,1)', marginLeft: '0.4rem', fontSize: '0.7rem' }}>Shows &amp; Events</span>
              </p>

              {/* Platform badges */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>IG</span>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>YT</span>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>SP</span>
                </div>
              </div>

              {/* Waveform */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '3px', height: '36px', padding: '0 1rem' }}>
                {waveHeights.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}px`,
                      background: 'linear-gradient(to top, #8B5CF6, #00D4FF)',
                      borderRadius: '2px',
                      opacity: 0.75,
                    }}
                  />
                ))}
              </div>

              {/* Press Kit CTA */}
              <a
                href="https://drive.google.com/drive/folders/1jfahrbHcaNF_OylcgawQeoS3G0-B3iUj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                  marginTop: '1.25rem', padding: '0.55rem 1.25rem', borderRadius: '9999px',
                  background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00D4FF', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none',
                  letterSpacing: '0.04em', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,212,255,0.15)'}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(0,212,255,0.08)'}
              >
                <svg style={{ width: '13px', height: '13px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
                Download Press Kit
              </a>
            </div>

            {/* Floating stat badge — top right */}
            <div style={{
              position: 'absolute', top: '-14px', right: '-14px',
              background: 'rgba(10,20,40,0.9)',
              border: '1px solid rgba(0,212,255,0.25)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              padding: '0.6rem 1rem',
            }}>
              <div style={{ fontSize: '11px', color: 'rgba(156,163,175,1)', marginBottom: '2px' }}>Total Views</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50M+</div>
            </div>

            {/* Floating stat badge — bottom left */}
            <div style={{
              position: 'absolute', bottom: '-14px', left: '-14px',
              background: 'rgba(10,20,40,0.9)',
              border: '1px solid rgba(139,92,246,0.3)',
              backdropFilter: 'blur(12px)',
              borderRadius: '12px',
              padding: '0.6rem 1rem',
            }}>
              <div style={{ fontSize: '11px', color: 'rgba(156,163,175,1)', marginBottom: '2px' }}>Followers</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#a78bfa' }}>100k+</div>
            </div>
          </div>

          {/* ── RIGHT: Bio ── */}
          <div>
            {/* Section label */}
            <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', marginBottom: '1rem', borderRadius: '2px' }} />
            <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Artist Profile
            </p>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              About{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                DJ HPO
              </span>
            </h2>

            {/* Bio text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              <p style={{ color: 'rgba(209,213,219,1)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                DJ HPO is a viral mashup artist with{' '}
                <span style={{ color: '#00D4FF', fontWeight: 600 }}>5+ years in the scene</span>,
                known for creating high-energy Bollywood and EDM mashups that have taken social media by storm. With a signature style that blends Indian music with global club sounds, HPO has built a massive following across platforms.
              </p>
              <p style={{ color: 'rgba(209,213,219,1)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Starting as a bedroom producer, DJ HPO quickly rose to prominence through viral Instagram reels, amassing over{' '}
                <span style={{ color: '#00D4FF', fontWeight: 600 }}>50 million total views</span>{' '}
                and a passionate community of music lovers. HPO has played{' '}
                <span style={{ color: '#a78bfa', fontWeight: 600 }}>100+ events</span> — covering every major campus chain in Rajasthan and major colleges &amp; clubs across North India.
              </p>
              <p style={{ color: 'rgba(209,213,219,1)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Whether it&apos;s electrifying wedding sets, brand promotions, or sharing the stage with top Bollywood & EDM artists — DJ HPO brings unmatched energy to every performance. Follow{' '}
                <a href="https://www.instagram.com/hpo_music/" target="_blank" rel="noopener noreferrer" style={{ color: '#f472b6', fontWeight: 600, textDecoration: 'none' }}>@hpo_music</a>{' '}
                for behind-the-scenes from shows, concerts &amp; weddings.
              </p>
            </div>

            {/* ── Stage Highlights ── */}
            <div style={{ marginBottom: '1.75rem' }}>
              <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>🎤 Shared Stage With</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {stageHighlights.map((h) => (
                  <span
                    key={h.label}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      padding: '0.35rem 0.85rem', borderRadius: '9999px',
                      fontSize: '0.78rem', fontWeight: 600, color: 'white',
                      background: h.color, border: `1px solid ${h.border}`,
                    }}
                  >
                    <span>{h.emoji}</span> {h.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Featured Artists ── */}
            <div style={{ marginBottom: '1.75rem' }}>
              <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>🎵 Mashups on songs by</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {featuredArtists.map((artist) => (
                  <span key={artist} style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 600, color: '#a78bfa', background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}>
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            {/* Style tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#00D4FF',
                    border: '1px solid rgba(0,212,255,0.25)',
                    background: 'rgba(0,212,255,0.06)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Achievements grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {achievements.map((ach) => (
                <div
                  key={ach.label}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '0.875rem',
                    padding: '1rem 0.75rem',
                    textAlign: 'center',
                    transition: 'border-color 0.3s',
                  }}
                >
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.35rem' }}>{ach.icon}</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
                    {ach.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(156,163,175,1)', marginTop: '0.35rem', lineHeight: 1.3 }}>{ach.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Spin keyframe (inline) */}
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
