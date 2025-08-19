import React from "react";

const Help = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[104px]">
      <div className="flex flex-col xl:flex-row gap-[40px] xl:gap-[165px]">
        {/* Left Heading */}
        <h1 className="onest font-light text-[24px] md:text-[32px] leading-[32px] tracking-[0] text-[#43AA13] max-w-[210px]">
          How we help students grow
        </h1>

        {/* Right Content */}
        <div className="flex flex-col md:flex-row gap-[40px] md:gap-[80px] lg:gap-[140px]">
          {/* First */}
          <div className="flex flex-col gap-6 md:gap-[96px]">
            <h1 className="max-w-[320px] onest font-light text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0] text-[#000000]">
              Three mentor workshops per week
            </h1>
            <p className="max-w-[308px] text-[#202020] onest font-light text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0]">
              Throughout the week, our mentors lead 1.5-hour workshops and
              conduct individual 1-hour sessions with students, offering
              personalized guidance. They remain accessible via email or calls
              for ongoing support beyond the program.
            </p>
          </div>

          {/* Second */}
          <div className="flex flex-col gap-6 md:gap-[96px]">
            <h1 className="max-w-[320px] onest font-light text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0] text-[#000000]">
              One to one with a personal mentor every week
            </h1>
            <p className="max-w-[308px] text-[#202020] onest font-light text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0]">
              Our students receive personalized guidance from dedicated mentors,
              ensuring weekly progress throughout the program. Even after
              completing the Master's, 85% of mentors continue to support
              students’ growth.
            </p>
          </div>

          {/* Third */}
          <div className="flex flex-col gap-6 md:gap-[96px]">
            <h1 className="max-w-[220px] onest font-light text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0] text-[#000000]">
              60 ECTS European Master’s
            </h1>
            <p className="max-w-[308px] text-[#202020] onest font-light text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0]">
              Students receive a certificate from Georgetown University along
              with an official European Master's Degree of 60 ECTS from the
              University of Genoa, so they can smoothly pursue further studies
              within the European system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
