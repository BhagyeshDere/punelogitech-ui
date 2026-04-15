"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

const equipments = [
  "Boomlift", "Scissor Lift", "Crane", "Telehandler", 
  "Farana Crane", "Hydra Crane", "Forklift"
];

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Clientele", href: "/clients" },
  { name: "CSR", href: "/csr" },
  { name: "Contact Us", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0C10] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* 🧩 BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* --- BRAND COLUMN --- */}
          <div className="lg:col-span-4">
            <Image
              src="/logo.png"
              alt="Pune Logitech"
              width={160}
              height={60}
              className="mb-8" // Removed brightness/invert/opacity filters
            />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Excellence in crane rental services for over 12 years. Delivering unparalleled value to the material handling sector with a mission centered on precision and safety.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0C10] bg-slate-800 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-black text-white tracking-widest uppercase italic">
                Certified Operational Safety
              </p>
            </div>
          </div>

          {/* --- EQUIPMENT COLUMN --- */}
          <div className="lg:col-span-3">
            {/* UPDATED FONT TO SIMPLE BOLD */}
            <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-8">Fleet Inventory</h4>
            <ul className="grid grid-cols-1 gap-3">
              {equipments.map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm font-medium">
                    <span className="w-1.5 h-[1px] bg-slate-700 group-hover:w-3 group-hover:bg-cyan-500 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- LINKS COLUMN --- */}
          <div className="lg:col-span-2">
            {/* UPDATED FONT TO SIMPLE BOLD */}
            <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-8">Quick Access</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CONTACT COLUMN --- */}
          <div className="lg:col-span-3">
            {/* UPDATED FONT TO SIMPLE BOLD */}
            <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-8">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0" />
                <p className="text-slate-400 text-xs leading-relaxed font-medium">
                  MIDC Phase 3, Rajeev Gandhi Infotech Park, Next to Quadron Ambassy, Near Shakti Vajan Kata, Pune- 411057
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <a href="tel:+918554981742" className="text-slate-200 font-black hover:text-cyan-400 transition-colors">
                  +91 8554981742
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                <a href="mailto:info@punelogitech.in" className="text-slate-200 text-sm font-black hover:text-cyan-400 transition-colors">
                  info@punelogitech.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-600 tracking-[0.2em] uppercase">
            © 2026 PUNE LOGITECH SERVICES LLP // ALL RIGHTS RESERVED
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
              Designed & Developed By
            </p>
            <motion.p 
              whileHover={{ color: "#06b6d4" }}
              className="text-slate-300 text-xs font-black tracking-tighter cursor-default transition-colors"
            >
              QIRO TECH INNOVATION PVT. LTD.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* SCANLINE ANIMATION */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse" />
    </footer>
  );
}