
"use client";

import { TypeAnimation } from "react-type-animation";
import { memo } from "react";

export const HeroTypingAnimation = memo(() => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold tracking-tighter mt-8 mb-4 max-w-3xl mx-auto text-white h-24 md:h-36">
        <TypeAnimation
          sequence={[
            "Your Next Customer Is Online, Let’s Get Their Attention",
            1000,
          ]}
          wrapper="span"
          speed={30}
          style={{ display: 'inline-block' }}
          repeat={0}
          cursor={true}
        />
      </h1>
      <p className="max-w-2xl text-md md:text-lg text-slate-200 mb-8 mx-auto h-32 md:h-24">
         <TypeAnimation
          sequence={[
            5000,
            "We build modern mobile-friendly websites that attract, engage, and convert visitors into paying customers. No monthly fees, no hidden charges, just powerful websites designed to grow your business.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={0}
          cursor={true}
        />
      </p>
    </>
  );
});

HeroTypingAnimation.displayName = "HeroTypingAnimation";
