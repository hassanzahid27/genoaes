import React from "react";

const November = () => {
  return (
    <div className="px-4 md:px-[40px] pt-[80px]">
      <div>
        {/* Heading */}

        {/* Divider */}

        {/* Content Section */}
        <div className="flex flex-col md:flex-col xl:flex-row gap-[20px] lg:gap-[185px]">
          {/* Left Content */}
          <div className="flex flex-col pt-[32px] lg:pt-[54px] gap-[16px] lg:gap-[21px]">
            <h1 className="text-[#43AA13] onest font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0]">
              November 18th - December 18th
            </h1>

            <div className="text-[#202020] gap-[10px]">
              <h1 className="onest font-light text-[24px] md:text-[32px] leading-[28px] md:leading-[32px] tracking-[0]">
                Network with the best in San Francisco
              </h1>
              <p className="font-light text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] tracking-[0] roboto pt-[10px] md:pt-[15px]">
                How to attract the best technical talent - insights, expertise
                and network.
              </p>

              {/* Ranking Section */}
            </div>

            {/* Skills */}
            <div className="pt-[60px] md:pt-[100px] lg:pt-[172px] flex flex-col gap-[33px]">
              <div className="flex flex-col gap-[13px] ">
                <p className="text-[#202020]   ">
                  HQ visits or mentors with experience in:
                </p>
                <div className="flex flex-wrap gap-[56px]">
                  <img src="se.png" alt="" />
                  <img src="Group 2.svg" alt="" />
                  <img src="ip.png" alt="" />
                  <img src="te.png" alt="" />
                  <img src="oe.png" alt="" />
                </div>
              </div>
              <p className="roboto font-light text-[12px] leading-[16px] tracking-[0]">
                Key skills learned:
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <div className="border-2 px-2 py-1 text-sm">Running a team</div>
                <div className="border-2 px-2 py-1 text-sm">Organic growth</div>
                <div className="border-2 px-2 py-1 text-sm">
                  Retaining users
                </div>
                <div className="border-2 px-2 py-1 text-sm">
                  Building products
                </div>
                <div className="border-2 px-2 py-1 text-sm">Selling</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src="N.jpg"
            className="w-full lg:max-w-[822px] h-auto object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default November;
