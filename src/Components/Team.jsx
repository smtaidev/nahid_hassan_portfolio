import React from "react";
import Doubledot from "./Doubledot";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Team() {
  const ref = useRef();
  return (
    <section className="xl:py-16 py-4 inter xl:h-[1012px]" ref={ref}>
      <div className="max-w-screen-2xl mx-auto  flex flex-col lg:flex-row gap-16 items-center">
        {/* Left content */}
        <div className="lg:w-1/2 space-y-11 xl:pl-0 pl-2">
          <p className="text-[#222325] xl:text-3xl text-lg font-medium flex items-center ">
            <Doubledot />
            Our Team
          </p>
          <h2 className="xl:text-6xl text-2xl bricolage font-semibold text-[#222325] xl:leading-[76px] leading-[50px] ">
            Meet Our Innovative Skilled Team Members
          </h2>
          <p className="text-xl leading-[1.6] text-[#353535]">
            At Fusecode Agency, our mission is to push the boundaries of
            innovation, much like the blind texts that live far behind the word
            mountains, separated by vast digital realms. We aim to harness the
            power of AI, seamlessly blending technology with human experience.
            From the heart of our digital world, we create intelligent solutions
            that bridge gaps, simplify complexity, and drive meaningful change
            for businesses worldwide.
          </p>
          <a
            href="https://www.fiverr.com/fusecode"
            target="_blank"
            rel="noopener noreferrer"
          >
             <button className=" shadow-none border-none px-6 py-3   bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2">
              
              
              Hire Us on Fiverr{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </a>
        </div>

        {/* Right content - scrollable team pictures with fade effect */}
        <div
          className="lg:w-1/2 relative "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* Top fade */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable list */}
          <div
            className="h-[820px] overflow-y-auto space-y-6 scrollbar-hide pr-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="grid grid-cols-2 gap-6 ">
              {/* Rajib Hosen - Small card, top right */}
              {/* Rajib Hosen */}
              <div className="bg-white p-4 col-span-1 xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-10">
                <img
                  src="https://i.postimg.cc/vTshBgJ7/Frame-2147226968.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">UI/UX Designer</p>
                </div>
              </div>

              {/* Mehedi Hasan */}
              <div className="bg-white p-4 col-span-1  xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-10">
                <img
                  src="https://i.postimg.cc/YCH7HbDj/image.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Mehedi Hasan
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">Web Developer</p>
                </div>
              </div>

              {/* Maudud Ahmed */}
              <div className="bg-white p-4 col-span-1  xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-10">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                   Maudud Ahmed
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* Peter Simons */}
              <div className="bg-white p-4 col-span-1  xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-10">
                <img
                  src="https://i.postimg.cc/Hngzxcq7/Frame-2147226969-2.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* John Doe */}
              <div className="bg-white p-4 col-span-1  xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-10">
                <img
                  src="https://i.postimg.cc/hvBsjzkb/Frame-2147226969-1.png"
                  alt="John Doe "
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    John Doe 
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">Sales Department</p>
                </div>
              </div>

              {/* Jane Smith */}
              <div className="bg-white p-4 col-span-1  xl:h-[476px] h-[500px] xl:w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-10">
                <img
                  src="https://i.postimg.cc/vTshBgJ7/Frame-2147226968.png"
                  alt="Jane Smith"
                  className="w-full h-[370px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Jane Smith
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">Web Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
