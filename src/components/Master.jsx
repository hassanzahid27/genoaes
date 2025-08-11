import React from "react";

const Master = () => {
  return (
    <div className="px-[40px] pt-[40px]">
      <div className=" ">
        <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
          What do we offer?
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
          <div className="flex w-full">
            <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
            <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
          </div>
        </div>

        <div className="flex ">
          <img src="students.jpg" className="max-w-[680px]" alt="" />
          <div className="bg-[#193E2C] max-w-[780px] ">
            <div className="   ">
              <div className="px-[40px] pt-[40px]  flex flex-col">
                <p className="font-light text-[48px] leading-[48px] tracking-[0] text-[#43AA13] max-w-[400px] ">
                  Master in International Business Creation
                </p>
              </div>
              <div className="flex flex-col pr-[180px] pt-[24px] gap-[12px]">
                <div className="flex max-w-[900px] gap-[40px] ">
                  <div className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] pl-[40px]">
                    Duration:
                    <span className=" font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      8 months
                    </span>
                  </div>
                  <div class="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] pl-[40px]">
                    Idea stage:
                    <span className=" font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      from no idea to pre seed
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] pl-[40px]">
                    Locations:
                    <span className=" font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      Washington D.C., New York, San Francisco, Genoa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex pl-[40px] pt-[180px]">
              {/* Green vertical line */}
              <div className="border-l-[1px] border-[#43AA13] mr-[16px]"></div>

              {/* Text content */}
              <div>
                <div className="text-[#FCFAF2] font-normal text-[22px] leading-[24px] tracking-[0] align-middle max-w-[597px]">
                  “ In a word, this course is life-changing.
                  <p>
                    Experiencing Silicon Valley in such depth is something I
                    couldn't even imagine. ”
                  </p>
                </div>

                <p className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] align-middle text-[#FCFAF2] pt-[12px]">
                  Juan Lopez Van Dam, Student founder 2023
                </p>
              </div>
            </div>
            <div className="pt-[40px] md:pt-[80px] lg:pt-[150px] xl:pt-[48px] pb-[40px] flex justify-center md:justify-end md:pr-[40px]">
              <div className="bg-[#43AA13] border h-[52px] flex items-center w-auto">
                <button className="flex items-center gap-3 text-white px-6 py-2 font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap">
                  Discover Our Program <span className="text-2xl">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Master;
