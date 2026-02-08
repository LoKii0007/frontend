"use client";

import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  
  // Stagger animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { y: 100, rotate: 5, opacity: 0 },
    show: { 
        y: 0, 
        rotate: 0,
        opacity: 1, 
        transition: { 
            duration: 1, 
            ease: [0.25, 1, 0.5, 1] 
        } 
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center px-6 overflow-hidden">
      <div className="max-w-[90rem] mx-auto w-full relative z-10 flex flex-col justify-between h-full pt-32 pb-12">
        
        <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
        >
            <div className="overflow-hidden">
                <motion.h1 variants={item} className="font-display text-[13vw] leading-[0.8] font-bold text-white tracking-tighter uppercase mix-blend-difference">
                    Shaping
                </motion.h1>
            </div>
            
            <div className="overflow-hidden self-start md:self-center">
                <motion.h1 variants={item} className="font-display text-[13vw] leading-[0.8] font-bold text-white/10 text-outline tracking-tighter uppercase">
                    Future
                </motion.h1>
            </div>

            <div className="overflow-hidden self-start md:self-end">
                <motion.div variants={item} className="flex items-center gap-4">
                     <div className="h-[2px] w-24 bg-accent hidden md:block"></div>
                     <h1 className="font-display text-[13vw] leading-[0.8] font-bold text-white tracking-tighter uppercase">
                        Reality
                    </h1>
                </motion.div>
            </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md"
            >
                Redefining the digital landscape with bold visuals and immersive interactions. We build the impossible.
            </motion.p>

            <Magnetic>
                <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center group cursor-pointer" data-hover="true">
                    <ArrowDown size={32} className="text-white group-hover:text-accent transition-colors" />
                </div>
            </Magnetic>
        </div>
      </div>

      {/* Fluid Background Graphic */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-gradient-to-b from-white/5 to-transparent blur-[120px] pointer-events-none z-0" 
      />
    </section>
  );
}