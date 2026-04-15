"use client";

import { motion } from "framer-motion";
import { Calendar, TrendingUp, Anchor, ShieldCheck, ArrowRight } from "lucide-react";

export default function StatsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* 🧩 BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* 🔥 HEADING SECTION */}
        <div className="flex flex-col items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[1px] bg-cyan-500" />
            <p className="text-cyan-600 tracking-[0.4em] text-[10px] font-black uppercase">Performance Metrics</p>
            <span className="w-8 h-[1px] bg-cyan-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center font-black text-[50px] md:text-[75px] leading-[0.9] text-slate-900 tracking-tighter"
          >
            A LEGACY OF <span className="text-cyan-500">PRECISION.</span>
          </motion.h2>
        </div>

        {/* 🔥 BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
        >

          {/* 🔥 01. TALL IMPACT CARD */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-900 rounded-[2rem] p-10 md:row-span-2 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-slate-200"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Anchor size={120} className="text-cyan-400" />
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <ShieldCheck className="text-cyan-400 w-7 h-7" />
            </div>

            <div className="relative z-10">
              {/* UPDATED FONT */}
              <h3 className="text-white font-black text-[52px] md:text-[64px] leading-[0.9] mb-4 tracking-tighter">
                500<span className="text-cyan-500">+</span> <br /> PROJECTS
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
                High-stakes crane operations executed with zero-compromise safety standards across pan-India sites.
              </p>
            </div>
          </motion.div>

          {/* 🔥 02. EXPERIENCE CARD */}
          <motion.div 
            variants={itemVariants}
            className="bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-cyan-500/30 transition-colors duration-500"
          >
            <div className="flex justify-between items-start">
              {/* UPDATED FONT */}
              <h3 className="text-slate-900 font-black text-[42px] leading-[0.9] tracking-tighter">
                10<span className="text-cyan-500">+</span> <br /> YEARS
              </h3>
              <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-cyan-50 transition-colors">
                <Calendar size={24} className="text-cyan-600" />
              </div>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Industry Expertise</p>
          </motion.div>

          {/* 🔥 03. TOP RIGHT IMAGE */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/images/stats/img2.png"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              alt="Industrial Site"
            />
          </motion.div>

          {/* 🔥 04. BOTTOM LEFT IMAGE */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src="/images/stats/img1.png"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              alt="Logitech Crane"
            />
          </motion.div>

          {/* 🔥 05. CLIENTS CARD */}
          <motion.div 
            variants={itemVariants}
            className="bg-white border border-slate-100 rounded-[2rem] p-8 flex items-center gap-6 group hover:shadow-xl hover:shadow-slate-200/50 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
              <TrendingUp className="text-white w-8 h-8" />
            </div>
            <div>
              {/* UPDATED FONT */}
              <h3 className="text-slate-900 font-black text-[42px] leading-[0.9] tracking-tighter">
                100<span className="text-cyan-500">+</span> <br /> CLIENTS
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Trusted Partners Worldwide</p>
            </div>
          </motion.div>

        </motion.div>

        {/* 🔥 CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center mt-20"
        >
          <button className="group relative flex items-center gap-4 px-12 py-5 bg-white border border-slate-200 rounded-full font-bold text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:border-cyan-500 shadow-sm">
            <span className="relative z-10">View Our Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-cyan-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>

    </section>
  );
}