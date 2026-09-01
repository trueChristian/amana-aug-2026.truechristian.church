import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amana-aug-2026.truechristian.church";
const title = "Amana Aug 2026 Camp Meeting";
const description =
  "A visual record of fellowship, worship and biblical teaching at Amana Mission in northern Namibia, 21–23 August 2026.";
const socialImage = "/assets/social/true-christian-share-600-v3.png";
const socialImageAbsolute = `${siteUrl}${socialImage}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "A True Christian Church",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/favicons/favicon.ico",
    shortcut: "/assets/favicons/favicon.ico",
    apple: "/assets/favicons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "A True Christian Church",
    title,
    description,
    images: [
      {
        url: socialImage,
        secureUrl: socialImageAbsolute,
        width: 600,
        height: 600,
        type: "image/png",
        alt: "A True Christian Church",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [{ url: socialImage, alt: "A True Christian Church" }],
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
        <meta property="og:image:secure_url" content={socialImageAbsolute} />
        <link rel="image_src" href={socialImageAbsolute} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
