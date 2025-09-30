
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { BackButton } from './BackButton';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'What We Do' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

const HamburgerIcon = () => (
  <div className="flex flex-col justify-around w-6 h-6">
    <div className="h-0.5 w-full bg-current rounded-full" />
    <div className="h-0.5 w-full bg-current rounded-full" />
    <div className="h-0.5 w-full bg-current rounded-full" />
  </div>
);

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial load
    } else {
      setIsScrolled(true); // Always scrolled on non-home pages
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isHomePage]);


  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname.startsWith(href) && (href !== '/' || pathname === '/');
    return (
      <Link href={href} className={cn(
        "relative text-sm font-medium transition-all hover:text-accent",
        "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
        isActive ? "text-accent after:scale-x-100" : "text-white/80",
        "hover:drop-shadow-[0_0_5px_#00E5FF]"
      )}>
        {children}
      </Link>
    );
  };

  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname.startsWith(href) && (href !== '/' || pathname === '/');
    return (
        <SheetClose asChild>
            <Link href={href} className={cn(
                "relative text-2xl font-bold text-white transition-colors hover:text-accent py-3",
                 "after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-accent after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-50",
                isActive ? "text-accent after:scale-x-50" : ""
            )}>
                {children}
            </Link>
        </SheetClose>
    );
  };

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-background/80 shadow-md backdrop-blur-sm'
  );

  return (
    <header className={cn(headerClasses, 'group/header')}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
            <BackButton />
             <Link href="/">
                <Logo isDark={true} />
            </Link>
        </div>
        
        <nav className={cn("hidden items-center space-x-8 md:flex")}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-white/10">
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
                </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
