"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhoneCall, ArrowRight, Shield, Mail } from "lucide-react";

export default function CTASection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={containerRef} className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#0F172A] rounded-[2.5rem] px-8 md:px-20 py-20 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5)] border border-white/5"
        >
          
          {/* 🧩 DYNAMIC BACKGROUND ARCHITECTURE */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-blue-600/10 blur-[100px]" />
            
            <motion.div 
              style={{ y: y1 }}
              className="absolute right-0 top-0 w-full h-full opacity-20"
            >
              <div className="absolute right-20 top-12 w-[400px] h-[400px] border-[0.5px] border-cyan-400/30 rounded-full rotate-12" />
              <div className="absolute right-10 top-32 w-[300px] h-[300px] border-[0.5px] border-cyan-400/20 rounded-full rotate-12" />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" 
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="max-w-2xl text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-6"
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Shield className="w-4 h-4 text-cyan-400" />
                </div>
                <p className="text-cyan-400 tracking-[0.5em] text-[11px] font-black uppercase italic">
                  12 Years of Excellence
                </p>
              </motion.div>

              {/* FONT UPDATED TO SIMPLE BOLD */}
              <h2 className="font-black text-[45px] md:text-[75px] leading-[0.95] text-white tracking-tighter mb-8">
                READY TO LIFT YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">NEXT PROJECT?</span>
              </h2>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                Secure high-performance crane assets and technical expertise. 
                Our deployment teams are ready to scale with your project demands.
              </p>

              {/* DEVELOPER CREDIT FOOTER */}
              <div className="mt-12 flex flex-col sm:flex-row items-center lg:justify-start gap-6 text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">
                <p>© 2026 PUNE LOGITECH</p>
                <span className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full" />
                <p>Developed by Qiro Tech Innovation Pvt. Ltd.</p>
              </div>
            </div>

            {/* ACTION ZONE */}
            <div className="flex flex-col gap-4 w-full sm:w-auto">
              <motion.a
                href="tel:+918554981742"
                whileHover={{ scale: 1.05, backgroundColor: "#06b6d4", color: "#000" }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)]"
              >
                <PhoneCall className="w-4 h-4" />
                +91 8554981742
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.a>

              <motion.a
                href="mailto:info@punelogitech.in"
                whileHover={{ scale: 1.05, border: "1px solid rgba(255,255,255,0.4)" }}
                className="flex items-center justify-center gap-4 px-10 py-5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-widest transition-all bg-white/5 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                info@punelogitech.in
              </motion.a>
            </div>

          </div>

          {/* SCANLINE EFFECT */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-scan" />
          
          {/* FONT UPDATED TO SIMPLE BOLD */}
          <div className="absolute -bottom-6 -right-6 font-black text-[120px] text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none uppercase">
            LOGITECH
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}