
"use client";

import { useEffect, useState } from 'react';

const NUM_PARTICLES = 20;

export function Particle() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles: any[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const size = Math.random() * 3 + 1; // size between 1px and 4px
      const duration = Math.random() * 15 + 10; // duration between 10s and 25s
      const delay = Math.random() * 25; // delay up to 25s
      const xStart = Math.random() * 100;
      const yStart = Math.random() * 100;
      const xEnd = Math.random() * 100;
      const yEnd = Math.random() * 100;

      newParticles.push({
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${xStart}%`,
          top: `${yStart}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--x-start': `${xStart}vw`,
          '--y-start': `${yStart}vh`,
          '--x-end': `${xEnd}vw`,
          '--y-end': `${yEnd}vh`,
        } as React.CSSProperties
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={p.style}
        />
      ))}
    </>
  );
}
