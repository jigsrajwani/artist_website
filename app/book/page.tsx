'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ── shared input style ── */
const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '0.75rem',
  padding: '0.75rem 1rem',
  color: 'white',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  color: 'rgba(156,163,175,1)',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  guestCount: string;
  budget: string;
  message: string;
};

/* ── Wedding Reels ── */
const weddingReels = [
  {
    id: 'wreel1',
    shortcode: 'DVqc8x9D8Rt',
    title: 'Holitina 3.0 Jaipur 🔥',
    instagramUrl: 'https://www.instagram.com/p/DVqc8x9D8Rt/',
    gradient: 'linear-gradient(160deg, #33051a 0%, #1a0a3a 100%)',
    accentColor: '#ec4899',
    thumbnail: '/thumbnails/reel-DVqc8x9D8Rt.jpg',
  },
  {
    id: 'wreel2',
    shortcode: 'DbBU90inXH4_1',
    title: 'Destination Wedding (BTS & Fun) 🎬',
    instagramUrl: 'https://www.instagram.com/p/DbBU90inXH4/?img_index=1',
    gradient: 'linear-gradient(160deg, #053326 0%, #0a2a3a 100%)',
    accentColor: '#10b981',
    thumbnail: '/thumbnails/reel-DbBU90inXH4_1.jpg',
  },
  {
    id: 'wreel3',
    shortcode: 'DbBU90inXH4_3',
    title: 'Destination Wedding Dance Floor 💃',
    instagramUrl: 'https://www.instagram.com/p/DbBU90inXH4/?img_index=3',
    gradient: 'linear-gradient(160deg, #331a05 0%, #3a0a1a 100%)',
    accentColor: '#f97316',
    thumbnail: '/thumbnails/reel-DbBU90inXH4_3.jpg',
  },
  {
    id: 'wreel4',
    shortcode: 'DZ8d_nXT_eO',
    title: 'Wedding Vibes 🎊',
    instagramUrl: 'https://www.instagram.com/reel/DZ8d_nXT_eO',
    gradient: 'linear-gradient(160deg, #1a0533 0%, #0a1a3a 100%)',
    accentColor: '#f472b6',
    thumbnail: '/thumbnails/reel-DZ8d_nXT_eO.jpg',
  },
  {
    id: 'wreel5',
    shortcode: 'DTapp5uDwB8',
    title: 'Event Night 🔥',
    instagramUrl: 'https://www.instagram.com/reel/DTapp5uDwB8',
    gradient: 'linear-gradient(160deg, #0a2a1a 0%, #1a0a3a 100%)',
    accentColor: '#00D4FF',
    thumbnail: '/thumbnails/reel-DTapp5uDwB8.jpg',
  },
  {
    id: 'wreel6',
    shortcode: 'DVeFl68AVqo',
    title: 'Dance Floor Energy ⚡',
    instagramUrl: 'https://www.instagram.com/reel/DVeFl68AVqo',
    gradient: 'linear-gradient(160deg, #1a1a00 0%, #0a0a2a 100%)',
    accentColor: '#8B5CF6',
    thumbnail: '/thumbnails/reel-DVeFl68AVqo.jpg',
  },
  {
    id: 'wreel7',
    shortcode: 'DU0wBjOAQrz',
    title: 'Bollywood Mashup Night 🎵',
    instagramUrl: 'https://www.instagram.com/reel/DU0wBjOAQrz',
    gradient: 'linear-gradient(160deg, #1a0a0a 0%, #0a1a2a 100%)',
    accentColor: '#fbbf24',
    thumbnail: '/thumbnails/reel-DU0wBjOAQrz.jpg',
  },
];

function WeddingReelCard({ reel }: { reel: typeof weddingReels[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      id={`wedding-reel-${reel.id}`}
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ position: 'relative', display: 'block', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer', height: '300px', textDecoration: 'none' }}
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
          {/* Gradient BG */}
          <div style={{ position: 'absolute', inset: 0, background: reel.gradient, transition: 'transform 0.5s', transform: hovered ? 'scale(1.06)' : 'scale(1)' }} />

          {/* Decorative bars */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '0 1.5rem 3rem', gap: '6px', opacity: 0.15, pointerEvents: 'none' }}>
            {[20, 38, 14, 44, 10, 32, 46, 20, 36, 12, 28, 40].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h * 2}px`, maxHeight: '80px', background: `${reel.accentColor}`, borderRadius: '3px' }} />
            ))}
          </div>
        </>
      )}

      {/* HPO watermark */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, color: 'white', fontSize: '5rem', opacity: 0.05 }}>HPO</span>
      </div>

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)' }} />

      {/* Border glow */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: '1rem', border: `2px solid ${hovered ? reel.accentColor + 'aa' : 'rgba(255,255,255,0.07)'}`, transition: 'border-color 0.3s' }} />

      {/* Play button */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) scale(${hovered ? 1.12 : 1})`, transition: 'transform 0.3s' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.3)' }}>
          <svg style={{ width: '26px', height: '26px', fill: 'white', marginLeft: '4px' }} viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>

      {/* Instagram badge */}
      <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '8px', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}>
          <svg style={{ width: '11px', height: '11px', fill: 'white' }} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
          <span style={{ color: 'white', fontSize: '11px', fontWeight: 700 }}>Reel</span>
        </div>
      </div>

      {/* Bottom title */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
        <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 700, marginBottom: '4px' }}>{reel.title}</p>
        <span style={{ fontSize: '0.75rem', color: reel.accentColor, fontWeight: 600 }}>Watch on Instagram →</span>
      </div>
    </a>
  );
}

const services = [
  {
    icon: '💍',
    title: 'Wedding DJ',
    desc: 'From the saat phere to the dance floor — Bollywood, EDM, and everything in between. DJ HPO makes your wedding night unforgettable.',
    tags: ['Sangeet', 'Baraat', 'Reception', 'After-party'],
    color: '#f472b6',
  },
  {
    icon: '🎉',
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, rooftop parties — high-energy sets customized to your vibe and guest list.',
    tags: ['Birthday Bash', 'Anniversary', 'House Party', 'Rooftop'],
    color: '#00D4FF',
  },
  {
    icon: '🏢',
    title: 'Corporate Events',
    desc: 'Office parties, product launches, and brand events in Jaipur. Professional setup, premium sound, guaranteed crowd energy.',
    tags: ['Office Party', 'Product Launch', 'Award Night', 'Team Party'],
    color: '#8B5CF6',
  },
  {
    icon: '🎓',
    title: 'College Fests',
    desc: 'Performed at top campuses like IIT Jodhpur, Manipal, Poornima, Amity & JKLU — turning college fests into massive concerts.',
    tags: ['IIT Jodhpur', 'Manipal Uni', 'Poornima Uni', 'Amity', 'JKLU', 'IIS Uni'],
    color: '#34d399',
  },
];

const testimonials = [
  {
    name: 'Priya & Rahul',
    event: 'Destination Wedding · Pushkar',
    text: 'DJ HPO turned our Pushkar destination wedding into an absolute festival! His signature mashups kept the energy high across all age groups.',
    rating: 5,
  },
  {
    name: 'Vikram & Ananya',
    event: 'Wedding Reception · Hyderabad',
    text: 'HPO travelled for our wedding in Hyderabad and killed it. Flawless transitions between Bollywood hits and EDM tracks. The dance floor was packed all night!',
    rating: 5,
  },
  {
    name: 'Student Council',
    event: 'Cultural Fest · Manipal University Jaipur',
    text: 'HPO brought unmatched energy to our campus fest. Over 3,000 students singing and dancing to his live mashup set!',
    rating: 5,
  },
  {
    name: 'Fest Committee',
    event: 'Annual Fest Night · IIT Jodhpur',
    text: 'One of the best DJ nights on campus! HPO reads the crowd like a pro and drops non-stop high-energy mashups.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'Do you travel outside Jaipur for events?',
    a: 'Yes! DJ HPO performs across Rajasthan — Jaipur, Jodhpur, Udaipur, Kota, Ajmer, and more. For outstation events, travel arrangements are discussed during booking.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For weddings and large events, we recommend booking at least 4–6 weeks in advance. For smaller parties, 1–2 weeks is usually fine. Peak wedding season (Oct–Feb) fills up fast.',
  },
  {
    q: 'Can I share a song list / preferences?',
    a: 'Absolutely! We love working with a custom playlist. Share your must-plays, must-avoids, and genre preferences — DJ HPO will build a set around your taste.',
  },
  {
    q: 'What is the complimentary content add-on?',
    a: 'Every booking includes a complimentary cinematic group reel in signature HPO style for Instagram, plus a behind-the-scenes event vlog for YouTube — giving you high-quality video memories of your event! If you prefer a private event without social media coverage, simply let us know — your privacy is always 100% respected.',
  },
  {
    q: 'What\'s the pricing like?',
    a: 'Pricing depends on event type, duration, location, and equipment required. Fill out the inquiry form and we\'ll send a custom quote within 24 hours.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} style={{ width: '14px', height: '14px', fill: '#fbbf24' }} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid ${open ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'border-color 0.2s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.1rem 1.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'white',
          fontWeight: 600,
          fontSize: '0.95rem',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span>{q}</span>
        <svg
          style={{ width: '18px', height: '18px', flexShrink: 0, fill: '#00D4FF', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'none' }}
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? '200px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p style={{ padding: '0 1.5rem 1.25rem', color: 'rgba(156,163,175,1)', fontSize: '0.9rem', lineHeight: 1.7 }}>{a}</p>
      </div>
    </div>
  );
}

export default function BookPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', eventType: 'Wedding', eventDate: '', venue: '', guestCount: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xdaplnqn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `Event Booking Inquiry – ${formData.eventType} | DJ HPO` }),
      });
      if (res.ok) setSubmitted(true);
      else alert('Something went wrong. Please reach out directly on WhatsApp.');
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#030712', minHeight: '100vh', color: 'white', fontFamily: 'Outfit, sans-serif' }}>

      {/* ── Navbar ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '1rem 0', background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(0,212,255,0.08)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{ position: 'relative', width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,212,255,0.3)', flexShrink: 0 }}>
              <Image src="/HPO Logo.png" alt="DJ HPO" fill style={{ objectFit: 'contain', padding: '4px' }} sizes="36px" />
            </div>
            <span style={{ fontWeight: 900, color: 'white', fontSize: '1.1rem' }}>
              DJ <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HPO</span>
            </span>
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(156,163,175,1)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>← Back to Portfolio</Link>
            <a
              href="#book-form"
              style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', color: 'white', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden' }}>
        {/* BG glow */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '30rem', height: '30rem', borderRadius: '50%', background: 'rgba(0,212,255,0.07)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '25rem', height: '25rem', borderRadius: '50%', background: 'rgba(139,92,246,0.08)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              border: '1px solid rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.05)',
              marginBottom: '1.5rem',
              animation: 'fadeInUp 0.7s ease forwards',
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#00D4FF', letterSpacing: '0.05em' }}>Available Pan-India &amp; Destination Events</span>
          </div>

          <h1
            style={{
              fontWeight: 900, fontSize: 'clamp(2.5rem, 7vw, 4.8rem)', lineHeight: 1.05, marginBottom: '1.25rem',
              animation: 'fadeInUp 0.7s 0.1s ease forwards',
            }}
          >
            High-Energy{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Wedding &amp; Event
            </span>
            {' '}DJ
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(209,213,219,1)', maxWidth: '42rem',
              lineHeight: 1.7, marginBottom: '2rem',
              animation: 'fadeInUp 0.7s 0.2s ease forwards',
            }}
          >
            DJ HPO brings 5+ years of professional DJ experience and 60M+ viral views to your wedding, party, or corporate event in Jaipur, Rajasthan, and all across India. High-energy Bollywood, EDM &amp; mashup sets — customized for your event.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem',
              animation: 'fadeInUp 0.7s 0.3s ease forwards',
            }}
          >
            <a
              href="#book-form"
              style={{ padding: '0.9rem 2rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', color: 'white', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            >
              📅 Check Availability & Book
            </a>
            <a
              href="https://wa.me/918005926751?text=Hi%20DJ%20HPO!%20I%27d%20like%20to%20book%20you%20for%20an%20event."
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '0.9rem 2rem', borderRadius: '9999px', background: 'rgba(74,222,128,0.1)', border: '2px solid rgba(74,222,128,0.4)', color: '#4ade80', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem',
              animation: 'fadeInUp 0.7s 0.5s ease forwards',
            }}
          >
            {[
              { icon: '🎵', text: '100+ Events Performed' },
              { icon: '⭐', text: '5-Star Rated DJ' },
              { icon: '📍', text: 'Performs Pan-India' },
              { icon: '🎬', text: '60M+ Social Media Views' },
            ].map((b) => (
              <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.8rem', color: 'rgba(209,213,219,1)' }}>
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} />
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Offer</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              DJ for Every{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Occasion</span>
            </h2>
            <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              From intimate house parties to grand wedding receptions — DJ HPO delivers a premium music experience every time.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '1.25rem',
                  padding: '1.75rem',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${s.color}40`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'none';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.75rem', color: s.color }}>{s.title}</h3>
                <p style={{ color: 'rgba(156,163,175,1)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {s.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', background: `${s.color}15`, border: `1px solid ${s.color}30`, color: s.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Complimentary Media Perk Banner */}
          <div style={{ marginTop: '2.5rem', background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(0,212,255,0.08) 100%)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '1.25rem', padding: '1.75rem 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.4)', color: '#c084fc', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                🎁 Complimentary Bonus Included
              </div>
              <h3 style={{ fontWeight: 800, fontSize: '1.25rem', color: 'white', marginBottom: '0.5rem' }}>Signature Content Experience with Every Booking</h3>
              <p style={{ color: 'rgba(209,213,219,0.9)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                Every event receives a complimentary <strong>cinematic group reel</strong> in HPO’s signature style for Instagram, plus an exclusive <strong>behind-the-scenes event vlog</strong> for YouTube — giving you professional video memories to keep forever.
              </p>
              <p style={{ color: 'rgba(156,163,175,0.8)', fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                *100% Optional — Privacy preferences are always confirmed beforehand.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#f472b6', fontWeight: 600 }}>📹 Cinematic Group Reel</span>
              <span style={{ fontSize: '0.75rem', padding: '0.35rem 0.85rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#00D4FF', fontWeight: 600 }}>📺 YouTube BTS Vlog</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why DJ HPO ── */}
      <section style={{ padding: '4rem 0', position: 'relative', background: 'rgba(0,212,255,0.02)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)' }} />
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#8B5CF6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Why Choose Us</p>
              <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                A DJ Who Truly{' '}
                <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Gets the Crowd
                </span>
              </h2>
              <p style={{ color: 'rgba(156,163,175,1)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                DJ HPO isn&apos;t just a DJ — he&apos;s a viral content creator with 60M+ views who understands what music moves people. Every set is crafted specifically for your event, your guests, and your vibe.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '🎧', title: '5+ Years of Experience', desc: 'Performing at events across Jaipur and Rajasthan' },
                  { icon: '🎛️', title: 'Professional Equipment', desc: 'High-quality sound systems & DJ gear included' },
                  { icon: '🎨', title: 'Fully Customized Sets', desc: 'Your playlist, your genres, your event — tailored perfectly' },
                  { icon: '⚡', title: 'Crowd-Reading Expert', desc: 'Real-time energy management to keep the dance floor packed' },
                ].map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{item.title}</div>
                      <div style={{ color: 'rgba(107,114,128,1)', fontSize: '0.8rem' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: artist photo */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '3/4',
                borderRadius: '1.5rem', overflow: 'hidden',
                border: '1px solid rgba(0,212,255,0.15)',
                boxShadow: '0 0 60px rgba(0,212,255,0.15), 0 0 120px rgba(139,92,246,0.1)',
              }}>
                <Image
                  src="/artist.jpg"
                  alt="DJ HPO – Professional Wedding DJ Jaipur"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(3,7,18,0.7) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                  <div style={{ padding: '0.75rem 1rem', background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(12px)', borderRadius: '0.875rem', border: '1px solid rgba(0,212,255,0.2)' }}>
                    <div style={{ fontWeight: 800, color: 'white', fontSize: '0.95rem' }}>DJ HPO</div>
                    <div style={{ color: '#00D4FF', fontSize: '0.75rem', fontWeight: 500 }}>Jaipur&apos;s Viral DJ & Mashup Artist</div>
                  </div>
                </div>
              </div>
              {/* Floating stat cards */}
              <div style={{ position: 'absolute', top: '1rem', right: '-1rem', padding: '0.75rem 1rem', background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(12px)', borderRadius: '0.875rem', border: '1px solid rgba(139,92,246,0.3)', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100+</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(107,114,128,1)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Events</div>
              </div>
              <div style={{ position: 'absolute', bottom: '4rem', left: '-1rem', padding: '0.75rem 1rem', background: 'rgba(3,7,18,0.9)', backdropFilter: 'blur(12px)', borderRadius: '0.875rem', border: '1px solid rgba(0,212,255,0.3)', textAlign: 'center' }}>
                <div style={{ fontWeight: 900, fontSize: '1.4rem', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>60M+</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(107,114,128,1)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wedding Reels ── */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)' }} />
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>See Us in Action</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              Real Weddings &amp;{' '}
              <span style={{ background: 'linear-gradient(135deg, #f472b6, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Events</span>
            </h2>
            <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              Watch DJ HPO bring the energy to weddings, parties &amp; events across Jaipur &amp; Rajasthan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {weddingReels.map((reel) => (
              <WeddingReelCard key={reel.id} reel={reel} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              id="wedding-reels-instagram-btn"
              href="https://www.instagram.com/hpo_music/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', borderRadius: '9999px', border: '1px solid rgba(244,114,182,0.4)', color: '#f472b6', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(244,114,182,0.08)'}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'}
            >
              View All Event Reels on Instagram
              <svg style={{ width: '16px', height: '16px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} />
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What Clients Say</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
              Real Events,{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Real Memories</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.75rem' }}>
                <StarRating count={t.rating} />
                <p style={{ color: 'rgba(209,213,219,1)', fontSize: '0.9rem', lineHeight: 1.75, margin: '1rem 0 1.25rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem' }}>{t.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Form ── */}
      <section id="book-form" style={{ padding: '5rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.4), transparent)' }} />
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '80%', height: '500px', background: 'radial-gradient(ellipse, rgba(0,212,255,0.04) 0%, rgba(139,92,246,0.03) 60%, transparent 100%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#8B5CF6', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Let&apos;s Make It Happen</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              Book{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DJ HPO</span>
              {' '}for Your Event
            </h2>
            <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '34rem', margin: '0 auto', lineHeight: 1.7 }}>
              Fill in your event details and we&apos;ll get back to you within 24 hours with availability &amp; a custom quote.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', maxWidth: '64rem', margin: '0 auto' }}>
            {/* Contact info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.25rem', padding: '1.5rem' }}>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem' }}>Contact Directly</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { icon: '📱', label: 'WhatsApp', value: 'Message on WhatsApp', href: 'https://wa.me/918005926751?text=Hi%20DJ%20HPO!%20I%27d%20like%20to%20book%20you%20for%20an%20event.' },
                    { icon: '📧', label: 'Email', value: 'hpomusicofficial@gmail.com', href: 'mailto:hpomusicofficial@gmail.com' },
                    { icon: '📸', label: 'Instagram', value: '@mashbyhpo', href: 'https://instagram.com/mashbyhpo' },
                  ].map((c) => (
                    <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', textDecoration: 'none', color: 'rgba(209,213,219,1)', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#00D4FF'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(209,213,219,1)'}
                    >
                      <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(107,114,128,1)', marginBottom: '1px' }}>{c.label}</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: '1.25rem', padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
                  <span style={{ color: '#4ade80', fontSize: '0.875rem', fontWeight: 600 }}>Available for Bookings</span>
                </div>
                <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem' }}>Response within 24 hours · Available across India &amp; Destinations</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.25rem 1.5rem' }}>
                <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.78rem', lineHeight: 1.7 }}>
                  📍 <strong style={{ color: 'rgba(156,163,175,1)' }}>Based in Jaipur · Performing Pan-India</strong><br />
                  Serving: Jaipur · Delhi NCR · Mumbai · Udaipur · Goa · Bengaluru &amp; All of India
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(74,222,128,0.3)', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Booking Request Sent!</h3>
                  <p style={{ color: 'rgba(156,163,175,1)', marginBottom: '1.5rem' }}>DJ HPO will get back to you within 24 hours with availability & a custom quote.</p>
                  <a
                    href="https://wa.me/918005926751?text=Hi%20DJ%20HPO!%20I%20just%20submitted%20a%20booking%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-block', padding: '0.75rem 2rem', borderRadius: '9999px', background: 'rgba(74,222,128,0.15)', border: '2px solid rgba(74,222,128,0.4)', color: '#4ade80', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}
                  >
                    💬 Also WhatsApp Us
                  </a>
                </div>
              ) : (
                <form
                  id="book-event-form"
                  onSubmit={handleSubmit}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
                >
                  {/* Name + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <input id="book-name" name="name" type="text" required placeholder="Raj Sharma" value={formData.name} onChange={handleChange} style={inputStyle}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp *</label>
                      <input id="book-phone" name="phone" type="tel" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} style={inputStyle}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input id="book-email" name="email" type="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>

                  {/* Event type + date */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Event Type *</label>
                      <select id="book-event-type" name="eventType" value={formData.eventType} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="Wedding">💍 Wedding</option>
                        <option value="Sangeet">🎶 Sangeet Night</option>
                        <option value="Reception">🥂 Reception Party</option>
                        <option value="Birthday">🎂 Birthday Party</option>
                        <option value="Corporate">🏢 Corporate Event</option>
                        <option value="College Fest">🎓 College Fest</option>
                        <option value="Private Party">🎉 Private Party</option>
                        <option value="Other">✨ Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Event Date *</label>
                      <input id="book-date" name="eventDate" type="date" required value={formData.eventDate} onChange={handleChange} style={{ ...inputStyle, colorScheme: 'dark' }}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                    </div>
                  </div>

                  {/* Venue + Guests */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                    <div>
                      <label style={labelStyle}>Venue / Location</label>
                      <input id="book-venue" name="venue" type="text" placeholder="Hotel / Venue name, City" value={formData.venue} onChange={handleChange} style={inputStyle}
                        onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                        onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Expected Guests</label>
                      <select id="book-guests" name="guestCount" value={formData.guestCount} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                        <option value="">Select range</option>
                        <option value="Under 50">Under 50</option>
                        <option value="50–150">50–150</option>
                        <option value="150–300">150–300</option>
                        <option value="300–500">300–500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label style={labelStyle}>Budget (Optional)</label>
                    <input id="book-budget" name="budget" type="text" placeholder="e.g. ₹15,000 – ₹40,000" value={formData.budget} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Tell Us More</label>
                    <textarea id="book-message" name="message" rows={3} placeholder="Genre preferences, special songs, event theme, or anything else..." value={formData.message} onChange={handleChange}
                      style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }}
                      onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>

                  <button
                    id="book-submit-btn"
                    type="submit"
                    disabled={loading}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                      padding: '0.95rem', borderRadius: '9999px',
                      background: loading ? 'rgba(0,212,255,0.5)' : 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                      color: 'white', fontWeight: 700, fontSize: '1rem',
                      border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'opacity 0.2s, transform 0.2s',
                      width: '100%',
                      boxShadow: '0 0 30px rgba(0,212,255,0.2)',
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                  >
                    {loading ? 'Sending...' : '📅 Send Booking Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '4rem 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} />
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>FAQ</p>
            <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', lineHeight: 1.1 }}>
              Common{' '}
              <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: '1px solid rgba(0,212,255,0.1)', padding: '2rem 0', marginTop: '2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <span style={{ fontWeight: 900, color: 'white', fontSize: '1rem' }}>
              DJ <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>HPO</span>
            </span>
            <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem', marginTop: '0.25rem' }}>Professional Wedding & Event DJ · Jaipur, Rajasthan</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(156,163,175,1)', fontSize: '0.8rem', textDecoration: 'none' }}>Portfolio</Link>
            <a href="https://instagram.com/mashbyhpo" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(156,163,175,1)', fontSize: '0.8rem', textDecoration: 'none' }}>Instagram</a>
            <a href="https://wa.me/918005926751" target="_blank" rel="noopener noreferrer" style={{ color: '#4ade80', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>WhatsApp</a>
          </div>
          <p style={{ color: 'rgba(75,85,99,1)', fontSize: '0.75rem' }}>© 2025 DJ HPO. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
