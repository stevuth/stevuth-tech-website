
'use client';

import React from 'react';
import { AnimatedWrapper } from './AnimatedWrapper';

export function StevuthHeroAnimation() {
  return (
    <AnimatedWrapper animation="zoom-in" className="hero-text-animation">
      <svg viewBox="0 0 400 100">
        <text className="text-stevuth" x="50" y="40">STEVUTH</text>
        <text className="text-tech" x="125" y="90">TECH</text>
        <text className="text-fill text-pulse" x="50" y="40">STEVUTH</text>
        <text className="text-fill text-pulse text-tech" x="125" y="90" style={{ fill: 'hsl(var(--accent))', animationDelay: '4s' }}>TECH</text>
      </svg>
    </AnimatedWrapper>
  );
}
