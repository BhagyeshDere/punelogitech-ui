"use client";

import { motion } from "framer-motion";
import { Shield, Settings, CheckCircle2, Zap, Weight, ArrowUpRight, Maximize2, Gauge, Anchor } from "lucide-react";

export default function FeatureSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative py-12 md:py-20 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL BLUEPRINT BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#0891b2 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* ✨ DUAL-SIDE DATA STREAM LINES (ANIMATION REMOVED) */}
        <div className="absolute inset-y-0 left-4 md:left-12 w-[1.5px] bg-gradient-to-b from-transparent via-cyan-600/40 to-transparent" />
        <div className="absolute inset-y-0 right-4 md:right-12 w-[1.5px] bg-gradient-to-b from-transparent via-cyan-600/40 to-transparent" />

        {/* VERTICAL SCANNER LINE (ANIMATION REMOVED - NOW STATIC AT TOP) */}
        <div 
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent z-10"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* 🔥 TOP CONTENT: MASSIVE SCALE GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-12 gap-6 items-center"
        >
          {/* LEFT IMAGE: MASSIVE BOOMLIFT */}
          <motion.div variants={fadeInUp} className="lg:col-span-6 relative group flex justify-center">
            <div className="absolute inset-0 bg-cyan-100/40 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-full">
              <img
                src="/images/feature/boomlift.png"
                className="w-full h-auto object-contain max-w-[650px] mx-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.12)] z-10 relative scale-110 md:scale-[1.35]"
                alt="boom lift"
              />
              
              {/* TAG 1: PRECISION REACH */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 md:right-0 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-2xl border border-white/50 w-max z-20"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-cyan-500 w-5 h-5" />
                  <p className="text-[12px] font-black tracking-[0.2em] text-slate-800 uppercase">
                    Precision Reach
                  </p>
                </div>
              </motion.div>

              {/* NEW TAG 2: TELESCOPIC RADIUS */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 md:-left-10 bg-slate-900/90 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 w-max z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <Maximize2 className="text-cyan-400 w-4 h-4" />
                  <p className="text-[10px] font-bold tracking-[0.1em] text-white uppercase">
                    80ft Working Envelope
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT TEXT CONTENT */}
          <div className="lg:col-span-6 lg:pl-10">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-16 h-[2px] bg-cyan-500" />
              <p className="text-cyan-600 tracking-[0.4em] text-[11px] font-black uppercase">Fleet Dominance</p>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-[52px] md:text-[80px] lg:text-[90px] font-black leading-[0.9] text-[#0F172A] tracking-tighter">
              ADVANCED <br /> 
              <span className="text-cyan-500">LIFTING</span> UNITS
            </motion.h2>

            <motion.p variants={fadeInUp} className="mt-8 text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
              We provide massive-scale access solutions. Our engineering-first 
              approach ensures smooth operations in the most challenging environments.
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 mt-10">
              <div className="border-l-4 border-cyan-500 pl-6">
                <p className="text-[#0F172A] font-black text-4xl mb-1 tracking-tighter">100%</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Safety Rated</p>
              </div>
              <div className="border-l-4 border-slate-800 pl-6">
                <p className="text-[#0F172A] font-black text-4xl mb-1 tracking-tighter">24/7</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Global Support</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 🔥 MIDDLE VISUAL: THE GIANT CRANE */}
        <div className="relative mt-16 md:mt-24 flex justify-center">
          
          {/* ✨ HUD CONNECTOR LINES (ANIMATIONS REMOVED - STATIC PATHS) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block filter drop-shadow-[0_2px_4px_rgba(6,182,212,0.1)]">
            {/* Left Side Connectors */}
            <path
              d="M 100 200 L 250 200 L 320 280"
              fill="none"
              stroke="rgba(6, 182, 212, 0.35)"
              strokeWidth="1.5"
            />
            <path
              d="M 100 500 L 200 500 L 250 450"
              fill="none"
              stroke="rgba(6, 182, 212, 0.35)"
              strokeWidth="1.5"
            />
            
            {/* Right Side Connectors */}
            <path
              d="M 1300 150 L 1150 150 L 1080 220"
              fill="none"
              stroke="rgba(6, 182, 212, 0.35)"
              strokeWidth="1.5"
            />
            <path
              d="M 1300 600 L 1200 600 L 1100 500"
              fill="none"
              stroke="rgba(6, 182, 212, 0.35)"
              strokeWidth="1.5"
            />
          </svg>

          <div className="absolute inset-0 flex justify-center items-center pointer-events-none scale-150">
            {/* RADIAL PULSE FOR VISIBILITY */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[600px] h-[600px] bg-cyan-200 rounded-full blur-[100px]"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-[800px] h-[800px] border border-dashed border-cyan-300 rounded-full opacity-30" 
            />
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 100 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <img
              src="/images/feature/crane.png"
              className="w-[90vw] md:w-[850px] lg:w-[1000px] object-contain drop-shadow-[0_60px_100px_rgba(0,0,0,0.18)]"
              alt="Industrial Crane"
            />

            {/* TAG 1: SECURITY */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -left-10 md:-left-32 top-[10%] bg-white/70 backdrop-blur-2xl px-8 py-5 rounded-[2rem] shadow-2xl border border-white flex items-center gap-5 hidden md:flex"
            >
              <div className="bg-cyan-500 p-3 rounded-2xl text-white shadow-xl shadow-cyan-500/40">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Security</p>
                <p className="text-sm font-bold text-slate-900">Triple-Lock Safety</p>
              </div>
            </motion.div>

            {/* NEW TAG 2: LOAD STABILITY */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute left-[20%] -bottom-10 bg-white/80 backdrop-blur-xl px-6 py-4 rounded-3xl shadow-xl border border-white flex items-center gap-4 hidden md:flex"
            >
              <div className="bg-cyan-100 p-2 rounded-xl text-cyan-600">
                <Anchor size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Stability</p>
                <p className="text-xs font-bold text-slate-900">Active Counter-Weights</p>
              </div>
            </motion.div>

            {/* TAG 3: TORQUE */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-10 md:-right-32 top-[40%] bg-white/70 backdrop-blur-2xl px-8 py-5 rounded-[2rem] shadow-2xl border border-white flex items-center gap-5 hidden md:flex"
            >
              <div className="bg-slate-900 p-3 rounded-2xl text-white">
                <Settings size={24} />
              </div>
              <div>
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Torque</p>
                <p className="text-sm font-bold text-slate-900">Heavy Load Optimised</p>
              </div>
            </motion.div>

            {/* NEW TAG 4: REAL-TIME TELEMETRY */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute right-[10%] -bottom-5 bg-cyan-600 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 hidden md:flex"
            >
              <Gauge size={18} className="text-white animate-pulse" />
              <p className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Smart Telemetry Active</p>
            </motion.div>

          </motion.div>
        </div>

        {/* 📊 INFORMATION DATA SECTION */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20"
        >
          {/* Spec Card 1 */}
          <motion.div variants={fadeInUp} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <ArrowUpRight size={28} />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Vertical limit</span>
            </div>
            <h3 className="text-slate-900 font-black text-2xl mb-2 tracking-tight">BOOM LIFT REACH</h3>
            <p className="text-cyan-500 font-black text-4xl mb-4 tracking-tighter">185 FT</p>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Industry-leading telescopic extension designed for ultra-high maintenance and structural assembly.
            </p>
          </motion.div>

          {/* Spec Card 2 */}
          <motion.div variants={fadeInUp} className="bg-[#0F172A] p-8 rounded-3xl shadow-2xl border border-slate-800">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-slate-800 rounded-2xl text-white group-hover:bg-cyan-500 transition-colors duration-300">
                <Weight size={28} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Max payload</span>
            </div>
            <h3 className="text-white font-black text-2xl mb-2 tracking-tight">CRANE CAPACITY</h3>
            <p className="text-white font-black text-4xl mb-4 tracking-tighter">1,200 TONS</p>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              Heavy-lift mobilization units capable of handling massive infrastructure components with millimeter precision.
            </p>
          </motion.div>

          {/* Spec Card 3 */}
          <motion.div variants={fadeInUp} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <Zap size={28} />
              </div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Efficiency</span>
            </div>
            <h3 className="text-slate-900 font-black text-2xl mb-2 tracking-tight">DEPLOYMENT SPEED</h3>
            <p className="text-cyan-500 font-black text-4xl mb-4 tracking-tighter">FAST-TRACK</p>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Automated setup systems reduce stabilization time by 40%, ensuring project timelines are always met.
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* 🔷 HUGE WATERMARK BACKGROUND */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left text-[180px] md:text-[300px] font-black text-cyan-500/[0.02] pointer-events-none select-none z-0 tracking-tighter leading-none">
        LOGITECH
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400/10 blur-[180px] rounded-full pointer-events-none" />

    </section>
  );
}