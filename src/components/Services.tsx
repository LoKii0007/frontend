"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Asterisk, Circle, Hexagon, Triangle } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Art Direction",
    desc: "We craft visual narratives that define brands. Every pixel is purposeful, every layout tells a story.",
    bg: "bg-[#1a1a1a]", // Dark Grey
    accent: "text-rose-500",
    icon: Asterisk
  },
  {
    id: "02",
    title: "Web Design",
    desc: "Immersive web experiences pushing browser limits. We build digital worlds that users want to inhabit.",
    bg: "bg-[#0c0c20]", // Deep Blue
    accent: "text-cyan-400",
    icon: Circle
  },
  {
    id: "03",
    title: "Development",
    desc: "Robust engineering with cutting-edge stack. Performance, accessibility, and scalability are standard.",
    bg: "bg-[#051505]", // Deep Green
    accent: "text-lime-400",
    icon: Hexagon
  },
  {
    id: "04",
    title: "Strategy",
    desc: "Data-driven insights meet creative intuition. We position your brand for dominance in the digital noise.",
    bg: "bg-[#1a0510]", // Deep Maroon
    accent: "text-pink-500",
    icon: Triangle
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section 
        id="services" 
        className="relative min-h-screen py-32 overflow-hidden transition-colors duration-700 ease-in-out"
    >
      {/* Immersive Background Layer */}
      <div className={`absolute inset-0 transition-colors duration-1000 ease-in-out ${services[activeService].bg}`}>
         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
         {/* Abstract Shape Background */}
         <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[80vh] h-[80vh] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Title */}
        <div className="lg:col-span-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white/40 mb-8 border-l-2 border-accent pl-4">
                Our Expertise
            </h2>
            <div className="text-white/80 text-lg leading-relaxed max-w-sm hidden lg:block">
                Select a discipline to explore how we can elevate your digital presence.
            </div>
        </div>

        {/* Right Column: Interactive List */}
        <div className="lg:col-span-8 flex flex-col">
            {services.map((service, index) => {
                const isActive = activeService === index;
                const Icon = service.icon;

                return (
                    <div 
                        key={index}
                        onMouseEnter={() => setActiveService(index)}
                        className={`group relative border-b border-white/10 transition-all duration-500 cursor-pointer ${isActive ? 'py-12 opacity-100' : 'py-8 opacity-40 hover:opacity-60'}`}
                        data-hover="true"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6 md:gap-12">
                                <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-accent' : 'text-white/30'}`}>
                                    0{index + 1}
                                </span>
                                <h3 className={`font-display text-4xl md:text-7xl font-bold uppercase transition-all duration-500 ${isActive ? 'text-white translate-x-4' : 'text-white/50 text-outline'}`}>
                                    {service.title}
                                </h3>
                            </div>
                            
                            {/* Animated Icon for Active State */}
                            <motion.div 
                                initial={false}
                                animate={{ 
                                    rotate: isActive ? 90 : 0, 
                                    scale: isActive ? 1 : 0.5,
                                    opacity: isActive ? 1 : 0
                                }}
                                className={`hidden md:block ${service.accent}`}
                            >
                                <Icon size={48} strokeWidth={1.5} />
                            </motion.div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-6 pl-0 md:pl-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                        <p className="text-white/70 text-lg max-w-lg leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent uppercase text-xs font-bold tracking-widest group-hover:gap-4 transition-all">
                                            <span>Explore</span>
                                            <MoveRight size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}