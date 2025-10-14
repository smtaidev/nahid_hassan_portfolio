import React from "react";
import Doubledot from "./Doubledot";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function About() {
   const ref = useRef();
  return (
    <section className="relative inter max-w-screen-2xl mx-auto overflow-hidden py-30" ref={ref} >
      <div className="relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Doubledot />
              <span className="text-[#222325] text-3xl font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-6xl bricolage font-semibold text-[#222325] leading-[76px] text-balance mb-8">
              Empowering Your Business with Innovative Software Solutions
            </h2>

            <p className="text-[#353535] leading-[1.6] text-lg ">
              At Fusecode Agency, our mission is to push the boundaries of
              innovation, much like the blind texts that live far behind the
              word mountains, separated by vast digital realms. We aim to
              harness the power of AI, seamlessly blending technology with human
              experience. From the heart of our digital world, we create
              intelligent solutions that bridge gaps, simplify complexity, and
              drive meaningful change for businesses worldwide.
            </p>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 w-[696px] bricolage" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
>
            {/* Level 2 */}
            <div className="relative px-13 py-15  text-end">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                Level 2
              </div>
              <div className="text-gray-600">Fiverr Seller</div>
              <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-[#F4F4F4] to-green-500"></span>
            </div>

            {/* 100+ Reviews */}
            <div className="relative px-13 py-15   text-start">
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Fiverr Reviews</div>
              <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-green-500 to-[#F4F4F4]"></span>
              <span className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-[#F4F4F4] to-green-500"></span>
            </div>
            {/* 7+ Years */}
            <div className="relative px-13 py-15   text-end">
              <div className="text-4xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>

            {/* 5.0 Rating */}
            <div className="relative px-13 py-15  text-start">
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-gray-600">Rating on Fiverr</div>
              <span className="absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-green-500 to-[#F4F4F4]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
