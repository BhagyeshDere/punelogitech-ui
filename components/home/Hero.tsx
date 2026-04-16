"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // ⚡ STATE TO TRACK IF LOADER IS FINISHED
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Matches your loader duration (4000ms) 
    const timer = setTimeout(() => setIsReady(true), 4100);
    return () => clearTimeout(timer);
  }, []);

  const fadeInDown = {
    hidden: { opacity: 0, y: -30 }, // Reduced distance for faster feel
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } // Reduced from 0.8 to 0.5
    }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, // Reduced from 0.2 to 0.1 for faster sequence
        delayChildren: 0.05   // Reduced from 0.1 to 0.05
      } 
    }
  } as const;

  return (
    <section className="relative pt-24 md:pt-32 pb-20 bg-[#F5F7FA] overflow-hidden min-h-[90vh] flex items-center">
      
      {/* 🧩 BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25]"
          style={{ backgroundImage: `url('/images/hero/bg-pattern.jpg')` }} 
        />

        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-right bg-no-repeat opacity-[0.18] mix-blend-multiply"
          style={{ backgroundImage: `url('/images/hero/background.png')` }} 
        />
        
        <div 
          className="absolute inset-0 opacity-[0.06]" 
          style={{ 
            backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
        
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[120px]" 
        />
      </div>

      {/* 🛠️ THE FIX: Using 'key={isReady}' forces the entire grid to re-animate when isReady becomes true */}
      <motion.div 
        key={isReady ? "ready" : "loading"}
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-[1440px] mx-auto grid md:grid-cols-2 items-center px-8 md:px-12 lg:px-16 relative z-10"
      >
        
        {/* 🔥 LEFT CONTENT */}
        <div className="flex flex-col justify-center">
          <motion.div variants={fadeInDown} className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-cyan-500" />
            <p className="text-cyan-600 tracking-[0.4em] text-[10px] md:text-xs font-black uppercase">
              Pune Logitech • Premium Equipment
            </p>
          </motion.div>

          <motion.h1 
            variants={fadeInDown}
            className="font-[var(--font-bebas)] text-[80px] md:text-[110px] lg:text-[130px] leading-[0.8] text-[#0F172A] font-black"
          >
            REACH NEW
          </motion.h1>

          <motion.h2 
            variants={fadeInDown}
            className="font-[var(--font-bebas)] text-[40px] md:text-[60px] lg:text-[70px] tracking-[8px] md:tracking-[12px] text-cyan-500 leading-none mt-2"
          >
            POSSIBILITIES
          </motion.h2>

          <motion.p 
            variants={fadeInDown}
            className="mt-8 text-gray-500 text-base md:text-lg max-w-md leading-relaxed font-medium"
          >
            Delivering excellence in crane rentals, material handling, 
            and engineering solutions for over <span className="text-cyan-600 font-bold">12 years</span>.
          </motion.p>

          <motion.div variants={fadeInDown} className="mt-10">
            <button className="group relative px-10 py-4 overflow-hidden border-2 border-cyan-500 rounded-full font-black text-xs tracking-widest text-cyan-600 transition-all duration-300 hover:text-white">
              <span className="absolute inset-0 bg-cyan-500 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10">VIEW INVENTORY</span>
            </button>
          </motion.div>
        </div>

        {/* 🔥 RIGHT SIDE: EQUIPMENT */}
        <div className="relative flex justify-center lg:justify-end items-center lg:-mr-24"> 
          <motion.div 
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 20, opacity: 1, transition: { delay: 0.3, duration: 0.6 } } // Reduced duration
            }}
            className="absolute top-0 right-10 z-30 bg-white/60 backdrop-blur-md p-4 border border-white/40 rounded-2xl shadow-xl hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-black text-slate-800 tracking-wider uppercase">Units Available Now</p>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 150 }, // Reduced distance from 200
              visible: { opacity: 1, x: 60, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } // Reduced from 1.2
            }}
            className="relative z-10" 
          >
            <img
              src="/images/hero/hero.png"
              alt="Heavy Equipment"
              className="w-[400px] md:w-[600px] lg:w-[900px] max-w-none object-contain drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* 🧩 DECORATIVE BACKGROUND TEXT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 1.0 }} // Reduced delay and duration
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-10 select-none pointer-events-none z-0"
      >
        <h2 className="font-[var(--font-bebas)] text-[200px] lg:text-[350px] leading-none font-black text-slate-900">
          PUNE
        </h2>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F5F7FA] via-[#F5F7FA]/80 to-transparent z-20 pointer-events-none" />
    </section>
  );
}