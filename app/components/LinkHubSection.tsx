'use client';

const SUPERPROFILE_URL = 'https://superprofile.bio/hpomusic';

const links = [
  {
    id: 'link-instagram',
    label: 'Instagram',
    handle: '@mashbyhpo',
    description: 'Follow for viral mashups & reels',
    url: 'https://www.instagram.com/mashbyhpo/',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    iconBg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    primary: false,
    arrowColor: 'rgba(156,163,175,1)',
  },
  {
    id: 'link-superprofile',
    label: 'Superprofile',
    handle: 'Download Mashup Packs',
    description: 'Get all premium mashup packs here',
    url: SUPERPROFILE_URL,
    iconPath: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    iconBg: 'linear-gradient(135deg, #00D4FF, #2563eb)',
    primary: true,
    arrowColor: 'rgba(207,250,254,1)',
  },
  {
    id: 'link-youtube',
    label: 'YouTube',
    handle: '@mashbyhpo',
    description: 'Watch full mix sets & performances',
    url: 'https://www.youtube.com/@hpomashups',
    iconPath: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    iconBg: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    primary: false,
    arrowColor: 'rgba(156,163,175,1)',
  },
  {
    id: 'link-spotify',
    label: 'Spotify',
    handle: 'HPO',
    description: 'Stream original productions',
    url: `https://open.spotify.com/artist/1SJUQAt9760R13860NjAEJ`,
    iconPath: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z',
    iconBg: 'linear-gradient(135deg, #16a34a, #15803d)',
    primary: false,
    arrowColor: 'rgba(156,163,175,1)',
  },
  {
    id: 'link-booking',
    label: 'Book for Events',
    handle: 'Send booking inquiry',
    description: 'Available for weddings, events, clubs',
    url: '#contact',
    iconPath: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
    iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
    primary: false,
    arrowColor: 'rgba(156,163,175,1)',
  },
];

export default function LinkHubSection() {
  return (
    <section id="links" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG glows */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '38rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            All Links
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 5vw, 2.75rem)', color: 'white', lineHeight: 1.1, marginBottom: '0.75rem' }}>
            Find{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              DJ HPO
            </span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.95rem' }}>
            One stop for everything — reels, downloads, bookings, and more.
          </p>
        </div>

        {/* ── Profile card ── */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1rem' }}>
            <div style={{
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
            }}>
              <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '1.25rem' }}>HPO</span>
            </div>
            {/* Online dot */}
            <div style={{
              position: 'absolute', bottom: '-2px', right: '-2px',
              width: '22px', height: '22px', borderRadius: '50%',
              background: '#4ade80',
              border: '2px solid #030712',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />
            </div>
          </div>
          <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem' }}>DJ HPO</h3>
          <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.85rem' }}>Viral Mashup Artist · @mashbyhpo</p>
        </div>

        {/* ── Link rows ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {links.map((link) => (
            <a
              key={link.id}
              id={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                borderRadius: '1rem',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                ...(link.primary
                  ? {
                    background: 'linear-gradient(135deg, #00D4FF, #2563eb)',
                    boxShadow: '0 4px 24px rgba(0,212,255,0.2)',
                  }
                  : {
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(12px)',
                  }),
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                if (link.primary) (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(0,212,255,0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                if (link.primary) (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 24px rgba(0,212,255,0.2)';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: link.iconBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg style={{ width: '20px', height: '20px', fill: 'white' }} viewBox="0 0 24 24">
                  <path d={link.iconPath} />
                </svg>
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.15rem' }}>
                  {link.label}
                </p>
                <p style={{ fontSize: '0.78rem', color: link.primary ? 'rgba(207,250,254,0.85)' : 'rgba(156,163,175,1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {link.description}
                </p>
              </div>

              {/* Arrow */}
              <svg style={{ width: '18px', height: '18px', flexShrink: 0, color: link.arrowColor, transition: 'transform 0.2s' }} fill="none" stroke={link.primary ? 'white' : 'rgba(156,163,175,1)'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', color: 'rgba(75,85,99,1)', fontSize: '0.75rem', marginTop: '2rem' }}>
          © 2025 DJ HPO · All Rights Reserved
        </p>

      </div>
    </section>
  );
}
