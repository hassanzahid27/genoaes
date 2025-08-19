import React from "react";

const October = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[80px]">
      <div>
        {/* Content Section */}
        <div className="flex flex-col md:flex-col xl:flex-row gap-[20px] lg:gap-[85px]">
          {/* Right Image (moved first for left alignment) */}
          <img
            src="O.png"
            className="w-full lg:max-w-[722px] h-auto object-cover"
            alt=""
          />

          {/* Left Content (now on the right side) */}
          <div className="flex flex-col pt-[32px] lg:pt-[54px] gap-[16px] lg:gap-[21px]">
            <h1 className="text-[#43AA13] onest font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0]">
              October 21st - November 17th
            </h1>

            <div className="text-[#202020] gap-[10px]">
              <h1 className="onest font-light text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] tracking-[0]">
                Gain practical experience in New York
              </h1>
              <p className="font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0] roboto pt-[10px] md:pt-[15px]">
                How to think and execute to succeed - mindset, risk management
                and speed.
              </p>
            </div>

            {/* Skills */}
            <div className="pt-[60px] md:pt-[100px] lg:pt-[172px] flex flex-col gap-[33px]">
              <div className="flex flex-col gap-[13px] ">
                <p className="text-[#202020]">
                  HQ visits or mentors with experience in:
                </p>
                <div className="flex flex-wrap gap-[26px]">
                  <img src="se.png" alt="" />
                  <img src="EA.png" alt="" />
                  <img src="GFC.png" alt="" />
                  <img src="WF.png" alt="" />
                  <img src="Mo.png" alt="" />
                </div>
              </div>

              <p className="roboto font-light text-[12px] leading-[16px] tracking-[0]">
                Key skills learned:
              </p>
              <div className="flex flex-wrap gap-[2px]">
                <div className="border-2 px-2 py-1 text-sm">
                  Investor relationship
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Managing feedback
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Planning fundraising
                </div>
                <div className="border-2 px-2 py-1 text-sm">Pitching</div>
                <div className="border-2 px-2 py-1 text-sm">
                  Creating slides
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October;
