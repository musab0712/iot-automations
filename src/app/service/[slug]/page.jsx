import Banner from "@/components/common/Banner";
import Cta from "@/components/common/Cta";
import FAQ from "@/components/common/Faq";
import TestimonialsSlider from "@/components/common/Testimonial";
import Services from "@/components/services/Services";
//import services from "@/data/ourServices";
import { ServiceDetailPage } from "@/data/ServiceDetailPage";
import ServicesArea from "./ServicesArea";

export default function page({ params }) {
  const { slug } = params;
  const service = ServiceDetailPage.find((s) => s.slug === slug);
  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-700">
        <h1 className="text-2xl font-semibold">Service Not Found</h1>
      </div>
    );
  }
  return (
    <main>
      <Banner
        videoSrc="/videos/about-us.mp4"
        headline="Our Service"
        subheadline="Discover the Future of Automotive Technology with IoT Auto Hub"
      />
      <ServicesArea product={service} />
      <Cta />
      <TestimonialsSlider />
      <FAQ />
    </main>
  );
}
