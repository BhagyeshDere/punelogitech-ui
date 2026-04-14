"use client";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#F3F3F3]">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🔥 MAIN CARD */}
        <div className="relative bg-gradient-to-r from-[#ff7a00] to-[#ff5a00] rounded-2xl px-20 py-16 overflow-hidden">

          {/* 🔥 HEX PATTERN RIGHT (FIXED) */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-0 top-0 w-full h-full">

              {/* BIG */}
              <div className="absolute right-24 top-10 w-[320px] h-[320px] border-2 border-white opacity-60 rotate-[25deg]"></div>

              {/* MEDIUM */}
              <div className="absolute right-16 top-24 w-[260px] h-[260px] border-2 border-white opacity-50 rotate-[25deg]"></div>

              {/* SMALL */}
              <div className="absolute right-8 top-40 w-[200px] h-[200px] border-2 border-white opacity-40 rotate-[25deg]"></div>

              {/* EXTRA LINE FOR DEPTH */}
              <div className="absolute right-0 bottom-0 w-[400px] h-[200px] border-t-2 border-l-2 border-white opacity-30 rotate-[25deg]"></div>

            </div>
          </div>

          {/* 🔥 CONTENT */}
          <div className="relative max-w-2xl">

            {/* HEADING */}
            <h2 className="font-[var(--font-bebas)] text-[60px] leading-[0.95] text-black tracking-tight">
              READY TO SEE THE <br />
              DIFFERENCE JLG CAN <br />
              MAKE FOR YOUR TEAM?
            </h2>

            {/* TEXT */}
            <p className="mt-6 text-black/80 text-lg leading-relaxed max-w-xl">
              Discover the many advantages of low-level access lifts for
              your team and your business.
            </p>

            {/* BUTTON */}
            <button className="mt-10 px-12 py-4 border-2 border-white rounded-full font-semibold tracking-wide text-black bg-transparent hover:bg-white transition-all duration-300">
              REACH OUT
            </button>

          </div>

        </div>

        {/* 🔥 JLG LOGO */}
        <div className="flex justify-center mt-20">
          <h1 className="text-[64px] font-black text-orange-500 tracking-wide">
            JLG
          </h1>
        </div>

      </div>

    </section>
  );
}