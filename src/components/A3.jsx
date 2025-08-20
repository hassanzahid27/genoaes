// import React from "react";

// const A3 = () => {
//   return (
//     <div className="px-[40px]">
//       <h1 className="roboto font-light text-[56px] leading-[64px] tracking-[0] text-[#202020]">
//         Our approach
//       </h1>

//       <div className="flex gap-[80px]">
//         <div className="flex flex-col gap-[16px] pt-[160px]">
//           <h2 className="text-[#43AA13] roboto font-normal text-[24px] leading-[32px] tracking-[0]">
//             How we support your growth{" "}
//           </h2>
//           <p className="roboto font-light text-[24px] leading-[32px] tracking-[0] text-[#202020] max-w-[589px]">
//             Sessions' industry insights help you develop global thinking and
//             strategic decision-making. Simultaneously, practical feedback from
//             mentors' 1:1 sessions ensures that your execution is of high
//             quality, accelerating your progress.
//           </p>
//         </div>

//         <div className="relative flex w-fit">
//           {" "}
//           {/* First image */}{" "}
//           <div className="relative -mr-60">
//             {" "}
//             <img src="R1.png" alt="Left" className="w-[500px]" />{" "}
//             {/* Text inside top-left of first image */}{" "}
//             <p className="absolute top-60 left-12 text-[#193E2C] roboto font-normal text-[22px] leading-[24px] tracking-[0.02em] text-center uppercase">
//               {" "}
//               Bottom up{" "}
//             </p>{" "}
//           </div>{" "}
//           {/* Second image (overlapping to left) */}{" "}
//           <div className="relative ">
//             {" "}
//             <img src="R2.png" alt="Right" className="w-[500px]" />{" "}
//             {/* Text inside bottom-right of second image */}{" "}
//             <p className="absolute bottom-60 right-12 not-only: roboto font-normal text-[22px] text-[#193E2C] leading-[24px] tracking-[0.02em] text-center uppercase">
//               {" "}
//               Top Down{" "}
//             </p>{" "}
//           </div>{" "}
//           {/* Text inside overlap area */}{" "}
//           <p className="absolute left-[45%] top-60 -translate-y-1/2 text-[#FCFAF2] max-w-[30px] text-xl roboto font-semibold text-[22px] leading-[22px] tracking-[0] text-center uppercase">
//             {" "}
//             Genoa entreprenuership school{" "}
//           </p>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default A3;

import React from "react";

const A3 = () => {
  return (
    <div className="px-[20px] md:px-[40px]">
      <h1 className="roboto font-light text-[36px] md:text-[56px] leading-[44px] md:leading-[64px] tracking-[0] text-[#202020]">
        Our approach
      </h1>

      <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[80px]">
        {/* Left text section */}
        <div className="flex flex-col gap-[16px] pt-[60px] md:pt-[100px] lg:pt-[160px]">
          <h2 className="text-[#43AA13] roboto font-normal text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] tracking-[0]">
            How we support your growth
          </h2>
          <p className="roboto font-light text-[18px] md:text-[24px] leading-[26px] md:leading-[32px] tracking-[0] text-[#202020] max-w-full md:max-w-[589px]">
            Sessions' industry insights help you develop global thinking and
            strategic decision-making. Simultaneously, practical feedback from
            mentors' 1:1 sessions ensures that your execution is of high
            quality, accelerating your progress.
          </p>
        </div>

        {/* Right image section */}
        <div className="relative flex flex-col sm:flex-row w-full lg:w-fit items-center lg:items-start justify-center">
          {/* First diamond (Bottom Up) */}
          <div className="relative mb-[-80px] sm:mb-0 sm:-mr-20 lg:-mr-60 z-20">
            <img
              src="R1.png"
              alt="Bottom Up"
              className="w-full max-w-[500px] h-auto"
            />
            <p
              className="absolute 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   /* mobile */
      sm:top-1/2 sm:left-6 sm:-translate-x-0 sm:-translate-y-1/2 /* md+ */
      text-[#193E2C] roboto font-normal text-[18px] md:text-[22px] 
      leading-[24px] tracking-[0.02em] text-center uppercase"
            >
              Bottom Up
            </p>
          </div>

          {/* Second diamond (Top Down) */}
          <div className="relative z-10">
            <img
              src="R2.png"
              alt="Top Down"
              className="w-full max-w-[500px] h-auto"
            />
            <p
              className="absolute 
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   /* mobile */
      sm:bottom-1/2 sm:right-6 sm:translate-x-0 sm:translate-y-1/2 /* md+ */
      text-[#193E2C] roboto font-normal text-[18px] md:text-[22px] 
      leading-[24px] tracking-[0.02em] text-center uppercase"
            >
              Top Down
            </p>
          </div>

          {/* Center text (unchanged) */}
          {/* Center text (unchanged) */}
          <p
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
    z-30
    text-[#FCFAF2] max-w-[180px] text-sm md:text-xl roboto font-semibold 
    leading-[20px] md:leading-[22px] tracking-[0] text-center uppercase"
          >
            Genoa Entrepreneurship School
          </p>
        </div>
      </div>
    </div>
  );
};

export default A3;
