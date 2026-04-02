'use client';

import { useState } from 'react';

interface Reel {
  id: string;
  views: string;
  title: string;
  gradient: string;
  bars: number[];
  instagramUrl?: string;
  thumbnail?: string; // path under /public, e.g. '/thumbnails/reel1.jpg'
}

const reels: Reel[] = [
  { id: 'reel1', views: '19.8M', title: 'Chanel x Sheila ki Jawaani 🔥', gradient: 'linear-gradient(160deg, #0e3254 0%, #1a0a4a 100%)', bars: [20, 35, 14, 40, 8, 28, 42, 18, 30], instagramUrl: 'https://www.instagram.com/reel/DUdZJ62E55V/', thumbnail: '/thumbnails/reel-DUdZJ62E55V.jpg' },
  { id: 'reel2', views: '3.8M', title: 'Pal Pal x Leke Pehla Pehla Pyaar 🔥', gradient: 'linear-gradient(160deg, #0e3254 0%, #1a0a4a 100%)', bars: [20, 35, 14, 40, 8, 28, 42, 18, 30], instagramUrl: 'https://www.instagram.com/reel/DUn3h0UAYpX/', thumbnail: '/thumbnails/reel-DUn3h0UAYpX.jpg' },
  { id: 'reel3', views: '4.5M', title: 'Gal Sun x Todha Resham 🔥', gradient: 'linear-gradient(160deg, #0e3254 0%, #1a0a4a 100%)', bars: [20, 35, 14, 40, 8, 28, 42, 18, 30], instagramUrl: 'https://www.instagram.com/reel/DRr01m8AWnF/', thumbnail: '/thumbnails/reel-DRr01m8AWnF.jpg' },
];
  
function ReelCard({ reel }: { reel: Reel }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      id={`reel-card-${reel.id}`}
      href={reel.instagramUrl ?? 'https://www.instagram.com/mashbyhpo/'}
      target="_blank"
      rel="noopener noreferrer"
      style={{ position: 'relative', display: 'block', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer', height: '320px', textDecoration: 'none' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background — thumbnail image OR gradient */}
      {reel.thumbnail ? (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${reel.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.5s',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }} />
      ) : (
        <>
          <div style={{ position: 'absolute', inset: 0, background: reel.gradient, transition: 'transform 0.5s', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />
          {/* Music bars decoration (only when no thumbnail) */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.15, pointerEvents: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', padding: '0 2rem', width: '100%' }}>
              {reel.bars.map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h * 2.5}px`, background: 'rgba(255,255,255,0.6)', maxHeight: '100px', borderRadius: '2px' }} />
              ))}
            </div>
          </div>
        </>
      )}

      {/* HPO watermark */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '4rem', opacity: 0.06 }}>HPO</span>
      </div>

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)' }} />

      {/* Border glow */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: '1rem', border: `2px solid ${hovered ? 'rgba(0,212,255,0.7)' : 'rgba(255,255,255,0.08)'}`, transition: 'border-color 0.3s' }} />

      {/* Play button */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${hovered ? 1.12 : 1})`, transition: 'transform 0.3s' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.35)' }}>
          <svg style={{ width: '24px', height: '24px', fill: 'white', marginLeft: '4px' }} viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>

      {/* Instagram badge */}
      <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '8px', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
          <svg style={{ width: '12px', height: '12px', fill: 'white' }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>Reel</span>
        </div>
      </div>

      {/* Bottom info */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
        <p style={{ color: 'white', fontSize: '14px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: '6px' }}>{reel.title}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg style={{ width: '14px', height: '14px', fill: '#00D4FF' }} viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
          <span style={{ color: '#00D4FF', fontSize: '12px', fontWeight: 700 }}>{reel.views} views</span>
        </div>
      </div>
    </a>
  );
}

export default function ReelsSection() {
  return (
    <section id="reels" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', maxWidth: '56rem', height: '24rem', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Social Proof</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
            Viral{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Reels</span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto 1.25rem' }}>
            50M+ views across Instagram. Real music, real energy, real impact.
          </p>
          <a
            id="instagram-follow-btn"
            href="https://www.instagram.com/mashbyhpo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.25rem', borderRadius: '9999px', color: 'white', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'white', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            Follow @mashbyhpo
          </a>
        </div>

        {/* Reels grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            id="view-all-reels-btn"
            href="https://www.instagram.com/mashbyhpo/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '9999px', border: '1px solid rgba(139,92,246,0.4)', color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
          >
            View All Reels on Instagram
            <svg style={{ width: '16px', height: '16px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
