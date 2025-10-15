import React from "react";
import { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const services = [
  { name: "AI App Development", href: "https://www.fiverr.com/fusecode" },
  { name: "AI Website Development", href: "https://www.fiverr.com/fusecode" },
  { name: "AI Chatbot", href: "https://www.fiverr.com/fusecode" },
  { name: "AI Agent", href: "https://www.fiverr.com/fusecode" },
];

export default function ServicesOfWork() {
  const ref = useRef();
  return (
    <div
      className="bricolage xl:mt-0 mt-20 xl:mb-0 mb-5"
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      ref={ref}
    >
      <nav className="bg-[#1a1a1a] xl:py-4 py-10 ">
        <div>
          <ul className="xl:flex flex-row items-center xl:gap-18 justify-center flex-wrap">
            {services.map((service, index) => (
              <li
                key={service.name}
                className="xl:flex items-center xl:text-start text-center gap-2 "
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={service.href}
                  className="text-white   hover:text-emerald-400 transition-colors text-4xl font-medium px-3 py-2"
                >
                  {service.name}
                </a>
                {index < services.length - 1 && (
                  <p
                    className="text-emerald-500 text-xl xl:ml-11 xl:inline hidden "
                    aria-hidden="true"
                  >
                    <img
                      src="https://i.postimg.cc/fygkThXr/Group-3.png"
                      alt=""
                    />
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
