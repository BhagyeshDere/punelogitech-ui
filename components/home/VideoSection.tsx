"use client";

import { motion } from "framer-motion";
import { Play, ShieldCheck, Activity } from "lucide-react";

export default function VideoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-20 md:py-32 bg-[#F8FAFC] overflow-hidden font-sans">
      
      {/* 🔷 BACKGROUND DECO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F5F7FA] to-transparent" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-12 lg:gap-16 px-6 md:px-10 relative z-10"
      >
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[3px] bg-cyan-500" />
            <p className="text-cyan-600 tracking-[0.4em] text-[11px] font-black uppercase">
              Operational Excellence
            </p>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-[48px] md:text-[64px] lg:text-[72px] font-[1000] leading-[0.95] text-slate-950 mb-8 tracking-tighter uppercase"
          >
            SMARTER <span className="text-cyan-500">LIFTING</span> <br /> SOLUTIONS
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md font-bold mb-10 tracking-tight"
          >
            Pune Logitech delivers reliable crane rental and material handling 
            solutions designed to improve safety, efficiency, and productivity 
            across construction and industrial operations.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-8 pt-10 border-t-2 border-slate-200"
          >
            <div className="flex flex-col gap-3">
              <ShieldCheck className="text-cyan-500 w-7 h-7" strokeWidth={3} />
              <span className="text-[12px] font-[900] tracking-widest text-slate-900 uppercase">Certified Safety</span>
            </div>
            <div className="flex flex-col gap-3">
              <Activity className="text-cyan-500 w-7 h-7" strokeWidth={3} />
              <span className="text-[12px] font-[900] tracking-widest text-slate-900 uppercase">Real-time Support</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VIDEO - ALWAYS VISIBLE PRIORITY */}
        <div className="lg:col-span-7 relative order-1 lg:order-2 w-full">
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -right-4 -top-4 md:-right-8 md:-top-8 w-24 h-24 md:w-32 md:h-32 border-2 border-dashed border-cyan-200 rounded-full opacity-50 z-0" 
          />

          {/* 🔥 VIDEO CARD */}
          <motion.div 
            variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(15,23,42,0.25)] border-2 border-white group w-full bg-slate-100"
          >
            
            {/* VIDEO ELEMENT */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video lg:h-[480px] object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
            >
              <source src="/videos/crane.mp4" type="video/mp4" />
            </video>

            {/* PLAY OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
               <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl"
               >
                  <Play size={32} className="text-white fill-white ml-1 opacity-80" />
               </motion.div>
            </div>

            {/* STATUS LABEL */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex items-center gap-4 bg-slate-900/80 backdrop-blur-2xl px-5 py-3 md:px-6 md:py-4 rounded-xl border border-white/20">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <p className="text-white text-[10px] md:text-[11px] font-black tracking-[0.25em] uppercase">Watch Facility Tour</p>
            </div>
          </motion.div>

          {/* SHADOW ACCENT */}
          <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 w-full h-full bg-slate-200/60 rounded-2xl -z-10 border-r-4 border-b-4 border-slate-300/20" />
        </div>

      </motion.div>

      {/* AMBIENT LIGHTING */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-100/40 blur-[130px] rounded-full pointer-events-none opacity-50" />
    </section>
  );
}