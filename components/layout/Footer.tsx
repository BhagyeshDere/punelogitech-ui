"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-orange-500 pt-24 pb-12 overflow-hidden border-t border-orange-400">
      
      {/* 🌑 REDUCED DEPTH OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 pointer-events-none" />
      
      {/* 🔥 TECHNICAL PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,white_20px,white_21px)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* --- COLUMN 1: DESCRIPTION --- */}
          <div className="lg:col-span-5">
            <h3 className="font-[var(--font-bebas)] text-5xl text-white mb-6 tracking-tight font-bold">
              PUNE <span className="text-black">LOGITECH</span>
            </h3>
            <p className="text-white/90 text-sm leading-relaxed max-w-md font-bold">
              Pune Logitech is a trusted provider of crane rental and material handling 
              solutions, delivering excellence for over a decade. We specialize in 
              boom lifts, cranes, telehandlers, and advanced lifting equipment designed 
              to enhance safety, efficiency, and productivity.
            </p>
          </div>

          {/* --- COLUMN 2: QUICK LINKS --- */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8 border-l-2 border-white pl-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-4 text-sm font-bold text-white">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Equipments", href: "/equipments" },
                { name: "Contact Us", href: "/contact" }
              ].map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-black transition-all w-fit group flex items-center gap-2"
                >
                  <span className="w-0 h-[2px] bg-black group-hover:w-4 transition-all duration-300" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMN 3: CONTACT INFO --- */}
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-black mb-8 border-l-2 border-white pl-4">
              Connect With Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <span className="text-white bg-white/20 backdrop-blur-sm p-2.5 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                   📍
                </span>
                <p className="text-sm text-white font-bold leading-relaxed">
                  MIDC Phase 3, Rajeev Gandhi Infotech Park, <br /> Pune - 411057
                </p>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-white bg-white/20 backdrop-blur-sm p-2.5 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                   📞
                </span>
                <p className="text-sm text-white font-black tracking-wider">+91 8554981742</p>
              </div>
              <div className="flex items-center gap-4 group">
                <span className="text-white bg-white/20 backdrop-blur-sm p-2.5 rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                   ✉️
                </span>
                <p className="text-sm text-white font-bold underline underline-offset-4 decoration-white/40">info@punelogitech.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-12 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[10px] text-white font-black uppercase tracking-widest">
            © 2026 <span className="text-black">Pune Logitech.</span> All Rights Reserved.
          </div>

          <div className="px-6 py-3 bg-black rounded-full shadow-xl text-[10px] text-white flex items-center gap-2">
            Designed & Developed by{" "}
            <span className="text-orange-500 font-black uppercase tracking-tight">
              Qiro Tech Innovation Pvt. Ltd.
            </span>
          </div>

        </div>

      </div>

      {/* 🎨 BACKGROUND WATERMARK - Removed Italic */}
      <div className="absolute bottom-[-20px] left-10 text-[180px] font-[var(--font-bebas)] text-white/[0.08] pointer-events-none select-none uppercase font-bold">
        LOGITECH
      </div>

    </footer>
  );
}