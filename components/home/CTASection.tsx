"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#F3F3F3]">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#ff7a00] to-[#ff5a00] rounded-2xl px-10 md:px-20 py-16 overflow-hidden"
        >

          {/* 🔥 PATTERN DESIGN */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-full h-full">

              <div className="absolute right-24 top-10 w-[320px] h-[320px] border-2 border-white opacity-60 rotate-[25deg]"></div>
              <div className="absolute right-16 top-24 w-[260px] h-[260px] border-2 border-white opacity-50 rotate-[25deg]"></div>
              <div className="absolute right-8 top-40 w-[200px] h-[200px] border-2 border-white opacity-40 rotate-[25deg]"></div>

              <div className="absolute right-0 bottom-0 w-[400px] h-[200px] border-t-2 border-l-2 border-white opacity-30 rotate-[25deg]"></div>

            </div>
          </div>

          {/* 🔥 CONTENT */}
          <div className="relative max-w-2xl">

            {/* TAG */}
            <p className="text-black/70 tracking-[6px] text-sm font-bold mb-4">
              PUNE LOGITECH
            </p>

            {/* HEADING - Removed any potential italic styles */}
            <h2 className="font-[var(--font-bebas)] text-[48px] md:text-[64px] leading-[0.95] text-black tracking-tight font-bold">
              READY TO LIFT YOUR <br />
              PROJECT TO THE <br />
              NEXT LEVEL?
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-black/80 text-lg leading-relaxed max-w-xl font-normal">
              Get reliable crane rental and material handling solutions tailored 
              for your business. Our team ensures safety, efficiency, and 
              performance for every project.
            </p>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 30px rgba(255,255,255,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-12 py-4 border-2 border-white rounded-full font-bold tracking-wide text-black bg-transparent hover:bg-white transition-all duration-300"
            >
              CONTACT US
            </motion.button>

          </div>

        </motion.div>

        {/* 🔥 BRAND NAME */}
        <div className="flex justify-center mt-20">
          <h1 className="text-[48px] md:text-[64px] font-black text-orange-500 tracking-wide">
            PUNE LOGITECH
          </h1>
        </div>

      </div>

    </section>
  );
}