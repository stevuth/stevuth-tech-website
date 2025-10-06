
'use client';

import React from 'react';
import { AnimatedWrapper } from './AnimatedWrapper';

export function StevuthHeroAnimation() {
  return (
    <AnimatedWrapper animation="zoom-in" className="hero-text-animation">
      <svg viewBox="0 0 400 140">
        {/* Stevuth */}
        <text className="text-stevuth" x="50%" y="40" dominantBaseline="middle" textAnchor="middle">STEVUTH</text>
        <text className="text-fill text-pulse" x="50%" y="40" dominantBaseline="middle" textAnchor="middle">STEVUTH</text>
        
        {/* Tech */}
        <text className="text-tech" x="50%" y="105" dominantBaseline="middle" textAnchor="middle">TECH</text>
        <text className="text-fill text-pulse text-tech" x="50%" y="105" dominantBaseline="middle" textAnchor="middle" style={{ fill: 'hsl(var(--accent))', animationDelay: '4s' }}>TECH</text>
      </svg>
    </AnimatedWrapper>
  );
}

    