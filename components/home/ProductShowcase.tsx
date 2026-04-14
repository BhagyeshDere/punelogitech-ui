"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    name: "BOOMLIFT",
    image: "/images/products/boomlift.png",
    tag: "Aerial Access",
  },
  {
    name: "CRANE",
    image: "/images/products/crane.png",
    tag: "Heavy Lifting",
  },
  {
    name: "TELEHANDLER",
    image: "/images/products/talehandler.png",
    tag: "Versatile Reach",
  },
  {
    name: "FARANA CRANE",
    image: "/images/products/farana.png",
    tag: "Mobile Power",
  },
];

export default function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative py-36 bg-[#F8F8F8] overflow-hidden"
    >
      {/* 🧩 DYNAMIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[grid-white_40px]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute -bottom-10 left-0 whitespace-nowrap"
        >
          <span className="text-[260px] font-[var(--font-bebas)] font-black text-black/[0.03] uppercase">
            Heavy Duty • Industrial Grade • Precision • 
          </span>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* 🔥 HEADER SECTION */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-orange-500" />
              <p className="text-orange-500 tracking-[0.4em] text-xs font-black uppercase">
                Our Equipments
              </p>
            </div>
            {/* Removed italic, applied normal bold weight */}
            <h2 className="font-[var(--font-bebas)] text-[70px] md:text-[110px] leading-[0.8] text-black font-bold">
              POWERFUL <br /> <span className="text-orange-500">MACHINES.</span>
            </h2>
          </motion.div>
          
          <div className="hidden lg:block text-right">
            <p className="text-gray-400 font-mono text-[10px] tracking-widest uppercase mb-2 font-bold">Fleet Status: Active</p>
            <div className="flex gap-2 justify-end">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-[2px] bg-black/10" />
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 items-start">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group ${
                index % 2 !== 0 ? "lg:mt-24" : "" // Stagger effect
              }`}
            >
              {/* ASSET CONTAINER */}
              <div className="relative h-[550px] w-full bg-white border border-gray-100 rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_50px_100px_-30px_rgba(249,115,22,0.15)] transition-all duration-500 flex flex-col justify-end p-8 overflow-hidden">
                
                {/* BACKDROP NUMBER */}
                <span className="absolute top-8 left-8 text-[120px] font-[var(--font-bebas)] text-black/[0.03] leading-none pointer-events-none font-bold">
                  0{index + 1}
                </span>

                {/* DYNAMIC IMAGE Reveal */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-[140%] max-w-none h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)] z-10 
                               group-hover:scale-110 group-hover:-translate-y-8 transition-all duration-700 ease-out"
                  />
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-20">
                  <p className="text-orange-500 font-black text-[9px] tracking-[0.2em] uppercase mb-1">
                    {product.tag}
                  </p>
                  <h3 className="font-[var(--font-bebas)] text-[40px] leading-none text-black mb-4 font-bold">
                    {product.name}
                  </h3>
                  
                  {/* HIDDEN SPEC REVEAL */}
                  <div className="h-0 opacity-0 group-hover:h-12 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-gray-400 text-[11px] leading-relaxed max-w-[180px] font-bold">
                      High performance industrial equipment optimized for heavy uptime.
                    </p>
                  </div>
                </div>

                {/* BOTTOM GLOSS ACCENT */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* FLOATING ACTION BUTTON */}
              <motion.div 
                whileHover={{ rotate: 90 }}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 cursor-pointer"
              >
                <span className="text-xl font-bold">→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🏁 SIDE DECOR */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-black/10 to-transparent" />
    </section>
  );
}