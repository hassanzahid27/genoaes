import React, { useRef } from "react";

const A9 = () => {
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
      <div className="px-[40px] pt-[144px]">
        {" "}
        <div className="mb-8 lg:mb-16 flex items-center gap-4 lg:gap-12">
          {/* Heading */}
          <h1 className="roboto   font-light text-[32px] md:text-[40px] leading-[48px] text-[#202020] whitespace-nowrap">
            {" "}
            What the media says{" "}
          </h1>
          {/* Line */}
          <div className="flex w-full">
            {" "}
            <div className="w-1/4 border-t-2 border-[#193E2C]"></div>
            <div className="flex-1 border-t-2 border-[#BCD4C7]"></div>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar"
      >
        <img src="cardd1.png" alt="" />
        <img src="cardd2.png" alt="" />
        <img src="cardd3.png" alt="" />
        <img src="cardd4.png" alt="" />
        <img src="cardd5.png" alt="" />
        <img src="cardd6.png" alt="" />
      </div>
    </div>
  );
};

export default A9;
