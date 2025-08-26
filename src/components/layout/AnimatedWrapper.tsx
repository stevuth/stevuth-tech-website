"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'fade-in' | 'fade-in-up' | 'slide-in-left' | 'slide-in-right';

interface AnimatedWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  threshold?: number;
}

export function AnimatedWrapper({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: AnimatedWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: '0px', threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);

  const animationClasses = {
    'fade-in': 'transition-opacity duration-1000 ease-out',
    'fade-in-up': 'transition-all duration-1000 ease-out transform',
    'slide-in-left': 'transition-all duration-1000 ease-out transform',
    'slide-in-right': 'transition-all duration-1000 ease-out transform',
  };

  const initialStates = {
    'fade-in': 'opacity-0',
    'fade-in-up': 'opacity-0 translate-y-8',
    'slide-in-left': 'opacity-0 -translate-x-16',
    'slide-in-right': 'opacity-0 translate-x-16',
  };

  const finalStates = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={cn(
        className,
        animationClasses[animation],
        isVisible ? finalStates : initialStates[animation]
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
