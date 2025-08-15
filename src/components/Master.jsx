import React from "react";

const Master = () => {
  return (
    <div className="md:px-[40px] px-[20px] pt-[40px]">
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

        <div className="flex flex-col xl:flex-row max-w-[2300px]">
          <img
            src="students.jpg"
            className="xl:max-w-[880px] md:max-w-[1280px] object-cover"
            alt=""
          />
          <div className="bg-[#193E2C] xl:max-w-[780px] max-w-[1280px] ">
            <div className="   ">
              <div className="md:px-[40px] md:pt-[40px] px-[16px] flex flex-col">
                {/* <p className="font-light text-[48px] leading-[48px] tracking-[0] text-[#43AA13] max-w-[400px] ">
                  Master in International Business Creation
                </p> */}

                <p className="font-light md:text-[48px] text-2xl leading-[48px] tracking-[0] text-[#43AA13] md:max-w-[400px] max-w-[300px]">
                  Master in International Business Creation
                </p>
              </div>

              <div className="flex flex-col pl-[16px] pt-[24px] gap-[12px] sm:pr-[150px]">
                <div className="flex flex-wrap sm:flex-nowrap max-w-[900px] md:gap-[70px] gap-[10px]">
                  <div className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] md:pl-[40px] w-full sm:w-auto">
                    Duration:
                    <span className="font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      8 months
                    </span>
                  </div>
                  <div className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] w-full sm:w-auto">
                    Idea stage:
                    <span className="font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      from no idea to pre seed
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap">
                  <div className="font-roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#FCFAF2] md:pl-[40px] w-full sm:w-auto">
                    Locations:
                    <span className="font-normal text-[20px] leading-[26px] tracking-[0] text-[#FCFAF2]">
                      Washington D.C., New York, San Francisco, Genoa
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:pl-[40px] px-[16px]  md:pt-[180px] pt-[32px]">
              {/* Green vertical line */}
              <div className="border-l-[1px] border-[#43AA13] mr-[16px]"></div>

              {/* Text content */}
              <div>
                <div className="text-[#FCFAF2] font-normal text-[22px] leading-[24px] tracking-[0] align-middle xl:max-w-[597px] md:max-w-[797px] relative">
                  “ In a word, this course is life-changing.
                  <img
                    src="comma.png"
                    alt=""
                    className="absolute bottom-[-14px] right-[-24px]  w-[200px] h-auto"
                  />
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
                <button className="flex items-center gap-3 text-white md:px-6 py-2 px-10 font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] uppercase tracking-[0] whitespace-nowrap">
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
