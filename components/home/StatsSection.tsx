"use client";

import { Calendar, TrendingUp } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-32 bg-[#F3F3F3]">

      <div className="max-w-7xl mx-auto px-8">

        {/* 🔥 HEADING */}
        <h2 className="text-center font-[var(--font-bebas)] text-[56px] mb-16">
          A LOOK AT THE NUMBERS
        </h2>

        {/* 🔥 MAIN GRID */}
        <div className="grid grid-cols-3 grid-rows-2 gap-6">

          {/* 🔥 LEFT TALL CARD */}
          <div className="bg-white rounded-2xl p-10 row-span-2 flex flex-col justify-between min-h-[420px]">

            <div className="text-orange-500 text-6xl">💰</div>

            <div>
              <h3 className="text-[48px] font-black">$132,377</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Average compensation cost for injuries caused by falls from height.
              </p>
            </div>

          </div>

          {/* 🔥 TOP CENTER */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[200px]">

            <div className="flex justify-between items-center">
              <h3 className="text-[40px] font-black">22 Days</h3>
              <Calendar size={28} />
            </div>

            <p className="text-gray-600 mt-4">
              Average days away from work for an injury caused by a fall from height.
            </p>

          </div>

          {/* 🔥 TOP RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden h-[200px]">
            <img
              src="/images/stats/img2.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🔥 BOTTOM CENTER IMAGE */}
          <div className="rounded-2xl overflow-hidden h-[200px]">
            <img
              src="/images/stats/img1.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🔥 BOTTOM RIGHT BIG CARD */}
          <div className="bg-white rounded-2xl p-8 flex items-center gap-6 h-[200px]">

            {/* ICON */}
            <TrendingUp className="text-cyan-300 w-14 h-14" />

            {/* TEXT */}
            <div>
              <h3 className="text-[48px] font-black leading-tight">
                3x <br /> Faster
              </h3>

              <p className="text-gray-600 mt-2">
                Average productivity gains for tasks completed with low-level access products.
              </p>
            </div>

          </div>

        </div>

        {/* 🔥 BUTTON */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 border border-orange-500 rounded-full font-semibold tracking-wide hover:bg-orange-500 hover:text-black transition-all">
            DOWNLOAD THE INFOGRAPHIC
          </button>
        </div>

      </div>

    </section>
  );
}