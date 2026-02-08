import React from "react";
import Magnetic from "./Magnetic";

export default function Footer() {
  return (
    <footer 
        className="h-screen w-full bg-accent text-black flex flex-col justify-between px-6 pt-32 pb-12"
        style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="max-w-[90rem] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
                <h2 className="font-display text-6xl md:text-9xl font-bold uppercase leading-[0.8] mb-12 tracking-tighter">
                    Let's <br/> Create
                </h2>
                <div className="flex flex-col gap-2">
                     <p className="font-bold text-xl uppercase tracking-wider">Start a project</p>
                    <a href="mailto:hello@zero1.studio" className="font-display text-4xl md:text-5xl font-bold hover:opacity-50 transition-opacity" data-hover="true">
                        hello@zero1.studio
                    </a>
                </div>
            </div>
            
            <div className="flex flex-col justify-end items-start md:items-end gap-8">
                <div className="flex gap-4">
                    {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                        <Magnetic key={social}>
                            <a href="#" className="px-6 py-3 border border-black/10 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors" data-hover="true">
                                {social}
                            </a>
                        </Magnetic>
                    ))}
                </div>
                <div className="text-right">
                    <p className="font-bold text-lg uppercase">Zero1 Studio</p>
                    <p className="opacity-60">Design & Engineering</p>
                </div>
            </div>
        </div>
        
        <div className="flex justify-between items-end border-t border-black/10 pt-8">
            <span className="text-[14vw] font-display font-bold leading-none -mb-8 select-none opacity-20">
                ZERO1
            </span>
            <div className="flex gap-8 text-sm font-bold uppercase tracking-widest mb-4">
                <a href="#" className="hover:underline" data-hover="true">Privacy</a>
                <a href="#" className="hover:underline" data-hover="true">Legal</a>
            </div>
        </div>
      </div>
    </footer>
  );
}