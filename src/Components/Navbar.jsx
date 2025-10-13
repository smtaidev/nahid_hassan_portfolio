import React from "react";
import AgencyLogo from "./AgencyLogo";

export default function Navbar() {
  return (
    <div className="navbar  bg-transparent  max-w-screen-2xl mx-auto h-[120px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="font-semibold text-xl text-[#222325]">Home</a>
            </li>

            <li>
              <a className="font-semibold text-xl text-[#222325]">Services</a>
            </li>
            <li>
              <a className="font-semibold text-xl text-[#222325]">Portfolio</a>
            </li>
            <li>
              <a className="font-semibold text-xl text-[#222325]">Review</a>
            </li>
            <li>
              <a className="font-semibold text-xl text-[#222325]">About Us</a>
            </li>
          </ul>
        </div>

        <AgencyLogo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="font-semibold text-xl text-[#222325]">Home</a>
          </li>

          <li>
            <a className="font-semibold text-xl text-[#222325]">Services</a>
          </li>
          <li>
            <a className="font-semibold text-xl text-[#222325]">Portfolio</a>
          </li>
          <li>
            <a className="font-semibold text-xl text-[#222325]">Review</a>
          </li>
          <li>
            <a className="font-semibold text-xl text-[#222325]">About Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
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
    </div>
  );
}
