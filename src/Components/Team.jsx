import React from "react";
import Doubledot from "./Doubledot";

export default function Team() {
  return (
    <section className="py-16 xl:h-[1012px]">
      <div className="max-w-screen-2xl mx-auto  flex flex-col lg:flex-row gap-16 items-center">
        {/* Left content */}
        <div className="lg:w-1/2">
          <p className="text-[#222325] text-3xl font-medium flex items-center">
            <Doubledot />
            Our Team
          </p>
          <h2 className="text-6xl font-semibold text-[#222325] leading-[76px]">
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
          <button className="btn shadow-none border-none px-9 py-6 rounded-2xl bg-[#01C561] text-white  text-xl font-semibold">
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
        </div>

        {/* Right content - scrollable team pictures with fade effect */}
        <div className="lg:w-1/2 relative ">
          {/* Top fade */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrollable list */}
          <div
            className="h-[820px] overflow-y-auto space-y-6 scrollbar-hide pr-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="grid grid-cols-2 gap-6 ">
              {/* Rajib Hosen - Small card, top right */}
              {/* Rajib Hosen */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-8">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* Mehedi Hasan */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-8">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* Maudud Ahmed */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-8">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* Peter Simons */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-8">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* John Doe */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mb-6">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>

              {/* Jane Smith */}
              <div className="bg-white p-4 col-span-1 h-[476px] w-[362px] row-span-1 relative rounded-2xl overflow-hidden group cursor-pointer mt-6">
                <img
                  src="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                  alt="Rajib Hosen"
                  className="w-full h-[370px] object-cover"
                />

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-2xl text-[#222325]">
                    Rajib Hosen
                  </h3>
                  <p className="text-xl text-[#4E4E4E]">CEO at Fusecode</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
