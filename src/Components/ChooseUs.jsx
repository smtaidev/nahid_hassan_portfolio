import React from "react";
import { Sparkles, Settings, Handshake, TrendingUp } from "lucide-react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function ChooseUs() {
  const ref = useRef();
  const imgRef = useRef(null);
  const features = [
    {
      icon: Sparkles,
      title: "Always Innovating",
      description:
        "We don't just follow trends — we create them. Our team thrives on exploring new technologies and creative solutions so you always stay one step ahead of the curve.",
      color: "bg-emerald-500",
    },
    {
      icon: Settings,
      title: "Powered by AI",
      description:
        "Smart businesses need smart solutions. By leveraging the latest in AI, we make your software faster, smarter, and more efficient—giving you results that truly matter.",
      color: "bg-yellow-500",
    },
    {
      icon: Handshake,
      title: "Human-Centered Design",
      description:
        "A great website is one people love to use it. That's why we focus on clean, intuitive, and user-friendly design that makes technology feel effortless.",
      color: "bg-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Your Growth is Our Goal",
      description:
        "We measure success by the impact we create for you. Every strategy, every tool, and every solution we build is driven by one core mission: helping your business thrive.",
      color: "bg-blue-500",
    },
  ];

  return (
    <section className="relative inter xl:py-30 py-10  mx-2 lg:max-w-screen-xl xl:mx-auto" ref={ref}>
      <div>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6 relative w-[286px] mx-auto">
            <div className="w-9 h-9 bg-[#01C561] rounded-full z-50 " />
            <div className="w-9 h-9 bg-[#00ff7b42] rounded-full absolute z-0 left-5" />

            <span className="text-[#222325]  font-medium xl:text-3xl text-xl ml-4">
              Why Choose Us
            </span>
          </div>
          <h2 className="xl:text-6xl text-2xl bricolage font-semibold text-[#222325] xl:leading-[76px] leading-[35px]">
            Smart AI Solutions<br></br>
            You Can Trust on Fiverr
          </h2>
        </div>

        {/* Content Grid */}
        <div className=" xl:grid flex-row xl:grid-cols-12 grid-cols-1 gap-10 pt-12">
          {/* Left - Image */}

          <div
            className="lg:h-[762px] xl:col-span-5 rounded-2xl overflow-hidden shadow-xl xl:mb-0 mb-5"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            ref={imgRef}
          >
            <img
              src="https://i.postimg.cc/Y9FzcbWP/10f4b2fee12f7a842069282a27eb9ad7fe6e5f08.jpg"
              alt="Professional developer"
              className="h-full"
            />
          </div>

          {/* Right - Feature Cards */}
          <div
            className="xl:col-span-7 lg:h-[600px]"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow hover:border-[#01C561] hover:border-1 "
                >
                  <div
                    className={`${feature.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="xl:text-2xl text-lg font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#353535] leading-relaxed xl:text-xl text-md">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
