"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 overflow-hidden border-t border-gray-100 bg-white">
      
      {/* 🧩 DYNAMIC BACKGROUND SPLIT */}
      <div 
        className="absolute inset-0 bg-orange-500 pointer-events-none" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 72%, 0% 100%)' }}
      />
      
      {/* 🔥 TECHNICAL GRID PATTERN (On Orange) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* --- COLUMN 1: DESCRIPTION --- */}
          <div className="lg:col-span-5">
            <h3 className="font-[var(--font-bebas)] text-6xl text-white mb-6 tracking-tight font-bold">
              PUNE <span className="text-black">LOGITECH</span>
            </h3>
            <p className="text-white/90 text-sm leading-relaxed max-w-md font-bold">
              Pune Logitech is a trusted provider of crane rental and material handling 
              solutions, delivering excellence for over a decade. We specialize in 
              high-performance lifting equipment designed to enhance safety and efficiency.
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
                  <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all duration-300" />
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
                <div className="text-orange-500 bg-white p-2.5 rounded-none shadow-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-white font-bold leading-relaxed">
                  MIDC Phase 3, Rajeev Gandhi Infotech Park, <br /> Pune - 411057
                </p>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="text-orange-500 bg-white p-2.5 rounded-none shadow-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Phone size={18} />
                </div>
                <p className="text-sm text-white font-black tracking-wider">+91 8554981742</p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="text-orange-500 bg-white p-2.5 rounded-none shadow-lg group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-white font-bold underline underline-offset-4 decoration-white/40">info@punelogitech.in</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* VISIBILITY FIXED: Entire copyright line and brand name now solid black */}
          <div className="text-[11px] text-black font-black uppercase tracking-[0.2em]">
            © 2026 <span className="text-black">Pune Logitech.</span> All Rights Reserved.
          </div>

          <div className="px-6 py-3 bg-[#0A0A0A] text-[10px] text-white flex items-center gap-3 border border-white/10 shadow-2xl">
            <span className="opacity-50 uppercase tracking-widest">Designed & Developed by</span>
            <span className="text-orange-500 font-black uppercase tracking-tighter text-[11px]">
              Qiro Tech Innovation Pvt. Ltd.
            </span>
          </div>

        </div>

      </div>

      {/* 🎨 BACKGROUND WATERMARK */}
      <div className="absolute bottom-[-10px] left-10 text-[180px] font-[var(--font-bebas)] text-black/[0.04] pointer-events-none select-none uppercase font-bold">
        LOGITECH
      </div>

    </footer>
  );
}