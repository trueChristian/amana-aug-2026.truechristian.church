import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amana Aug 2026 Camp Meeting",
  description:
    "A visual record of fellowship, worship and biblical teaching at Amana Mission in northern Namibia, 21–23 August 2026.",
  icons: {
    icon: "/assets/favicons/favicon.ico",
    shortcut: "/assets/favicons/favicon.ico",
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Raleway:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
