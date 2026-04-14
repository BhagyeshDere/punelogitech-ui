"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "EQUIPMENTS", href: "#" },
    { name: "CLIENTELE", href: "#" },
    { name: "CSR", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        
        {/* 🔥 Logo Section */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-[var(--font-bebas)] font-black text-black tracking-tighter leading-none">
            PUNE <span className="text-orange-500">LOGITECH</span>
          </h1>
          <span className="text-[8px] tracking-[0.3em] text-gray-400 font-bold uppercase mt-1">
            Crane & Equipment Solutions
          </span>
        </div>

        {/* 🔥 Center Pill Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 ml-10">
          <div className="flex items-center gap-2 bg-gray-50/50 backdrop-blur-md pl-8 pr-2 py-1.5 rounded-full border border-gray-200/60 shadow-sm">
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-[11px] font-bold tracking-[0.15em] text-gray-500 hover:text-orange-600 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 w-0 h-[1.5px] bg-orange-500 transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
              </a>
            ))}

            {/* 🔥 Primary CTA inside pill */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-orange-500 text-white text-[11px] font-black tracking-widest px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-600 uppercase"
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle (Simple for now) */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-orange-500"></div>
          <div className="w-4 h-0.5 bg-black ml-auto"></div>
        </button>

      </div>
    </nav>
  );
}