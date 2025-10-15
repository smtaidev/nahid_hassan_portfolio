import React from "react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
export default function HeroSection() {
  const ref = useRef();
  const imgRef = useRef(null);

  return (
    <div
     className=" flex-row xl:flex items-center xl:px-0 px-2 h-auto xl:h-screen gap-12 max-w-screen-2xl mx-auto relative z-10 py-5 xl:py-0 inter"

      ref={ref}
    >
      {/* left side */}
      <div
        className="xl:space-y-18 space-y-8"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h1 className="bricolage  xl:max-w-[808px] font-semibold xl:text-7xl text-2xl text-[#222325] xl:leading-[96px] leading-[50px]">
          Transforming Your Ideas into AI-Powered Apps & Websites
        </h1>
        <p className="font-medium xl:text-2xl text-lg xl:max-w-[764px] leading-[1.6]">
          With deep expertise in AI and full-stack development, we’ve built
          apps, websites, and custom chatbots for clients on Fiverr — achieving
          consistent ★5.0 reviews and long-term partnerships.
        </p>
        <div>
          <button>
            <a
              className="xl:px-6 px-3 xl:py-3 py-1 bg-[#01C561] text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center mx-auto xl:gap-2 gap-1"
              href="https://www.fiverr.com/fusecode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Fiverr Profile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </button>
          <a
            href="https://www.fiverr.com/users/fusecode/portfolio?roleIds="
            className="underline underline-offset-8 ml-8 font-semibold xl:text-xl text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Our Works
          </a>
        </div>

        <div className="flex items-center">
          <div className="space-y-3 xl:pr-11 pr-3">
            <h1 className="xl:text-5xl text-xl font-semibold text-[#222325]  text-start">
              Level 2
            </h1>
            <p className="text-[#353535] font-medium xl:text-2xl text-lg text-start">
              Fiverr Seller
            </p>
          </div>
          <div className="space-y-3 xl:px-11 px-3 border-l-1 border-r-1 border-gray-300">
            <h1 className="xl:text-5xl text-xl font-semibold text-[#222325]  text-start">
              100+
            </h1>
            <p className="text-[#353535] font-medium xl:text-2xl text-lg text-start">
              Reviews
            </p>
          </div>
          <div className="space-y-3 xl:pl-11 pl-3">
            <h1 className="xl:text-5xl text-xl font-semibold text-[#222325]  text-start">
              5.0
            </h1>
            <p className="text-[#353535] font-medium xl:text-2xl text-lg text-start">
              Ratings
            </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        ref={imgRef} 
        className="xl:pt-0 pt-5"
      >
        <div className="relative">
          <div className="relative">
            <img
              src="https://i.postimg.cc/4dkp1XHq/51e837216b294d69a844813e668d09beec0f0afe.png"
              alt=""
              className="xl:w-[729px] xl:h-[538px] rounded-xl"
            />
            <img
              src="https://i.postimg.cc/FHtQ9cj8/Group-1.png"
              className="absolute -top-9 xl:-right-9 -right-2  xl:w-[150px] w-[70px]"
              alt=""
            />
          </div>

          <div className="xl:w-md w-60 xl:h-36  absolute left-1/2 -translate-x-1/2 -bottom-20 space-y-3  backdrop-blur-sm px-8 py-6 rounded-xl shadow-md">
            <h1 className="text-center font-semibold xl:text-4xl text-xl text-white">
              MAUDUD AHMAD
            </h1>
            <p className="text-center font-medium xl:text-2xl text-lg text-black">
              CEO at Fusecode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
