
"use client";

import { useEffect, useState } from 'react';

const NUM_PARTICLES = 150;

export function Particle() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles: any[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const size = Math.random() * 3 + 1; // size between 1px and 4px
      const isStatic = Math.random() < 0.3; // 30% chance of being static
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;

      if (isStatic) {
        newParticles.push({
          id: i,
          isStatic: true,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${xPos}%`,
            top: `${yPos}%`,
          } as React.CSSProperties
        });
      } else {
        const duration = Math.random() * 15 + 10; // duration between 10s and 25s
        const delay = Math.random() * 25; // delay up to 25s
        const xEnd = Math.random() * 100;
        const yEnd = Math.random() * 100;

        newParticles.push({
          id: i,
          isStatic: false,
          style: {
            width: `${size}px`,
            height: `${size}px`,
            left: `${xPos}%`,
            top: `${yPos}%`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            '--x-start': `${xPos}vw`,
            '--y-start': `${yPos}vh`,
            '--x-end': `${xEnd}vw`,
            '--y-end': `${yEnd}vh`,
          } as React.CSSProperties
        });
      }
    }
    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map(p => (
        <div
          key={p.id}
          className={p.isStatic ? 'particle-static' : 'particle'}
          style={p.style}
        />
      ))}
    </>
  );
}

    