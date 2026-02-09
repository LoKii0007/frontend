"use client";

import React from "react";
import Magnetic from "./Magnetic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#pricing",
                start: "bottom 95%",
                end: "bottom 35%",
                scrub: true,
            }
        });
        tl.to(".footer-text", {
            y: "35%",
            duration: 2.5,
        })
        tl.to(".footer-text-1", {
            x: "0%",
            opacity: 1,
            duration: 1,
        })

    })

    return (
        <footer
            className="h-screen w-full bg-accent text-black flex flex-col justify-between px-6 pt-24 md:pt-32 pb-8 md:pb-12"
            style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div className="max-w-[90rem] mx-auto w-full h-full flex flex-col justify-between">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                    <div>
                        <h2 className="font-display text-5xl sm:text-7xl md:text-9xl font-bold uppercase leading-[0.8] mb-8 md:mb-12 tracking-tighter">
                            Let's <br /> Create
                        </h2>
                        <div className="flex flex-col gap-2">
                            <p className="font-bold text-sm md:text-xl uppercase tracking-wider">Start a project</p>
                            <a href="mailto:hello@zero1.studio" className="font-display text-2xl sm:text-4xl md:text-5xl font-bold hover:opacity-50 transition-opacity break-words" data-hover="true">
                                hello@zero1.studio
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start md:justify-end items-start md:items-end gap-6 md:gap-8">
                        <div className="flex flex-wrap gap-3 md:gap-4">
                            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                                <Magnetic key={social}>
                                    <a href="#" className="px-4 py-2 md:px-6 md:py-3 border border-black/10 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors" data-hover="true">
                                        {social}
                                    </a>
                                </Magnetic>
                            ))}
                        </div>
                        <div className="text-left md:text-right">
                            <p className="font-bold text-base md:text-lg uppercase">Zero1 Studio</p>
                            <p className="opacity-60 text-sm md:text-base">Design & Engineering</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-end border-t border-black/10 pt-4 md:pt-8 gap-4 md:gap-0">
                    <span className="text-[14vw] flex font-display footer-text font-bold leading-none -mb-2 md:-mb-8 select-none opacity-20 translate-y-full">
                        ZERO <div className="-translate-x-full opacity-0 footer-text-1">1</div>
                    </span>
                    <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-4">
                        <Link href="/privacy" className="hover:underline" data-hover="true">Privacy</Link>
                        <Link href="/legal" className="hover:underline" data-hover="true">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}