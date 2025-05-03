import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const features = [
  {
    title: "Complete Automation Proficiency",
    icon: "🌟", // You can replace with a real SVG or image
    description: `We offer a holistic approach to automation, catering to a diverse range of needs: Water Automation Solutions, Building Automation, Electrical Panel Automation, Customized Automation Solutions and IT Services.`,
  },
  {
    title: "Perfect For All",
    icon: "👤",
    description: `Our smart automation solutions are designed for everyone – whether it’s a home, hospital, factory, office, or building. Easy to use, cost-saving, and made to fit all needs. We ensure that our solutions are accessible and beneficial for all types of users.`,
  },
  {
    title: "Easy To Install",
    icon: "👍💰",
    description: `Our systems are easy to install with minimal wiring, no major changes, and quick setup—ready to use in no time. This means less hassle and more savings for you.`,
  },
  {
    title: "24/7 Support",
    icon: "🛠️⏰",
    description: `We’re always available, day and night, to ensure your systems run smoothly. Whether it's a technical issue or a quick question, our expert team is ready to assist you anytime with fast, reliable, and friendly service. Your peace of mind is our priority.`,
  },
  {
    title: "Customer-Centric Approach",
    icon: "👍💰",
    description: `At IoT Auto Hub, we believe that every client is unique. Our dedicated team works closely with you to: Understand your specific challenges, Design and implement solutions tailored to your needs, and Provide ongoing support and maintenance for seamless operations.`,
  },
  {
    title: "User-Friendly & Reliable Support",
    icon: "👤",
    description: `Clients value easy-to-use interfaces and reliable customer support. Iot auto hub services include intuitive dashboards, mobile access, and round-the-clock assistance to ensure seamless automation. Our team is always ready to help, ensuring you get the most out of your automation experience.`,
  },
  {
    title: "Future-Proof Technology & Integration",
    icon: "👍💰",
    description: `IoT auto hub automation is built on the latest technology, ensuring compatibility with existing systems and future innovations. Whether it’s AI-driven analytics, cloud integration, or smart sensors, your solutions keep businesses ahead of the competition.`,
  },
];

export default function FeaturesSection() {
  return (
    <div className=" font-playfair lg:px-24 px-6 md:px-12 relative overflow-hidden bg-white py-12 text-center">
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-bottom bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('/features/wood-bg.svg')" }}
      ></div>

      <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
        We Are Expert In IOT Automation
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto my-4 rounded"></div>
      <p className="max-w-2xl mx-auto text-gray-800 mb-8 md:mb-12 px-4 text-xl">
        In an era where efficiency, sustainability, and precision are paramount,
        IoT Auto Hub emerges as your trusted partner in transforming operations
        through advanced automation solutions.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {features.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#e3e7ec] h-[400px] shadow-md rounded-xl p-6 mx-4 flex flex-col justify-start">
              <div className="text-5xl text-blue-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold my-4 text-blue-700">
                {item.title}
              </h3>
              <p className="text-base text-gray-800">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
