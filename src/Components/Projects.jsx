import React from "react";
import { ArrowUpRight } from "lucide-react";
import Doubledot from "./Doubledot";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Projects() {
  const ref = useRef();
  const projects = [
    {
      title: "Fashion E-Commerce App",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/VLhYk4xH/Frame-2147225541.png",
      src: "https://www.fiverr.com/users/fusecode/portfolio/Njg1Mjc3MGQwYjkyYmQwMDAxMzhmZTcx",
    },
    {
      title: "Smart Messaging App with AI Chat Features",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/wjDSYVgn/Frame-2147225541-1.png",
      src: "https://www.fiverr.com/users/fusecode/portfolio/Njg1Mjc2NGQ2NGQ0OWMwMDAxYWFhYTM3",
    },
    {
      title: "AI Food Delivery Website",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/y80wCPsw-/Frame-2147225541-2.png",
      src: "https://www.fiverr.com/users/fusecode/portfolio/NjgxODk4ZTcwNDlkMTAwMDAxOGJiYmQ3",
    },
    {
      title: "AI-Based Smart Home App",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/VkX3PRmW/Frame-2147225541-3.png",
      src: "https://www.fiverr.com/users/fusecode/portfolio/Njg1MmQ5NzM2NGQ0OWMwMDAxYWFjOTdj",
    },
  ];

  return (
    <section
      className="xl:py-20 py-10 xl:px-0 px-2 inter text-center"
      ref={ref}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-22">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Doubledot />
            <p className="text-[#222325] font-medium xl:text-3xl text-lg leading-[24px] ">
              Our Recent Projects
            </p>
          </div>
          <h2 className="xl:text-6xl text-2xl bricolage xl:leading-[76px] leading-[52px]  font-semibold text-[#222325] text-center">
            See How We Turn Complex <br></br> Ideas Into Powerful Solutions
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <a href={p.src} target="_blank" rel="noopener noreferrer" key={i}>
              {" "}
              <div
                
                className="relative group h-[663px] bg-white rounded-2xl shadow-md overflow-hidden transition hover:border-[#01C561] hover:border-2 hover:bg-[#cdf1df] border border-transparent"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className="relative rounded-2xl p-5">
                  <div className="rounded-xl overflow-hidden mb-5">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-[463px] object-cover transition-transform duration-300"
                    />
                  </div>

                  {/* ✅ Fixed hr hover effect */}
                  <hr className="mt-2 mb-5 border border-gray-400 group-hover:border-[#01C561] transition-all duration-200" />

                  <div className="flex items-center justify-between">
                    <div className="text-start">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                    </div>

                    {/* Arrow Button */}
                    <div className="flex justify-end">
                      <button className="p-2 rounded-full bg-[#01C561] text-white hover:bg-green-600 transition cursor-pointer">
                        <ArrowUpRight size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <a
            href="https://www.fiverr.com/users/fusecode/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-[#01C561] text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center mx-auto gap-2">
              View All Works <ArrowUpRight size={18} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
