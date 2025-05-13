import Banner from "@/components/common/Banner";
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
    </main>
  );
}
