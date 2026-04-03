'use client';

import { useState } from 'react';
import Image from 'next/image';

const SUPERPROFILE_URL = 'https://superprofile.bio/hpomusic';

interface Pack {
  id: string;
  title: string;
  description: string;
  image: string;
  trackCount: number;
  tag: string;
  tagBg: string;
  url: string;
}

const packs: Pack[] = [
  {
    id: 'pack1',
    title: 'HPO Mash-Mix Vol.2',
    description: 'High-energy club mashups designed to keep the dance floor alive. Premium EDM x Bollywood crossovers.',
    image: '/pack-vol2.png',
    trackCount: 28,
    tag: 'Bestseller',
    tagBg: 'linear-gradient(135deg, #00D4FF, #2563eb)',
    url: 'https://superprofile.bio/vp/6949309543acb500131c6aaf',
  },
  {
    id: 'pack2',
    title: 'HPO Mash-Mix Vol.3',
    description: 'A premium collection of viral trending edits, Afro grooves, and soothing blends. Modern Bollywood meets global club sounds.',
    image: '/pack-vol3.png',
    trackCount: 35,
    tag: 'Fan Favorite',
    tagBg: 'linear-gradient(135deg, #f59e0b, #ea580c)',
    url: 'https://superprofile.bio/vp/694929a67dc875001357a33a',
  },
  {
    id: 'pack3',
    title: 'Dhurandhar Mashup Pack',
    description: 'The ultimate power-packed mashup collection — raw energy, desi beats, and unstoppable vibes for any set.',
    image: '/pack-vol1.png',
    trackCount: 7,
    tag: 'New Drop',
    tagBg: 'linear-gradient(135deg, #a855f7, #db2777)',
    url: 'https://superprofile.bio/vp/6974d6352b7b4e00137c1edc',
  },
  {
    id: 'pack4',
    title: 'DJ Master Library – 6000 Tracks',
    description: 'The complete professional DJ toolkit. 6000 curated tracks — Bollywood, EDM, retro, and club essentials in one mega pack.',
    image: '/master-library.png',
    trackCount: 6000,
    tag: '🔥 Mega Pack',
    tagBg: 'linear-gradient(135deg, #dc2626, #ea580c)',
    url: 'https://superprofile.bio/vp/6988a29c75efa100131d85c0',
  },
];

const features = ['High Quality', 'DJ Ready', 'Instant Download'];

function PackCard({ pack }: { pack: Pack }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`pack-card-${pack.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? 'rgba(0,212,255,0.25)' : 'rgba(255,255,255,0.08)'}`,
        backdropFilter: 'blur(16px)',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.4)' : '0 4px 16px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Cover image ── */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src={pack.image}
          alt={pack.title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Tag badge */}
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', background: pack.tagBg, padding: '3px 10px', borderRadius: '9999px' }}>
          <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>{pack.tag}</span>
        </div>

        {/* Track count */}
        <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '3px 10px', borderRadius: '9999px' }}>
          <span style={{ color: 'rgba(229,231,235,1)', fontSize: '11px', fontWeight: 600 }}>{pack.trackCount} Tracks</span>
        </div>

        {/* Hover overlay + play button */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.15) 100%)', opacity: hovered ? 1 : 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <a
            href={pack.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: '#00D4FF',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 24px rgba(0,212,255,0.6)',
              textDecoration: 'none',
              transform: hovered ? 'scale(1)' : 'scale(0.8)',
              transition: 'transform 0.3s',
            }}
          >
            <svg style={{ width: '28px', height: '28px', fill: '#000', marginLeft: '4px' }} viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: hovered ? '#00D4FF' : 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem', transition: 'color 0.3s', lineHeight: 1.3 }}>
          {pack.title}
        </h3>
        <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>
          {pack.description}
        </p>

        {/* Feature dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {features.map((feat, i) => (
            <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px' }}>·</span>}
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D4FF', flexShrink: 0 }} />
              <span style={{ fontSize: '11px', color: 'rgba(156,163,175,1)', whiteSpace: 'nowrap' }}>{feat}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          id={`download-${pack.id}`}
          href={pack.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 'auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
            color: 'white', fontWeight: 700, fontSize: '0.875rem',
            textDecoration: 'none',
            transition: 'opacity 0.2s, box-shadow 0.2s',
            boxShadow: hovered ? '0 4px 20px rgba(0,212,255,0.35)' : 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'}
          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
        >
          <svg style={{ width: '16px', height: '16px', fill: 'white', flexShrink: 0 }} viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download Now
          <svg style={{ width: '12px', height: '12px', opacity: 0.7, flexShrink: 0 }} fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function MashupPacksSection() {
  return (
    <section id="packs" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG lines */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Download &amp; Listen</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
            Mashup{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Packs</span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto' }}>
            Premium DJ mashup collections. Download exclusively via Superprofile.
          </p>
        </div>

        {/* ── Pack cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {packs.map((pack) => <PackCard key={pack.id} pack={pack} />)}
        </div>

        {/* ── Superprofile CTA ── */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', borderRadius: '1.25rem', padding: '1.5rem 2rem', maxWidth: '32rem', width: '100%' }}>
            <p style={{ color: 'rgba(209,213,219,1)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              🔗 All downloads available exclusively on{' '}
              <strong style={{ color: '#00D4FF' }}>Superprofile</strong>
            </p>
            <a
              id="superprofile-main-btn"
              href={SUPERPROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 2rem', borderRadius: '9999px',
                background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                color: 'white', fontWeight: 700, fontSize: '0.9rem',
                textDecoration: 'none', transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
            >
              Visit Superprofile Store
              <svg style={{ width: '16px', height: '16px', flexShrink: 0 }} fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
