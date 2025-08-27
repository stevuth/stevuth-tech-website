import type { Metadata } from 'next';
import { Poppins, Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { BackButton } from '@/components/layout/BackButton';
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

export const metadata: Metadata = {
  title: 'Right Focus Intl - Driving Growth Across Industries',
  description: 'A multi-sector company engaged in Agro-allied, Healthcare, Travels & Tourism, Contracting & General Merchandising, and more.',
  icons: {
    icon: "/favicon.ico",
  }
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
          <BackButton />
          <main className="flex-1">{children}</main>
          <DonationStrip />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
