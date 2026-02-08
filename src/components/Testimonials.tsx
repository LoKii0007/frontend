"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

// Utility to wrap value within a range
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const testimonials = [
  "Visionary design team.",
  "Turned our chaos into clarity.",
  "The best agency we've worked with.",
  "Absolutely world-class execution.",
  "Defined our digital presence.",
];

interface ParallaxTextProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Map scroll velocity to a speed multiplier
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Wrap the x position between -25% and 0% because we render 4 copies
  // This creates a seamless loop when one copy width is traversed
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Increase speed based on scroll velocity magnitude
    let velocity = velocityFactor.get();
    if (velocity !== 0) {
       moveBy += moveBy * Math.abs(velocity);
    }

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex flex-nowrap" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 border-y border-white/10 overflow-hidden bg-surface">
      {/* Reduced baseVelocity from -2.5 to -0.25 (0.1x speed) */}
      <ParallaxText baseVelocity={-0.25}> 
        <div className="flex items-center gap-16 pr-16">
            {testimonials.map((text, i) => (
                <div key={i} className="flex items-center gap-16">
                    <span className="font-display text-4xl md:text-6xl font-bold text-white/80 uppercase">
                        {text}
                    </span>
                    <span className="w-4 h-4 rounded-full bg-accent"></span>
                </div>
            ))}
        </div>
      </ParallaxText>
    </section>
  );
}