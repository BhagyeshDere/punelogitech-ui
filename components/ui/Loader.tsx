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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* 🔥 GRADIENT BACKGROUND (LIGHT + DARK MIX) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#022c22]" />

          {/* 🔷 GRID */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px]" />

          {/* 🔥 GLOW EFFECT */}
          <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

          {/* 🔥 LOTTIE BACKGROUND */}
          <div className="absolute w-[300px] opacity-20">
            <Lottie animationData={animationData} loop />
          </div>

          <div className="relative w-full max-w-5xl flex items-center justify-center">

            {/* 🏗️ CRANE IMAGE */}
            <img
              src="/images/hero/loader.png"
              className="w-[600px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              alt="crane"
            />

            {/* 🔗 ROPE */}
            <motion.div
              animate={{ height: ["120px", "200px", "120px"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[120px] left-[260px] w-[2px] bg-white origin-top"
            />

            {/* 🪝 HOOK */}
            <motion.div
              animate={{ y: [0, 80, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[240px] left-[252px]"
            >
              <div className="w-6 h-6 border-2 border-orange-500 rounded-full border-t-transparent rotate-45 shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
            </motion.div>

            {/* 📦 LOAD */}
            <motion.div
              animate={{
                y: [0, 80, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[280px] left-[210px]"
            >
              <div className="w-28 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-md shadow-2xl flex items-center justify-center border border-blue-500/30">
                <span className="text-white font-extrabold tracking-widest text-sm">
                  LOAD
                </span>
              </div>
            </motion.div>
          </div>

          {/* 🔥 TEXT */}
          <div className="absolute bottom-20 text-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-3xl md:text-4xl font-extrabold tracking-[0.25em]"
            >
              PUNE <span className="text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">LOGITECH</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-cyan-300 text-xs mt-4 tracking-[0.4em] font-semibold"
            >
              LIFTING IN PROGRESS...
            </motion.p>

            {/* 🔥 PROGRESS BAR */}
            <div className="mt-4 w-48 h-[2px] bg-gray-700 mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}