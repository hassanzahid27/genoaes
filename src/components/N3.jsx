// import React from "react";

// const N3 = () => {
//   return (
//     <div className="px-[40px] pt-[46px]">
//       <div className="flex gap-[450px]">
//         <div className="flex flex-col gap-[25px] pt-[100px]">
//           <h1 className="onest font-extralight text-[40px] leading-[48px] tracking-[0] text-[#000000]">
//             Genoa ES network is for life
//           </h1>

//           <p className="onest font-light text-[22px] leading-[32px] tracking-[0] max-w-[588px] text-[#202020]">
//             After the program ends, 85% of our mentors continue to provide
//             monthly advice to graduates.
//           </p>
//         </div>
//         <img src="Fram4.jpg" className="max-w-[581px]" alt="" />
//       </div>
//     </div>
//   );
// };

// export default N3;

import React from "react";

const N3 = () => {
  return (
    <div className="px-[20px] sm:px-[40px] pt-[46px]">
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start 
                      gap-[40px] md:gap-[100px] lg:gap-[50px] xl:gap-[450px]"
      >
        {/* Text Section */}
        <div
          className="flex flex-col gap-[20px] sm:gap-[25px] 
                        pt-[40px] lg:pt-[100px]   lg:text-left"
        >
          <h1
            className="onest font-extralight 
                         text-[28px] sm:text-[32px] lg:text-[40px] 
                         leading-[36px] sm:leading-[42px] lg:leading-[48px] 
                         text-[#000000]"
          >
            Genoa ES network is for life
          </h1>

          <p
            className="onest font-light 
                        text-[16px] sm:text-[18px] lg:text-[22px] 
                        leading-[24px] sm:leading-[28px] lg:leading-[32px] 
                        max-w-full lg:max-w-[588px] text-[#202020]"
          >
            After the program ends, 85% of our mentors continue to provide
            monthly advice to graduates.
          </p>
        </div>

        {/* Image */}
        <img
          src="Fram4.jpg"
          alt=""
          className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[520px] lg:max-w-[550px] xl:max-w-[581px]"
        />
      </div>
    </div>
  );
};

export default N3;
