'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let start = 0;
          const duration = 2000;
          const step = 16;
          const increment = target / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, step);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const waveHeights = [20, 36, 14, 38, 10, 28, 40, 18, 32, 8, 24, 36];

const stats = [
  { label: 'Instagram Followers', value: 100, suffix: 'K+' },
  { label: 'Total Reel Views',    value: 50, suffix: 'M+' },
  { label: 'Mashup Packs',        value: 5,  suffix: '+'  },
  { label: 'Events Performed',    value: 50, suffix: '+'  },
];

const igPath = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="hero"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* BG image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/hero-bg.png"
          alt="DJ HPO stage background"
          fill
          priority
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(3,7,18,0.55) 0%, rgba(3,7,18,0.75) 60%, rgba(3,7,18,0.97) 100%)' }} />
      </div>

      {/* Floating glow orbs */}
      <div style={{ position: 'absolute', top: '25%', left: '25%', width: '20rem', height: '20rem', borderRadius: '50%', background: 'rgba(0,212,255,0.12)', filter: 'blur(60px)', animation: 'heroFloat 6s ease-in-out infinite', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '33%', right: '25%', width: '16rem', height: '16rem', borderRadius: '50%', background: 'rgba(139,92,246,0.15)', filter: 'blur(60px)', animation: 'heroFloat 6s ease-in-out 1.5s infinite', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', right: '33%', width: '12rem', height: '12rem', borderRadius: '50%', background: 'rgba(0,100,255,0.1)', filter: 'blur(60px)', animation: 'heroFloat 6s ease-in-out 0.8s infinite', zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '8rem 1.5rem 4rem', width: '100%', maxWidth: '56rem', margin: '0 auto' }}>

        {/* Instagram badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.5rem 1.1rem', borderRadius: '9999px',
          border: '1px solid rgba(0,212,255,0.3)', background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)', marginBottom: '1.5rem',
          transition: 'opacity 0.7s, transform 0.7s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
        }}>
          <svg style={{ width: '16px', height: '16px', fill: '#00D4FF', flexShrink: 0 }} viewBox="0 0 24 24"><path d={igPath} /></svg>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#00D4FF', letterSpacing: '0.05em' }}>@mashbyhpo</span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Outfit, sans-serif', fontWeight: 900,
          fontSize: 'clamp(3.5rem, 10vw, 7rem)', color: 'white',
          lineHeight: 1, marginBottom: '0.5rem',
          transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
        }}>
          DJ{' '}
          <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HPO</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'rgba(209,213,219,1)',
          fontWeight: 500, marginBottom: '0.4rem', letterSpacing: '0.05em',
          transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
        }}>
          Viral Mashup Artist
        </p>
        <p style={{
          fontSize: '1rem', color: 'rgba(156,163,175,1)', marginBottom: '2.5rem',
          transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
        }}>
          Creating high-energy viral mashups &amp; DJ experiences
        </p>

        {/* Waveform bars */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
          gap: '5px', height: '48px', marginBottom: '2.5rem',
          transition: 'opacity 0.7s 0.4s', opacity: mounted ? 1 : 0,
        }}>
          {waveHeights.map((h, i) => (
            <div
              key={i}
              style={{
                width: '4px', borderRadius: '2px',
                background: 'linear-gradient(to top, #00D4FF, #8B5CF6)',
                height: `${h}px`,
                animation: `waveBar 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem', maxWidth: '34rem', margin: '0 auto 2.5rem',
          transition: 'opacity 0.7s 0.5s, transform 0.7s 0.5s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(16px)',
        }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{
              textAlign: 'center', background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)', borderRadius: '1rem',
              padding: '1rem 0.75rem', border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: '0.4rem' }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(156,163,175,1)', textTransform: 'uppercase', letterSpacing: '0.1em', lineHeight: 1.3 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem',
          transition: 'opacity 0.7s 0.6s, transform 0.7s 0.6s',
          opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(16px)',
        }}>
          <a
            id="hero-view-reels"
            href="#reels"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #00D4FF, #2563eb)', color: 'white', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', boxShadow: '0 0 20px rgba(0,212,255,0.3)', transition: 'opacity 0.2s, transform 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'white', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            View Reels
          </a>
          <a
            id="hero-download-mashups"
            href="https://superprofile.bio/hpomusic"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '9999px', background: 'transparent', border: '2px solid rgba(139,92,246,0.6)', color: '#a78bfa', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s, transform 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>
            Download Mashups
          </a>
          <a
            id="hero-book-now"
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', borderRadius: '9999px', background: 'transparent', border: '2px solid rgba(255,255,255,0.15)', color: 'rgba(209,213,219,1)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
          >
            <svg style={{ width: '16px', height: '16px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg>
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '0.65rem', color: 'rgba(107,114,128,1)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '20px', height: '32px', border: '2px solid rgba(0,212,255,0.4)', borderRadius: '9999px', display: 'flex', justifyContent: 'center', paddingTop: '6px', animation: 'bounce 2s infinite' }}>
          <div style={{ width: '4px', height: '8px', background: '#00D4FF', borderRadius: '2px' }} />
        </div>
      </div>

      <style>{`
        @keyframes heroFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes waveBar { from{transform:scaleY(0.4)} to{transform:scaleY(1)} }
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      `}</style>
    </section>
  );
}
