import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { DonationStrip } from '@/components/layout/DonationStrip';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const fontOpenSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-live-url.com";
const faviconUrl = "https://i.postimg.cc/0jTGc7nS/Whats-App-Image-2025-08-21-at-13-03.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Right Focus Intl - Driving Growth Across Industries in Nigeria',
    template: '%s | Right Focus Intl',
  },
  description: 'Right Focus Intl is a leading multi-sector company in Nigeria, specializing in Agro-allied, Healthcare, Travels & Tourism, and Contracting services. Your trusted partner for growth and development.',
  keywords: [
    "Right Focus Intl",
    "Agro-allied services Nigeria",
    "Healthcare diagnostics Nigeria",
    "Travels and tours Nigeria",
    "General contracting Nigeria",
    "Veterinary services Ota",
    "Human resources Nigeria",
    "Orphanage home support Nigeria",
    "Fumigation services Ogun State"
  ],
  openGraph: {
    title: 'Right Focus Intl - Driving Growth Across Industries in Nigeria',
    description: 'A multi-sector company engaged in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and more.',
    url: siteUrl,
    siteName: 'Right Focus Intl',
    images: [
      {
        url: 'https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg',
        width: 1200,
        height: 630,
        alt: 'Right Focus Intl Team Collaboration',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Right Focus Intl - Driving Growth Across Industries in Nigeria',
    description: 'A multi-sector company engaged in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and more.',
    images: ['https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg'],
  },
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
    apple: faviconUrl,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontPoppins.variable,
          fontOpenSans.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <main className="flex-1">{children}</main>
          <DonationStrip />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
