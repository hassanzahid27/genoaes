// import React from "react";

// const A1 = () => {
//   return (
//     <div className="relative z-10 -mt-[80px] sm:-mt-[10px] md:-mt-[120px] lg:-mt-[150px] px-4 sm:px-8 md:px-16 lg:px-[37px]">
//       <div className="bg-[#FAF5E2]">
//         <div className="flex gap-[70px] ">
//           <img src="students.jpg" className="max-w-[780px]" alt="" />
//           <div className="flex flex-col   gap-[34px] max-w-[616px] pt-[50px]">
//             <h1 className="text-2xl roboto font-normal text-[40px] leading-[48px] tracking-[0]">
//               <span className="text-[#43AA13]">Launch while studying</span>,
//               like Mark Zuckerberg, Bill Gates, or Elon Musk but{" "}
//               <span className="text-[#43AA13]">with time and support. .</span>
//             </h1>
//             <p class="roboto font-light text-[18px] leading-[24px] tracking-[0] text-[#202020]">
//               Genoa Entrepreneurship School is an idea of a young founder from
//               Genoa who struggled to combine his international startup ambitions
//               with his studies but understood the importance of pursuing both.
//               We are bringing together the best of both worlds on the global
//               stage to empower the next generation of founders.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default A1;

import React from "react";

const A1 = () => {
  return (
    <div className="relative z-10 -mt-[80px] sm:-mt-[10px] md:-mt-[120px] lg:-mt-[150px] px-4 sm:px-8 md:px-10 lg:px-[37px]">
      <div className="bg-[#FAF5E2]">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[90px]">
          {/* Image */}
          <div className="flex-1">
            <img
              src="students.jpg"
              className="w-full max-w-full h-auto object-cover lg:max-w-[780px]"
              alt=""
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-[34px] pt-6 lg:pt-[50px] max-w-full lg:max-w-[816px]">
            <h1
              className="roboto font-normal 
              text-xl sm:text-2xl md:text-[28px] lg:text-[40px] 
              leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[48px] 
              tracking-[0] xl:max-w-[616px]"
            >
              <span className="text-[#43AA13]">Launch while studying</span>,
              like Mark Zuckerberg, Bill Gates, or Elon Musk but{" "}
              <span className="text-[#43AA13]">with time and support.</span>
            </h1>

            <p
              className="roboto font-light 
              text-sm sm:text-base md:text-[16px] lg:text-[18px] 
              leading-[20px] sm:leading-[22px] md:leading-[24px] 
              text-[#202020]  xl:max-w-[616px]"
            >
              Genoa Entrepreneurship School is an idea of a young founder from
              Genoa who struggled to combine his international startup ambitions
              with his studies but understood the importance of pursuing both.
              We are bringing together the best of both worlds on the global
              stage to empower the next generation of founders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A1;
