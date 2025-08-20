import React from "react";

const Investors = () => {
  return (
    <div className="bg-[#FAF5E2] p-8 rounded-md">
      {/* Top Section */}
      <p className="text-[#43AA13] text-sm   mb-2   border-b border-gray-500  onest font-medium text-[20px] leading-[32px] tracking-[0]">
        Investors
      </p>

      <div className="grid md:grid-cols-2 gap-8 pt-[43px]">
        {/* Left Side */}
        <div>
          <h2 className="text-[#202020] text-2xl md:text-[28px]  max-w-[600px]    onest font-extralight text-[32px] leading-[40px] tracking-[0]">
            Discover the fundraising secrets with investors managing +$100 bln
            in assets
          </h2>

          <p className="mt-6 lg:pt-[80px] text-[#202020] text-base    onest font-extralight text-[24px] leading-[32px] tracking-[0]">
            Where our +20 investors have been investing for years:
          </p>

          {/* Logos */}
          <div className="flex flex-wrap gap-6 mt-4 items-center">
            <img src="v1.png" alt="Sequoia" className="" />
            <img src="v2.png" alt="Anthemis" className="" />
            <img src="v3.png" alt="Molten" className="" />
            <img src="v4.png" alt="Worldfund" className="" />
            <img src="v5.png" alt="Earlybird" className="" />
            <img src="v6.png" alt="GFC" className="" />
          </div>
        </div>

        {/* Right Side (Bullet Points) */}
        <div className="space-y-4 lg:space-y-12 lg:max-w-[689px]">
          <p className="text-sm roboto text-[#202020] flex items-start">
            <span className="text-[#43AA13] mr-2">■</span>
            <span>
              <span className="font-semibold">Douglas Leone</span> as the
              managing partner at Sequoia ($98 bln AUM), has the best start ups’
              pitches and financial models on his desk every day. He will help
              you replicate them, ensuring that you will be fully ready for
              raising.
            </span>
          </p>

          <p className="text-sm text-[#202020] flex items-start">
            <span className="text-[#43AA13] mr-2">■</span>
            <span>
              <span className="font-semibold">Salomon Aiach</span> (ex principal
              at Earlybird, $2 bln AUM) will provide tips on securing meetings
              with investors and drafting your follow-ups. He will share the
              best-written emails he actually reads daily so you can close the
              round.
            </span>
          </p>

          <p className="text-sm text-[#202020] flex items-start">
            <span className="text-[#43AA13] mr-2">■</span>
            <span>
              <span className="font-semibold">Sauraj Gambhir</span> (ex
              principal at ING ventures, $450 mln AUM) will practice with you
              how to pitch in front of investors: when to pause, how to move,
              and what to say to successfully impress them.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Investors;
