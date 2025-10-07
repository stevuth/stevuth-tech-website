
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { X, LogOut } from 'lucide-react';
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

export function MobileMenu({ navLinks, user, loading, handleLogout }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
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
          "text-2xl font-bold text-white transition-all duration-300 hover:text-accent py-3 w-full text-left transform-gpu",
          isActive ? "text-accent" : "",
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        )}
        style={{ transitionDelay: `${isOpen ? delay : 0}ms` }}
      >
        {children}
      </Link>
    );
  };
  
  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu" className="text-white hover:bg-white/10">
        <HamburgerIcon />
      </Button>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-full max-w-sm transform-gpu transition-transform duration-500 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="h-full flex flex-col animated-gradient p-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold text-white">
                <Logo />
                <span>Stevuth Tech</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-10 w-10 rounded-full text-white">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col flex-grow">
              {navLinks.map((link, index) => (
                <MobileNavLink href={link.href} key={link.href} delay={100 + index * 50}>
                  {link.label}
                </MobileNavLink>
              ))}
            </nav>

            <div className="mt-auto border-t border-white/10 pt-6">
              {!loading && user && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full justify-start text-xl font-bold p-0 h-auto text-white hover:text-destructive transition-all duration-300",
                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  )}
                   style={{ transitionDelay: `${isOpen ? 100 + navLinks.length * 50 : 0}ms` }}
                >
                  <LogOut className="mr-4 h-6 w-6" /> Logout
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
