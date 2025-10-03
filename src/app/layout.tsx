
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Toaster } from "@/components/ui/toaster"
import dynamic from 'next/dynamic';
import { AuthProvider } from '@/lib/auth';

const fontPoppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stevuth.web.app";

const Footer = dynamic(() => import('@/components/layout/Footer').then(mod => mod.Footer));


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Best Website Development Agency in Nigeria - Stevuth Tech',
    template: '%s | Stevuth Tech',
  },
  verification: {
    google: 'google7cb1f9bd52be07f5.html',
  },
  description: 'Stevuth Tech is the best website development agency in Nigeria, specializing in custom web design, e-commerce, and SEO. Partner with the top tech company in Lagos for growth.',
  keywords: [
    "best website development agency in Nigeria",
    "best tech company in Nigeria",
    "web design Nigeria",
    "website developer in Lagos",
    "e-commerce development Nigeria",
    "Stevuth Tech",
    "top web development companies in Nigeria",
    "affordable web design Lagos",
    "SEO services Nigeria"
  ],
  openGraph: {
    title: 'Best Website Development Agency in Nigeria - Stevuth Tech',
    description: 'Looking for the best web development in Nigeria? Stevuth Tech, a top tech company in Lagos, builds high-performance websites that drive business growth.',
    url: siteUrl,
    siteName: 'Stevuth Tech',
    images: [
      {
        url: 'https://i.postimg.cc/pT2xGg4R/Whisk-beca591b52.jpg',
        width: 1200,
        height: 630,
        alt: 'Stevuth Tech - Best Website Development Agency in Nigeria',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Website Development Agency in Nigeria - Stevuth Tech',
    description: 'Looking for the best web development in Nigeria? Stevuth Tech, a top tech company in Lagos, builds high-performance websites that drive business growth.',
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
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
       <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          fontPoppins.variable,
          fontInter.variable
        )}
      >
        <AuthProvider>
            <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            </div>
            <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
