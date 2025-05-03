"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Farha M.",
    role: "CTO, Tech Innovations",
    avatar: "/avatars/1.png",
    quote: `We implemented the IoT sensors for our industrial equipment, and the results have been incredible...`,
  },
  {
    name: "Samuel",
    role: "Freelancer",
    avatar: "/avatars/2.png",
    quote: `The IoT gateway and sensors we purchased have been a game-changer for our operations...`,
  },
  {
    name: "Priya K.",
    role: "Facility Manager, SmartSpaces",
    avatar: "/avatars/3.png",
    quote: `We integrated IoT Auto Hub's automation into our smart building, and the energy savings were immediate...`,
  },
  {
    name: "John D.",
    role: "Owner, JD Farms",
    avatar: "/avatars/2.png",
    quote: `I use their automation system for irrigation. It's saving water and effort...`,
  },
  {
    name: "Amina Y.",
    role: "Operations Lead, GreenTech",
    avatar: "/avatars/3.png",
    quote: `Thanks to IoT Auto Hub, our plant automation is now seamless...`,
  },
];

export default function TestimonialsSlider() {
  return (
    <section className=" font-playfair relative bg-[#111827] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-1/2">
            <h4 className="text-blue-400 text-2xl font-medium mb-2">
              Testimonial
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Kind Words
              <br />
              from our Customers
            </h2>
          </div>
          <div className="w-1/2 hidden md:block">
            <div className="flex justify-end gap-4 mt-24 pr-4 ">
              <button className="prev-button w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                &larr;
              </button>
              <button className="next-button w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
                &rarr;
              </button>
            </div>
          </div>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 p-8 shadow-xl flex flex-col justify-between h-full">
                  <div className="text-yellow-400 text-4xl md:text-6xl mb-2">
                    “
                  </div>
                  <p className="text-white text-lg leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-bold text-xl">{t.name}</h4>
                      <p className="text-base text-gray-400">{t.role}</p>
                    </div>
                    <div className="ml-auto bg-white/90 px-3 py-1 rounded-full text-yellow-500 font-bold text-sm flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons
        <div className="flex justify-end gap-4 mt-6 pr-4">
          <button className="prev-button w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            &larr;
          </button>
          <button className="next-button w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition">
            &rarr;
          </button>
        </div> */}
      </div>
    </section>
  );
}
