import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FamilySection from "@/components/home/FamilySection";
import ProductShowcase from "@/components/home/ProductShowcase";
import IndustriesSection from "@/components/home/IndustriesSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection"; // ✅ ADD THIS

export default function Home() {
  return (
    <>
      <Hero />

      <VideoSection />

      <FeaturesSection />

      <FamilySection />

      <ProductShowcase />

      <IndustriesSection />

      <StatsSection />

      <CTASection /> {/* 🔥 FINAL CTA SECTION */}
    </>
  );
}