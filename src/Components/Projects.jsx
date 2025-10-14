import React from "react";
import { ArrowUpRight } from "lucide-react";
import Doubledot from "./Doubledot";

export default function Projects() {
  const projects = [
    {
      title: "Fashion E-Commerce App",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/VLhYk4xH/Frame-2147225541.png",
    },
    {
      title: "Smart Messaging App with AI Chat Features",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/wjDSYVgn/Frame-2147225541-1.png",
    },
    {
      title: "AI Food Delivery Website",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/y80wCPsw-/Frame-2147225541-2.png",
    },
    {
      title: "AI-Based Smart Home App",
      desc: "Your go-to platform for discovering and purchasing the latest trends.",
      img: "https://i.postimg.cc/VkX3PRmW/Frame-2147225541-3.png",
    },
  ];

  return (
    <section className="py-20 text-center">
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-22">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Doubledot />
            <p className="text-[#222325] font-medium text-3xl leading-[24px]">
              Our Recent Projects
            </p>
          </div>
          <h2 className="text-6xl leading-[76px]  font-semibold text-[#222325] text-center">
            See How We Turn Complex <br></br> Ideas Into Powerful Solutions
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden group transition  hover:border-[#01C561] hover:border-2   hover:bg-[#cdf1df] border border-transparent  "
            >
              <div className="relative rounded-2xl  p-5">
                <div className="rounded-xl overflow-hidden mb-5">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-52 object-cover transition-transform duration-300 "
                  />
                </div>
                <hr className="mt-2 mb-5 border-b-0.5 border-gray-400 "></hr>
                <div className="flex items-center justify-between">
                  <div className="text-start">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{p.desc}</p>
                  </div>

                  {/* Arrow Button */}
                  <div className="flex justify-end">
                    <button className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition cursor-pointer">
                      <ArrowUpRight size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center mx-auto gap-2">
            View All Works <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
