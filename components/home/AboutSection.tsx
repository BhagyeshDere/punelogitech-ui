"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Target, Award } from "lucide-react";

export default function AboutSection() {
  // Animation Variants
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
    <section className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL BACKGROUND PATTERN */}
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
        
        {/* 🔥 LEFT CONTENT: SIMPLIFIED & MASSIVE BOLD HEADING */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-cyan-500" />
            <p className="text-cyan-600 tracking-[0.3em] text-[10px] font-black uppercase">
              Our Legacy
            </p>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="font-[var(--font-bebas)] text-[65px] md:text-[85px] lg:text-[100px] leading-[0.8] text-[#0F172A] mb-10 font-black tracking-tighter"
          >
            THE FUTURE OF <span className="text-cyan-500">HEAVY LIFTING</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-slate-900 text-lg md:text-xl leading-relaxed font-bold">
              With over a decade of hands-on experience, Pune Logitech has evolved into a powerhouse of material handling and crane solutions.
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
              We don't just rent equipment; we engineer success. Our commitment to safety and operational precision ensures that your most challenging projects are completed with absolute confidence and efficiency.
            </p>
          </motion.div>

          {/* Technical Micro-stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-8 pt-10 mt-10 border-t border-gray-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyan-50 rounded-lg">
                <Target className="text-cyan-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Mission Control</h4>
                <p className="text-xs text-gray-500 mt-1">Driving zero-downtime operations.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-cyan-50 rounded-lg">
                <Award className="text-cyan-600 w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Top Tier Fleet</h4>
                <p className="text-xs text-gray-500 mt-1">Modern, certified heavy machinery.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🔥 RIGHT SIDE: COMPOSITE IMAGE LAYOUT */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="/images/about/main.png" 
              alt="Pune Logitech Fleet" 
              className="w-full h-[500px] object-cover"
            />
            {/* Overlay Glass Tag */}
            <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/40 shadow-xl">
               <span className="block text-[24px] font-black text-cyan-600 leading-none">12+</span>
               <span className="block text-[10px] font-bold text-slate-800 uppercase tracking-tighter">Years Excellence</span>
            </div>
          </motion.div>

          {/* Secondary Floating Image */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute -left-12 -bottom-12 z-20 w-64 h-64 rounded-2xl overflow-hidden border-8 border-[#F8FAFC] shadow-2xl hidden md:block"
          >
            <img 
              src="/images/about/service.png" 
              alt="Maintenance Service" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Decorative Technical Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -right-16 -top-16 w-64 h-64 border-[1px] border-dashed border-cyan-300 rounded-full opacity-40 z-0" 
          />
        </div>

      </motion.div>

      {/* 🔷 AMBIENT LIGHTING */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-100/20 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}