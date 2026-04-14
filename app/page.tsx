import Hero from "@/components/home/Hero";
import VideoSection from "@/components/home/VideoSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FamilySection from "@/components/home/FamilySection";
import ProductShowcase from "@/components/home/ProductShowcase";
import IndustriesSection from "@/components/home/IndustriesSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 VIDEO */}
      <section className="relative z-10">
        <VideoSection />
      </section>

      {/* 🔥 FEATURES */}
      <section className="relative z-10">
        <FeaturesSection />
      </section>

      {/* 🔥 FAMILY */}
      <section className="relative z-10">
        <FamilySection />
      </section>

      {/* 🔥 PRODUCTS */}
      <section className="relative z-10">
        <ProductShowcase />
      </section>

      {/* 🔥 INDUSTRIES */}
      <section className="relative z-10">
        <IndustriesSection />
      </section>

      {/* 🔥 STATS */}
      <section className="relative z-10">
        <StatsSection />
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="relative z-10 pb-10">
        <CTASection />
      </section>

    </main>
  );
}