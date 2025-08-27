"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { BackButton } from './BackButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'Solutions We Provide' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

const socialLinks = [
    { href: 'https://facebook.com/RightFocusCrewInternational', icon: <Facebook size={24} />, label: 'Facebook' },
    { href: 'https://x.com/rightfocuscrewi', icon: <Twitter size={24} />, label: 'Twitter' },
    { href: 'https://x.com/rfci4life', icon: <Twitter size={24} />, label: 'Twitter 2' },
    { href: 'https://instagram.com/rfcivetclinic', icon: <Instagram size={24} />, label: 'Instagram' },
    { href: 'https://instagram.com/rfcintltravelstourism', icon: <Instagram size={24} />, label: 'Instagram 2' },
];

const HamburgerIcon = () => (
  <div className="flex flex-col justify-around w-6 h-6">
    <div className="h-0.5 w-full bg-foreground rounded-full" />
    <div className="h-0.5 w-full bg-foreground rounded-full" />
    <div className="h-0.5 w-full bg-foreground rounded-full" />
  </div>
);

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={cn(
        "relative text-sm font-medium transition-colors hover:text-accent",
        "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
        isActive ? "text-accent after:scale-x-100" : "text-foreground/80"
      )}>
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
        <SheetClose asChild>
            <Link href={href} className={cn(
                "relative text-2xl font-bold text-white transition-colors hover:text-blue-400 py-3",
                 "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-blue-500 after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-50",
                isActive ? "text-blue-400 after:scale-x-50" : ""
            )}>
                {children}
            </Link>
        </SheetClose>
    );
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
            <BackButton />
            <Link href="/" aria-label="Back to homepage" className={cn(pathname !== '/' && 'hidden sm:block')}>
              <Logo />
            </Link>
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <HamburgerIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-primary p-0 text-primary-foreground flex flex-col">
               <SheetTitle className="sr-only">Menu</SheetTitle>
               <div className="flex h-16 items-center justify-between px-6 border-b border-primary-foreground/20">
                    <SheetClose asChild>
                      <Link href="/">
                        <Logo isDark={true} />
                      </Link>
                    </SheetClose>
                </div>

                <nav className="flex flex-col p-6 space-y-5 mt-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} href={link.href}>
                      {link.label}
                    </MobileNavLink>
                  ))}
                </nav>

                <div className="mt-auto p-6 border-t border-primary-foreground/20">
                    <div className="flex justify-center space-x-6">
                      {socialLinks.map(link => (
                          <Link key={link.href} href={link.href} className="text-primary-foreground/70 hover:text-white transition-colors">
                              {link.icon}
                          </Link>
                      ))}
                    </div>
                </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
