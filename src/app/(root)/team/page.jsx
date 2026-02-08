"use client";

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Lead Designer",
    initials: "EC",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Senior Developer",
    initials: "JW",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 3,
    name: "Sarah Nguyen",
    role: "Product Manager",
    initials: "SN",
    gradient: "from-purple-400 to-indigo-400",
  },
  {
    id: 4,
    name: "David Kim",
    role: "AI Specialist",
    initials: "DK",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "Frontend Engineer",
    initials: "OM",
    gradient: "from-orange-400 to-amber-400",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Backend Engineer",
    initials: "MC",
    gradient: "from-gray-600 to-gray-800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  },
};

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6 sm:px-8 lg:px-12">
      {/* Minimal Hero Section */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-gray-800"
        >
          Our <span className="text-primary">Team</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
        >
          Simplicity is the ultimate sophistication.
        </motion.p>
      </div>

      {/* Minimal Team Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group bg-white rounded-3xl p-8 flex flex-col items-center justify-center text-center
                       shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] 
                       hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] 
                       transition-all duration-500 border border-gray-50/50 cursor-pointer"
          >
            {/* Minimal Avatar */}
            <div className={`mb-6 p-1 rounded-full bg-linear-to-br ${member.gradient} opacity-90 group-hover:scale-105 transition-transform duration-500`}>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-inner">
                <span className={`bg-linear-to-br ${member.gradient} bg-clip-text text-transparent text-xl font-bold`}>
                  {member.initials}
                </span>
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-gray-800 mb-1 tracking-tight group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest text-[10px]">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamPage;