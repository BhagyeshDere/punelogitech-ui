"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, ShieldCheck, Activity } from "lucide-react";

export default function VideoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden font-sans">
      
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
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-16 px-6 md:px-10 relative z-10"
      >
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[3px] bg-cyan-500" />
            <p className="text-cyan-600 tracking-[0.4em] text-[11px] font-black uppercase">
              Operational Excellence
            </p>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-[52px] md:text-[68px] lg:text-[76px] font-[1000] leading-[0.95] text-slate-950 mb-8 tracking-tighter uppercase"
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

        {/* RIGHT VIDEO */}
        <div className="lg:col-span-7 relative">
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-8 -top-8 w-32 h-32 border-2 border-dashed border-cyan-200 rounded-full opacity-50 hidden md:block" 
          />

          {/* 🔥 VIDEO CARD */}
          <motion.div 
            variants={{
                hidden: { opacity: 0, scale: 0.95, x: 20 },
                visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(15,23,42,0.2)] border border-white group"
          >
            
            {/* VIDEO */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[350px] md:h-[480px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            >
              <source src="/videos/crane.mp4" type="video/mp4" />
            </video>

            {/* PLAY OVERLAY */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
               <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full border-2 border-white/50 flex items-center justify-center shadow-2xl">
                  <Play size={32} className="text-white fill-white ml-1" />
               </div>
            </div>

            {/* LABEL */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 bg-slate-900/60 backdrop-blur-2xl px-6 py-4 rounded-xl border border-white/20">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
              <p className="text-white text-[11px] font-black tracking-[0.25em] uppercase">Watch Facility Tour</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -right-6 -bottom-6 w-full h-full bg-slate-200/50 rounded-2xl -z-10 border-r-4 border-b-4 border-slate-300/30" 
          />
        </div>

      </motion.div>

      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-100/30 blur-[130px] rounded-full pointer-events-none" />
    </section>
  );
}