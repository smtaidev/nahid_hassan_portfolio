import React from "react";
import AgencyLogo from "../Components/AgencyLogo";

export default function Footer() {
  return (
    <div className="bg-neutral inter  pt-22 xl:px-0 px-2 ">
      <footer className="xl:flex flex-row items-center justify-between sm:footer-horizontal text-white   max-w-screen-2xl mx-auto">
        <aside className="space-y-12 xl:pb-0 pb-6">
          <div className="flex items-end">
            <h1 className="mr-1 text-4xl font-semibold text-white">
              Fusecode{" "}
            </h1>
            <p className="w-2 h-2 rounded-full bg-[#01C561]"></p>
          </div>
          <div className="bricolage">
            <p className="font-bold text-6xl leading-[81px] text-white">
              Get Started Today
            </p>
            <p className="font-semibold text-6xl leading-[81px] text-white">
              Let's Talk
            </p>
          </div>
          <a
            href="https://www.fiverr.com/fusecode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn shadow-none border-none px-9 py-8 rounded-3xl bg-[#01C561] text-white  text-xl font-semibold">
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
        </aside>
        <nav className="flex text-[#D9D9D9]">
          {/*  menu*/}
          <div>
            <ul className="space-y-2 mr-14">
               <li className="text-2xl font-semibold text-white">Menu</li>
              <li>
                <a className=" text-lg " href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className=" text-lg " href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className=" text-lg " href="#projects">
                  Portfolio
                </a>
              </li>
              <li>
                <a className=" text-lg " href="#review">
                  Review
                </a>
              </li>
              <li>
                <a className="text-lg " href="#about">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          {/* privacy */}
          <div>
            <ul className="space-y-2">
              <li className="text-2xl font-semibold text-white">Privacy</li>
              <li className="text-lg">Cookie Policy</li>
              <li className="text-lg">Term Of Services</li>
              <li className="text-lg">Policy Service</li>
            </ul>
          </div>
        </nav>
      </footer>
      <p className="text-lg text-[#D9D9D9] text-center pt-8 pb-16">
        © 2025 - All rights Reserved by Fusecode
      </p>
    </div>
  );
}
