import React from "react";
import Marquee from "react-fast-marquee";

const A5 = () => {
  return (
    <div className="bg-[#43AA13] py-4">
      <Marquee gradient={false} speed={60} pauseOnHover>
        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Navigator
          </span>
        </div>

        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Visionary
          </span>
        </div>
        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Bold
          </span>
        </div>
        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Ambitious
          </span>
        </div>
        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Curious
          </span>
        </div>
        <div className="flex gap-4">
          <img src="dot.png" className="w-[18px] h-[18px] mt-3" alt="" />
          <span className="mx-8 text-lg  text-[#FCFAF2] roboto font-light text-[32px] leading-[40px] tracking-[0]">
            Discoverer
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default A5;
