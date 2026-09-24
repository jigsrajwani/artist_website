import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://djhpo.vercel.app'),
  title: 'Best Wedding DJ in India 2025–26 | Book DJ HPO – Sangeet, Baraat & Reception',
  description: 'Book DJ HPO – India\'s top-rated wedding DJ for Sangeet, Baraat on Wheels, Mehndi & Reception. High-energy Bollywood & EDM mashup sets. 100+ weddings across Jaipur, Delhi, Mumbai, Udaipur, Goa & all of India. 5-star rated. Free quote within 24 hours!',
  keywords: [
    // ── India-wide (highest volume) ──
    'wedding DJ India',
    'best wedding DJ in India',
    'top wedding DJ India',
    'wedding DJ 2025 India',
    'wedding DJ 2026 India',
    'DJ for wedding in India',
    'hire wedding DJ India',
    'book wedding DJ India',
    'wedding DJ booking India',
    'destination wedding DJ India',
    // ── Ceremony-specific (national) ──
    'sangeet DJ India',
    'sangeet night DJ India',
    'baraat DJ India',
    'baraat on wheels DJ India',
    'reception DJ India',
    'mehndi DJ India',
    'wedding reception DJ India',
    'wedding ceremony DJ India',
    // ── Bollywood & genre ──
    'Bollywood wedding DJ India',
    'Bollywood DJ for wedding',
    'EDM wedding DJ India',
    'mashup DJ for wedding India',
    'Punjabi wedding DJ India',
    // ── Major cities ──
    'wedding DJ Jaipur',
    'best wedding DJ Jaipur',
    'wedding DJ Delhi',
    'wedding DJ Delhi NCR',
    'wedding DJ Mumbai',
    'wedding DJ Goa',
    'wedding DJ Udaipur',
    'wedding DJ Jodhpur',
    'wedding DJ Rajasthan',
    'wedding DJ Pushkar',
    'wedding DJ Hyderabad',
    'wedding DJ Bengaluru',
    'wedding DJ Chandigarh',
    'wedding DJ Pune',
    'wedding DJ Ahmedabad',
    // ── Pricing & booking ──
    'wedding DJ price India',
    'affordable wedding DJ India',
    'wedding DJ package India',
    'book DJ for wedding',
    'DJ booking for wedding',
    // ── Brand ──
    'DJ HPO',
    'DJ HPO wedding',
    'HPO music wedding',
  ],
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Best Wedding DJ in India | Book DJ HPO – Sangeet, Baraat & Reception',
    description: 'India\'s top-rated wedding DJ. High-energy Bollywood & EDM sets for Sangeet, Baraat & Reception. 100+ weddings across Jaipur, Delhi, Mumbai, Goa & more. Free quote within 24 hrs!',
    siteName: 'DJ HPO',
    type: 'website',
    url: 'https://djhpo.vercel.app/book',
    images: [
      {
        url: '/artist.jpg',
        width: 1200,
        height: 630,
        alt: 'DJ HPO – Best Wedding DJ in India for Sangeet, Baraat & Reception',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wedding DJ in India | Book DJ HPO',
    description: 'Top-rated wedding DJ for Sangeet, Baraat & Reception. Bollywood & EDM mashups. 100+ weddings across India. Free quote!',
    images: ['/artist.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ── 1. LocalBusiness with AggregateRating ──
      {
        '@type': ['LocalBusiness', 'EntertainmentBusiness'],
        '@id': 'https://djhpo.vercel.app/#business',
        'name': 'DJ HPO – Wedding & Event DJ Jaipur',
        'url': 'https://djhpo.vercel.app',
        'image': 'https://djhpo.vercel.app/artist.jpg',
        'description': 'Best wedding DJ in Jaipur for Sangeet, Baraat, and Reception. High-energy Bollywood and EDM mashup sets. 100+ weddings performed. Available for destination weddings across India.',
        'priceRange': '₹₹',
        'telephone': '+918852061175',
        'email': 'hpomusicofficial@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Jaipur',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'postalCode': '302001',
          'addressCountry': 'IN',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 26.9124,
          'longitude': 75.7873,
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '5',
          'bestRating': '5',
          'worstRating': '1',
          'ratingCount': '47',
          'reviewCount': '47',
        },
        'areaServed': [
          'Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner', 'Pushkar',
          'Delhi', 'Delhi NCR', 'Gurugram', 'Noida',
          'Mumbai', 'Pune',
          'Goa', 'Bengaluru', 'Hyderabad',
          'Rajasthan', 'India',
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Wedding & Event DJ Services',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'serviceType': 'WeddingService',
                'name': 'Wedding DJ Jaipur – Sangeet, Baraat & Reception',
                'description': 'Professional wedding DJ in Jaipur for Sangeet night, Baraat on Wheels, and Reception. Custom Bollywood & EDM mashup sets, 100+ weddings performed across Rajasthan and India.',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'serviceType': 'WeddingService',
                'name': 'Destination Wedding DJ India',
                'description': 'DJ HPO performs at destination weddings across India – Udaipur, Goa, Delhi, Mumbai, Pushkar and beyond. Professional sound setup included.',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Sangeet Night DJ Jaipur',
                'description': 'High-energy Sangeet night DJ in Jaipur. Bollywood, Punjabi, and EDM mashups customized for the bride & groom\'s song list.',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Baraat on Wheels DJ Jaipur',
                'description': 'DJ for Baraat procession with high-energy dhol-EDM fusion sets in Jaipur and across Rajasthan.',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'Corporate Event DJ Jaipur',
                'description': 'Professional DJ for corporate events, office parties, award nights, and product launches in Jaipur.',
              },
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': 'College Fest DJ',
                'description': 'DJ for college fests across India. Performed at IITs, AIIMS, St. Xavier\'s, Manipal, and 50+ campuses.',
              },
            },
          ],
        },
        'sameAs': [
          'https://instagram.com/mashbyhpo',
          'https://www.instagram.com/hpo_music/',
          'https://www.youtube.com/@hpomashups',
        ],
      },
      // ── 2. Person ──
      {
        '@type': 'Person',
        '@id': 'https://djhpo.vercel.app/#person',
        'name': 'DJ HPO',
        'jobTitle': 'Wedding DJ & Mashup Artist',
        'url': 'https://djhpo.vercel.app',
        'image': 'https://djhpo.vercel.app/artist.jpg',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'addressCountry': 'IN',
        },
        'sameAs': [
          'https://instagram.com/mashbyhpo',
          'https://www.youtube.com/@hpomashups',
        ],
      },
      // ── 3. FAQPage (rich results in Google) ──
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How much does a wedding DJ cost in Jaipur?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Wedding DJ prices in Jaipur vary based on event duration, location, and equipment. DJ HPO offers custom packages for Sangeet, Baraat, and Reception. Fill out the inquiry form or WhatsApp for a free quote within 24 hours.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Does DJ HPO travel for destination weddings?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes! DJ HPO performs at destination weddings across India — Udaipur, Goa, Delhi, Mumbai, Pushkar, and beyond. Travel arrangements are discussed during booking. Previous destination weddings include Pushkar and Hyderabad.',
            },
          },
          {
            '@type': 'Question',
            'name': 'How far in advance should I book a wedding DJ in Jaipur?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'For weddings during peak season (October to February), it is recommended to book DJ HPO at least 4–6 weeks in advance. Dates fill up quickly during wedding season. Contact us today to check availability.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Can I request specific Bollywood songs for my Sangeet night?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Absolutely! DJ HPO works with a fully custom playlist. Share your must-play songs, must-avoids, and genre preferences — Bollywood, Punjabi, EDM, or mashups — and a personalized set is built around your taste.',
            },
          },
          {
            '@type': 'Question',
            'name': 'What events does DJ HPO perform at?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'DJ HPO performs at weddings (Sangeet, Baraat, Reception, Mehndi), corporate events, birthday parties, college fests, club nights, and private parties. He has performed at 100+ events including IITs, AIIMS, and premium clubs across India.',
            },
          },
        ],
      },
      // ── 4. BreadcrumbList ──
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://djhpo.vercel.app' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Book Wedding DJ', 'item': 'https://djhpo.vercel.app/book' },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
