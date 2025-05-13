import Banner from "@/components/common/Banner";
import ContactUsSection from "@/components/common/ContactUs";
import TestimonialsSlider from "@/components/common/Testimonial";

export default function ContactUs() {
  return (
    <main>
      <Banner
        videoSrc="/videos/about-us.mp4"
        headline="Contact Us"
        subheadline="Discover the Future of Automotive Technology with IoT Auto Hub"
      />
      <ContactUsSection />
      <TestimonialsSlider />
    </main>
  );
}
