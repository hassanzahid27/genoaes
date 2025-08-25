import React from "react";

const Personallly = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[80px] md:pt-[140px]">
      <p className="text-[#43AA13] text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
        Who is personally guiding the students
      </p>

      {/* Divider */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row xl:gap-[270px] gap-10">
        {/* Left Content */}
        <div className="flex flex-col max-w-full lg:max-w-[651px] gap-[24px] pt-[24px]">
          <h1 className="onest font-light text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[42px] md:leading-[46px] lg:leading-[48px] tracking-[0.02em] text-[#202020]">
            Personalized guidance from +100 startup experts for life, even if
            you don’t launch.
          </h1>
          <p className="roboto font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0]">
            Our students always find someone who is an expert in their industry,
            field, and stage, available to clarify their doubts in a 1:1 meeting
            or make an intro whenever it's needed.
          </p>

          {/* Button */}
          <div className="pt-[40px] md:pt-[80px] lg:pt-[150px] xl:pt-[296px] pb-[40px] flex justify-center md:justify-center lg:justify-end px-[16px]">
            <div className="border h-[52px] flex items-center px-6 sm:px-10 w-auto">
              <button className="flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] roboto">
                <span className="sm:hidden">Explore Network</span>
                <span className="hidden sm:inline">Explore our Network</span>
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-[12px] w-full lg:w-auto">
          <img
            src="Fram1.png"
            alt=""
            className="w-full max-w-full object-contain"
          />
          <img src="Frame.png" alt="" />

          <img src="Framee.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Personallly;
