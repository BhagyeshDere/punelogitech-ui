"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const [particles, setParticles] = useState<{ left: string; top: string; delay: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(10)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.3,
    }));
    setParticles(generated);
  }, []);

  return (
    <section className="relative pt-12 pb-24 bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* 🧩 ENHANCED DYNAMIC BACKGROUND: CENTRALIZED NESTED CIRCLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* THEMATIC BLUISH GRADIENTS */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 80% 80%, #E0F2FE 0%, transparent 40%), 
                         radial-gradient(circle at 20% 20%, #ECFEFF 0%, transparent 40%)`
          }}
        />
        
        {/* Soft Glow Blobs */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-200/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full" />

        {/* --- CENTRALIZED NESTED CIRCLES (BIG TO SMALL) - REDUCED SIZE --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          {/* Sizes reduced: 1400->1100, 1100->850, 800->650, 500->450, 250->250 */}
          {[1100, 850, 650, 450, 250].map((size, i) => (
            <motion.div
              key={`nested-circle-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.1,
                ease: "easeOut" 
              }}
              className="absolute border-[2px] border-cyan-600/30 rounded-full shadow-[0_0_50px_rgba(8,145,178,0.1)]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <motion.div 
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="w-full h-full rounded-full border border-blue-500/20"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* 🔥 TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-0">
          
          {/* IMAGE 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start pt-10"
          >
            <img
              src="/images/about/img3.png"
              className="w-full max-w-[550px] md:max-w-[600px] xl:max-w-[650px] object-contain drop-shadow-2xl z-10 scale-105 origin-left"
              alt="Vertical Lift Main View"
            />

            {/* Spec Cards - Image 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-[10%] -left-8 bg-[#131B2E] text-white px-6 py-4 rounded-lg shadow-2xl text-[12px] font-black uppercase tracking-widest border-l-4 border-[#00B4D8] z-20"
            >
              Max Reach: 17-ft 4-in
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-[40%] -right-4 bg-white p-5 rounded-xl shadow-2xl border border-slate-100 max-w-[160px] z-20 hidden md:block"
            >
              <p className="text-[10px] font-black text-[#00B4D8] uppercase mb-1">Precision</p>
              <p className="text-[12px] font-bold text-slate-700 leading-tight">Proportional joystick controls</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-[70%] -right-8 bg-[#F8FAFC] p-4 rounded-lg shadow-xl border-t-4 border-blue-500 z-20 hidden xl:block"
            >
              <p className="text-[10px] font-black text-slate-400 uppercase">Load Cap.</p>
              <p className="text-[14px] font-bold text-[#131B2E]">500 lbs (227 kg)</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-[10%] -left-4 bg-white text-slate-800 px-5 py-4 rounded-lg shadow-xl text-[11px] font-black uppercase tracking-widest border border-slate-200 z-20"
            >
              11-ft 4-in platform height
            </motion.div>
          </motion.div>

          {/* TEXT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-16 lg:pl-16"
          >
            <p className="text-[#00B4D8] font-black tracking-[0.2em] uppercase text-sm mb-4">Fleet Dominance</p>
            <h2 className="text-[54px] md:text-[80px] leading-[0.85] text-[#131B2E] font-[1000] tracking-tighter uppercase mb-8">
              Advanced <br /> 
              <span className="text-[#00B4D8]">Lifting</span> <br /> 
              Units
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-[4px] bg-[#00B4D8]"></span>
              <h3 className="text-2xl font-black text-[#131B2E] uppercase tracking-tight">
                Engineering Safety
              </h3>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-lg font-medium text-lg mb-8">
              Pune Logitech provides massive-scale access solutions. Our engineering-first 
              approach ensures smooth operations in the most challenging environments.
            </p>
          </motion.div>
        </div>

        {/* 🔥 SECOND IMAGE SECTION */}
        <div className="flex justify-center lg:justify-end -mt-48 md:-mt-80 lg:pr-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-[450px] lg:max-w-[500px]"
          >
            <img
              src="/images/about/img1.png"
              className="w-full object-contain drop-shadow-2xl z-10"
              alt="Technical Detail"
            />

            {/* Spec Cards - Image 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute top-[5%] -left-12 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[180px] z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-[#00B4D8] rounded-full shadow-[0_0_8px_#00B4D8]" />
                <span className="text-[10px] font-black uppercase text-[#0077B6]">Auto-Brake</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#131B2E] leading-tight">
                Locks engage instantly upon lift activation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute top-[40%] -right-10 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[180px] z-20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                <span className="text-[10px] font-black uppercase text-blue-600">Stability</span>
              </div>
              <p className="text-[12px] font-extrabold text-[#131B2E] leading-tight">
                Vertical rails for enhanced operator protection.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#131B2E] p-6 rounded-2xl shadow-2xl min-w-[320px] z-20 border-b-4 border-[#00B4D8]"
            >
              <p className="text-[10px] font-black text-[#00B4D8] uppercase tracking-widest mb-1 text-center">Maneuverability</p>
              <p className="text-[13px] font-bold text-white leading-tight text-center">
                Improved easy-lock casters and precision swivel system.
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* 🔥 MASSIVE BACKGROUND DECORATION */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute bottom-[-5%] right-[-5%] pointer-events-none select-none z-0"
      >
        <h1 className="text-[280px] font-[1000] text-[#131B2E] tracking-tighter leading-none">
          PUNE
        </h1>
      </motion.div>

    </section>
  );
}