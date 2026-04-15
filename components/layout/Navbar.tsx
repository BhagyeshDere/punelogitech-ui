"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "EQUIPMENTS", href: "#" },
    { name: "CLIENTELE", href: "#" },
    { name: "CSR", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
      
      {/* 🛠️ UPDATED: Increased max-width and adjusted padding to nudge logo left */}
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 py-2">

        {/* 🔵 LOGO: Removed extra flex padding to keep it tight to the left */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Pune Logitech"
            width={110} 
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* 🔥 CENTER NAV */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
          <div className="flex items-center gap-2 bg-white/70 backdrop-blur-xl px-5 py-1.5 rounded-full border border-gray-200 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-bold tracking-wide text-gray-700 hover:text-cyan-600 transition group"
              >
                {link.name}
                {/* UNDERLINE */}
                <span className="absolute bottom-0 left-3 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
              </a>
            ))}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="ml-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold tracking-wide px-4 py-1.5 rounded-full shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all uppercase"
            >
              Contact
            </motion.button>
          </div>
        </div>

        {/* 🔵 MOBILE */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-cyan-500"></div>
          <div className="w-4 h-0.5 bg-black ml-auto"></div>
        </button>

      </div>
    </nav>
  );
}