"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProductShowcase() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.9, 
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };

  return (
    <section className="relative pt-20 pb-40 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#0891b2 1.5px, transparent 1.5px), linear-gradient(90deg, #0891b2 1.5px, transparent 1.5px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-8 relative z-10">
        
        {/* 🏷️ SECTION HEADING */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-cyan-600 font-black text-xs tracking-[0.3em] uppercase mb-4">Core Fleet</p>
          <h2 className="text-[#0F172A] font-black text-[50px] md:text-[70px] leading-[1] tracking-tighter">
            PREMIUM <span className="text-cyan-500">MACHINERY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-6 items-start">

          {/* 🔥 CARD 01 - MOBILE CRANE */}
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative mt-8 group justify-self-center"
          >
            <div className="relative w-[280px] md:w-[300px] lg:w-[320px] h-[550px]">
              <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 -z-10 group-hover:shadow-cyan-900/10 transition-shadow duration-700" />
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#0891b2_40px,#0891b2_41px)] rounded-[2.5rem]" />

              <div className="absolute left-8 top-10 z-20">
                <p className="text-cyan-500 font-black text-[10px] tracking-widest uppercase mb-2">Fleet 01</p>
                <h3 className="font-black text-[32px] lg:text-[38px] leading-[0.95] text-[#0F172A] tracking-tighter">
                  MOBILE <br /> CRANE
                </h3>
              </div>

              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/images/products/crane.png"
                className="absolute bottom-[-20px] right-[-30px] h-[450px] lg:h-[500px] object-contain z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* 🔥 CARD 02 - FARANA PRO-X (DARK SLATE) */}
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative z-20 group justify-self-center"
          >
            <div className="relative w-[300px] md:w-[320px] lg:w-[340px] h-[600px]">
              <div className="absolute inset-0 bg-slate-900 rounded-[3rem] shadow-[0_60px_100px_-20px_rgba(15,23,42,0.3)] -z-10" />
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#06b6d4_40px,#06b6d4_42px)] rounded-[3rem]" />

              <div className="absolute right-10 top-12 text-right z-20">
                <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center ml-auto mb-4 shadow-lg shadow-cyan-500/40 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="text-white w-4 h-4" />
                </div>
                <p className="text-cyan-400 font-black text-[11px] tracking-widest uppercase mb-2">Heavy Flagship</p>
                <h3 className="font-black text-[38px] lg:text-[45px] leading-[0.95] text-white tracking-tighter">
                  FARANA <br /> <span className="text-cyan-500">PRO-X</span>
                </h3>
              </div>

              <motion.img
                animate={{ y: [0, 20, 0], rotate: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src="/images/products/farana.png"
                className="absolute bottom-[-30px] left-[-50px] h-[500px] lg:h-[550px] object-contain z-10 drop-shadow-[0_40px_50px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* 🔥 CARD 03 - TELEHANDLER (BLUE THEME) */}
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative mt-8 group justify-self-center"
          >
            <div className="relative w-[280px] md:w-[300px] lg:w-[320px] h-[550px]">
              {/* UPDATED TO BLUE BACKGROUND */}
              <div className="absolute inset-0 bg-cyan-600 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(8,145,178,0.3)] -z-10" />
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#ffffff_40px,#ffffff_41px)] rounded-[2.5rem]" />

              <div className="absolute left-8 top-10 z-20">
                <p className="text-white/80 font-black text-[10px] tracking-widest uppercase mb-2">Fleet 03</p>
                <h3 className="font-black text-[32px] lg:text-[38px] leading-[0.95] text-white tracking-tighter">
                  TELE <br /> HANDLER
                </h3>
              </div>

              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                src="/images/products/talehandler1.png"
                className="absolute bottom-[-30px] right-[-40px] h-[450px] lg:h-[500px] object-contain z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* 🔥 CARD 04 - BOOMLIFT */}
          <motion.div 
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative z-10 group justify-self-center mt-0 xl:mt-8"
          >
            <div className="relative w-[280px] md:w-[300px] lg:w-[320px] h-[550px]">
              <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 -z-10 group-hover:shadow-cyan-900/10 transition-shadow duration-700" />
              <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#0891b2_40px,#0891b2_41px)] rounded-[2.5rem]" />

              <div className="absolute left-8 top-10 z-20">
                <p className="text-cyan-500 font-black text-[10px] tracking-widest uppercase mb-2">Fleet 04</p>
                <h3 className="font-black text-[32px] lg:text-[38px] leading-[0.95] text-[#0F172A] tracking-tighter">
                  BOOM <br /> LIFT
                </h3>
              </div>

              <motion.img
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/images/products/boom.png"
                className="absolute bottom-[-35px] right-[-50px] h-[500px] lg:h-[560px] object-contain z-10 drop-shadow-[0_30px_30px_rgba(0,0,0,0.18)] group-hover:scale-115 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 🔷 ATMOSPHERIC DEPTH GLOWS */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[10%] right-[-100px] w-[400px] h-[400px] bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />

    </section>
  );
}