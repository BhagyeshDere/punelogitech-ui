"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200/60">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔥 Logo */}
        <h1 className="text-3xl font-black text-orange-500 tracking-wide">
          JLG
        </h1>

        {/* 🔥 Center Pill Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          
          <div className="flex items-center gap-10 bg-gray-100/80 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-gray-200">

            <a className="text-sm font-semibold tracking-wider text-gray-700 hover:text-black transition">
              MODELS
            </a>

            <a className="text-sm font-semibold tracking-wider text-gray-700 hover:text-black transition">
              APPLICATIONS
            </a>

            <a className="text-sm font-semibold tracking-wider text-gray-700 hover:text-black transition">
              BY THE NUMBERS
            </a>

            {/* 🔥 CTA inside pill */}
            <button className="ml-2 bg-cyan-400 text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-cyan-300 transition">
              CONTACT US
            </button>

          </div>

        </div>

        {/* Mobile Button */}
        <button className="md:hidden bg-cyan-400 px-4 py-2 rounded-full text-sm font-bold">
          Contact
        </button>

      </div>
    </nav>
  );
}