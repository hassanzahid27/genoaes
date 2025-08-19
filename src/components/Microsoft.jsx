import React from "react";

const Microsoft = () => {
  return (
    <div className="px-[40px] pt-[120px]">
      {/* Wrapper */}
      <div className="flex flex-col lg:flex-row gap-[23px]">
        {/* Images side by side (stay row even on small/medium) */}
        <div className="flex flex-row gap-[23px]">
          <img src="Ms.jpg" className="max-w-[310px] h-[293px] w-full" alt="" />
          <div className="pt-[50px]">
            <img
              src="ps.jpg"
              className="max-w-[390px] h-[293px] w-full"
              alt=""
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:pl-36 gap-[10px] pt-[20px]">
          <h1 className="text-[#202020] onest font-light text-[40px] leading-[48px] tracking-[0]">
            Explore life at Genoa ES
          </h1>
          <p className="roboto font-light text-[18px] leading-[24px] tracking-[0] max-w-[535px]">
            Students live in vibrant cities like New York and Silicon Valley,
            explore places like the Google campus, and immerse themselvs in a
            community of top experts and talent daily. After graduating, you'll
            have not only a strong network but also unforgettable memories.
          </p>
          <div className="flex md:justify-end justify-center pt-[100px] pb-[94px] md:px-4">
            <div
              className="flex items-center gap-2 border border-solid opacity-100 
               w-auto min-w-[243px] h-[52px] 
               md:px-6 px-4 box-border"
            >
              <p className="font-normal text-[16px] leading-[24px] tracking-[0] uppercase text-center sm:text-left whitespace-nowrap">
                See how life is at Genoaes{" "}
                <span className="text-xl inline-block">→</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Microsoft;
