import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'

export default function HomeSection() {
  return (
     <div className="bg-[url('https://i.postimg.cc/0N38wN3h/81b5dd2c9c238c7aea3d7bf2c2d1471b31ba9500.png')] bg-cover bg-accent relative h-screen  overflow-hidden  ">
      <p className='absolute bg-[#f3f1dd] w-[1236px] h-[1236px] rounded-full -top-[508px] -left-[494px] blur-3xl opacity-40 '></p>
      <p className='absolute bg-[#37e4b5] w-[1236px] h-[1236px] rounded-full -bottom-[544px] -right-[180px] blur-3xl opacity-50 '></p>
        <Navbar/>
        <HeroSection/>
    </div>
  )
}