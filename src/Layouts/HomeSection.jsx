import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";

export default function HomeSection() {
  return (
    <div
      className="bg-[url('https://i.postimg.cc/0N38wN3h/81b5dd2c9c238c7aea3d7bf2c2d1471b31ba9500.png')] bg-cover
    bg-center xl:bg-right
    bg-no-repeat
    relative xl:overflow-hidden
    "
      id="home"
    >
      <p className="absolute bg-[#f5f0bf] xl:w-[1236px] w-[400px] xl:h-[1236px] rounded-full xl:-top-[508px] -top-[10px] xl:-left-[494px] -left-[12px] blur-3xl opacity-40 "></p>
      <p className="absolute bg-[#37e4b5] xl:w-[1236px] w-[400px] xl:h-[1236px] rounded-full xl:-bottom-[544px] -bottom-[15px] xl:-right-[180px] -right[12px] blur-3xl opacity-50 "></p>
      <Navbar />
      <HeroSection />
    </div>
  );
}
