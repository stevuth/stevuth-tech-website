
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
        <text className="text-tech" x="50%" y="115" dominantBaseline="middle" textAnchor="middle">TECH</text>
        <text className="text-tech-fill text-pulse" x="50%" y="115" dominantBaseline="middle" textAnchor="middle">TECH</text>
      </svg>
    </AnimatedWrapper>
  );
}
