"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// 🔥 3D MODEL
const CraneModel = dynamic(() => import("../3d/CraneModel"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-gray-400 font-mono text-xs tracking-widest font-black">
      INITIALIZING SYSTEM...
    </div>
  ),
});

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleReveal = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative pt-20 md:pt-24 pb-12 bg-[#F3F3F3] overflow-hidden min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center px-6 md:px-8 gap-8 md:gap-12 relative z-20">
        
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col justify-center"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500" />
            <p className="text-orange-600 tracking-[0.3em] text-[10px] md:text-xs font-black uppercase">
              Pune Logitech • Engineering Precision
            </p>
          </motion.div>

          {/* Headline - Improved leading to prevent vertical cropping */}
          <div className="overflow-visible">
            <motion.h1
              variants={titleReveal}
              className="font-[var(--font-bebas)] text-[80px] md:text-[130px] lg:text-[145px] leading-[0.85] text-[#1A1A1A] font-black"
            >
              LIFT YOUR
            </motion.h1>
          </div>

          <div className="overflow-visible">
            <motion.h2
              variants={titleReveal}
              className="font-[var(--font-bebas)] text-[40px] md:text-[68px] lg:text-[76px] tracking-[0.05em] md:tracking-[0.1em] text-orange-500 leading-[0.9] font-black"
            >
              BUSINESS HIGHER
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-600 text-base md:text-lg max-w-md leading-snug font-bold"
          >
            Delivering excellence in crane rentals, automation solutions, 
            and advanced safety systems for over a decade.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#EA580C" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-orange-500 text-white rounded-sm font-black text-sm tracking-widest uppercase transition-colors"
            >
              Explore Fleet
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, borderColor: "#000" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-sm font-black text-sm tracking-widest uppercase transition-all"
            >
              Get a Quote
            </motion.button>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="flex gap-10 mt-10 pt-6 border-t border-gray-300"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-black text-black leading-none">12+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black mt-1">Years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-black leading-none">100+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black mt-1">Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black text-black leading-none">60+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-black mt-1">Units</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 🔥 RIGHT SIDE (3D MODEL) */}
        <div className="relative flex justify-center items-center min-h-[400px] md:min-h-[550px]">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[280px] md:w-[420px] h-[280px] md:h-[420px] bg-gradient-to-tr from-orange-400 to-transparent rounded-full blur-[80px]"
          />

          <div className="absolute w-[360px] md:w-[480px] h-[360px] md:h-[480px] border-[1px] border-orange-500/20 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[380px] md:w-[510px] h-[380px] md:h-[510px] border-[1px] border-gray-400/20 rounded-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative z-10 w-full h-[450px] md:h-[600px]"
          >
            <CraneModel />
          </motion.div>
        </div>
      </div>

      {/* Background Watermark - Adjusted size and positioning to prevent edge cropping */}
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-10 select-none pointer-events-none opacity-[0.04] z-10">
        <h2 className="font-[var(--font-bebas)] text-[180px] sm:text-[220px] md:text-[280px] lg:text-[320px] leading-none font-black tracking-tighter">
          PUNE
        </h2>
      </div>
    </section>
  );
}