import React from "react";

const Enterpreneurship = () => {
  return (
    <div className=" mx-auto pt-[80px] px-[40px]">
      <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
        How is life at Genoa Entrepreneurship School?
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>{" "}
      </div>
      <div className="flex flex-col-reverse xl:flex-row   ">
        {/* Text Section */}
        <div className="bg-[#FAF5E2] flex flex-col gap-[24px] w-full xl:w-[55%]">
          <p className="font-light text-[32px] md:text-[36px] xl:text-[45px] leading-[40px] md:leading-[44px] xl:leading-[48px] tracking-[0] text-[#43AA13] p-[20px] md:px-[40px] md:pt-[40px] xl:pr-[70px]">
            Learn and build with the best
            <span className="text-black"> every day</span>
          </p>

          <p className="px-[20px] md:px-[40px] font-light text-[16px] md:text-[18px] leading-[24px] tracking-[0.02em] xl:w-[610px]">
            Live, work and grow in vibrant cities like New York, Washington or
            San Francisco. You will explore iconic places like the Google
            campus, Meta’s Skyscraper and the Tesla Factory.
          </p>

          {/* Button */}
          <div className="pt-[40px] md:pt-[80px] lg:pt-[150px] xl:pt-[216px] pb-[40px] flex justify-center md:justify-end md:pr-[40px]">
            <div className="border h-[52px] flex items-center px-6 w-auto max-w-full">
              <button className="flex items-center gap-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap text-left text-ellipsis overflow-hidden">
                {/* Mobile text */}
                <span className="sm:hidden">Discover More</span>
                {/* Tablet & above text */}
                <span className="hidden sm:inline">
                  DISCOVER HOW IS LIFE DURING THE PROGRAM
                </span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src="school.jpg"
          className="w-full xl:w-[690px] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Enterpreneurship;
