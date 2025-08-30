"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOnHomepage, setIsOnHomepage] = useState(true);
   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsOnHomepage(pathname === '/');
  }, [pathname]);

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

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (isOnHomepage) {
    return null;
  }

  const buttonClasses = cn(
    "h-10 w-10 p-0",
    "hover:bg-transparent",
    pathname === '/' && !isScrolled ? "text-white hover:text-accent" : "text-foreground hover:text-accent"
  );


  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      aria-label="Go back"
      className={buttonClasses}
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
}
