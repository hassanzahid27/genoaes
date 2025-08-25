import React from "react";

const Genoa = () => {
  return (
    <div>
      <div className=" px-[20px] md:px-[40px] flex flex-col lg:flex-row gap-[20px] pt-[30px]">
        {/* Image first on mobile, right side on laptop */}
        <img
          src="p.jpg"
          className="w-full h-auto lg:max-w-[500px] xl:max-w-[795px] order-1 lg:order-2"
          alt="Genoa University"
        />

        {/* Content Box */}
        <div className="bg-[#FAF5E2] max-w-[1800px] order-2 lg:order-1">
          <div className="p-[40px] flex flex-col gap-[16px]">
            <h1 className="text-[#43AA13] font-normal text-[32px] leading-[34px] tracking-[0] onest">
              Genoa University
            </h1>
            <p className="roboto font-light text-[18px] leading-[24px] tracking-[0] max-w-[705px]">
              Genoa University has a strong entrepreneurial spirit and excels in
              technical domains, making it one of the ideal universities for
              creating a business in Europe. You'll find an environment with
              experience in creating startups, numerous technical talents, and
              custom support for your unique journey.
            </p>
          </div>

          {/* Ranking Section */}
          <div className="flex items-start gap-[16px] flex-1 pl-[40px] pt-[40px] lg:pt-[186px]">
            <img src="glogo.png" alt="Censis Ranking" />
            <div className="flex flex-col">
              <p className="text-[#202020] font-normal text-[12px] leading-[14px] tracking-[0]">
                Censis ranking of Italian universities
              </p>
              <p className="font-semibold text-[#43AA13] text-[18px] leading-[24px] tracking-[0]">
                #1{" "}
                <span className="font-normal text-[#202020] text-[18px] leading-[18px] tracking-[0]">
                  Engineering in Italy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genoa;
