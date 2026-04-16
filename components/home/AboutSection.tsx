"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [particles, setParticles] = useState<{ left: string; top: string; delay: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(6)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.5,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-200 rounded-full opacity-40"
            animate={{
              y: [0, -100, 0],
              x: [0, 30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            style={{ left: p.left, top: p.top }}
          />
        ))}
        
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* 🔥 TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE (ENLARGED) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -60 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="/images/about/img1.png"
              className="w-[320px] md:w-[420px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              alt="vertical lift"
            />

            {/* 🏷️ PERMANENT VERTICAL TAGS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-[20%] -left-6 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border-l-4 border-cyan-400"
            >
              17-ft 4-in working height
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute top-[55%] -left-2 bg-white px-4 py-2 rounded-lg shadow-lg text-[10px] font-bold text-slate-700 border border-slate-200"
            >
              11-ft 4-in platform height
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-32 -right-4 md:right-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-l-4 border-cyan-500 text-sm font-bold text-slate-800"
            >
              ROBUST WORK PLATFORM <span className="text-cyan-600 block text-xs font-medium uppercase mt-1">Hands-free access</span>
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[52px] md:text-[64px] leading-[1] text-[#0F172A] font-extrabold tracking-tighter">
              ADVANCED LIFTING <br />
              <span className="text-cyan-600 italic">SOLUTIONS</span> FOR <br />
              MODERN PROJECTS
            </h2>

            <h3 className="mt-8 text-xl font-bold text-slate-700 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-cyan-500"></span>
              Secure system to minimize risks
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed max-w-xl font-medium text-lg">
              Pune Logitech delivers high-performance lifting solutions designed 
              for safety, efficiency, and precision. Our advanced equipment ensures 
              smooth operations, better reach, and enhanced productivity.
            </p>
          </motion.div>

        </div>

        {/* 🔥 BOTTOM VISUAL SECTION */}
        <div className="relative mt-32">

          {/* ANIMATED BACKGROUND TECH CIRCLES */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-[600px] h-[600px] border border-dashed border-cyan-300/40 rounded-full"
            />
          </div>

          {/* MAIN IMAGE WITH PERMANENT CALLOUT CARDS */}
          <motion.div className="relative z-10 mx-auto w-fit">
            <motion.img
              src="/images/about/img2.png"
              className="w-[550px] object-contain drop-shadow-2xl"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* 🏷️ SPEC CARD: BRAKES */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1 }}
              className="absolute top-[10%] -left-20 bg-white/95 p-4 rounded-xl shadow-xl border border-slate-100 max-w-[180px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="text-[10px] font-black uppercase text-orange-600">Elevation Safety</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 leading-tight">
                Auto-lock brakes engage instantly upon elevation
              </p>
            </motion.div>

            {/* 🏷️ SPEC CARD: PROTECTION */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 1.2 }}
              className="absolute bottom-[40%] -right-20 bg-white/95 p-4 rounded-xl shadow-xl border border-slate-100 max-w-[180px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span className="text-[10px] font-black uppercase text-cyan-600">Operator Shield</span>
              </div>
              <p className="text-[11px] font-bold text-slate-800 leading-tight">
                Vertical rails for enhanced operator protection
              </p>
            </motion.div>
          </motion.div>

          {/* 🔥 FLOATING FEATURE CARDS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute left-[0%] top-[40%] bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white"
          >
            <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600 text-xs font-bold italic">SPEC</div>
            <p className="text-sm font-bold text-slate-800 uppercase tracking-tight">360-degree access</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute right-[-2%] top-[10%] max-w-[220px] bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white"
          >
            <div className="bg-orange-100 p-2 rounded-lg text-orange-600 text-xs font-bold italic">SAFE</div>
            <p className="text-[11px] font-bold text-slate-800 uppercase leading-tight">Secure system to minimize risks</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute right-[5%] bottom-[-10%] max-w-[280px] bg-slate-900 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700"
          >
            <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 text-xs font-bold italic">MOVE</div>
            <p className="text-[11px] font-bold text-white uppercase leading-tight">
              Improved easy-lock casters & better swivel
            </p>
          </motion.div>

        </div>

      </div>

      {/* 🔥 BACKGROUND BIG TEXT */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 left-10 text-[140px] font-black text-cyan-50/50 pointer-events-none select-none z-0 tracking-tighter"
      >
        1230P
      </motion.div>

     

    </section>
  );
}