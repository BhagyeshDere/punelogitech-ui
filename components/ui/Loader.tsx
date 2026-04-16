"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AdvancedLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sync progress bar with the 4s timer
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 35);

    const timer = setTimeout(() => setLoading(false), 4200);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden font-mono"
        >
          {/* 🌌 DYNAMIC TECH BACKGROUND */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:60px_60px]" />
            {/* Moving Scanline */}
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-full h-[30vh] bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* 💠 THE CORE ENGINE (SVG) */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer Rotating Hexagon HUD */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                viewBox="0 0 100 100"
                className="absolute w-full h-full opacity-20"
              >
                <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cyan-500" strokeDasharray="4 4" />
              </motion.svg>

              {/* Reactive Pulsing Rings */}
              <motion.div
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-48 h-48 border border-cyan-500/50 rounded-full"
              />

              {/* Inner Mechanical Core */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-2 border-t-orange-500 border-b-cyan-500 border-l-transparent border-r-transparent rounded-full shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                />
                
                {/* Percentage Counter */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span 
                    className="text-4xl font-black text-white tracking-tighter"
                  >
                    {progress}%
                  </motion.span>
                  <span className="text-[8px] text-cyan-400 tracking-[0.3em] uppercase opacity-70">
                    System_Load
                  </span>
                </div>
              </div>
            </div>

            {/* 🏷️ BRANDING SECTION */}
            <div className="mt-8 relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-white text-3xl font-black tracking-[0.4em] uppercase flex items-center gap-4">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500" />
                  PUNE <span className="text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]">LOGITECH</span>
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500" />
                </h1>
                
                <div className="mt-4 flex gap-2">
                   {/* Realistic Progress Bar */}
                   <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                      />
                   </div>
                </div>

                <div className="mt-6 h-5 flex flex-col items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={progress < 50 ? "init" : "safety"}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      className="text-[10px] text-orange-400/80 tracking-[.5em] uppercase font-bold"
                    >
                      {progress < 50 ? "Initializing Hydraulics..." : "Safety Protocols Verified"}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 📟 CORNER TELEMETRY DATA */}
          <div className="absolute top-10 left-10 text-[9px] text-cyan-500/40 space-y-1 hidden lg:block">
            <p>LAT: 18.5204° N</p>
            <p>LONG: 73.8567° E</p>
            <p>UNIT_STATE: ACTIVE</p>
          </div>

          <div className="absolute bottom-10 right-10 text-right text-[9px] text-cyan-500/40 space-y-1 hidden lg:block">
            <p>MODEL: JLG 1230P // GEN 2</p>
            <p>FIRMWARE: V.2.0.26_STABLE</p>
            <p>© 2026 PUNE LOGITECH CORP</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}