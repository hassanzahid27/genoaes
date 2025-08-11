import React from "react";

const Startup = () => {
  return (
    <div className="px-[40px]">
      <div className=" pt-[102px]">
        <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
          Why Genoa Entrepreneurship School?
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
          <div className="flex w-full">
            <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
            <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-[40px]  font-light text-[48px] leading-[56px] tracking-[0] uppercase">
        <p className="max-w-[509px]">
          Bridging the academia and startup worlds
        </p>

        <p className="max-w-[811px] font-light text-[20px] leading-[28px] tracking-[0] pt-[24px]">
          We are a joint initiative between the University of Genoa, companies,
          and institutions. We strongly believe that the best time to launch a
          startup is during university, as Mark Zuckerberg, Bill Gates, Elon
          Musk, and others have done. Our is goal to empower entrepreneurs
          through dynamic learning experiences with industry experts, companies
          and the University of Georgetown.
        </p>
      </div>

      <div className=" flex flex-col pt-[48px] gap-[17px]">
        <p className="font-roboto font-normal text-[16px] leading-[24px] tracking-[0]">
          Academic partners{" "}
        </p>
        <div className="flex flex-row gap-[16px]">
          <img src="pvector.svg" alt="" />
          <div className="flex flex-col">
            <p className="text-[#E4602F] font-normal text-[12px] leading-[14px] tracking-[0]">
              Bloomberg MBA Ranking
            </p>
            <p className="font-semibold text-[18px] leading-[24px] tracking-[0]">
              #1{" "}
              <span className="font-normal text-[18px] leading-[18px] tracking-[0]">
                {" "}
                World's most innovative & creative graduates
              </span>
            </p>
          </div>

          <div className="flex pl-[56px] gap-[16px]">
            <img src="Button container.png" alt="" />
            <div className="flex flex-col  ">
              <p className="text-[#E4602F] font-normal text-[12px] leading-[14px] tracking-[0] ">
                Censis ranking of Italian universities
              </p>
              <p className="font-semibold text-[18px] leading-[24px] tracking-[0]">
                #1{" "}
                <span className="font-normal text-[18px] leading-[18px] tracking-[0]">
                  {" "}
                  Engineering in Italy
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end pb-[94px]">
          <div class="w-[243px] h-[52px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] gap-[8px] border border-solid opacity-100 flex ">
            <p class="font-normal text-[16px] leading-[24px] tracking-[0] uppercase pb-24">
              Read More About US <span className="text-xl">→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
