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
          {/* 1. ANIMATED MESH GRADIENT & FLOATING CIRCLES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main Mesh Gradients */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-cyan-100/40 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -60, 0],
                y: [0, -40, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-100/50 blur-[100px]"
            />

            {/* --- ADVANCED ANIMATED CIRCLES --- */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.2, 1],
                  x: i % 2 === 0 ? [-20, 20, -20] : [20, -20, 20],
                  y: i < 2 ? [-30, 30, -30] : [30, -30, 30]
                }}
                transition={{ 
                  duration: 6 + i, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: i * 0.5 
                }}
                className={`absolute rounded-full border border-cyan-200/50 ${
                  i === 0 ? 'w-[400px] h-[400px] top-1/4 left-1/4' :
                  i === 1 ? 'w-[300px] h-[300px] bottom-1/4 right-1/3' :
                  i === 2 ? 'w-[500px] h-[500px] -top-20 -right-20' :
                  'w-[250px] h-[250px] top-1/2 left-1/3'
                }`}
                style={{ mixBlendMode: 'multiply' }}
              />
            ))}
          </div>

          {/* 2. DYNAMIC GEOMETRIC GRID */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#0891b2 1.5px, transparent 1.5px), linear-gradient(90deg, #0891b2 1.5px, transparent 1.5px)`,
              backgroundSize: '50px 50px',
            }}
          >
            {/* Animated Scanning Line */}
            <motion.div 
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-[150px] bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent"
            />
          </motion.div>

          {/* 3. LOTTIE DECORATION */}
          <div className="absolute w-[400px] opacity-[0.03] pointer-events-none">
            <Lottie animationData={animationData} loop />
          </div>

          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {/* 🏗️ CRANE IMAGE */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src="/images/hero/loader1.png"
              className="w-[600px] object-contain relative z-10 drop-shadow-[0_25px_40px_rgba(15,23,42,0.15)]"
              alt="crane"
            />

            {/* 🔗 ROPE */}
            <motion.div
              animate={{ height: ["120px", "200px", "120px"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[120px] left-[260px] w-[2px] bg-slate-300 origin-top shadow-[0_0_8px_white]"
            />

            {/* 🪝 HOOK */}
            <motion.div
              animate={{ y: [0, 80, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[240px] left-[252px]"
            >
              <div className="w-6 h-6 border-2 border-slate-800 rounded-full border-t-transparent rotate-45" />
            </motion.div>

            {/* 📦 LOAD */}
            <motion.div
              animate={{ y: [0, 80, 0], rotate: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[280px] left-[210px]"
            >
              <div className="w-28 h-20 bg-gradient-to-br from-slate-800 to-slate-950 rounded-md shadow-2xl flex items-center justify-center border border-white/20">
                <span className="text-white font-extrabold tracking-widest text-sm">LOAD</span>
              </div>
            </motion.div>
          </div>

          {/* 🏷️ BRAND TEXT & PROGRESS */}
          <div className="absolute bottom-20 text-center z-20">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-slate-900 text-4xl md:text-5xl font-[1000] tracking-[-0.02em] uppercase"
            >
              PUNE <span className="text-cyan-600">LOGITECH</span>
            </motion.h1>

            <div className="flex flex-col items-center mt-6">
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-slate-500 text-xs tracking-[0.5em] font-black uppercase mb-4"
              >
                Lifting In Progress
              </motion.p>

              {/* PROGRESS BAR */}
              <div className="w-56 h-[4px] bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 shadow-[0_0_10px_rgba(8,145,178,0.5)]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}