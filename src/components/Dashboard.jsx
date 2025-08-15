import React from "react";

const Dashboard = () => {
  return (
    <div className="relative z-10 -mt-[80px] sm:-mt-[10px] md:-mt-[120px] lg:-mt-[150px] px-4 sm:px-8 md:px-16 lg:px-[37px]">
      <div className="bg-[#FCFAF2]">
        {/* Stats */}
        <div className="flex flex-col xl:flex-row xl:gap-[200.5px] gap-12 items-center justify-center pt-[62px]">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] text-[#202020] uppercase">
              $320K
            </p>
            <p className="text-center px-4 font-light  ">
              average raised by our students
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] uppercase text-[#202020]">
              75%
            </p>
            <p className="text-center px-4 font-light">
              of our students closed a funding round
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] uppercase text-[#202020]">
              9.8/10
            </p>
            <p className="text-center px-4 font-light">
              is our students' likelihood of recommending us
            </p>
          </div>
        </div>

        {/* Experts section */}
        <div className="flex flex-col lg:flex-row  lg:items-start pt-[24px] gap-4 lg:gap-0 lg:justify-between lg:px-[32px]">
          {/* <p className="text-[#43AA13] font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] tracking-[0]  md:text-center lg:text-left  ">
            Joined by experts with experience in:
          </p> */}

          <p className="text-[#43AA13] font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] tracking-[0] max-w-[200px] md:max-w-none text-left md:text-center lg:text-left">
            Joined by experts with experience in:
          </p>

          {/* Logos */}
          <div className="lg:pt-[40px] flex flex-wrap md:flex-nowrap justify-center md:justify-center lg:justify-between items-center md:gap-x-[40px] gap-y-[20px] max-w-[1000px] mx-auto">
            <div className="w-1/3 md:w-auto flex justify-center">
              <img
                src="dash.svg"
                alt="Sequoia"
                className="h-[28px] object-contain"
              />
            </div>
            <div className="w-1/3 md:w-auto flex justify-center">
              <img
                src="i.png"
                alt="Apple"
                className="h-[28px] object-contain"
              />
            </div>
            <div className="w-1/3 md:w-auto flex justify-center items-center gap-2">
              <img
                src="m.png"
                className="h-[28px] object-contain"
                alt="Microsoft"
              />
              <span className="text-[#202020] font-medium text-base sm:text-lg">
                Microsoft
              </span>
            </div>
            <div className="w-1/3 md:w-auto flex justify-center">
              <img
                src="meta.svg"
                alt="Meta"
                className="h-[28px] object-contain"
              />
            </div>
            <div className="w-1/3 md:w-auto flex justify-center">
              <span className="text-[#202020] font-medium text-lg">Google</span>
            </div>
            <div className="w-1/3 md:w-auto flex justify-center">
              <img
                src="font.png"
                alt="Tesla"
                className="h-[28px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
