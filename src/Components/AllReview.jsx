import React, { useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Doubledot from "./Doubledot";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function AllReview() {
  const ref = useRef();
  const testimonials = [
    {
      id: 1,
      name: "Luca_johe",
      location: "Cyprus",
      rating: 4,
      text: '"I am absolutely amazed by the AI mobile app this seller delivered. The app is smooth, fast, and packed with intelligent features that feel truly smart and intuitive. I especially appreciate how the AI provides personalized recommendations and automates tasks seamlessly."',
      color: "bg-emerald-500",
    },
    {
      id: 2,
      name: "Richard Sus",
      location: "United States",
      rating: 5,
      text: "\"I'm always impressed by his work, this is not the first time I've hired him, and he delivered flawlessly once again. The AI content video generator app works seamlessly with all AI voice functionalities. I will choose him again for future projects.\"",
      color: "bg-red-500",
    },
    {
      id: 3,
      name: "Adam Dain",
      location: "Canada",
      rating: 5,
      text: '"Outstanding support and a faultless app. created a mobile eCommerce app with AI that surpassed my expectations. I\'m very satisfied and will definitely hire again."',
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Adam Dain",
      location: "Canada",
      rating: 5,
      text: '"Outstanding support and a faultless app. created a mobile eCommerce app with AI that surpassed my expectations. I\'m very satisfied and will definitely hire again."',
      color: "bg-blue-500",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative max-w-screen-2xl mx-auto py-20" ref={ref}
>
      <div className="mb-22">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Doubledot />
          <p className="text-[#222325] font-medium text-3xl leading-[24px]">
            Reviews
          </p>
        </div>
        <h2 className="text-6xl leading-[76px]  font-semibold text-[#222325] text-center">
          Happy Customers on Fiverr
        </h2>
      </div>
      {/* Custom navigation buttons */}
      <button
        ref={prevRef}
        disabled={isBeginning}
        className={`absolute left-[-100px] top-2/3 -translate-y-1/2 z-10 p-3 rounded-full transition-opacity ${
          isBeginning ? "opacity-30 cursor-not-allowed" : "opacity-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        disabled={isEnd}
        className={`absolute right-[-100px] top-2/3 -translate-y-1/2 z-10 p-3 rounded-full transition-opacity ${
          isEnd ? "opacity-30 cursor-not-allowed" : "opacity-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          // Attach buttons after mount
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={(swiper) => {
          // Update button state
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        scrollbar={{ draggable: true }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className="bg-white w-[449px] h-[695px] rounded-4xl py-30 px-12 text-center " data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"

              style={{ clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)" }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center mb-6`}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-gray-900 text-lg">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-orange-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {testimonial.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
