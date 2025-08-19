import React from "react";

const Program = () => {
  return (
    <div className="pr-4 sm:pr-[20px] lg:pr-[40px] pt-[40px]">
      <div className="flex flex-col lg:flex-row justify-end items-start lg:items-end relative">
        {/* Green Line (only on large) */}
        <div className="hidden lg:block absolute right-[824px] top-0 h-full lg:h-[350px] w-[2px] bg-[#43AA13]"></div>

        {/* Text Content */}
        <div className="flex flex-col gap-[16px] px-4 sm:px-6 lg:px-0">
          <h1 className="max-w-full lg:max-w-[784px] onest font-light text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[48px] tracking-[0] text-[#202020]">
            A new program from two successful and centuries-old academic
            institutions
          </h1>
          <p className="font-light text-[16px] sm:text-[17px] lg:text-[18px] leading-[22px] sm:leading-[24px] tracking-[0] roboto max-w-full lg:max-w-[784px]">
            Students receive a UniGe Master’s of 60 ECTS and a Georgetown
            certificate. Both institutions have been delivering excellent
            education for over 250 years, making this program recognized by
            employers and investors from the start.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="pt-[40px] md:pt-[80px] lg:pt-[150px] xl:pt-[96px] pb-[40px] flex justify-center md:justify-center lg:justify-end px-[16px]">
        <div className="border h-[52px] flex items-center px-6 sm:px-10 w-auto">
          <button className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] roboto">
            {/* Mobile text */}
            <span className="sm:hidden">Learn more</span>
            {/* Tablet & above text */}
            <span className="hidden sm:inline">
              Learn more about The Universities
            </span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
