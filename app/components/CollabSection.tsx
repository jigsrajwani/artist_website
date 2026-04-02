'use client';

const collabTypes = [
  {
    id: 'collab-brand',
    icon: '📱',
    title: 'Brand Promotions',
    description: 'Promote your brand through high-energy Instagram reels that reach millions. DJ HPO creates authentic viral content that resonates with young audiences.',
    features: ['Viral Reels', 'Story Takeovers', 'Product Integrations', 'Custom Mashups'],
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(37,99,235,0.06) 100%)',
    border: 'rgba(0,212,255,0.25)',
    tag: 'Most Popular',
    tagBg: '#00D4FF',
    tagColor: '#000',
    checkColor: '#00D4FF',
  },
  {
    id: 'collab-event',
    icon: '🎤',
    title: 'Event DJ Bookings',
    description: 'Book DJ HPO for your next event. From intimate house parties to large-scale corporate events, every set is custom-crafted for the crowd.',
    features: ['Wedding DJ', 'Corporate Events', 'Club Nights', 'Private Parties'],
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(109,40,217,0.06) 100%)',
    border: 'rgba(139,92,246,0.25)',
    tag: 'Events',
    tagBg: '#8B5CF6',
    tagColor: '#fff',
    checkColor: '#a78bfa',
  },
  {
    id: 'collab-music',
    icon: '🎵',
    title: 'Music Collaborations',
    description: 'Collaborate with DJ HPO on original productions, remix projects, and custom mashups for your brand or artist profile.',
    features: ['Custom Mashups', 'Remix Packs', 'Artist Features', 'Jingle Creation'],
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.12) 0%, rgba(190,24,93,0.06) 100%)',
    border: 'rgba(236,72,153,0.25)',
    tag: 'Creative',
    tagBg: '#ec4899',
    tagColor: '#fff',
    checkColor: '#f472b6',
  },
];

const brandLogos = [
  { name: 'Brand A', initials: 'OLA', bg: 'linear-gradient(135deg,#0891b2,#1d4ed8)' },
  { name: 'Brand B', initials: 'Vida', bg: 'linear-gradient(135deg,#7c3aed,#6d28d9)' },
  { name: 'Brand C', initials: 'GharSoaps', bg: 'linear-gradient(135deg,#db2777,#be185d)' },
  // { name: 'Brand D', initials: 'BD', bg: 'linear-gradient(135deg,#d97706,#c2410c)' },
  // { name: 'Brand E', initials: 'BE', bg: 'linear-gradient(135deg,#059669,#0d9488)' },
  // { name: 'Brand F', initials: 'BF', bg: 'linear-gradient(135deg,#dc2626,#be185d)' },
];

export default function CollabSection() {
  return (
    <section id="collab" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG glows */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '0', right: '0', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '0', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Partnerships &amp; Deals
          </p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.25rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
            Work With{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              DJ HPO
            </span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
            Ready to go viral? Partner with DJ HPO for brand deals, event bookings, and music collaborations that deliver real results.
          </p>
        </div>

        {/* ── 3 Collab Cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {collabTypes.map((type) => (
            <div
              key={type.id}
              id={type.id}
              style={{
                position: 'relative',
                background: type.gradient,
                border: `1px solid ${type.border}`,
                backdropFilter: 'blur(16px)',
                borderRadius: '1.25rem',
                padding: '1.75rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
            >
              {/* Tag badge */}
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: type.tagBg,
                color: type.tagColor,
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
              }}>
                {type.tag}
              </div>

              {/* Icon */}
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{type.icon}</div>

              {/* Title */}
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem', fontFamily: 'Outfit, sans-serif' }}>
                {type.title}
              </h3>

              {/* Description */}
              <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {type.description}
              </p>

              {/* Feature list */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
                {type.features.map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(209,213,219,1)' }}>
                    <svg style={{ width: '16px', height: '16px', flexShrink: 0, color: type.checkColor }} fill="none" stroke={type.checkColor} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Brand Logos ── */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ textAlign: 'center', color: 'rgba(107,114,128,1)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Trusted by brands &amp; clients
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                style={{
                  width: '100px', height: '80px',
                  borderRadius: '1rem',
                  background: brand.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  opacity: 0.55,
                  cursor: 'pointer',
                  transition: 'opacity 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = '1'; (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.opacity = '0.55'; (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)'; }}
              >
                <span style={{ color: 'white', fontWeight: 900, fontSize: '0.875rem' }}>{brand.initials}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA Box ── */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(16px)',
            borderRadius: '1.5rem',
            padding: '2.5rem 3rem',
            maxWidth: '40rem',
            width: '100%',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
            <h3 style={{ color: 'white', fontWeight: 900, fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif', marginBottom: '0.75rem' }}>
              Ready to Collaborate?
            </h3>
            <p style={{ color: 'rgba(156,163,175,1)', marginBottom: '1.75rem', lineHeight: 1.7 }}>
              Let&apos;s create something viral together. Reach out for pricing, availability, and collab packages.
            </p>

            {/* Buttons row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {/* Contact button */}
              <a
                id="collab-contact-btn"
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                Contact for Collaborations
              </a>

              {/* WhatsApp button */}
              <a
                id="collab-whatsapp-btn"
                href="https://wa.me/918005926751?text=Hi%20DJ%20HPO!%20I%20want%20to%20collaborate%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(34,197,94,0.45)',
                  color: '#22c55e',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(34,197,94,0.1)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <svg style={{ width: '18px', height: '18px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
