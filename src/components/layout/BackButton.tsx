"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // This ensures the component only renders on the client and not on the homepage
    setShowButton(pathname !== '/');
  }, [pathname]);

  const handleBack = () => {
    // Check if there is a history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // If no history, navigate to home as a fallback
      router.push('/');
    }
  };

  if (!showButton) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-background/80 shadow-lg backdrop-blur-sm transition-all hover:scale-110"
      onClick={handleBack}
      aria-label="Go back"
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
}
