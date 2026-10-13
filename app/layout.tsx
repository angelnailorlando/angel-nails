import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAKAY ACTIVE - Luxury Activewear",
  description: "Premium black activewear $50-$60. Performance. Clean. Everyday. Shop LAKAY ACTIVE at lakayactive.shop. Secure Stripe payment + WhatsApp order.",
  openGraph: {
    title: "LAKAY ACTIVE - Luxury Activewear",
    description: "Luxury Black Sets $60 - Performance. Clean. Everyday. Shop now at lakayactive.shop",
    url: "https://lakayactive.shop",
    siteName: "LAKAY ACTIVE",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LAKAY ACTIVE Black Set $60",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAKAY ACTIVE - Luxury Activewear",
    description: "Luxury Black Sets $60 - Performance. Clean. Everyday.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}