'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#reels', label: 'Reels' },
  { href: '#packs', label: 'Mashup Packs' },
  { href: '#music', label: 'Music' },
  { href: '#about', label: 'About' },
  { href: '#collab', label: 'Collabs' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.5s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', opacity: 0.85 }} />
            <span style={{ position: 'relative', fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '0.8rem', zIndex: 1 }}>HPO</span>
          </div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '1.15rem' }}>
            DJ{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HPO</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(209,213,219,1)', textDecoration: 'none', transition: 'color 0.2s', position: 'relative' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#00D4FF'}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(209,213,219,1)'}
            >
              {link.label}
            </a>
          ))}
          <a
            id="nav-book-btn"
            href="#contact"
            style={{
              padding: '0.5rem 1.25rem', borderRadius: '9999px',
              background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
              color: 'white', fontWeight: 700, fontSize: '0.875rem',
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'}
            onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-nav-toggle"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '2px', transition: 'transform 0.3s, opacity 0.3s', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '2px', transition: 'opacity 0.3s', opacity: mobileOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: '#00D4FF', borderRadius: '2px', transition: 'transform 0.3s', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: mobileOpen ? '400px' : '0',
          opacity: mobileOpen ? 1 : 0,
          transition: 'max-height 0.3s ease, opacity 0.3s ease',
        }}
        className="mobile-nav-menu"
      >
        <div style={{ background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(20px)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(0,212,255,0.1)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ color: 'rgba(209,213,219,1)', fontWeight: 500, fontSize: '1rem', textDecoration: 'none', padding: '0.5rem 0', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#00D4FF'}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(209,213,219,1)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{ padding: '0.75rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', color: 'white', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', textAlign: 'center' }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Hide desktop nav on mobile, show mobile toggle */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-nav-toggle { display: none !important; }
          .mobile-nav-menu { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
