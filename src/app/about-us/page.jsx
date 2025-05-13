"use client";
import Banner from "@/components/common/Banner";
import Cta from "@/components/common/Cta";
import MissionAndVisonSection from "@/components/common/MissionAndVisionSection";
import TestimonialsSlider from "@/components/common/Testimonial";
import WhatWeDoSection from "@/components/common/WhatWeDoSection";

export default function AboutUs() {
  return (
    <main>
      <Banner
        videoSrc="/videos/about-us.mp4"
        headline="About Us"
        subheadline="Discover the Future of Automotive Technology with IoT Auto Hub"
      />
      <WhatWeDoSection />
      <MissionAndVisonSection />
      <Cta />
      <TestimonialsSlider />
    </main>
  );
}
