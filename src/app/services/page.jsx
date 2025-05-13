import Banner from "@/components/common/Banner";
import Cta from "@/components/common/Cta";
import FAQ from "@/components/common/Faq";
import TestimonialsSlider from "@/components/common/Testimonial";
import Services from "@/components/services/Services";

export default function page() {
  return (
    <main>
      <Banner
        videoSrc="/videos/about-us.mp4"
        headline="Our Services"
        subheadline="Discover the Future of Automotive Technology with IoT Auto Hub"
      />
      <Services />
      <Cta />
      <TestimonialsSlider />
      <FAQ />
    </main>
  );
}
