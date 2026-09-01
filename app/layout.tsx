import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://amana-aug-2026.truechristian.church";
const title = "Amana Aug 2026 Camp Meeting";
const description =
  "A visual record of fellowship, worship and biblical teaching at Amana Mission in northern Namibia, 21–23 August 2026.";
const socialImage = "/assets/social/amana-aug-2026-camp-meeting.jpg";

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
        secureUrl: `${siteUrl}${socialImage}`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "More than 100 people gathered for the Amana Aug 2026 Camp Meeting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Raleway:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
