// import React from "react";

// const Professor = () => {
//   return (
//     <div className="max-w-[1800px] mx-auto">
//       <div className="flex flex-col-reverse xl:flex-row px-[20px] xl:px-[40px]">
//         {/* Text Section */}
//         <div className="flex flex-col bg-[#FAF5E2] gap-[36px] p-[20px] xl:p-[40px]">
//           <h1 className="font-light text-[28px] xl:text-[40px] leading-[36px] xl:leading-[48px] pb-[60px] xl:pb-[152px]">
//             Meet your professor
//           </h1>

//           <div className="flex gap-4">
//             {/* Green vertical line */}
//             <div className="border-l-2 border-green-500"></div>

//             {/* Text content */}
//             <div className="space-y-8">
//               <p className="w-full xl:w-[336px]">
//                 At Georgetown, we believe in entrepreneurship for the common
//                 good.
//                 <span className="roboto">
//                   Our partnership with Genoa Entrepreneurship School aligns our
//                   values perfectly, supporting emerging entrepreneurs worldwide.
//                 </span>
//               </p>

//               <div className="flex flex-row gap-[16px]">
//                 <img src="pvector.svg" className="w-[93.7px]" alt="" />
//                 <div className="flex flex-col">
//                   <h1>Shye Gilad</h1>
//                   <p className="font-light text-[14px] xl:text-[16px] leading-[18px] xl:leading-[20px] whitespace-nowrap">
//                     Professor at Georgetown university
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image Section (original desktop size) */}
//         <img
//           src="professor.png"
//           className="w-full xl:max-w-[1001px] h-auto object-cover"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Professor;

import React from "react";

const Professor = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col-reverse xl:flex-row px-[20px] xl:px-[40px]">
        {/* Text Section */}
        <div className="flex flex-col bg-[#FAF5E2] gap-[36px] p-[20px] xl:p-[40px]">
          <h1 className="font-light text-[28px] xl:text-[40px] leading-[36px] xl:leading-[48px] pb-[60px] xl:pb-[152px]">
            Meet your professor
          </h1>

          <div className="flex gap-4">
            {/* Green vertical line */}
            <div className="border-l-2 border-green-500"></div>

            {/* Text content */}
            <div className="space-y-8">
              <p className="w-full xl:w-[336px]">
                At Georgetown, we believe in entrepreneurship for the common
                good.
                <span className="roboto">
                  Our partnership with Genoa Entrepreneurship School aligns our
                  values perfectly, supporting emerging entrepreneurs worldwide.
                </span>
              </p>

              <div className="flex flex-row gap-[16px]">
                <img src="pvector.svg" className="w-[93.7px]" alt="" />
                <div className="flex flex-col">
                  <h1>Shye Gilad</h1>
                  <p className="font-light text-[14px] xl:text-[16px] leading-[18px] xl:leading-[20px] whitespace-nowrap">
                    Professor at Georgetown university
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <img
          src="professor.png"
          className="w-full xl:max-w-[1001px] h-auto object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Professor;
