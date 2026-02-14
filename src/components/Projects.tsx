"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";

const projects = [
  {
    title: "Enipp",
    category: "Web Development / WebXR",
    year: "2024",
    image: "/images/enipp.png",
    link: "https://enipp.com",
    color: "from-fuchsia-500/20 to-pink-500/20",
  },
  {
    title: "Friends Of The Future",
    category: "Web Development",
    year: "2024",
    image: "/images/fotf.png",
    link: "https://fotf-frontend.vercel.app",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Promptboard",
    category: "Saas / AI",
    year: "2026",
    image: "/images/promptboard.png",
    link: "https://promptboard.lok1.dev",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "ELF31",
    category: "Web Development",
    year: "2025",
    image: "/images/elf31.png",
    link: "https://www.elf31.com/",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    title: "Muse Ink",
    category: "Web Development",
    year: "2025",
    image: "/images/museink.png",
    link: "https://muse-landing-page-next.vercel.app/",
    color: "from-red-500/20 to-orange-500/20",
  },
];

// Duplicate projects for infinite loop
const allProjects = [...projects, ...projects, ...projects];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-background overflow-hidden relative"
    >
      <div className="px-6 max-w-[90rem] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="font-display text-5xl md:text-8xl font-bold uppercase text-white leading-[0.8]">
          Selected <br />
          <span className="text-outline-accent">Works</span>
        </h2>
        <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest pb-2">
          Drag to explore or hover to pause.
        </p>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block"></div>

        <motion.div
          className="flex gap-8 w-max px-6"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ cursor: "grab" }}
          whileTap={{ cursor: "grabbing" }}
        >
          {allProjects.map((project, i) => (
            <motion.a
              href={project?.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              className="group relative w-[80vw] md:w-[40vw] lg:w-[30vw] aspect-[4/5] md:aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden bg-white/5 border border-white/10"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

              <div className="absolute inset-0 md:p-8 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                  <span className="px-3 py-1 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-xs uppercase tracking-widest text-white">
                    {project.year}
                  </span>
                  <Magnetic>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent transition-colors">
                      <ArrowUpRight size={20} />
                    </div>
                  </Magnetic>
                </div>

                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-xs font-mono mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white uppercase leading-none mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
