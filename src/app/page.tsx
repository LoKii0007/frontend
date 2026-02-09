"use client";

import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/pricing";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function App() {

  // ------------------------------------
  // lenis smooth scroll
  // ------------------------------------

  useEffect(() => {

    const lenis = new Lenis();

    lenis.on("scroll", () => { });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);


  return (
    <>
      {/* Main Content Wrapper */}
      <main className="relative z-10 bg-background mb-[calc(100vh-80px)] md:mb-[calc(100vh-96px)]">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
      </main>

    </>
  );
}