import React from "react";

const Network = () => {
  return (
    <div className="px-[40px] pt-[80px]">
      <div>
        <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
          Who is in our network?
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
          <div className="flex w-full">
            <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
            <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
          </div>
        </div>
        <div class="relative w-full">
          <img src="network.png" alt="" class="w-[1000px] object-cover" />

          <div class="absolute inset-0 bg-[linear-gradient(90.93deg,rgba(32,32,32,0)_0.8%,#202020_61.41%)] flex items-center justify-end">
            <div className=" pr-[40px]  ">
              <div class="max-w-[681px] text-right  flex flex-col gap-[12px]">
                <p class="font-light text-[48px] leading-[54px] tracking-[0] text-[#FCFAF2]  ">
                  Joined by experts who
                  <span class="text-[#43AA13]"> raised </span>
                  over
                  <span class="text-[#43AA13]"> $7.5 billion </span>
                  and
                  <span class="text-[#43AA13]"> manage $100 billion </span>
                  in assets combined
                </p>
                <p className="text-[#FCFAF2]  font-light text-[24px] leading-[32px] tracking-[0] max-w-[711px]">
                  World experts dedicate their time to help our students grow.
                </p>
              </div>
              <div className="flex justify-end text-[#FCFAF2] pt-[40px]">
                <div class="w-[263px] h-[52px] pt-[14px] pr-[24px] pb-[14px] pl-[24px] gap-[8px] border border-solid opacity-100 flex ">
                  <p class="font-normal text-[16px] leading-[24px] tracking-[0] uppercase pb-24">
                    Discover the network <span className="text-xl">→</span>
                  </p>
                </div>
              </div>
              <div className="pt-[164px]">
                <img src="Container.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
