import React from "react";
import AgencyLogo from "../Components/AgencyLogo";

export default function Footer() {
  return (
    <div className="bg-neutral  pt-22 ">
      <footer className="flex items-center justify-between sm:footer-horizontal text-white   max-w-screen-2xl mx-auto">
        <aside className="space-y-12">
          <div className="flex items-end">
            <h1 className="mr-1 text-4xl font-semibold text-white">
              Fusecode{" "}
            </h1>
            <p className="w-2 h-2 rounded-full bg-[#01C561]"></p>
          </div>
          <div>
            <p className="font-bold text-6xl leading-[81px] text-white">
              Get Started Today
            </p>
            <p className="font-semibold text-6xl leading-[81px] text-white">
              Let's Talk
            </p>
          </div>

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
        </aside>
        <nav className="flex text-[#D9D9D9]">
          {/*  menu*/}
          <div>
            <ul className="space-y-2 mr-14">
              <li className="text-2xl font-semibold text-white">Menu</li>
              <li className="text-lg">Home</li>
              <li className="text-lg">Services</li>
              <li className="text-lg">Portfolio</li>
              <li className="text-lg">Reviews</li>
              <li className="text-lg">About Us</li>
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
