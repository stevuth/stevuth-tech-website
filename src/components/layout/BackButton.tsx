"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOnHomepage, setIsOnHomepage] = useState(false);

  useEffect(() => {
    setIsOnHomepage(pathname === '/');
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on initial render

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

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "fixed top-5 left-5 z-50 transition-all duration-300 hover:scale-110",
        isAtTop ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20 pointer-events-none"
      )}
      onClick={handleBack}
      aria-label="Go back"
      tabIndex={isAtTop ? 0 : -1}
    >
      <ArrowLeft className="h-8 w-8" />
    </Button>
  );
}
