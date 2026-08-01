import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://djhpo.vercel.app'),
  title: 'Book DJ HPO – Pan-India Wedding & Event DJ | Jaipur & Worldwide',
  description: 'Hire DJ HPO for your wedding, sangeet, birthday party, or corporate event in Jaipur, Delhi NCR, Mumbai, Udaipur, Goa & across India. Professional DJ with 100+ events, 60M+ views.',
  keywords: [
    'wedding DJ India',
    'destination wedding DJ India',
    'Pan-India DJ booking',
    'wedding DJ Jaipur',
    'best DJ for wedding India',
    'event DJ Jaipur',
    'DJ booking India',
    'best DJ Jaipur',
    'DJ HPO',
    'Bollywood DJ India',
    'sangeet DJ India',
    'corporate event DJ India',
    'party DJ India',
    'wedding DJ Rajasthan',
    'destination DJ Udaipur',
    'wedding DJ Goa',
  ],
  alternates: {
    canonical: '/book',
  },
  openGraph: {
    title: 'Book DJ HPO – Pan-India Wedding & Event DJ',
    description: 'Professional DJ for weddings, sangeet, birthday parties & corporate events across India. 100+ events performed. Get a free quote!',
    siteName: 'DJ HPO',
    type: 'website',
    url: 'https://djhpo.vercel.app/book',
    images: [
      {
        url: '/artist.jpg',
        width: 1200,
        height: 630,
        alt: 'DJ HPO – Pan-India Wedding & Event DJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book DJ HPO – Pan-India Wedding & Event DJ',
    description: 'Professional DJ for weddings & events across India. 100+ events, 60M+ views.',
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
  // LocalBusiness + Event DJ schema for the booking page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://djhpo.vercel.app/#business',
        'name': 'DJ HPO',
        'url': 'https://djhpo.vercel.app',
        'image': 'https://djhpo.vercel.app/artist.jpg',
        'description': 'Professional Wedding DJ and Event DJ based in Jaipur, Rajasthan. Specializing in Bollywood, EDM and mashup sets for weddings, corporate events, parties and college fests.',
        'priceRange': '₹₹',
        'telephone': '+918005926751',
        'email': 'hpomusicofficial@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Jaipur',
          'addressRegion': 'Rajasthan',
          'addressCountry': 'IN',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 26.9124,
          'longitude': 75.7873,
        },
        'areaServed': [
          'Jaipur', 'Rajasthan', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bikaner'
        ],
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'DJ Services',
          'itemListElement': [
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Wedding DJ Jaipur', 'description': 'Professional DJ for weddings, sangeet and reception in Jaipur and Rajasthan' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Corporate Event DJ Jaipur', 'description': 'DJ services for corporate events, office parties and product launches in Jaipur' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Birthday Party DJ Jaipur', 'description': 'DJ for birthday parties and private events in Jaipur' } },
            { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'College Fest DJ Jaipur', 'description': 'DJ for college fests, freshers and cultural events in Jaipur' } },
          ],
        },
        'sameAs': [
          'https://instagram.com/mashbyhpo',
          'https://www.instagram.com/hpo_music/',
          'https://www.youtube.com/@hpomashups',
        ],
      },
      {
        '@type': 'Person',
        'name': 'DJ HPO',
        'jobTitle': 'Professional DJ and Mashup Artist',
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
