import React from "react";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const services = [
  { name: "AI App Development", href: "#ai-app" },
  { name: "AI Website Development", href: "#ai-website" },
  { name: "AI Chatbot", href: "#ai-chatbot" },
  { name: "AI Agent", href: "#ai-agent" },
];

export default function ServicesOfWork() {
   const ref = useRef();
  return (
    <div className="bricolage"  data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600" ref={ref} >
      <nav className="bg-[#1a1a1a] py-4">
        <div>
          <ul className="flex items-center gap-18 justify-center flex-wrap">
            {services.map((service, index) => (
              <li key={service.name} className="flex items-center gap-2">
                <a
                  href={service.href}
                  className="text-white  hover:text-emerald-400 transition-colors text-4xl font-medium px-3 py-2"
                >
                  {service.name}
                </a>
                {index < services.length - 1 && (
                  <li className="text-emerald-500 text-xl ml-11" aria-hidden="true">
                    <img src="https://i.postimg.cc/fygkThXr/Group-3.png" alt="" />
                  </li>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
