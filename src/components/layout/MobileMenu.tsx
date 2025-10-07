
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { X, LogOut, Home, Users, Briefcase, Tag, FileText, Mail, HelpCircle } from 'lucide-react';
import type { User } from 'firebase/auth';

const HamburgerIcon = () => (
  <div className="flex flex-col justify-around w-6 h-6">
    <div className="h-0.5 w-full bg-current rounded-full" />
    <div className="h-0.5 w-full bg-current rounded-full" />
    <div className="h-0.5 w-full bg-current rounded-full" />
  </div>
);

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  user: User | null;
  loading: boolean;
  handleLogout: () => void;
}

const navIcons: { [key: string]: React.ReactElement } = {
  '/': <Home className="h-5 w-5" />,
  '/about': <Users className="h-5 w-5" />,
  '/services': <Briefcase className="h-5 w-5" />,
  '/pricing': <Tag className="h-5 w-5" />,
  '/blog': <FileText className="h-5 w-5" />,
  '/contact': <Mail className="h-5 w-5" />,
  '/faq': <HelpCircle className="h-5 w-5" />,
};

export function MobileMenu({ navLinks, user, loading, handleLogout }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
    return () => {
      document.body.classList.remove('noscroll');
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const MobileNavLink = ({ href, children, delay }: { href: string; children: React.ReactNode; delay: number }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-4 text-xl font-bold tracking-wider text-foreground transition-all duration-300 py-3 w-full text-left transform-gpu",
          isActive ? "text-accent" : "hover:text-accent",
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
        )}
        style={{ transitionDelay: `${isOpen ? delay : 0}ms` }}
      >
        {navIcons[href] || <div className="w-5 h-5" />}
        <span className={cn(
            "relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-accent after:origin-center after:scale-x-0 after:transition-transform group-hover:after:scale-x-100",
            isActive ? "after:scale-x-100": ""
        )}>
            {children}
        </span>
      </Link>
    );
  };
  
  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu" className="text-white hover:bg-white/10">
        <HamburgerIcon />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 h-full w-full">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div
            className={cn(
              "fixed inset-y-0 right-0 w-full max-w-sm transform-gpu transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="h-full flex flex-col bg-background p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                  <Logo />
                  <span className="text-foreground">Stevuth Tech</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-10 w-10 rounded-full text-foreground hover:bg-foreground/10">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col flex-grow">
                {navLinks.map((link, index) => (
                  <MobileNavLink href={link.href} key={link.href} delay={200 + index * 40}>
                    {link.label}
                  </MobileNavLink>
                ))}
              </nav>

              <div className="mt-auto pt-6">
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground rounded-full glowing-cta">
                    <Link href="/contact">Contact Us</Link>
                </Button>
                {!loading && user && (
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full justify-center text-md font-bold p-0 h-auto mt-4 text-muted-foreground hover:text-destructive transition-all duration-300",
                    )}
                  >
                    <LogOut className="mr-2 h-5 w-5" /> Logout
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
