import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://djhpo.vercel.app"),
  applicationName: "DJ HPO",
  title: "DJ HPO – Viral Mashup Artist | Book Now",
  description: "DJ HPO is a viral mashup artist creating high-energy mashups & DJ experiences. 70M+ views. Book for events, download mashup packs, brand collaborations. @mashbyhpo",
  keywords: ["DJ HPO", "mashup artist", "viral mashups", "DJ booking", "Bollywood mashup", "DJ India", "@mashbyhpo"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DJ HPO – Viral Mashup Artist",
    description: "Creating high-energy viral mashups. 70M+ views. Book for events & brand deals.",
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
    description: "Creating high-energy viral mashups. 70M+ views.",
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
    "@type": "MusicGroup",
    "name": "DJ HPO",
    "url": "https://djhpo.vercel.app",
    "image": "https://djhpo.vercel.app/artist.jpg",
    "description": "DJ HPO is a viral mashup artist creating high-energy mashups & DJ experiences with 70M+ views.",
    "sameAs": [
      "https://instagram.com/mashbyhpo"
      // You can add Youtube, Soundcloud here if available
    ]
  };

  return (
    <html lang="en">
      <head>
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
