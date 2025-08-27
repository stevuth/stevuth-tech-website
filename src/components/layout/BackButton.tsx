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
    <Button
      variant="ghost"
      onClick={handleBack}
      aria-label="Go back"
      className={cn(
        "h-10 w-10 p-0",
        "hover:bg-transparent text-foreground hover:text-accent"
      )}
    >
      <ArrowLeft className="h-6 w-6" />
    </Button>
  );
}
