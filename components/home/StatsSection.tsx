"use client";

import { motion } from "framer-motion";
import { Users, Truck, ArrowUpRight, Award } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative py-32 bg-[#F8F8F8] overflow-hidden">
      {/* 🟠 BACKGROUND ORANGE SHADE GRADIENT */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* 🔥 HEADING */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 tracking-[0.4em] text-[10px] font-black uppercase">Fleet Performance</p>
          </div>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-[var(--font-bebas)] text-[60px] md:text-[90px] leading-[0.85] text-black font-bold"
          >
            OUR PERFORMANCE <br /> <span className="text-orange-500">IN NUMBERS.</span>
          </motion.h2>
        </div>

        {/* 🔥 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* 🏆 YEARS EXPERIENCE: MAIN FEATURE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="md:col-span-2 md:row-span-2 bg-white border border-gray-100 rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[500px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-orange-500" />
            <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
              <Award size={32} />
            </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-[120px] font-[var(--font-bebas)] leading-none text-black font-bold">12</h3>
                <span className="text-6xl font-[var(--font-bebas)] text-orange-500 font-bold">+</span>
              </div>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-[0.3em] mb-4 font-bold">Years of Mastery</p>
              <p className="text-gray-500 text-lg leading-relaxed max-w-sm font-normal">
                A decade of delivering reliable crane rental and lifting solutions with an impeccable safety record across industrial landscapes.
              </p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 text-[180px] font-[var(--font-bebas)] text-black/[0.02] pointer-events-none select-none font-bold">
              XP
            </div>
          </motion.div>

          {/* 🚛 PROJECTS CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] group"
          >
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform">
                <Truck size={36} />
              </div>
              <div>
                <h3 className="text-5xl font-[var(--font-bebas)] text-black leading-none font-bold">500+</h3>
                <p className="text-orange-500 font-black text-[10px] tracking-widest uppercase mt-2">Projects Completed</p>
              </div>
            </div>
            <ArrowUpRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={32} />
          </motion.div>

          {/* 🖼️ IMAGE WORK Card */}
          <div className="relative group rounded-[2.5rem] overflow-hidden shadow-xl h-[240px]">
            <img
              src="/images/stats/img1.png"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Crane Work"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-6 left-6 text-white font-black text-[10px] tracking-widest uppercase">Field Operation</p>
          </div>

          {/* 👥 CLIENTS CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-orange-500 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-[0_30px_60px_-15px_rgba(249,115,22,0.3)] text-white"
          >
            <Users size={32} />
            <div>
              <h3 className="text-5xl font-[var(--font-bebas)] leading-none font-bold">100+</h3>
              <p className="text-orange-100 font-bold text-xs mt-2 uppercase tracking-tighter leading-tight">
                Trusted Global Clients
              </p>
            </div>
          </motion.div>

        </div>

        {/* 🔥 CTA BUTTON */}
        <div className="flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-black text-white rounded-full font-black text-[11px] tracking-[0.3em] uppercase flex items-center gap-4 group transition-all hover:bg-orange-600 shadow-2xl shadow-black/10"
          >
            View Our Portfolio
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <ArrowUpRight size={14} />
            </div>
          </motion.button>
        </div>

      </div>
      
      {/* BACKGROUND ACCENT LINE */}
      <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}