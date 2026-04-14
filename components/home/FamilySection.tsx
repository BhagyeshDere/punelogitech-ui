"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FamilySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background text
  const textX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  
  // Custom offsets for the "Hidden & Revealed" effect
  const telehandlerY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const faranaY = useTransform(scrollYProgress, [0, 1], [-50, -250]);
  const faranaOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.2, 0.5, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative py-32 md:py-48 bg-[#F8F8F8] overflow-hidden min-h-[900px] flex items-center"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-orange-200/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-8 items-center relative z-10">

        {/* --- LEFT CONTENT (Span 5) --- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative z-30"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-orange-500" />
            <p className="text-orange-600 tracking-[0.5em] text-[10px] md:text-xs font-black uppercase">
              Heavy Equipment Range
            </p>
          </div>

          {/* Changed from italic to normal bold */}
          <h2 className="font-[var(--font-bebas)] text-[70px] md:text-[100px] leading-[0.8] text-black font-bold">
            TELEHANDLER & <br /> 
            <span className="text-orange-500">FARANA CRANE.</span>
          </h2>

          <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-sm font-normal">
            Engineered for <span className="text-black font-bold">precision lifting</span> and material handling. Our fleet offers the perfect balance of flexibility and raw power.
          </p>

          <div className="mt-12 space-y-4">
            {[
              "Extended vertical reach",
              "Compact site maneuverability",
              "Advanced load-sensing tech",
              "Global safety compliance",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
              >
                <span className="text-orange-500 text-xs">●</span>
                <span className="text-[11px] font-black text-gray-800 uppercase tracking-widest">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT: HIDDEN/OVERLAPPING LAYOUT (Span 7) --- */}
        <div className="lg:col-span-7 relative h-[600px] w-full flex items-center">
          
          {/* Card 1: FARANA CRANE (The "Hidden" Background Asset) */}
          <motion.div
            style={{ y: faranaY, opacity: faranaOpacity }}
            className="absolute -top-20 -right-10 md:right-0 w-[80%] md:w-[70%] z-10"
          >
            <div className="relative group grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
              <img
                src="/images/family/farana.png"
                className="w-full h-auto object-contain drop-shadow-2xl"
                alt="Farana Crane"
              />
              <div className="absolute top-1/2 -left-12 -rotate-90">
                <p className="font-[var(--font-bebas)] text-6xl text-black/[0.03] tracking-widest font-bold">INDUSTRIAL</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: TELEHANDLER (The "Hero" Foreground Asset) */}
          <motion.div
            style={{ y: telehandlerY }}
            className="absolute top-40 -left-10 md:-left-20 w-[95%] md:w-[100%] z-20"
          >
            <div className="relative group">
              {/* Massive Image with intense shadow */}
              <img
                src="/images/family/talehandler.png"
                className="w-full h-auto object-contain drop-shadow-[0_80px_100px_rgba(0,0,0,0.3)] group-hover:-translate-y-4 transition-transform duration-700 ease-out"
                alt="Telehandler"
              />
              
              {/* Floating ID Tag */}
              <div className="absolute bottom-10 right-10 bg-black text-white p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md">
                <p className="text-[9px] font-black tracking-[0.3em] text-orange-500 uppercase mb-1">Asset Class</p>
                <h3 className="font-[var(--font-bebas)] text-3xl tracking-wide font-bold">TH-SERIES 2026</h3>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- FOOTER BACKGROUND TEXT --- */}
      <motion.div 
        style={{ x: textX }}
        className="absolute bottom-10 left-0 text-[180px] md:text-[300px] font-[var(--font-bebas)] font-black text-black/[0.02] pointer-events-none select-none whitespace-nowrap"
      >
        TELEHANDLERS • FARANA • MOBILE LIFTS •
      </motion.div>
      
      {/* Industrial Accents */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute bottom-12 left-12 flex items-center gap-6 opacity-20">
         <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black">PL_SEC_004</span>
         <div className="w-24 h-[1px] bg-black" />
      </div>
    </section>
  );
}