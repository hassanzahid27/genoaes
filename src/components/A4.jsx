import React from "react";

const A4 = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[40px] py-[60px] ">
      {/* Heading */}
      <div className="mb-8 lg:mb-16 flex items-center gap-4 lg:gap-12">
        {/* Heading */}
        <h1 className="roboto font-light text-[32px] md:text-[40px] leading-[48px] text-[#202020]">
          Statistics
        </h1>

        {/* Line */}
        <div className="flex w-full">
          <div className="w-1/4 border-t-2 border-[#193E2C]"></div>
          <div className="flex-1 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x gap-[20px]  ">
        {/* Stat 1 */}
        <div className="flex flex-col items-center justify-center p-6 text-center border border-[#E0E0E0]">
          <h2 className="text-[#202020]  md:text-[40px]     roboto font-normal text-[72px] leading-[72px] tracking-[0] text-center uppercase">
            20%
          </h2>
          <p className="text-[#202020]    lg:max-w-[280px] text-sm md:text-base roboto font-light text-[20px] leading-[28px] tracking-[0] text-center">
            of 500 top founders launched while studying.
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center justify-center p-6 text-center border border-[#E0E0E0]">
          <h2 className="text-[#202020]  md:text-[40px]     roboto font-normal text-[72px] leading-[72px] tracking-[0] text-center uppercase">
            93%
          </h2>
          <p className="text-[#202020]    lg:max-w-[280px] text-sm md:text-base roboto font-light text-[20px] leading-[28px] tracking-[0] text-center">
            Georgetown MiM students received a job offer, Class 2022.
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center justify-center p-6 text-center border border-[#E0E0E0]">
          <h2 className="text-[#202020]  md:text-[40px]     roboto font-normal text-[72px] leading-[72px] tracking-[0] text-center uppercase">
            75%
          </h2>
          <p className="text-[#202020]  lg:max-w-[280px] text-sm md:text-base roboto font-light text-[20px] leading-[28px] tracking-[0] text-center">
            Of our students raised funding
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center justify-center p-6 text-center border border-[#E0E0E0]">
          <h2 className="text-[#202020]  md:text-[40px]     roboto font-normal text-[72px] leading-[72px] tracking-[0] text-center uppercase">
            $7.5 B
          </h2>
          <p className="text-[#202020]    lg:max-w-[280px] text-sm md:text-base roboto font-light text-[20px] leading-[28px] tracking-[0] text-center">
            Raised by Genoa ES mentors with future founders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default A4;
