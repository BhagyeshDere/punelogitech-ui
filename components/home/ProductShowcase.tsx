"use client";

import { motion } from "framer-motion";

export default function ProductShowcase() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };

  return (
    /* 🛠️ Reduced pb-60 to pb-20 to remove extra bottom gap */
    <section className="relative pt-24 pb-20 bg-[#F8FAFC] overflow-hidden">
      
      {/* 🧩 TECHNICAL GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#0891b2 1.5px, transparent 1.5px), linear-gradient(90deg, #0891b2 1.5px, transparent 1.5px)`, 
            backgroundSize: '80px 80px' 
          }} 
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        
        {/* 🏷️ SECTION HEADING */}
        <div className="mb-20 text-center md:text-left md:ml-12">
          <p className="text-cyan-600 font-black text-xs tracking-[0.3em] uppercase mb-4">Core Fleet</p>
          <h2 className="text-[#0F172A] font-black text-[55px] md:text-[85px] leading-[0.85] tracking-tighter">
            PREMIUM <span className="text-cyan-500">MACHINERY</span>
          </h2>
        </div>

        {/* 🏗️ STAGGERED GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center items-start">

          {/* 🔥 CARD 01 - MOBILE CRANE (Upper) */}
          <motion.div 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="group relative w-[340px] md:w-[360px] h-[600px] md:h-[620px]"
          >
            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 -z-10" />
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#0891b2_40px,#0891b2_41px)] rounded-[2.5rem]" />
            <div className="p-12">
              <p className="text-cyan-500 font-black text-[11px] tracking-widest uppercase mb-2">Fleet 01</p>
              <h3 className="font-black text-[46px] leading-none text-[#0F172A] tracking-tighter">CRANE</h3>
            </div>
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="/images/products/crane.png"
              className="absolute bottom-8 left-[0%] w-[130%] h-[480px] object-contain z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* 🔥 CARD 02 - FARANA CRANE (Lower) */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="group relative w-[340px] md:w-[360px] h-[600px] md:h-[620px] xl:mt-24"
          >
            <div className="absolute inset-0 bg-slate-900 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.4)] -z-10" />
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#06b6d4_40px,#06b6d4_42px)] rounded-[2.5rem]" />
            <div className="p-12">
              <p className="text-cyan-400 font-black text-[11px] tracking-widest uppercase mb-2">Fleet 02</p>
              {/* 🛠️ Adjusted "Crane" word to the right */}
              <h3 className="font-black text-[46px] leading-none text-white tracking-tighter uppercase">
                Farana <br/>
                <span className="text-cyan-500 text-[40px] block text-right">Crane</span>
              </h3>
            </div>
            <motion.img
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src="/images/products/farana1.png"
              className="absolute bottom-8 left-[0%] w-[130%] h-[480px] object-contain z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* 🔥 CARD 03 - TELEHANDLER (Upper) */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="group relative w-[340px] md:w-[360px] h-[600px] md:h-[620px]"
          >
            <div className="absolute inset-0 bg-cyan-600 rounded-[2.5rem] shadow-2xl -z-10" />
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#ffffff_40px,#ffffff_41px)] rounded-[2.5rem]" />
            <div className="p-12">
              <p className="text-white/80 font-black text-[11px] tracking-widest uppercase mb-2">Fleet 03</p>
              <h3 className="font-black text-[46px] leading-none text-white tracking-tighter uppercase">Telehandler</h3>
            </div>
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              src="/images/products/talehandler1.png"
              className="absolute bottom-10 left-[2%] w-[120%] h-[440px] object-contain z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* 🔥 CARD 04 - BOOMLIFT (Lower) */}
          <motion.div 
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
            className="group relative w-[340px] md:w-[360px] h-[600px] md:h-[620px] xl:mt-24"
          >
            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 -z-10" />
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,#0891b2_40px,#0891b2_41px)] rounded-[2.5rem]" />
            <div className="p-12">
              <p className="text-cyan-500 font-black text-[11px] tracking-widest uppercase mb-2">Fleet 04</p>
              <h3 className="font-black text-[46px] leading-none text-[#0F172A] tracking-tighter">BOOMLIFT</h3>
            </div>
            <motion.img
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/images/products/boom.png"
              className="absolute bottom-8 left-[0%] w-[130%] h-[480px] object-contain z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </div>

      {/* 🔷 ATMOSPHERIC DEPTH GLOWS */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[5%] right-[-150px] w-[500px] h-[500px] bg-blue-400/10 blur-[150px] rounded-full pointer-events-none" />

    </section>
  );
}