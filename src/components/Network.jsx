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
        <div className="relative w-full">
          <img
            src="network.png"
            alt=""
            class="lg:max-w-[1000px] h-[900px] md:h-auto  object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90.93deg,rgba(32,32,32,0)_0.8%,#202020_61.41%)] lg:flex items-center justify-between lg:justify-end ">
            <div className="    ">
              <div className="max-w-[681px] text-left  flex flex-col gap-[12px]   ">
                <p className="font-light text-[48px] leading-[54px] tracking-[0] text-[#FCFAF2]   ">
                  Joined by experts who
                  <span className="text-[#43AA13]"> raised </span>
                  over
                  <span className="text-[#43AA13]"> $7.5 billion </span>
                  and
                  <span className="text-[#43AA13]"> manage $100 billion </span>
                  in assets combined
                </p>
                <p className="text-[#FCFAF2]  font-light text-[24px] leading-[32px] tracking-[0] max-w-[711px]">
                  World experts dedicate their time to help our students grow.
                </p>
              </div>
              <div className="flex justify-end text-[#FCFAF2] pt-[40px]  pr-[45px] ">
                <div className="w-[263px] h-[52px] pt-[14px]  pb-[14px] pl-[24px] gap-[8px] border border-solid opacity-100 flex ">
                  <p class="font-normal text-[16px] leading-[24px] tracking-[0] uppercase pb-24">
                    Discover the network <span className="text-xl">→</span>
                  </p>
                </div>
              </div>
              <div className="lg:pt-[164px] pt-28  flex-col text-[#FCFAF2] flex-wrap  ">
                <p>Where our mentors worked in:</p>
                <div className="flex pt-[36px] md:gap-[40px] sm:gap-[10px]">
                  <h1 className="text-2xl font-semibold">Google</h1>
                  <img src="iw.png" alt="" />
                  <img src="Fw.png" alt="" />
                  <img src="Textw.svg" alt="" />
                  <img src="Uw.svg" alt="" />
                  <h1 className="font-bold text-2xl">Stripe</h1>
                </div>

                <div className="flex pt-[36px] md:gap-[50px] sm:gap-[10px]">
                  <img src="Sw.png" alt="" />
                  <img src="Ew.png" alt="" />
                  <img src="Mw.png" alt="" />
                  <img src="ia.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
