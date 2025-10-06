
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { Separator } from '@/components/ui/separator';
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
} from "@/components/ui/alert-dialog"

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'What We Do' },
  { href: '/pricing', label: 'Pricing' },
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

  const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void; }) => {
    const isActive = pathname.startsWith(href) && (href !== '/' || pathname === '/');
    const commonClasses = cn(
        "relative text-2xl font-bold text-white transition-all duration-300 hover:text-accent py-3 w-full text-left px-6 hover:bg-white/5 active:bg-accent/20",
        isActive ? "text-accent" : ""
    );
  
    if (onClick) {
      return (
         <SheetClose asChild>
          <button onClick={onClick} className={commonClasses}>
              {children}
          </button>
        </SheetClose>
      )
    }

    return (
        <SheetClose asChild>
            <Link href={href} className={commonClasses}>
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
  
  const handleLogout = () => {
    auth.signOut();
    setIsOpen(false);
  };

  return (
    <header className={cn(headerClasses, 'group/header')}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
        </div>
        
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-white/10">
                <HamburgerIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-card p-0 text-white flex flex-col data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left-48 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-left-48">
               <SheetTitle className="sr-only">Menu</SheetTitle>
               <div className="flex h-16 items-center justify-between px-6 border-b border-white/20">
                </div>

                <nav className="flex flex-col pt-6 mt-4">
                  {navLinks.map((link, index) => (
                     <div key={link.href} className="flex flex-col">
                      <MobileNavLink href={link.href}>
                        {link.label}
                      </MobileNavLink>
                      {index < navLinks.length - 1 && <Separator className="bg-white/20" />}
                    </div>
                  ))}
                </nav>

                <div className="mt-auto p-6 border-t border-white/20">
                   {!loading && user && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                          <Button variant="ghost" className="w-full justify-start text-2xl font-bold p-0 h-auto text-white hover:text-destructive">
                            <LogOut className="mr-4"/> Logout
                          </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={handleLogout}>Log Out</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                   )}
                </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
