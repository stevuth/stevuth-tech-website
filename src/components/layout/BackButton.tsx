"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOnHomepage, setIsOnHomepage] = useState(false);

  useEffect(() => {
    setIsOnHomepage(pathname === '/');
  }, [pathname]);

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
    <div className="container px-4 md:px-6 pt-4">
        <Button
          variant="ghost"
          onClick={handleBack}
          aria-label="Go back"
          className="p-0 h-auto hover:bg-transparent"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
    </div>
  );
}
