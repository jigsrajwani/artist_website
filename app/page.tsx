import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReelsSection from './components/ReelsSection';
import MashupPacksSection from './components/MashupPacksSection';
import MusicSection from './components/MusicSection';
import AboutSection from './components/AboutSection';
import CollabSection from './components/CollabSection';
import LinkHubSection from './components/LinkHubSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      {/* Sticky Navbar */}
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} /> */}

      {/* 2. Viral Reels */}
      <ReelsSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)' }} /> */}

      {/* 3. Mashup Packs */}
      <MashupPacksSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} /> */}

      {/* 4. Music / Productions */}
      <MusicSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)' }} /> */}

      {/* 5. About */}
      <AboutSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} /> */}

      {/* 6. Brand Collaborations */}
      <CollabSection />

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.2), transparent)' }} /> */}

      {/* 7. Link Hub */}
      {/* <LinkHubSection /> */}

      {/* Section separator */}
      {/* <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.2), transparent)' }} /> */}

      {/* 8. Contact / Booking */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating sticky CTAs - stacked vertically, no overlap */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 items-end">
        <a
          id="sticky-download-cta"
          href="https://superprofile.bio/hpomusic"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.7rem 1.2rem',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)',
            color: '#fff',
            boxShadow: '0 0 25px rgba(0,212,255,0.4)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
          Download
        </a>
        <a
          id="sticky-book-cta"
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.7rem 1.2rem',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            background: 'rgba(139,92,246,0.9)',
            color: '#fff',
            boxShadow: '0 0 25px rgba(139,92,246,0.4)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
          </svg>
          Book Now
        </a>
      </div>
    </main>
  );
}
