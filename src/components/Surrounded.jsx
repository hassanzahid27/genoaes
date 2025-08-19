import React from "react";

const Surrounded = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[40px] md:pt-[80px]">
      <p className="text-[#43AA13] text-lg font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
        Who is personally guiding the students
      </p>

      {/* Top Line */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2 w-full">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="flex-1 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">
        {/* Left Section */}
        <div className="flex-1">
          <p className="text-[#202020] mb-6 onest font-light text-[22px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[40px] tracking-[0.02em] max-w-[555px]">
            Admitted students generally completed at least 3 internships <br />
            and had 1 entrepreneurial experience before joining
          </p>
          <div className="pt-8 md:pt-14 lg:pt-[94px] lg:pl-48">
            <button className="px-4 py-2 border border-black hover:bg-black hover:text-white transition roboto font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[0] uppercase">
              GET TO KNOW OUR COHORT BETTER →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 md:mt-0 lg:pl-[10px]">
          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-20 xl:gap-60 pt-4 justify-between max-w-full lg:max-w-[850px] mb-6">
            <div className="text-left flex gap-3 items-center sm:items-start">
              <p className="onest font-extralight text-[50px] sm:text-[80px] leading-[50px] sm:leading-[80px] text-center uppercase">
                24
              </p>
              <p className="text-[#202020] sm:pt-6 lg:pt-10 roboto font-light text-[18px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[24px] tracking-[0]">
                Average age
              </p>
            </div>
            <div className="text-left flex gap-3 items-center sm:items-start">
              <p className="onest font-extralight text-[50px] sm:text-[80px] leading-[50px] sm:leading-[80px] text-center uppercase">
                60%
              </p>
              <p className="text-[#202020] sm:pt-6 lg:pt-10 roboto font-light text-[18px] sm:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[24px] tracking-[0]">
                Internationals
              </p>
            </div>
          </div>

          {/* Gender & Background */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[100px] lg:gap-[200px]">
            {/* Gender */}
            <div className="flex gap-[20px] sm:gap-[40px]">
              <p className="onest font-light text-[24px] sm:text-[32px] leading-[28px] sm:leading-[32px] tracking-[0] text-center uppercase">
                40%
                <span className="block sm:inline roboto font-light text-[16px] sm:text-[18px] leading-[16px] tracking-[0]">
                  {" "}
                  Female
                </span>
              </p>
              <p className="onest font-light text-[24px] sm:text-[32px] leading-[28px] sm:leading-[32px] tracking-[0] text-center uppercase">
                60%
                <span className="block sm:inline roboto font-light text-[16px] sm:text-[18px] leading-[16px] tracking-[0]">
                  {" "}
                  Male
                </span>
              </p>
            </div>

            {/* Background */}
            <div className="flex gap-[20px] sm:gap-[40px] lg:pb-[55px]">
              <p className="onest font-light text-[24px] sm:text-[32px] leading-[28px] sm:leading-[32px] tracking-[0] text-center uppercase">
                40%{" "}
                <span className="block sm:inline roboto font-light text-[16px] sm:text-[18px] leading-[16px] tracking-[0]">
                  {" "}
                  Engineers
                </span>
              </p>
              <p className="onest font-light text-[24px] sm:text-[32px] leading-[28px] sm:leading-[32px] tracking-[0] text-center uppercase">
                60%{" "}
                <span className="block sm:inline roboto font-light text-[16px] sm:text-[18px] leading-[16px] tracking-[0]">
                  {" "}
                  Business
                </span>
              </p>
            </div>
          </div>

          {/* Universities */}
          <div className="border-t border-[#202020] lg:pt-[15px] mt-6">
            <p className="mb-6 onest font-light text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[22px] md:leading-[24px] tracking-[0]">
              Graduated from reputable universities
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-[40px] md:gap-[80px] xl:gap-[107px] items-center">
              <img src="eplf.png" alt="EPFL" className="h-6 sm:h-8" />
              <img
                src="su.png"
                alt="Sorbonne Université"
                className="h-6 sm:h-8"
              />
              <img
                src="ES.png"
                alt="ESCP Business School"
                className="h-6 sm:h-8"
              />
              <img src="BI.png" alt="BI" className="h-6 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surrounded;
