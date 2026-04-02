'use client';

import Image from 'next/image';

const SUPERPROFILE_URL = 'https://superprofile.bio/hpomusic';

const navLinks = [
  { href: '#reels', label: 'Viral Reels' },
  { href: '#packs', label: 'Mashup Packs' },
  { href: '#music', label: 'Music' },
  { href: '#about', label: 'About' },
  { href: '#collab', label: 'Collaborations' },
  { href: '#contact', label: 'Contact' },
];

const quickActions = [
  {
    id: 'footer-download-btn',
    href: SUPERPROFILE_URL,
    label: 'Download Packs',
    color: '#00D4FF',
    iconPath: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    external: true,
  },
  {
    id: 'footer-book-btn',
    href: '#contact',
    label: 'Book DJ HPO',
    color: '#a78bfa',
    iconPath: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z',
    external: false,
  },
  {
    id: 'footer-instagram-btn',
    href: 'https://www.instagram.com/mashbyhpo/',
    label: 'Follow on Instagram',
    color: '#f472b6',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    external: true,
  },
  {
    id: 'footer-presskit-btn',
    href: 'https://drive.google.com/drive/folders/1jfahrbHcaNF_OylcgawQeoS3G0-B3iUj',
    label: 'Press Kit',
    color: '#34d399',
    iconPath: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    external: true,
  },
];

export default function Footer() {
  return (
    <footer style={{ position: 'relative', borderTop: '1px solid rgba(0,212,255,0.1)', padding: '3rem 0 2rem', overflow: 'hidden' }}>
      {/* Top glow line */}
      <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.35), transparent)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Main 3-column grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 2' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,212,255,0.3)', flexShrink: 0 }}>
                <Image src="/HPO Logo.png" alt="DJ HPO" fill style={{ objectFit: 'contain', padding: '4px' }} sizes="40px" />
              </div>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '1.25rem' }}>
                DJ{' '}
                <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HPO</span>
              </span>
            </div>

            <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '22rem', marginBottom: '1.25rem' }}>
              Viral Mashup Artist creating high-energy DJ experiences. 70M+ views on Instagram.
            </p>

            {/* Social badges */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {[
                { href: 'https://www.instagram.com/mashbyhpo/', label: '@mashbyhpo', color: '#f472b6' },
                { href: 'https://www.instagram.com/hpo_music/', label: '@hpo_music', color: '#f472b6' },
                { href: 'https://www.youtube.com/@mashbyhpo', label: 'YouTube', color: '#f87171' },
                { href: SUPERPROFILE_URL, label: 'Superprofile', color: '#00D4FF' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(107,114,128,1)',
                    textDecoration: 'none',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = s.color;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = s.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(107,114,128,1)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: 'rgba(156,163,175,1)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#00D4FF'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(156,163,175,1)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick actions column */}
          <div>
            <h4 style={{ color: 'white', fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Quick Actions</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {quickActions.map((action) => (
                <a
                  key={action.id}
                  id={action.id}
                  href={action.href}
                  target={action.external ? '_blank' : undefined}
                  rel={action.external ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: action.color, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'white'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = action.color}
                >
                  <svg style={{ width: '14px', height: '14px', fill: 'currentColor', flexShrink: 0 }} viewBox="0 0 24 24">
                    <path d={action.iconPath} />
                  </svg>
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
          <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem' }}>© 2025 DJ HPO. All rights reserved.</p>
          <p style={{ color: 'rgba(75,85,99,1)', fontSize: '0.75rem' }}>Made with 🎵 for the music</p>
        </div>

      </div>
    </footer>
  );
}
