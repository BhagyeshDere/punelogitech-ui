"use client";

import { motion } from "framer-motion";

const industries = [
  "Construction & Infrastructure Projects",
  "Industrial Plant & Machinery Handling",
  "Warehousing & Logistics Operations",
  "Oil, Gas & Energy Sector",
  "Factory Maintenance & Installation",
  "Heavy Equipment Transportation",
  "Custom Industrial Solutions",
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-[#F8F8F8] relative overflow-hidden">
      
      {/* 🧩 BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/[0.02] -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-none overflow-hidden bg-[#050505] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]"
        >
          {/* 🟠 ORANGE GRADIENT LAYER - Reduced Intensity */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/15 blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-900/10 blur-[100px] -ml-24 -mb-24" />
          
          {/* 🏁 TEXTURE */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          <div className="relative px-8 md:px-14 py-20 grid lg:grid-cols-12 gap-12 items-center">

            {/* --- LEFT PANEL --- */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-orange-500" />
                <p className="text-orange-500 tracking-[0.4em] text-[10px] font-black uppercase">
                  Industries We Serve
                </p>
              </div>

              <h2 className="font-[var(--font-bebas)] text-[50px] md:text-[70px] leading-[0.9] text-white font-bold">
                POWERING HEAVY <br /> 
                <span className="text-orange-500">INDUSTRIES</span> <br /> 
                WITH PRECISION
              </h2>

              <p className="mt-6 text-gray-400 text-base leading-relaxed font-normal max-w-sm">
                Pune Logitech delivers advanced crane rental and material handling 
                solutions tailored for diverse industries. Our equipment ensures safety and efficiency.
              </p>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#f97316", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-10 py-4 border border-orange-500 rounded-none text-white text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
              >
                Explore Services
              </motion.button>
            </div>

            {/* --- RIGHT PANEL --- */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {industries.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 group cursor-default"
                >
                  <div className="w-[2px] h-5 bg-orange-500 mt-1.5 group-hover:h-7 group-hover:bg-white transition-all duration-300 shadow-[0_0_8px_#f97316]" />
                  <p className="text-sm md:text-[15px] font-bold text-white/70 group-hover:text-white transition-colors leading-snug">
                    {item}
                  </p>
                </motion.div>
              ))}
              
              {/* Extra Accent */}
              <div className="pt-8 border-t border-white/5 sm:col-span-2 mt-4">
                <p className="text-[9px] text-gray-600 font-mono tracking-[0.3em] uppercase font-bold">
                  Logitech Operational Standards 2026 // SEC_IND_04
                </p>
              </div>
            </div>

          </div>

          {/* 🎨 WATERMARK - Scaled down */}
          <div className="absolute bottom-4 right-8 font-[var(--font-bebas)] text-[90px] text-white/[0.02] pointer-events-none select-none font-bold">
            LOGITECH
          </div>
        </motion.div>

      </div>
    </section>
  );
}