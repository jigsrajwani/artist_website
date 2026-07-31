import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djhpo.vercel.app"),
  applicationName: "DJ HPO",
  title: "DJ HPO – Viral Mashup Artist & Wedding DJ Jaipur | Book Now",
  description: "DJ HPO is Jaipur's viral mashup artist & professional event DJ. 60M+ views, 100+ events performed in Rajasthan. Book for weddings, parties, corporate events. Download mashup packs. @mashbyhpo",
  keywords: [
    "DJ HPO",
    "mashup artist",
    "viral mashups",
    "wedding DJ Jaipur",
    "DJ Jaipur",
    "event DJ Jaipur",
    "DJ booking Jaipur",
    "Bollywood DJ Jaipur",
    "DJ Rajasthan",
    "wedding DJ Rajasthan",
    "party DJ Jaipur",
    "sangeet DJ Jaipur",
    "corporate event DJ Jaipur",
    "best DJ Jaipur",
    "Bollywood mashup",
    "@mashbyhpo",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DJ HPO – Viral Mashup Artist & Event DJ | Jaipur, Rajasthan",
    description: "Jaipur's viral mashup artist & professional DJ. 60M+ views. Book for weddings, corporate events & parties across Rajasthan.",
    siteName: "DJ HPO",
    type: "website",
    url: "https://djhpo.vercel.app",
    images: [
      {
        url: "/artist.jpg",
        width: 1200,
        height: 630,
        alt: "DJ HPO - Viral Mashup Artist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ HPO – Viral Mashup Artist",
    description: "Creating high-energy viral mashups. 60M+ views.",
    images: ["/artist.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "name": "DJ HPO",
        "url": "https://djhpo.vercel.app",
        "image": "https://djhpo.vercel.app/artist.jpg",
        "description": "DJ HPO is a viral mashup artist based in Jaipur, Rajasthan, creating high-energy Bollywood & EDM mashups with 60M+ views. Available for weddings, corporate events and private parties.",
        "foundingLocation": {
          "@type": "Place",
          "name": "Jaipur, Rajasthan, India"
        },
        "areaServed": ["Jaipur", "Rajasthan", "India"],
        "sameAs": [
          "https://instagram.com/mashbyhpo",
          "https://www.instagram.com/hpo_music/",
          "https://www.youtube.com/@hpomashups"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "DJ HPO – Event DJ Jaipur",
        "url": "https://djhpo.vercel.app/book",
        "image": "https://djhpo.vercel.app/artist.jpg",
        "description": "Professional Wedding DJ and Event DJ in Jaipur, Rajasthan.",
        "telephone": "+918005926751",
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "addressCountry": "IN"
        },
        "areaServed": ["Jaipur", "Rajasthan", "Jodhpur", "Udaipur", "Kota", "Ajmer"]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
