"use client";

export default function ProductShowcase() {
  return (
    <section className="relative py-40 bg-[#F3F3F3] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-start">

          {/* 🔥 LEFT CARD */}
          <div className="relative mt-20">
            <div className="relative w-[320px] h-[620px]">

              {/* PANEL */}
              <div className="absolute inset-0 bg-[#ECECEC] rounded-3xl"></div>

              {/* PATTERN */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_50px,#00000020_50px,#00000020_52px)] rounded-3xl"></div>

              {/* TEXT (LEFT SIDE) */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
                <h3 className="font-[var(--font-bebas)] text-[38px] leading-tight text-black">
                  830P <br /> PUSH <br /> AROUND <br /> LIFT
                </h3>
              </div>

              {/* IMAGE (RIGHT SIDE) */}
              <img
                src="/images/products/lift-830.png"
                className="absolute bottom-0 right-0 h-[520px] object-contain z-10"
              />

            </div>
          </div>

          {/* 🔥 CENTER CARD (REVERSED) */}
          <div className="relative -mt-10 z-10">
            <div className="relative w-[360px] h-[700px]">

              {/* PANEL */}
              <div className="absolute inset-0 bg-[#ECECEC] rounded-3xl"></div>

              {/* PATTERN */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_50px,#00000020_50px,#00000020_52px)] rounded-3xl"></div>

              {/* IMAGE (LEFT SIDE) */}
              <img
                src="/images/products/lift-1030.png"
                className="absolute bottom-0 left-0 h-[600px] object-contain z-10"
              />

              {/* TEXT (RIGHT SIDE) */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right z-20">
                <h3 className="font-[var(--font-bebas)] text-[46px] leading-tight text-black">
                  1030P <br /> PUSH <br /> AROUND <br /> LIFT
                </h3>
              </div>

            </div>
          </div>

          {/* 🔥 RIGHT CARD */}
          <div className="relative mt-32">
            <div className="relative w-[320px] h-[640px]">

              {/* PANEL */}
              <div className="absolute inset-0 bg-[#ECECEC] rounded-3xl"></div>

              {/* PATTERN */}
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(135deg,transparent,transparent_50px,#00000020_50px,#00000020_52px)] rounded-3xl"></div>

              {/* TEXT (LEFT SIDE) */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
                <h3 className="font-[var(--font-bebas)] text-[38px] leading-tight text-black">
                  1230P <br /> PUSH <br /> AROUND <br /> LIFT
                </h3>
              </div>

              {/* IMAGE (RIGHT SIDE) */}
              <img
                src="/images/products/lift-1230.png"
                className="absolute bottom-0 right-0 h-[560px] object-contain z-10"
              />

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}