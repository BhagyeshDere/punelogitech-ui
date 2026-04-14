"use client";

export default function FamilySection() {
  return (
    <section className="relative py-32 bg-[#F3F3F3] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">

        {/* 🔥 LEFT SIDE */}
        <div>

          {/* HEADING */}
          <h2 className="font-[var(--font-bebas)] text-[70px] leading-[0.95] text-black">
            EXPANDED FAMILY. <br /> EXPANDED <br /> POSSIBILITIES.
          </h2>

          {/* PARAGRAPH */}
          <p className="mt-8 text-gray-600 leading-relaxed max-w-xl">
            Expand your potential and extend your workspace with lifts that let you work comfortably at new heights. Designed for indoor work with tight spaces and sensitive surfaces, JLG® low-level access lifts can fit through single, standard doorways and let your team work safely at height with both hands and a 360-degree range of motion.
          </p>

          {/* FEATURES */}
          <div className="mt-10">
            <h3 className="font-semibold text-black mb-4">
              Enhanced Features
            </h3>

            <ul className="space-y-4 text-gray-700">

              {[
                "New, ergonomic steel platforms that provide easier access, better grip and more durability",
                "Punched platform holes for better visibility, drainage and air flow",
                "Vertical rail updates for enhanced protection",
                "Improved casters that are easier to lock and unlock, swivel and move",
                "Auto-lock brakes upon elevation",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">

                  {/* ICON */}
                  <span className="mt-1 text-orange-500">⬢</span>

                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>

        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="relative flex justify-center gap-10">

          {/* CARD 1 */}
          <div className="relative">

            {/* BACK PANEL */}
            <div className="absolute inset-0 bg-gray-200 rounded-xl -z-10"></div>

            {/* IMAGE */}
            <img
              src="/images/family/lift-50.png"
              className="w-[260px] relative z-10"
            />

            {/* TEXT */}
            <h3 className="absolute bottom-6 left-6 font-[var(--font-bebas)] text-3xl">
              ECOLIFT <br /> 50
            </h3>

          </div>

          {/* CARD 2 */}
          <div className="relative mt-20">

            {/* BACK PANEL */}
            <div className="absolute inset-0 bg-gray-200 rounded-xl -z-10"></div>

            {/* IMAGE */}
            <img
              src="/images/family/lift-70.png"
              className="w-[260px] relative z-10"
            />

            {/* TEXT */}
            <h3 className="absolute bottom-6 left-6 font-[var(--font-bebas)] text-3xl">
              ECOLIFT <br /> 70
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}