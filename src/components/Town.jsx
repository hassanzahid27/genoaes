import React from "react";

const Town = () => {
  return (
    <div className="px-[20px] md:px-[40px] pt-[90px]">
      <div className="  flex flex-col lg:flex-row gap-[20px]">
        <img
          src="to.png"
          className="w-full h-auto lg:max-w-[500px] xl:max-w-[795px] order-1  "
          alt=""
        />

        <div className="bg-[#FAF5E2] max-w-[1800px] order-2 lg:order-1">
          <div className="p-[40px] flex flex-col gap-[16px]">
            <h1 className="text-[#43AA13] font-normal text-[32px] leading-[34px] tracking-[0] onest">
              Georgetown University, <br /> McDonough School of Business
            </h1>
            <p className="roboto    max-w-[705px] font-light text-[18px] leading-[24px] tracking-[0]">
              Founded in 1789, Georgetown University shares Genoa ES’ passion
              for innovative education. In times when policy is increasingly
              involved in business, being pioneers in sustainable
              entrepreneurship, law, and policy at GU will give Genoa ES
              students a unique edge, along with access to a strong network.
            </p>
          </div>

          {/* Ranking Section */}
          <div className="flex items-start gap-[16px] flex-1 pl-[40px] pt-[40px] lg:pt-[186px]">
            <img src="g.svg" alt="Censis Ranking" />
            <div className="flex flex-col">
              <p className="text-[#202020] font-normal text-[12px] leading-[14px] tracking-[0]">
                Bloomberg MBA Ranking
              </p>
              <p className="font-semibold text-[#43AA13] text-[18px] leading-[24px] tracking-[0]">
                #1{" "}
                <span className="font-normal text-[#202020] text-[18px] leading-[18px] tracking-[0]">
                  World's most innovative & creative graduates
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Town;
