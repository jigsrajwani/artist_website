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
    desc: 'From Freshers to Farewell — get the crowd going with curated mashups that hit every mood.',
    tags: ['Freshers', 'Farewell', 'Annual Fest', 'Cultural Night'],
    color: '#34d399',
  },
];

const testimonials = [
  {
    name: 'Priya & Rahul',
    event: 'Wedding Reception · Jaipur',
    text: 'DJ HPO absolutely nailed our wedding! Every song transition was perfect. The dance floor was never empty — even our parents were dancing at midnight!',
    rating: 5,
  },
  {
    name: 'Arjun Sharma',
    event: 'Corporate Party · Pink City Mall, Jaipur',
    text: 'Hired HPO for our company\'s annual party. The energy he brought was incredible. Everyone is still talking about it weeks later. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sneha Agarwal',
    event: 'Birthday Party · Jaipur',
    text: 'Best decision we made for my 25th birthday. DJ HPO played the perfect mix of Bollywood hits and EDM. Total vibe all night long.',
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
    q: 'Do you bring your own equipment?',
    a: 'Yes — DJ HPO brings professional-grade sound systems, lighting, and mixing equipment. For larger venues, we can also coordinate with venue AV teams.',
  },
  {
    q: 'Can I share a song list / preferences?',
    a: 'Absolutely! We love working with a custom playlist. Share your must-plays, must-avoids, and genre preferences — DJ HPO will build a set around your taste.',
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
              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s, transform 0.7s',
            }}
          >
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#00D4FF', letterSpacing: '0.05em' }}>Available for Bookings · Jaipur, Rajasthan</span>
          </div>

          <h1
            style={{
              fontWeight: 900, fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1.25rem',
              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s 0.1s, transform 0.7s 0.1s',
            }}
          >
            Jaipur&apos;s{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              #1 Wedding
            </span>
            {' '}&amp; Event DJ
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(209,213,219,1)', maxWidth: '42rem',
              lineHeight: 1.7, marginBottom: '2rem',
              opacity: mounted ? 1 : 0, transform: mounted ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.7s 0.2s, transform 0.7s 0.2s',
            }}
          >
            DJ HPO brings 5+ years of professional DJ experience and 60M+ viral views to your wedding, party, or corporate event in Jaipur &amp; across Rajasthan. High-energy Bollywood, EDM &amp; mashup sets — customized for your event.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem',
              opacity: mounted ? 1 : 0, transform: mounted ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.7s 0.3s, transform 0.7s 0.3s',
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
              opacity: mounted ? 1 : 0, transition: 'opacity 0.7s 0.5s',
            }}
          >
            {[
              { icon: '🎵', text: '100+ Events Performed' },
              { icon: '⭐', text: '5-Star Rated DJ' },
              { icon: '📍', text: 'Based in Jaipur' },
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
                <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem' }}>Response within 24 hours · Jaipur & all of Rajasthan</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.25rem 1.5rem' }}>
                <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.78rem', lineHeight: 1.7 }}>
                  📍 <strong style={{ color: 'rgba(156,163,175,1)' }}>Based in Jaipur, Rajasthan</strong><br />
                  Serving: Jaipur · Jodhpur · Udaipur · Kota · Ajmer · Bikaner & across Rajasthan
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
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
