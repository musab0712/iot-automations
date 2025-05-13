import AutomationCalculator from "@/components/common/AutomationCalculater";
import Banner from "@/components/common/Banner";

export default function Calculater() {
  return (
    <main>
      <Banner
        videoSrc="/videos/about-us.mp4"
        headline="IoT Auto Hub Calculator"
        subheadline="Discover the Future of Automotive Technology with IoT Auto Hub"
      />
      <AutomationCalculator />
    </main>
  );
}
