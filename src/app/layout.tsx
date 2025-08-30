import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Toaster } from "@/components/ui/toaster"
import dynamic from 'next/dynamic';

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

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Stevuth Tech - Driving Growth Across Industries in Nigeria',
    template: '%s | Stevuth Tech',
  },
  description: 'Stevuth Tech is a leading multi-sector company in Nigeria, specializing in Agro-allied, Healthcare, Travels & Tourism, and Contracting services. Your trusted partner for growth and development.',
  keywords: [
    "Stevuth Tech",
    "Agro-allied services Nigeria",
    "Healthcare diagnostics Nigeria",
    "Travels and tours Nigeria",
    "General contracting Nigeria",
    "Veterinary services Ota",
    "Human resources Nigeria",
    "Orphanage support Nigeria",
    "Fumigation services Ogun State"
  ],
  openGraph: {
    title: 'Stevuth Tech - Driving Growth Across Industries in Nigeria',
    description: 'A multi-sector company engaged in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and more.',
    url: siteUrl,
    siteName: 'Stevuth Tech',
    images: [
      {
        url: 'https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg',
        width: 1200,
        height: 630,
        alt: 'Stevuth Tech Team Collaboration',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stevuth Tech - Driving Growth Across Industries in Nigeria',
    description: 'A multi-sector company engaged in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and more.',
    images: ['https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg'],
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
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
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
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
