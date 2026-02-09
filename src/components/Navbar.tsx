"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Expertise", href: "#services" },
    { name: "Selected Work", href: "#projects" },
    { name: "Start Project", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];


  useGSAP(() => {
    gsap.to(".navbar", {
      mixBlendMode: "difference",
      scrollTrigger: {
        trigger: ".pricing-section",
        start: "bottom top",
        end: "+=80px",
        scrub: true,
      }
    })
  })

  return (
    <>
      <nav className="fixed navbar top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white backdrop-blur-md">
        <a
          href="#"
          className="font-display font-bold text-2xl tracking-tighter hover:scale-105 transition-transform"
          data-hover="true"
        >
          Z1.
        </a>

        <div className="hidden md:flex items-center gap-12">
          {navLinks.slice(0, 3).map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium hover:text-accent transition-colors relative group"
                data-hover="true"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 group md:hidden"
            data-hover="true"
          >
            <span className="uppercase text-xs tracking-widest group-hover:text-accent">
              Menu
            </span>
            <Menu size={24} className="group-hover:text-accent" />
          </button>
        </Magnetic>

        <div className="hidden md:flex items-center gap-8">
          <Magnetic>
            <Link
              href="https://calendly.com/lokeshyadv8177/30min"
              target="_blank"
              className="text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors"
              data-hover="true"
            >
              Book a Call
            </Link>
          </Magnetic>
          {/* <Magnetic>
                <a href="#contact" className="px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-all" data-hover="true">
                    Start Project
                </a>
             </Magnetic> */}
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col justify-center items-center px-6"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-4 text-white hover:text-accent transition-colors"
              data-hover="true"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8 w-full max-w-md">
              <div className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white transition-colors duration-500 text-center"
                    data-hover="true"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-6 mt-8 w-full"
                >
                    <Link
                        href="https://calendly.com"
                        className="text-accent text-lg uppercase tracking-widest font-bold hover:text-white transition-colors"
                    >
                        Book a Call
                    </Link>
                    <Link 
                        href="#contact" 
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full text-center px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-black hover:border-accent transition-all"
                    >
                        Start Project
                    </Link>
                </motion.div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
