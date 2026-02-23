import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cut Qarratal Mughis — Full-Stack Developer",
  description:
    "Portfolio personal Andi Wirawan, Full-Stack Developer berbasis di Jakarta. Spesialis React, Next.js, Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Syne', sans-serif" }}>{children}</body>
    </html>
  );
}
