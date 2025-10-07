
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'What We Do' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const { user, loading } = useAuth();
  const auth = getAuth(app);
  const isAdminRoute = pathname.startsWith('/admin');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
    } else {
      setIsScrolled(true); 
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
  
  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isHomePage && !isScrolled
      ? 'bg-transparent'
      : 'bg-background/80 shadow-md backdrop-blur-sm'
  );
  
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className={cn(headerClasses, 'group/header')}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <Logo />
        </Link>
        
        <nav className={cn("hidden items-center space-x-6 md:flex")}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
           {!loading && user && isAdminRoute && (
             <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-destructive hover:bg-destructive/10">
                    <LogOut />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You will be returned to the login page.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogout} className="bg-destructive hover:bg-destructive/90">Log Out</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
           )}
        </nav>

        <div className="md:hidden">
            {/* MobileMenu has been removed */}
        </div>
      </div>
    </header>
  );
}
