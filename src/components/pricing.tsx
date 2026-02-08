import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "5k",
      desc: "Essentials for early-stage startups.",
      features: ["Design System", "Landing Page", "Mobile Responsive", "Basic SEO"],
    },
    {
      name: "Growth",
      price: "12k",
      desc: "Scalable solutions for growing brands.",
      features: ["Advanced Animations", "CMS Integration", "Multi-page Site", "Analytics Setup", "Content Strategy"],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Total digital domination.",
      features: ["Full Product Design", "3D/WebGL Experiences", "Custom Development", "24/7 Priority Support", "Dedicated Team"],
    },
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-background p-12 flex flex-col relative group ${plan.highlight ? 'bg-surface' : ''}`}>
               {plan.highlight && (
                   <div className="absolute top-0 right-0 p-4">
                       <div className="w-3 h-3 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4FF00]"></div>
                   </div>
               )}
               
              <div className="mb-12">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-8 h-10">{plan.desc}</p>
                <div className="flex items-baseline">
                    <span className="font-display text-6xl font-bold text-white tracking-tighter">${plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-white/30 ml-2">/ start</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 ${plan.highlight ? 'bg-accent text-black border-accent' : 'bg-transparent text-white hover:bg-white hover:text-black'}`}>
                Start Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}