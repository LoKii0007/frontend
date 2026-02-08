import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/pricing";

export default function App() {
  return (
    <>
      {/* Main Content Wrapper */}
      <main className="relative z-10 bg-background mb-[100vh]">
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
      </main>

    </>
  );
}