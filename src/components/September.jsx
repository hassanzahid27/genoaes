import React from "react";

const September = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[40px]">
      <div>
        {/* Heading */}
        <p className="text-[#43AA13] text-lg font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
          How the program works and what students learn
        </p>

        {/* Divider */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[20px] md:pb-[40px] text-xs text-[#072661] mx-auto gap-2">
          <div className="flex w-full md:w-auto">
            <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
            <div className="w-1/2 border-t-2 border-[#BCD4C7]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-col xl:flex-row gap-[20px] lg:gap-[40px]">
          {/* Left Content */}
          <div className="flex flex-col pt-[32px] lg:pt-[54px] gap-[16px] lg:gap-[21px]">
            <h1 className="text-[#43AA13] onest font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0]">
              September 21st - October 20th
            </h1>

            <div className="text-[#202020] gap-[10px]">
              <h1 className="onest font-light text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] tracking-[0]">
                Learn startup theory in Washington, D.C.
              </h1>
              <p className="font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0] roboto pt-[10px] md:pt-[15px]">
                How to build a solid global business - theory, policy and
                conflict management.
              </p>

              {/* Ranking Section */}
              <div className="flex items-start gap-[12px] lg:gap-[16px] flex-1 pt-[12px] lg:pt-[36px]">
                <img
                  src="g.svg"
                  alt="Censis Ranking"
                  className="w-[40px] md:w-[50px] lg:w-auto"
                />
                <div className="flex flex-col">
                  <p className="text-[#E4602F] font-normal text-[12px] leading-[14px] tracking-[0]">
                    Bloomberg MBA Ranking
                  </p>
                  <p className="font-semibold text-[16px] md:text-[18px] leading-[20px] md:leading-[24px] tracking-[0]">
                    #1{" "}
                    <span className="font-normal text-[#202020] text-[16px] md:text-[18px] leading-[18px] tracking-[0]">
                      World's most innovative & creative graduates
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="pt-[60px] md:pt-[100px] lg:pt-[172px] flex flex-col gap-[16px]">
              <p className="roboto font-light text-[12px] leading-[16px] tracking-[0]">
                Key skills learned:
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <div className="border-2 px-2 py-1 text-sm">
                  Law for startups
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Finance for startups
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Economics for startups
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Lean startup principles
                </div>
                <div className="border-2 px-2 py-1 text-sm">Grow in the US</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="s.jpg"
            className="w-full lg:max-w-[822px] h-auto object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default September;
