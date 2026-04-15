"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, HardHat, Warehouse, Zap, Droplets, Truck, Settings } from "lucide-react";

const industries = [
  { name: "Infrastructure Projects", icon: HardHat },
  { name: "Machinery Handling", icon: Settings },
  { name: "Logistics Operations", icon: Warehouse },
  { name: "Energy Sector", icon: Zap },
  { name: "Factory Installation", icon: Factory },
  { name: "Equipment Transport", icon: Truck },
  { name: "Custom Solutions", icon: Droplets },
];

export default function IndustriesSection() {
  // Container animation for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-32 bg-[#F8F9FB] relative overflow-hidden">
      
      {/* 🧩 TECHNICAL ARCHITECTURE OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0C10] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
        >
          {/* 🔵 ATMOSPHERIC DEPTH */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[130px] -mr-40 -mt-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] -ml-20 -mb-20 pointer-events-none" />
          
          <div className="relative px-8 md:px-16 py-24 grid lg:grid-cols-12 gap-16 items-center">

            {/* --- LEFT PANEL: NARRATIVE --- */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="w-10 h-[2px] bg-cyan-500" />
                <p className="text-cyan-500 tracking-[0.5em] text-[11px] font-black uppercase italic">
                  Market Sectors
                </p>
              </motion.div>

              {/* UPDATED FONT TO SIMPLE BOLD */}
              <h2 className="font-black text-[45px] md:text-[75px] leading-[0.95] text-white tracking-tighter">
                POWERING THE <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">INDUSTRIAL</span> <br /> 
                FRONTIER
              </h2>

              <p className="mt-8 text-gray-400 text-lg leading-relaxed font-medium max-w-md">
                Deploying advanced crane intelligence and precision handling systems 
                built for the most demanding environments on earth.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 group flex items-center gap-4 px-8 py-5 border border-cyan-500/30 rounded-full text-white text-xs font-black uppercase tracking-widest transition-all duration-500 bg-white/5 backdrop-blur-md"
              >
                Explore Capability 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>

            {/* --- RIGHT PANEL: INTERACTIVE LIST --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="lg:col-span-7 grid sm:grid-cols-2 gap-4"
            >
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="p-6 rounded-2xl border border-white/[0.03] bg-white/[0.02] flex items-center gap-5 group cursor-pointer transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500 transition-colors duration-500">
                    <industry.icon className="w-5 h-5 text-cyan-400 group-hover:text-black transition-colors" />
                  </div>
                  
                  <div className="flex flex-col">
                    <p className="text-[15px] font-black text-gray-200 group-hover:text-white transition-colors">
                      {industry.name}
                    </p>
                    <span className="text-[9px] text-cyan-500 font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Active Deployment
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {/* SYSTEM STATUS FOOTER */}
              <div className="sm:col-span-2 mt-6 pt-8 border-t border-white/[0.05] flex justify-between items-center">
                <p className="text-[9px] text-gray-500 font-mono tracking-[0.2em] uppercase font-bold">
                  LOGITECH OPS // CORE_SYSTEM_v4.0
                </p>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/30" />
                </div>
              </div>
            </motion.div>

          </div>

          {/* 🎨 ARCHITECTURAL WATERMARK UPDATED TO SIMPLE BOLD */}
          <div className="absolute -bottom-10 -right-10 font-black text-[140px] text-white/[0.015] pointer-events-none select-none leading-none uppercase tracking-tighter">
            PRECISION
          </div>
        </motion.div>

      </div>
    </section>
  );
}