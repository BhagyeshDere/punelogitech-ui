"use client";

export default function IndustriesSection() {
  return (
    <section className="py-32 bg-[#F3F3F3]">

      {/* 🔥 CENTER CARD */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

          {/* 🔥 DARK BACKGROUND */}
          <div className="absolute inset-0 bg-[#020617]"></div>

          {/* 🔥 GRADIENT GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900 opacity-80"></div>

          {/* 🔥 PATTERN */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_60px,#f97316_60px,#f97316_62px)]"></div>

          {/* 🔥 CONTENT */}
          <div className="relative px-12 py-16 grid md:grid-cols-2 gap-16 text-white">

            {/* LEFT */}
            <div>

              <h2 className="font-[var(--font-bebas)] text-[56px] leading-[0.95]">
                RETHINK HOW <br /> YOUR WORK GETS <br /> DONE
              </h2>

              <p className="mt-6 text-gray-300 leading-relaxed max-w-md">
                Whether it's fit-out work, end-of-construction work, facility maintenance,
                electrical or manufacturing—your team can do it safely, efficiently and
                comfortably with an industrial work platform from JLG.
              </p>

              {/* BUTTON */}
              <button className="mt-10 px-8 py-4 border border-orange-500 rounded-full text-white font-semibold tracking-wide hover:bg-orange-500 hover:text-black transition-all duration-300">
                DOWNLOAD THE BROCHURE
              </button>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-y-10 gap-x-10">

              {[
                "Industrial and commercial construction",
                "Mechanical and electrical trades",
                "Data centers",
                "Facility maintenance",
                "Food processing and manufacturing",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">

                  {/* ORANGE LINE */}
                  <div className="w-[3px] h-6 bg-orange-500 mt-2"></div>

                  <p className="text-lg text-white">{item}</p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}