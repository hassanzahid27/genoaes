import React from "react";

const Journey = () => {
  return (
    <div className="max-w-[1800px] mx-auto pt-[80px]">
      <div className="flex flex-col lg:flex-row p-[20px] xl:p-[40px]">
        {/* Image */}
        <img
          src="journey.jpg"
          className="w-full lg:w-[50%] xl:w-[650px] object-cover"
          alt="Journey"
        />

        {/* Text Section */}
        <div className="bg-[#193E2C] flex flex-col gap-[14px] w-full xl:w-[505%] relative">
          <p className="text-[#43AA13] font-normal text-[24px] md:text-[28px] xl:text-[32px] leading-[32px] md:leading-[36px] xl:leading-[40px] p-[20px] md:px-[40px] md:pt-[40px] xl:pr-[70px]">
            Ready to Start Your Journey?
          </p>

          <p className="text-[#FCFAF2] font-light text-[20px] md:text-[26px] xl:text-[32px] leading-[28px] md:leading-[34px] xl:leading-[40px] px-[20px] md:px-[40px] xl:w-[610px]">
            Genoa ES can help you achieve your academic, entrepreneurial, and
            career goals.
          </p>

          {/* Arrow Image */}
          <img
            src="arrow.svg"
            alt="Arrow"
            className="absolute bottom-[-0.5px]  w-[370px] h-auto"
          />

          {/* Button */}
          <div className="pt-[40px] md:pt-[80px] lg:pt-[150px] xl:pt-[216px] pb-[40px] flex justify-center md:justify-end md:pr-[40px]">
            <div className="bg-[#43AA13] border h-[52px] flex items-center w-auto relative z-10">
              <button className="flex items-center gap-3 text-white md:px-6  px-16 py-2 font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap">
                Discover Our Program <span className="text-2xl">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
