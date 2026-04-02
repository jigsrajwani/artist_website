import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DJ HPO – Viral Mashup Artist | Book Now",
  description: "DJ HPO is a viral mashup artist creating high-energy mashups & DJ experiences. 50M+ views. Book for events, download mashup packs, brand collaborations. @mashbyhpo",
  keywords: ["DJ HPO", "mashup artist", "viral mashups", "DJ booking", "Bollywood mashup", "DJ India", "@mashbyhpo"],
  openGraph: {
    title: "DJ HPO – Viral Mashup Artist",
    description: "Creating high-energy viral mashups. 50M+ views. Book for events & brand deals.",
    type: "website",
    url: "https://djhpo.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ HPO – Viral Mashup Artist",
    description: "Creating high-energy viral mashups. 50M+ views.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
