import React, { useRef, useEffect } from "react";
import Doubledot from "./Doubledot";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";

export default function Team() {
  const ref = useRef();
  const upperRef = useRef(null);
  const lowerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const upper = upperRef.current;
    const lower = lowerRef.current;

    let upperScroll = 0;
    let lowerScroll = 0;
    const speed = 0.4; // smooth and steady

    function animateScroll() {
      if (upper && lower) {
        // Move continuously
        upperScroll += speed;
        lowerScroll -= speed;

        // Wrap around seamlessly
        const upperLimit = upper.scrollHeight / 2;
        const lowerLimit = lower.scrollHeight / 2;

        if (upperScroll >= upperLimit) {
          upperScroll = 0;
        }
        if (lowerScroll <= 0) {
          lowerScroll = lowerLimit;
        }

        upper.scrollTo(0, upperScroll);
        lower.scrollTo(0, lowerScroll);
      }

      animationRef.current = requestAnimationFrame(animateScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationRef.current = requestAnimationFrame(animateScroll);
        } else {
          cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="xl:py-16 py-4 inter xl:h-[1012px]" ref={ref}>
      <div className="lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-11 xl:pl-0 pl-2">
          <div className="flex items-center">
            <Doubledot />
            <p className="text-[#222325] xl:text-3xl text-lg font-medium ">
              Our Team
            </p>
          </div>

          <h2 className="xl:text-6xl text-2xl bricolage font-semibold text-[#222325] xl:leading-[76px] leading-[50px] ">
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
          <a
            href="https://www.fiverr.com/fusecode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="shadow-none border-none px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition flex items-center justify-center gap-2">
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
        </div>

        {/* Right Content */}
        <div
          className="lg:w-1/2 relative"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* Fade overlays */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-2 gap-8">
            {/* Column 1 */}
            <div
              ref={upperRef}
              className="h-[820px] overflow-y-auto pr-2 scrollbar-hide"
            >
              <div className="space-y-6">
                {/* duplicated list for smooth looping */}
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <Card
                      name="Rajib Hosen"
                      role="UI/UX Designer"
                      img="https://i.postimg.cc/vTshBgJ7/Frame-2147226968.png"
                    />
                    <Card
                      name="Mehedi Hasan"
                      role="Web Developer"
                      img="https://i.postimg.cc/YCH7HbDj/image.png"
                    />
                    <Card
                      name="Maudud Ahmed"
                      role="CEO at Fusecode"
                      img="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                    />
                    <Card
                      name="Peter Simons"
                      role="CEO at Fusecode"
                      img="https://i.postimg.cc/Hngzxcq7/Frame-2147226969-2.png"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div
              ref={lowerRef}
              className="h-[820px] overflow-y-auto pr-2 scrollbar-hide"
            >
              <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <Card
                      name="John Doe"
                      role="Sales Department"
                      img="https://i.postimg.cc/hvBsjzkb/Frame-2147226969-1.png"
                    />
                    <Card
                      name="Jane Smith"
                      role="Web Developer"
                      img="https://i.postimg.cc/vTshBgJ7/Frame-2147226968.png"
                    />
                    <Card
                      name="Mehedi Hasan"
                      role="Web Developer"
                      img="https://i.postimg.cc/YCH7HbDj/image.png"
                    />
                    <Card
                      name="Maudud Ahmed"
                      role="CEO at Fusecode"
                      img="https://i.postimg.cc/DfW6bfDJ/Frame-2147226969.png"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
