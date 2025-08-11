import React, { useRef } from "react";

const Scrolling = () => {
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
    <div className="pt-[120px]">
      <div className="flex flex-col lg:flex-row gap-[88px]">
        <p className="font-onest font-light text-[32px] leading-[40px] tracking-[0] uppercase pl-[40px] md:max-w-[524px] lg:max-w-[296px] md:flex  flex flex-col">
          Understand the Experience Directly From our students
          <span
            onClick={handleScroll}
            className="text-8xl pl-[200px] max-w-[47.25px] text-[#43AA13]"
          >
            →
          </span>
        </p>

        <div
          ref={scrollRef}
          className="flex gap-[8px] overflow-x-auto scrollbar-hide scroll-smooth md:pl-4"
        >
          <img src="card1.png" alt="" className="flex-shrink-0" />
          <img src="card2.png" alt="" className="flex-shrink-0" />
          <img src="card1.png" alt="" className="flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default Scrolling;
