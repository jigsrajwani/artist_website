'use client';

import { useState, FormEvent } from 'react';

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

type FormData = { name: string; email: string; type: string; budget: string; message: string };

const contactLinks = [
  {
    id: 'contact-email-btn',
    href: 'mailto:hpomusicofficial@gmail.com',
    label: 'Email',
    value: 'hpomusicofficial@gmail.com',
    iconColor: '#00D4FF',
    iconBg: 'rgba(0,212,255,0.08)',
    iconBorder: 'rgba(0,212,255,0.2)',
    hoverColor: '#00D4FF',
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    isStroke: true,
  },
  {
    id: 'contact-whatsapp-btn',
    href: 'https://wa.me/918005926751?text=Hi%20DJ%20HPO!%20I%27d%20like%20to%20book%20you.',
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    iconColor: '#4ade80',
    iconBg: 'rgba(74,222,128,0.08)',
    iconBorder: 'rgba(74,222,128,0.2)',
    hoverColor: '#4ade80',
    iconPath: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49',
    isStroke: false,
  },
  {
    id: 'contact-instagram-btn',
    href: 'https://www.instagram.com/mashbyhpo/',
    label: 'Instagram DM',
    value: '@mashbyhpo',
    iconColor: '#f472b6',
    iconBg: 'rgba(244,114,182,0.08)',
    iconBorder: 'rgba(244,114,182,0.2)',
    hoverColor: '#f472b6',
    iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    isStroke: false,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', type: 'Brand Deal', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again or reach out directly on WhatsApp.');
      }
    } catch {
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.4), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '100%', height: '400px', background: 'linear-gradient(to right, rgba(0,212,255,0.04), rgba(139,92,246,0.04))', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ width: '3rem', height: '2px', background: 'linear-gradient(to right, #00D4FF, #8B5CF6)', margin: '0 auto 1rem', borderRadius: '2px' }} />
          <p style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get In Touch</p>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
            Book &amp;{' '}
            <span style={{ background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Contact</span>
          </h2>
          <p style={{ color: 'rgba(156,163,175,1)', maxWidth: '36rem', margin: '0 auto' }}>
            Ready to work together? Fill out the form below or reach us directly.
          </p>
        </div>

        {/* ── 2-column layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', maxWidth: '60rem', margin: '0 auto' }}>

          {/* ── LEFT: Contact info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Direct Contact card */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', borderRadius: '1.25rem', padding: '1.5rem' }}>
              <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.25rem' }}>Direct Contact</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactLinks.map((cl) => (
                  <a
                    key={cl.id}
                    id={cl.id}
                    href={cl.href}
                    target={cl.href.startsWith('http') ? '_blank' : undefined}
                    rel={cl.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', color: 'rgba(209,213,219,1)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = cl.hoverColor}
                    onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(209,213,219,1)'}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: cl.iconBg, border: `1px solid ${cl.iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg style={{ width: '16px', height: '16px', color: cl.iconColor }} fill={cl.isStroke ? 'none' : 'currentColor'} stroke={cl.isStroke ? cl.iconColor : 'none'} strokeWidth={cl.isStroke ? 2 : 0} viewBox="0 0 24 24">
                        {cl.isStroke
                          ? <path strokeLinecap="round" strokeLinejoin="round" d={cl.iconPath} />
                          : <path d={cl.iconPath} />}
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.7rem', color: 'rgba(107,114,128,1)', marginBottom: '2px' }}>{cl.label}</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 500 }}>{cl.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,212,255,0.12)', backdropFilter: 'blur(16px)', borderRadius: '1.25rem', padding: '1.1rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 6px #4ade80', animation: 'pulse 2s infinite' }} />
                <span style={{ color: '#4ade80', fontSize: '0.875rem', fontWeight: 600 }}>Available for Bookings</span>
              </div>
              <p style={{ color: 'rgba(107,114,128,1)', fontSize: '0.75rem' }}>Typical response time: within 24 hours</p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            {submitted ? (
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', borderRadius: '1.25rem', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(156,163,175,1)', marginBottom: '1.5rem' }}>Thanks for reaching out. DJ HPO will get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ padding: '0.75rem 2rem', borderRadius: '9999px', background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)', color: 'white', fontWeight: 700, border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', borderRadius: '1.25rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
              >
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="you@company.com" value={formData.email} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>
                </div>

                {/* Type + Budget row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Inquiry Type *</label>
                    <select id="contact-type" name="type" value={formData.type} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="Brand Deal">Brand Deal</option>
                      <option value="Event Booking">Event Booking</option>
                      <option value="Music Collaboration">Music Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Budget (Optional)</label>
                    <input id="contact-budget" name="budget" type="text" placeholder="e.g. ₹10,000 – ₹50,000" value={formData.budget} onChange={handleChange} style={inputStyle}
                      onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#00D4FF'}
                      onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea id="contact-message" name="message" required rows={4} placeholder="Tell us about your project, event, or collaboration idea..." value={formData.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'none', fontFamily: 'inherit' }}
                    onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#00D4FF'}
                    onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.12)'} />
                </div>

                {/* Submit */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.9rem',
                    borderRadius: '9999px',
                    background: loading ? 'rgba(0,212,255,0.5)' : 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
                    color: 'white', fontWeight: 700, fontSize: '0.95rem',
                    border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s, transform 0.2s',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  {loading ? (
                    <>
                      <svg style={{ width: '16px', height: '16px', animation: 'spin 1s linear infinite' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} } @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
    </section>
  );
}
