"use client";

export default function Footer() {
  return (
    <footer className="bg-[#F3F3F3] py-16 border-t">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* 🔥 TOP LINKS */}
        <div className="flex justify-center gap-10 text-black font-medium mb-10">

          <a href="#" className="hover:text-orange-500 transition">
            Global Home
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Terms of Use
          </a>

        </div>

        {/* 🔥 DESCRIPTION */}
        <p className="text-gray-600 text-sm leading-relaxed max-w-4xl mx-auto">
          JLG Industries, Inc. is the world's leading designer, manufacturer and
          marketer of access equipment. The Company's diverse product portfolio
          includes leading brands such as JLG® mobile elevating work platforms;
          JLG and SkyTrak® telehandlers, and an array of complementary accessories
          that increase the versatility and efficiency of these products. JLG is
          an Oshkosh Corporation Company [NYSE: OSK].
        </p>

        {/* 🔥 COPYRIGHT */}
        <p className="mt-10 text-sm text-gray-500">
          Copyright © 2026 JLG INDUSTRIES
        </p>

      </div>

    </footer>
  );
}