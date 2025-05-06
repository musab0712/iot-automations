"use client";
import FAQ from "@/components/common/Faq";
import TestimonialsSlider from "@/components/common/Testimonial";
import FeaturesSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import Why from "@/components/home/why";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSlider />
      <FAQ />
    </>
  );
}
