
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
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

  const MobileNavLink = ({ href, children, onClick, delay }: { href: string; children: React.ReactNode; onClick?: () => void; delay: number }) => {
    const isActive = pathname.startsWith(href) && (href !== '/' || pathname === '/');
    const commonClasses = cn(
        "relative text-2xl font-bold text-white transition-all duration-300 hover:text-accent py-4 w-full text-left px-6 transform-gpu",
        "data-[state=open]:translate-x-0 data-[state=open]:opacity-100",
        "data-[state=closed]:-translate-x-10 data-[state=closed]:opacity-0",
        isActive ? "text-accent" : ""
    );
  
    const style = { transitionDelay: `${delay}ms` };
    
    if (onClick) {
      return (
         <SheetClose asChild>
          <button onClick={onClick} className={commonClasses} style={style}>
              {children}
          </button>
        </SheetClose>
      )
    }

    return (
        <SheetClose asChild>
            <Link href={href} className={commonClasses} style={style}>
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
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white hover:bg-white/10">
                <HamburgerIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm text-white flex flex-col animated-gradient p-0">
               <SheetTitle className="sr-only">Menu</SheetTitle>
               <div className="flex h-16 items-center justify-between px-4 border-b border-white/10">
                 <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-lg font-bold">
                    <Logo />
                    <span>Stevuth Tech</span>
                 </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col pt-6" data-state={isOpen ? 'open' : 'closed'}>
                  {navLinks.map((link, index) => (
                    <MobileNavLink href={link.href} key={link.href} delay={200 + index * 50}>
                      {link.label}
                    </MobileNavLink>
                  ))}
                </nav>

                <div className="mt-auto p-6 border-t border-white/10" data-state={isOpen ? 'open' : 'closed'}>
                   {!loading && user && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                          <Button variant="ghost" className="w-full justify-start text-xl font-bold p-0 h-auto text-white hover:text-destructive transform-gpu data-[state=open]:translate-x-0 data-[state=open]:opacity-100 data-[state=closed]:-translate-x-10 data-[state=closed]:opacity-0" style={{ transitionDelay: `${200 + navLinks.length * 50}ms`}}>
                            <LogOut className="mr-4 h-6 w-6"/> Logout
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
