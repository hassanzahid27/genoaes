import React, { useRef } from "react";

const A8 = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <div className="px-[40px] pt-[120px]">
        <div className="mb-10">
          <h1 className="  md:text-[40px]  text-[#202020]     roboto font-light text-[56px] leading-[64px] tracking-[0]">
            Backed by industry leaders
            <span className="lg:pl-[40px]  text-[#202020] text-lg md:text-xl roboto font-light text-[24px] leading-[32px] tracking-[0]">
              Mentors believing in our philosophy, solution and students
            </span>
          </h1>
        </div>{" "}
        <div className="flex flex-col lg:px-[40px] gap-[38px] pb-[40px]">
          {/* First row */}
          <div className="flex flex-wrap gap-6 md:gap-[50px] lg:flex-nowrap xl:gap-[101px]">
            <img src="g1.svg" alt="" />
            <img src="g2.png" alt="" />
            <img src="g3.svg" alt="" />
            <img src="g4.png" alt="" />
            <img src="g5.svg" alt="" />
            <img src="g6.png" alt="" />
          </div>

          {/* Second row */}
          <div className="flex flex-wrap  gap-6 md:gap-[18px] lg:flex-nowrap xl:gap-[65px]">
            <img src="h1.svg" alt="" />
            <img src="h2.png" alt="" />
            <img src="h3.svg" alt="" />
            <img src="h4.png" alt="" />
            <img src="h5.svg" alt="" />
            <img src="h6.png" alt="" />
            <img src="h7.png" alt="" />
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar"
      >
        <img src="s1.png" alt="" />
        <img src="s2.png" alt="" />
        <img src="s3.png" alt="" />
        <img src="s4.png" alt="" />
        <img src="s5.png" alt="" />
        <img src="s1.png" alt="" />
        <img src="s4.png" alt="" />
      </div>
    </div>
  );
};

export default A8;
