import React from "react";

const Student = () => {
  return (
    <div className="px-[20px] md:px-[40px] pt-[120px]">
      <p className="text-[#43AA13] text-lg font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
        What our students do after the program?
      </p>

      {/* Divider line */}
      <div className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-[40px] lg:gap-[150px]">
        {/* Stats Section */}
        <div className="flex flex-col gap-[56px]">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-[40px] lg:gap-[250px] items-center">
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight text-[#202020] uppercase">
                $320K
              </p>
              <p className="text-center px-4 font-light">
                average raised by our students
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight text-[#202020] uppercase">
                75%
              </p>
              <p className="text-center px-4 font-light">
                average raised by our students
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-[40px] lg:gap-[300px] items-center">
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight text-[#202020] uppercase">
                93%
              </p>
              <p className="text-center px-4 font-light max-w-[300px]">
                Georgetown MiM students received a job offer, Class 2022
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight text-[#202020] uppercase">
                $84,030
              </p>
              <p className="text-center px-4 font-light max-w-[300px]">
                Georgetown MiM students starting salary, Class 2022
              </p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-[16px] text-center lg:text-left">
          <h1 className="text-2xl onest font-light text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] uppercase">
            <span className="text-[#43AA13]">Recognized</span>, Connected and{" "}
            <span className="text-[#43AA13]">Prepared</span> for both Investors
            and <span className="text-[#43AA13]">Employers</span>.
          </h1>

          <p className="onest font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px]">
            The in-depth knowledge acquired from well-known mentors ensures that
            the vast majority of our students successfully raise a round within
            6 months of graduation. The few who don’t either join other
            students' startups or, thanks to the solid universities’ reputation,
            work in scale-ups or large corporations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
