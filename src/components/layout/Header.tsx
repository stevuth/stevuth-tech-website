"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

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
                "block rounded-md px-4 py-3 text-lg font-medium transition-colors",
                isActive ? "bg-accent text-accent-foreground" : "hover:bg-secondary"
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
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="Back to homepage">
          <Logo />
        </Link>
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
                <Menu className={cn("h-7 w-7 transition-transform duration-300", isOpen ? "rotate-90 scale-0" : "rotate-0 scale-100")} />
                <X className={cn("absolute h-7 w-7 transition-transform duration-300", isOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto p-0">
              <div className="flex flex-col">
                 <div className="flex h-20 items-center justify-between px-4 border-b">
                  <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Close menu">
                        <X className="h-7 w-7" />
                      </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} href={link.href}>
                      {link.label}
                    </MobileNavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
