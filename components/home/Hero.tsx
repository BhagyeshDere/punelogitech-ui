"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 pb-24 bg-[#F3F3F3] overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center min-h-[calc(100vh-90px)] px-8 gap-16">

        {/* 🔥 LEFT CONTENT */}
        <div className="flex flex-col justify-center">

          <p className="text-orange-500 tracking-[8px] text-sm mb-6 font-medium">
            RISE ABOVE RISK.
          </p>

          {/* 🔥 MAIN HEADING */}
          <h1 className="font-[var(--font-bebas)] text-[90px] md:text-[110px] leading-[0.85] text-black">
            REALIZE
          </h1>

          <h2 className="font-[var(--font-bebas)] text-[42px] md:text-[52px] tracking-[10px] md:tracking-[12px] text-black mt-2">
            POSSIBILITIES.
          </h2>

          <p className="mt-6 text-gray-500 tracking-wide text-base md:text-lg">
            JLG® LOW-LEVEL ACCESS LIFTS
          </p>

          {/* 🔥 BUTTON */}
          <button className="mt-10 px-10 md:px-12 py-3 md:py-4 border-2 border-cyan-400 rounded-full font-semibold tracking-wide hover:bg-cyan-400 hover:text-black transition-all duration-300 w-fit">
            MEET THE FAMILY
          </button>

        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="relative flex justify-center items-center">

          {/* 🔥 FLOATING ORANGE BLOCK */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-[-30px] md:right-[-40px] top-16 md:top-20 w-[260px] md:w-[340px] h-[320px] md:h-[420px] bg-orange-500 rounded-2xl"
          />

          {/* 🔥 IMAGE */}
          <motion.img
            src="/images/hero/lift.png"
            alt="lift"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-[360px] md:w-[520px] object-contain drop-shadow-2xl"
          />

        </div>

      </div>

      {/* 🔥 DIAGONAL LINES */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[140px] opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(120deg,transparent,transparent_60px,#f97316_60px,#f97316_62px)]"></div>
      </div>

    </section>
  );
}