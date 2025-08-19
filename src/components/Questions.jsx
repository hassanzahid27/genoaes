import React from "react";

const Questions = () => {
  return (
    <div className="px-[20px] md:px-[40px] flex flex-col lg:flex-row gap-[20px] max-w-[1800px] mx-auto pt-[80px]">
      {/* Left Box */}
      <div className="bg-[#E5EBDD] flex-1">
        <div className="p-[20px] md:p-[40px] flex flex-col gap-[14px]">
          <p className="onest text-[#43AA13] font-normal text-[16px] md:text-[18px] leading-[24px] tracking-[0]">
            Do you have any questions?
          </p>
          <h1 className="roboto font-light text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[0]">
            Our ambassadors are here to help you.
          </h1>
        </div>
        <div className="pt-[20px] md:pt-[40px] lg:pt-[80px] xl:pt-[26px] pb-[40px] flex justify-center md:justify-end md:pr-[40px] xl:justify-end">
          <div className="border h-[52px] flex items-center w-auto relative z-10">
            <button className="flex items-center gap-3 text-black md:px-6 px-10 sm:px-16 py-2 font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap">
              Elevate Your Career <span className="text-2xl">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="bg-[#BCD4C7] flex-1">
        <div className="p-[20px] md:p-[40px] flex flex-col gap-[14px]">
          <p className="onest text-[#43AA13] font-normal text-[16px] md:text-[18px] leading-[24px] tracking-[0]">
            Do you want to know more in detail?
          </p>
          <h1 className="roboto font-light text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] tracking-[0]">
            Learn more if you are the right fit.
          </h1>
        </div>
        <div className="pt-[20px] md:pt-[40px] lg:pt-[80px] xl:pt-[26px] pb-[40px] flex justify-center md:justify-end md:pr-[40px] xl:justify-end">
          <div className="border h-[52px] flex items-center w-auto relative z-10">
            <button className="flex items-center gap-3 text-black md:px-6 px-10 sm:px-16 py-2 font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap">
              Download Brochure
              <span className="hidden md:inline">no Email required</span>
              <span className="text-2xl">↓</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
