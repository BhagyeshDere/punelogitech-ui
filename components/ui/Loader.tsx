"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/animations/crane-loader.json";

export default function CraneLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#f8fafc]"
        >
          {/* 1. ANIMATED MESH GRADIENT & CENTRALIZED NESTED CIRCLES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main Mesh Gradients */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-300/60 blur-[120px] mix-blend-multiply"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -60, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-300/50 blur-[100px] mix-blend-multiply"
            />

            {/* --- CENTRALIZED NESTED CIRCLES (BIG TO SMALL) - IMPROVED DARK VISIBILITY --- */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
              {[800, 600, 400, 200].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.4, 0.8, 0.4], // Higher opacity for more "weight"
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.4 
                  }}
                  // Increased border to 3px and used a darker cyan-600/40
                  className="absolute rounded-full border-[3px] border-cyan-600/40 shadow-[0_0_40px_rgba(8,145,178,0.25)]"
                  style={{ 
                    width: `${size}px`, 
                    height: `${size}px`,
                    mixBlendMode: 'normal' 
                  }}
                />
              ))}
            </div>
          </div>

          {/* 2. DYNAMIC GEOMETRIC GRID */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }} 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#0891b2 2px, transparent 2px), linear-gradient(90deg, #0891b2 2px, transparent 2px)`,
              backgroundSize: '50px 50px',
            }}
          >
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-[180px] bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent border-t-2 border-cyan-500/50 shadow-[0_-10px_20px_rgba(6,182,212,0.2)]"
            />
          </motion.div>

          {/* 3. LOTTIE DECORATION */}
          <div className="absolute w-[400px] opacity-[0.08] pointer-events-none">
            <Lottie animationData={animationData} loop />
          </div>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {/* 🏗️ CRANE IMAGE */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="/images/hero/loader1.png"
              className="w-[600px] object-contain relative z-10 drop-shadow-[0_35px_50px_rgba(15,23,42,0.2)]"
              alt="crane"
            />

            {/* 🔗 ROPE */}
            <motion.div
              animate={{ height: ["120px", "200px", "120px"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[120px] left-[260px] w-[2px] bg-slate-500 origin-top shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />

            {/* 🪝 HOOK */}
            <motion.div
              animate={{ y: [0, 80, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[240px] left-[252px]"
            >
              <div className="w-6 h-6 border-2 border-slate-900 rounded-full border-t-transparent rotate-45" />
            </motion.div>

            {/* 📦 LOAD */}
            <motion.div
              animate={{ y: [0, 80, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[280px] left-[210px]"
            >
              <div className="w-28 h-20 bg-gradient-to-br from-slate-800 to-slate-950 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center border border-white/20">
                <span className="text-white font-extrabold tracking-widest text-sm">LOAD</span>
              </div>
            </motion.div>
          </div>

          {/* 🏷️ BRAND TEXT & PROGRESS */}
          <div className="absolute bottom-20 text-center z-20">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-950 text-4xl md:text-5xl font-[1000] tracking-[-0.02em] uppercase"
            >
              PUNE <span className="text-cyan-600">LOGITECH</span>
            </motion.h1>

            <div className="flex flex-col items-center mt-6">
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-slate-600 text-xs tracking-[0.5em] font-black uppercase mb-4"
              >
                Lifting In Progress
              </motion.p>

              {/* PROGRESS BAR */}
              <div className="w-56 h-[5px] bg-slate-200 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}