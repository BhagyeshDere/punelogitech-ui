import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ClientLoader from "@/components/ui/ClientLoader"; // ✅ FIXED

/* 🔥 FONTS */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

/* 🔥 SEO METADATA */
export const metadata: Metadata = {
  title: "Pune Logitech | Crane & Equipment Rental",
  description:
    "Pune Logitech provides advanced crane rental, lifting equipment, and industrial solutions for construction and logistics.",
  keywords: [
    "crane rental Pune",
    "boom lift",
    "hydra crane",
    "industrial equipment",
    "material handling",
  ],
};

/* 🔥 ROOT LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-black antialiased">

        {/* 🔥 GLOBAL LOADER */}
        <ClientLoader />

        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 MAIN CONTENT */}
        <main className="flex-1 relative z-10">
          {children}
        </main>

        {/* 🔥 FOOTER */}
        <Footer />

        {/* 🔥 WHATSAPP BUTTON */}
        <WhatsAppButton />

      </body>
    </html>
  );
}