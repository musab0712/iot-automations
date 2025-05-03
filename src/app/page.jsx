"use client";
import TestimonialsSlider from "@/components/common/Testimonial";
import FeaturesSection from "@/components/home/FeatureSection";
import Hero from "@/components/home/Hero";
import Why from "@/components/home/why";

export default function Home() {
  return (
    <>
      <Hero />
      <Why />
      <FeaturesSection />
      <TestimonialsSlider />
    </>
  );
}
