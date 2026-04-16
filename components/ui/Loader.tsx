"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
          className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
        >
          {/* 🔷 BACKGROUND */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative w-full max-w-5xl flex items-center justify-center">

            {/* 🏗️ CRANE IMAGE */}
            <img
              src="/images/hero/loader.png"
              className="w-[600px] object-contain"
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
              animate={{ y: [0, 80, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[240px] left-[252px]"
            >
              <div className="w-6 h-6 border-2 border-orange-500 rounded-full border-t-transparent rotate-45" />
            </motion.div>

            {/* 📦 LOAD */}
            <motion.div
              animate={{
                y: [0, 80, 0],
                rotate: [-2, 2, -2], // realistic swing
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[280px] left-[210px]"
            >
              <div className="w-28 h-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-md shadow-2xl flex items-center justify-center">
                <span className="text-white font-bold tracking-widest">
                  LOAD
                </span>
              </div>
            </motion.div>
          </div>

          {/* 🔥 TEXT */}
          <div className="absolute bottom-20 text-center">
            <h1 className="text-white text-2xl font-black tracking-[0.3em]">
              PUNE <span className="text-cyan-400">LOGITECH</span>
            </h1>
            <p className="text-cyan-400 text-xs mt-3 tracking-[0.4em]">
              LIFTING IN PROGRESS...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}