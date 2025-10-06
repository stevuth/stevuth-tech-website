
'use client';

import React from 'react';
import { AnimatedWrapper } from './AnimatedWrapper';

export function StevuthHeroAnimation() {
  return (
    <AnimatedWrapper animation="zoom-in" className="hero-text-animation">
      <svg viewBox="0 0 400 50">
        <text className="text-stevuth" x="0" y="40">STEVUTH</text>
        <text className="text-tech" x="195" y="40">TECH</text>
        <text className="text-fill text-pulse" x="0" y="40">STEVUTH</text>
        <text className="text-fill text-pulse text-tech" x="195" y="40" style={{ fill: 'hsl(var(--accent))', animationDelay: '4s' }}>TECH</text>
      </svg>
    </AnimatedWrapper>
  );
}
