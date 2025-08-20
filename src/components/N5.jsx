import React from "react";

const N4 = () => {
  return (
    <div>
      <div className="bg-[#FAF5E2] p-8 rounded-md">
        {/* Top Section */}
        <p className="text-[#43AA13] text-sm   mb-2 text-end   border-b border-gray-500  onest font-medium text-[20px] leading-[32px] tracking-[0]">
          Managers
        </p>

        <div className="grid md:grid-cols-2 gap-8 pt-[43px]">
          {/* Bullet Points NOW on the left */}
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

          {/* Text + Logos NOW on the right */}
          <div>
            <h2 className="text-[#202020] text-2xl md:text-[28px]  max-w-[600px]    onest font-extralight text-[32px] leading-[40px] tracking-[0]">
              Grow your marketing and close sales with leaders from the world's
              best firms
            </h2>

            <p className="mt-6 lg:pt-[80px] text-[#202020] text-base    onest font-extralight text-[24px] leading-[32px] tracking-[0]">
              Where our +50 managers have been working for years:
            </p>

            {/* Logos */}
            <div className="flex flex-wrap gap-6 mt-6 items-center">
              <img src="m1.png" alt="Sequoia" />
              <img src="m2.svg" alt="Anthemis" />
              <img src="m3.png" alt="Molten" />
              <img src="m4.svg" alt="Worldfund" className="h-6" />
              <img src="m5.svg" alt="Earlybird" className="h-6" />
              <img src="mn6.png" alt="GFC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N4;
