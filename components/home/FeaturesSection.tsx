"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  return (
    <section className="relative py-32 bg-[#F3F3F3] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        {/* 🔥 TOP CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE (TALL) */}
          <div className="relative flex justify-center">

            <img
              src="/images/feature/lift-vertical.png"
              className="w-[260px] object-contain"
              alt="vertical lift"
            />

            {/* LABEL */}
            <div className="absolute bottom-20 bg-white px-4 py-2 rounded-lg shadow text-sm">
              17-ft 4-in working height
            </div>

          </div>

          {/* RIGHT TEXT */}
          <div>

            <h2 className="font-[var(--font-bebas)] text-[64px] leading-[1.1] text-black">
              INTRODUCING THE NEW 1230P—LET US TAKE YOU HIGHER
            </h2>

            <h3 className="mt-6 text-xl font-semibold text-black">
              Featuring a working height of 17-ft 4-in.
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
              Give your team, and your business, a fresh perspective with the latest JLG® low-level access lift.
              360-degree, hands-free access to work, a robust elevating work platform to take all your tools to height,
              and a secure system to minimize risks to worker safety and your bottom line.
            </p>

          </div>

        </div>

        {/* 🔥 BOTTOM VISUAL SECTION */}
        <div className="relative mt-28">

          {/* BACKGROUND CIRCLES */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
            <div className="w-[600px] h-[600px] border border-orange-300 rounded-full"></div>
          </div>

          {/* MAIN IMAGE */}
          <motion.img
            src="/images/feature/lift-main.png"
            className="relative z-10 mx-auto w-[500px] object-contain"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* 🔥 FLOATING FEATURE CARDS */}

          {/* CARD 1 */}
          <div className="absolute left-[10%] top-[20%] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-orange-500">🔒</span>
            <p className="text-sm">Auto-lock brakes upon elevation</p>
          </div>

          {/* CARD 2 */}
          <div className="absolute right-[10%] top-[40%] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-orange-500">🛡️</span>
            <p className="text-sm">Vertical rails for enhanced operator protection</p>
          </div>

          {/* CARD 3 */}
          <div className="absolute right-[5%] bottom-[10%] bg-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
            <span className="text-orange-500">↔️</span>
            <p className="text-sm">More maneuverability with improved easy-lock casters</p>
          </div>

        </div>

      </div>

      {/* 🔥 BACKGROUND BIG TEXT */}
      <div className="absolute bottom-10 left-10 text-[140px] font-black text-orange-100 pointer-events-none select-none">
        1230P
      </div>

      {/* 🔥 RIGHT SIDE ORANGE LINES */}
      <div className="absolute top-0 right-0 w-[35%] h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(120deg,transparent,transparent_80px,#f97316_80px,#f97316_82px)]"></div>
      </div>

    </section>
  );
}