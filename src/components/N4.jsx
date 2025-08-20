import React from "react";

const N4 = () => {
  return (
    <div className="pt-[40px]">
      <p className=" lg:px-[40px] px-[20px]   text-[#43AA13] text-lg font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
        What to expect from Genoa ES mentors
      </p>

      {/* Divider line */}
      <div className="mt-6 lg:px-[40px] px-[20px]  flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <div className="bg-[#FAF5E2] p-8 rounded-md">
        {/* Top Section */}
        <p className="text-[#43AA13] text-sm   mb-2   border-b border-gray-500  onest font-medium text-[20px] leading-[32px] tracking-[0]">
          Founders
        </p>

        <div className="grid md:grid-cols-2 gap-8 pt-[43px]">
          {/* Left Side */}
          <div>
            <h2 className="text-[#202020] text-2xl md:text-[28px]  max-w-[600px]    onest font-extralight text-[32px] leading-[40px] tracking-[0]">
              Build solid basis with founders who raised +$7.5 bln
            </h2>

            <p className="mt-6 lg:pt-[80px] text-[#202020] text-base    onest font-extralight text-[24px] leading-[32px] tracking-[0]">
              Some of the companies our +30 founders have built:
            </p>

            {/* Logos */}
            <div className="flex flex-wrap gap-6 mt-6 items-center">
              <img src="F1.png" alt="Sequoia" />
              <img src="f2.png" alt="Anthemis" />
              <img src="f3.png" alt="Molten" />
              <img src="f4.png" alt="Worldfund" />
              <img src="f5.png" alt="Earlybird" />
            </div>
          </div>

          {/* Right Side (Bullet Points) */}
          <div className="space-y-4 lg:space-y-12 lg:max-w-[689px]">
            <p className="text-sm roboto text-[#202020] flex items-start">
              <span className="text-[#43AA13] mr-2">■</span>
              <span>
                <span className="font-semibold"> Prasanna Sankar</span>
                (co founder of Rippling, $11bln val.) will show you where to
                find your customers and validate your ideas quickly. You can use
                his actual messages and the same words that made him successful
                in calls.
              </span>
            </p>

            <p className="text-sm text-[#202020] flex items-start">
              <span className="text-[#43AA13] mr-2">■</span>
              <span>
                <span className="font-semibold"> Ugo di Girolamo</span>
                Ugo di Girolamo (co founder of Compass, $7B IPO) will work with
                you to craft the exact wording for your website to gain the
                trust of potential customers, employees, and investors.
              </span>
            </p>

            <p className="text-sm text-[#202020] flex items-start">
              <span className="text-[#43AA13] mr-2">■</span>
              <span>
                <span className="font-semibold"> Edoardo Serra</span>
                (managing 120 engineers for 9 years at Apple) will explain
                exactly what to ask a potential CTO and what constitutes a good
                answer to your questions. He can also join the interviews to
                make sure it’s the right fit.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N4;
