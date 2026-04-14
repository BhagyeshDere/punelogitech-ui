"use client";

export default function VideoSection() {
  return (
    <section className="relative py-28 bg-[#F3F3F3] overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 px-8">

        {/* 🔥 LEFT CONTENT */}
        <div>

          <h2 className="font-[var(--font-bebas)] text-[64px] leading-[1] text-black mb-6">
            A BETTER CHOICE <br /> FROM ANY ANGLE
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            It’s time to look at the job differently, because it doesn’t pay to stay the same. 
            You need new ways to reduce long-term costs associated with ladder and scaffolding 
            injuries or falls. Your team needs smarter, safer ways to get work done.
          </p>

        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="relative">

          {/* 🔥 BACKGROUND BLOCK */}
          <div className="absolute -left-10 top-10 w-full h-full bg-gray-200 rounded-xl z-0"></div>

          {/* 🔥 VIDEO CARD */}
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">

            <iframe
              className="w-full h-[360px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="JLG Video"
              allowFullScreen
            />

          </div>

        </div>

      </div>

      {/* 🔥 RIGHT SIDE ORANGE LINES */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[repeating-linear-gradient(120deg,transparent,transparent_80px,#f97316_80px,#f97316_82px)]"></div>
      </div>

    </section>
  );
}