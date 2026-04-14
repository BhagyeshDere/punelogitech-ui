"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FeatureSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the background text
  const textX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-32 bg-[#F3F3F3] overflow-hidden"
    >
      {/* 🏗️ ORANGE LINE DESIGN ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main Diagonal Accent Line */}
        <motion.div 
          style={{ scaleX: scrollYProgress }}
          className="absolute top-[20%] -left-[10%] w-[120%] h-[1px] bg-orange-500/20 -rotate-12 origin-left"
        />
        
        {/* Vertical Engineering Lines */}
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/10 to-transparent" />
        <div className="absolute top-0 left-[15.5%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

        {/* Diagonal Stripe Pattern (Bottom Right) */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-[0.03]">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className="h-4 w-full bg-orange-600 mb-4 -rotate-45" 
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* --- TOP SECTION: BOOM LIFTS --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* 🔥 LEFT: INTERACTIVE IMAGE PORTAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group lg:-ml-20"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-orange-400 blur-[120px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            <motion.img
              src="/images/feature/boomlift.png"
              className="relative z-10 w-full max-w-[550px] md:max-w-[750px] mx-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              alt="Boomlift"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute top-10 md:left-10 bg-white/80 backdrop-blur-md border border-gray-200 p-4 rounded-lg shadow-xl z-20 hidden md:block"
            >
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Max Reach</p>
              <p className="text-xl font-[var(--font-bebas)] text-black font-bold">180 FEET</p>
            </motion.div>
          </motion.div>

          {/* 🔥 RIGHT: TYPOGRAPHY & SPECS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-orange-500" />
              <p className="text-orange-500 tracking-[0.4em] text-[10px] md:text-xs font-black uppercase">
                High Access Solutions
              </p>
            </div>

            {/* Removed italic, kept Bebas Bold */}
            <h2 className="font-[var(--font-bebas)] text-[60px] md:text-[85px] leading-[0.9] text-black font-bold">
              BOOM LIFTS & <span className="text-orange-500">CRANES.</span>
            </h2>

            <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-xl font-normal">
              Delivering <span className="text-black font-bold">unrivaled verticality</span> for the most complex industrial environments. Our fleet is maintained to global safety standards.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "High reach & flexibility",
                "Safe operator controls",
                "Heavy-duty lifting",
                "Precision Engineering"
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-5 h-5 rounded-full border border-orange-500 flex items-center justify-center text-[10px] text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    ✓
                  </span>
                  <span className="text-sm font-bold text-gray-700 uppercase tracking-tighter">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: THE HUB --- */}
        <div className="relative mt-48 py-20">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] border-[0.5px] border-orange-500/20 rounded-full border-dashed"
            />
          </div>

          <motion.img
            src="/images/feature/crane.png"
            className="relative z-10 mx-auto w-full max-w-[850px] object-contain drop-shadow-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            alt="Crane"
          />

          <motion.div
            {...cardVariants}
            className="absolute left-4 top-[10%] md:left-[10%] md:top-[20%] z-20 bg-white/70 backdrop-blur-xl px-6 py-4 rounded-lg border border-white shadow-2xl flex items-center gap-4"
          >
            <div className="p-2 bg-orange-500 rounded text-white font-bold text-xs">01</div>
            <div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Capability</p>
              <p className="text-sm font-black text-black uppercase">Heavy Load Capacity</p>
            </div>
          </motion.div>

          <motion.div
            {...cardVariants}
            transition={{ delay: 0.2 }}
            className="absolute right-4 top-[30%] md:right-[12%] md:top-[40%] z-20 bg-black/90 px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 text-white"
          >
            <div className="p-2 bg-orange-500 rounded text-white font-bold text-xs">02</div>
            <div>
              <p className="text-[9px] font-bold text-orange-400 uppercase tracking-widest">Protocol</p>
              <p className="text-sm font-black uppercase">Advanced Safety</p>
            </div>
          </motion.div>

          <motion.div
            {...cardVariants}
            transition={{ delay: 0.4 }}
            className="absolute right-8 bottom-0 md:right-[5%] md:bottom-[5%] z-20 bg-white px-6 py-4 rounded-lg shadow-2xl border border-gray-100 hidden md:flex items-center gap-4"
          >
            <div className="p-2 bg-orange-500 rounded text-white font-bold text-xs">03</div>
            <p className="text-sm font-black text-black uppercase tracking-tight">Industrial Versatility</p>
          </motion.div>
        </div>
      </div>

      {/* --- BACKGROUND ELEMENTS --- */}
      <motion.div 
        style={{ x: textX }}
        className="absolute bottom-10 left-0 text-[180px] md:text-[250px] font-[var(--font-bebas)] font-black text-orange-500/5 pointer-events-none select-none whitespace-nowrap"
      >
        HEAVY DUTY FLEET • CRANES • LIFTS •
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>
    </section>
  );
}