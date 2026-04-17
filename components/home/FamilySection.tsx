"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FamilySection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL BACKGROUND OVERLAY */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
        
        {/* ✨ ENHANCED: MORE COMPLEX ANIMATED TECHNICAL LINES */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {/* Top Left Path */}
          <motion.path
            d="M -50 150 L 300 150 L 350 200 L 350 450 L 400 450"
            fill="transparent"
            stroke="#06b6d4"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          {/* Middle Right Path */}
          <motion.path
            d="M 1500 400 L 1200 400 L 1150 350 L 1150 150 L 1050 150"
            fill="transparent"
            stroke="#06b6d4"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
          />

          {/* Bottom Center Complex Path */}
          <motion.path
            d="M 600 1000 L 600 850 L 650 800 L 950 800 L 1000 750 L 1000 550"
            fill="transparent"
            stroke="#06b6d4"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Decorative Terminal Dots for added visibility */}
          {[
            { cx: 400, cy: 450, delay: 2.5 },
            { cx: 1050, cy: 150, delay: 2.8 },
            { cx: 1000, cy: 550, delay: 3.6 },
            { cx: 350, cy: 200, delay: 1.5 },
          ].map((dot, i) => (
            <motion.circle 
              key={i}
              cx={dot.cx} cy={dot.cy} r="3.5" 
              fill="#06b6d4" 
              initial={{ opacity: 0, scale: 0 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ delay: dot.delay, duration: 0.4 }}
            />
          ))}
        </svg>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-50/40 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* 🔥 LEFT CONTENT - 5 Columns */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-cyan-500" />
              <p className="text-cyan-600 tracking-[0.4em] text-[11px] font-black uppercase">Industrial Force</p>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="font-black text-[60px] md:text-[85px] leading-[0.9] text-[#0F172A] tracking-tighter mb-10"
            >
              EXPANDING <br />
              <span className="text-cyan-500">POWER.</span> <br />
              DEFINING <br />
              Reach.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-500 leading-relaxed max-w-xl text-lg md:text-xl font-medium mb-12">
              Engineering solutions built for heavy-duty performance and absolute reliability in the field.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                "Heavy-duty load bearing",
                "Extreme reach capabilities",
                "Advanced operator safety",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 group-hover:text-white" />
                  </div>
                  <span className="text-[15px] md:text-[17px] font-black text-slate-800 tracking-wider uppercase">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 🔥 RIGHT SIDE: MASSIVE DYNAMIC CARDS - 7 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start pt-10 md:pt-0">
            
            {/* CARD 1: FARANA */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-white/50 -z-10" />
              
              <div className="p-10 pt-20 overflow-visible flex flex-col items-center">
                <motion.img
                  src="/images/family/farana1.png"
                  alt="Farana Crane"
                  className="w-full h-auto max-w-[800px] mx-auto relative z-10 drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)] scale-[1.6] group-hover:scale-[1.75] transition-transform duration-700 ease-out"
                />
                <div className="mt-32 w-full relative z-20">
                  <h3 className="font-black text-[45px] md:text-[50px] leading-none text-[#0F172A] mb-2 tracking-tighter">
                    FARANA <span className="text-cyan-500">X10</span>
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs tracking-widest uppercase">
                    <span>Precision Control</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: TELEHANDLER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -15 }}
              className="relative group cursor-pointer md:mt-32"
            >
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-white/50 -z-10" />
              
              <div className="p-10 pt-20 overflow-visible flex flex-col items-center">
                <motion.img
                  src="/images/family/talehandler1.png"
                  alt="Telehandler"
                  className="w-full h-auto max-w-[800px] mx-auto relative z-10 drop-shadow-[0_45px_50px_rgba(0,0,0,0.15)] scale-[1.6] group-hover:scale-[1.75] transition-transform duration-700 ease-out"
                />
                <div className="mt-32 w-full relative z-20">
                  <h3 className="font-black text-[45px] md:text-[50px] leading-none text-[#0F172A] mb-2 tracking-tighter">
                    ULTRA <span className="text-cyan-500">REACH</span>
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-600 font-bold text-xs tracking-widest uppercase">
                    <span>Versatile Handling</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 🔷 HUGE AMBIENT DECOR */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[200px] font-black text-cyan-500/[0.015] pointer-events-none select-none z-0 tracking-[10px]">
        LOGITECH
      </div>
      
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />

    </section>
  );
}