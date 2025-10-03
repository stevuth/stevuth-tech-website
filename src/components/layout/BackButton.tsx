
"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isHomepage, setIsHomepage] = useState(true);

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setIsHomepage(pathname === '/');
  }, [pathname]);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  if (isHomepage) {
    return null;
  }

  const buttonClasses = cn(
    "absolute top-4 left-4 md:left-6 z-10 h-10 w-10 p-0 text-white hover:bg-white/10 hover:text-white"
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
