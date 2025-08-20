// import React from "react";

// const N1 = () => {
//   return (
//     <div className="px-[40px] pt-[40px]">
//       <div className="flex gap-[100px]">
//         <img src="N1.png" className="max-w-[600px] " alt="" />
//         <div className="flex flex-col max-w-[763px] gap-[24px] pt-[67px]">
//           <h1 className="onest font-extralight text-[#202020] text-[40px] leading-[48px] tracking-[0]  ">
//             Receive personalized{" "}
//             <span className="text-[#43AA13]"> 1 on 1 mentoring </span> from
//             <span className="text-[#43AA13]"> experts </span>
//             from
//             <span className="text-[#43AA13]"> 500 hours </span>
//           </h1>
//           <p class="onest font-light text-[#202020] text-[22px] leading-[32px] tracking-[0]">
//             They will sit down with you and guide you through every detail of
//             your business, including making introductions to the perfect new
//             customers and investors, so you can grow your startup right away.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default N1;

import React from "react";

const N1 = () => {
  return (
    <div className="px-[20px] sm:px-[40px] pt-[40px]">
      <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px] items-center lg:items-start">
        {/* Image */}
        <img
          src="N1.png"
          className="w-full max-w-[400px] sm:max-w-[800px] lg:max-w-[600px]"
          alt=""
        />

        {/* Text Section */}
        <div className="flex flex-col w-full lg:max-w-[763px] gap-[16px] sm:gap-[24px] pt-[20px] lg:pt-[67px] text-center lg:text-left">
          <h1 className="onest font-extralight text-[#202020] text-[28px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[44px] lg:leading-[48px] tracking-[0]">
            Receive personalized{" "}
            <span className="text-[#43AA13]">1 on 1 mentoring</span> from{" "}
            <span className="text-[#43AA13]">experts</span> from{" "}
            <span className="text-[#43AA13]">500 hours</span>
          </h1>

          <p className="onest font-light text-[#202020] text-[16px] sm:text-[18px] lg:text-[22px] leading-[26px] sm:leading-[28px] lg:leading-[32px] tracking-[0]">
            They will sit down with you and guide you through every detail of
            your business, including making introductions to the perfect new
            customers and investors, so you can grow your startup right away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default N1;
