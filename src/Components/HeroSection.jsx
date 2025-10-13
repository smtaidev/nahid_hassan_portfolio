import React from "react";

export default function HeroSection() {
  return (
 
      <div className="flex items-center h-screen gap-12  max-w-screen-2xl mx-auto relative z-10">
        {/* left side */}
        <div className="space-y-18">
          <h1 className="max-w-[808px] font-semibold text-7xl text-[#222325] leading-[96px]">
            Transforming Your Ideas into AI-Powered Apps & Websites
          </h1>
          <p className="font-medium text-2xl max-w-[764px] leading-[1.6]">
            With deep expertise in AI and full-stack development, we’ve built
            apps, websites, and custom chatbots for clients on Fiverr —
            achieving consistent ★5.0 reviews and long-term partnerships.
          </p>
          <div>
            <button>
              <a className="btn shadow-none px-9 py-6 rounded-2xl bg-[#01C561] text-white  text-xl font-semibold">
                Visit Fiverr Profile{" "}
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
              </a>
            </button>
            <a href="" className="underline underline-offset-8 ml-8 font-semibold text-xl">
              See Our Works
            </a>
          </div>

          <div className="flex items-center">
            <div className="space-y-3 pr-11">
              <h1 className="text-5xl font-semibold text-[#222325]  text-start">
                Level 2
              </h1>
              <p className="text-[#353535] font-medium text-2xl text-start">
                Fiverr Seller
              </p>
            </div>
           <div className="space-y-3 px-11 border-l-1 border-r-1 border-gray-300">
              <h1 className="text-5xl font-semibold text-[#222325]  text-start">
             100+
              </h1>
              <p className="text-[#353535] font-medium text-2xl text-start">
              Reviews
              </p>
            </div>
           <div className="space-y-3 pl-11">
              <h1 className="text-5xl font-semibold text-[#222325]  text-start">
                5.0
              </h1>
              <p className="text-[#353535] font-medium text-2xl text-start">
                Ratings
              </p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://i.postimg.cc/4dkp1XHq/51e837216b294d69a844813e668d09beec0f0afe.png"
                alt=""
                className="w-[729px] h-[538px] rounded-xl"
              />
              <img
                src="https://i.postimg.cc/FHtQ9cj8/Group-1.png"
                className="absolute -top-9 -right-9"
                alt=""
              />
            </div>

            <div className="w-md h-36  absolute left-1/2 -translate-x-1/2 -bottom-20 space-y-3  backdrop-blur-sm px-8 py-6 rounded-xl shadow-md">
              <h1 className="text-center font-semibold text-4xl text-white">
                MAUDUD AHMAD
              </h1>
              <p className="text-center font-medium text-2xl text-black">
                CEO at Fusecode
              </p>
            </div>
          </div>
        </div>
      </div>
 
  );
}
