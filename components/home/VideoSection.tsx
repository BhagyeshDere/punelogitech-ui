"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VideoSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Dynamic parallax and tilt for the larger frame
  const videoY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const videoRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <section 
      ref={containerRef}
      className="relative py-40 bg-[#F3F3F3] overflow-hidden"
    >
      {/* 🏗️ STRUCTURAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-0 w-full h-[1px] bg-orange-500/20" />
        <div className="absolute bottom-[15%] left-0 w-full h-[1px] bg-orange-500/10" />
        <div className="absolute left-[5%] top-0 h-full w-[1px] bg-orange-500/10" />
        
        {/* Animated Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* --- LEFT CONTENT (4 COLUMNS) --- */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-16 h-[2px] bg-orange-600" />
              <p className="text-orange-600 tracking-[0.6em] text-[10px] font-black uppercase">
                Industry Standards
              </p>
            </div>

            {/* Changed from italic to normal bold */}
            <h2 className="font-[var(--font-bebas)] text-[75px] md:text-[110px] leading-[0.8] text-black mb-10 tracking-tighter">
              BEYOND <br /> 
              <span className="text-orange-500">LIMITS.</span>
            </h2>

            <div className="relative pl-10 border-l-4 border-orange-500">
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-normal mb-12">
                Engineering heavy-duty lifting solutions for the world's most 
                challenging environments. Reliability is our core hardware.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Partnered", val: "100+" },
                  { label: "Operators", val: "200+" },
                  { label: "Units", val: "60+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-4xl font-bold text-black font-[var(--font-bebas)]">{stat.val}</p>
                    <p className="text-[9px] text-gray-400 font-black tracking-widest uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 px-10 py-5 bg-black text-white font-black tracking-[0.3em] uppercase text-[11px] flex items-center gap-4 group hover:bg-orange-600 transition-all duration-500"
            >
              System Overview
              <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* --- RIGHT SIDE: ENLARGED VIDEO PORTAL (7 COLUMNS) --- */}
          <motion.div
            style={{ y: videoY, rotate: videoRotate, scale }}
            className="lg:col-span-7 relative group"
          >
            {/* Technical HUD Corner - Top Right */}
            <div className="absolute -top-10 -right-4 z-30 text-right hidden md:block">
              <p className="text-[10px] font-mono text-orange-600 font-bold tracking-widest uppercase mb-2">Ref: PL-CRANE-04</p>
              <div className="flex justify-end gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-[3px] h-[3px] bg-orange-500/40" />
                ))}
              </div>
            </div>

            {/* Enlarged Video Container - Removed border-[12px] and bg-white/50 */}
            <div className="relative z-10 w-full aspect-video md:aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] bg-black">
              
              {/* Internal HUD Overlays */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 opacity-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-white" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-white" />
                </div>
                
                {/* Corner Brackets */}
                <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/30" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/30" />
                
                {/* Scanning Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent h-[10%] w-full animate-[scan_3s_linear_infinite]" />
              </div>

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              >
                <source src="/videos/crane.mp4" type="video/mp4" />
              </video>

              {/* Bottom Telemetry Bar */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 z-30 flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono text-white tracking-[0.2em] font-bold">REC ●</span>
                  </div>
                  <p className="text-white/40 text-[9px] font-mono uppercase tracking-widest">Buffer: 100% // Optimized</p>
                </div>
                <div className="text-right">
                   {/* Ensured normal font weight */}
                   <p className="text-white font-[var(--font-bebas)] text-xl tracking-widest font-bold">LIVE_OPERATIONS</p>
                </div>
              </div>
            </div>

            {/* Visual Depth Glow */}
            <div className="absolute -bottom-10 -left-10 w-full h-full bg-orange-600/10 blur-[80px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </section>
  );
}