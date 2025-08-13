// import React from "react";

// const WhyGenoa = () => {
//   return (
//     <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12">
//       {/* Top heading */}
//       <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
//         Why Genoa Entrepreneurship School?
//       </p>

//       <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
//         <div className="flex w-full">
//           <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
//           <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
//         </div>
//       </div>

//       <h2
//         className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
//              leading-[36px] sm:leading-[42px] md:leading-[48px]
//              max-w-full md:max-w-[810px] mx-auto font-light tracking-[0] text-center
//              text-[#43AA13] md:text-black"
//       >
//         <span className="md:text-[#43AA13]">Learn and grow</span> with
//         personalized expert guidance in the world’s most stimulating cities
//         while studying
//       </h2>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//         {/* Card 1 */}
//         <div className="relative sm:justify-self-center sm:w-full md:w-auto pl-[24px] sm:col-span-1 lg:col-span-1">
//           {/* Border for tablet/desktop */}
//           <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>
//           {/* Horizontal border for mobile */}
//           <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

//           <h3 className="text-[#43AA13] text-xl mb-2 font-light text-[32px] leading-[32px] tracking-[0]">
//             01
//           </h3>
//           <p className="text-black mb-4 max-w-[361px] text-[24px] leading-[32px] tracking-[0]">
//             Personalized guidance from the best startup experts for life, even
//             if you don’t launch.
//           </p>
//           <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
//             <li>
//               1:1 meetings at any time with field-specific experts and founders.
//             </li>
//             <li>
//               A personal mentor will follow you throughout the year, every week.
//             </li>
//             <li>
//               Daily workshops provide industry tips and adapt to your full-time
//               startup commitments.
//             </li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="relative sm:justify-self-center sm:w-full md:w-auto pl-[24px] sm:col-span-1 lg:col-span-1">
//           {/* Border for tablet/desktop */}
//           <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>
//           {/* Horizontal border for mobile */}
//           <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

//           <h3 className="text-[#43AA13] text-xl mb-2 font-light text-[32px] leading-[32px] tracking-[0]">
//             02
//           </h3>
//           <p className="text-black mb-4 max-w-[361px] text-[24px] leading-[32px] tracking-[0]">
//             Learn by combining theory and practice by building in the most
//             stimulating US & EU cities
//           </p>
//           <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
//             <li>
//               Enter Meta, Tesla and Google HQ’s to absorb their mindset and
//               practices.
//             </li>
//             <li>
//               Network and work with EU and US like-minded talent, companies and
//               investors.
//             </li>
//             <li>
//               Learn from law to finance for founders from two leading
//               universities.
//             </li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="relative sm:col-span-2 lg:col-span-1 sm:justify-self-center pl-[24px] sm:w-full md:w-auto">
//           {/* Border for tablet/desktop */}
//           <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>
//           {/* Horizontal border for mobile */}
//           <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

//           <h3 className="text-[#43AA13] text-xl mb-2 font-light text-[32px] leading-[32px] tracking-[0]">
//             03
//           </h3>
//           <p className="text-black mb-12 max-w-[399px] text-[24px] leading-[32px] tracking-[0]">
//             75% of our students closed a round within 6 months
//           </p>
//           <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
//             <li>The investors in our network manage over $100 bln in assets</li>
//             <li>
//               The founders who are our mentors raised over 7.5 bln dollars
//             </li>
//             <li>
//               Graduate with your pitch in front of over 100 investors instead of
//               a thesis
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyGenoa;

import React from "react";

const WhyGenoa = () => {
  return (
    <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 pt-[80px]">
      {/* Top heading */}
      <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
        Why Genoa Entrepreneurship School?
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <h2
        className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
             leading-[36px] sm:leading-[42px] md:leading-[48px]
             max-w-full md:max-w-[810px] mx-auto font-light tracking-[0] text-center
             text-[#43AA13] md:text-black"
      >
        <span className="md:text-[#43AA13] roboto">Learn and grow</span> with
        personalized expert guidance in the world’s most stimulating cities
        while studying
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <div className="relative sm:justify-self-center sm:w-full md:w-auto pl-[24px] sm:col-span-1 lg:col-span-1">
          {/* Border for tablet/desktop */}
          <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>

          {/* Mobile heading row */}
          <div className="flex items-start gap-2 sm:hidden mb-2">
            <h3 className="text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0]">
              01
            </h3>
            <p className="text-black text-[24px] leading-[32px] tracking-[0] font-normal onest">
              Personalized guidance from the best startup experts for life, even
              if you don’t launch.
            </p>
          </div>

          {/* Tablet/Desktop heading + paragraph */}
          <h3 className="hidden sm:block text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0] mb-2">
            01
          </h3>
          <p className="hidden sm:block  font-light mb-4 max-w-[361px] text-[24px] leading-[32px] tracking-[0] onest">
            Personalized guidance from the best startup experts for life, even
            if you don’t launch.
          </p>

          {/* Horizontal line for mobile */}
          <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

          {/* List */}
          <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
            <li>
              1:1 meetings at any time with field-specific experts and founders.
            </li>
            <li>
              A personal mentor will follow you throughout the year, every week.
            </li>
            <li>
              Daily workshops provide industry tips and adapt to your full-time
              startup commitments.
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="relative sm:justify-self-center sm:w-full md:w-auto pl-[24px] sm:col-span-1 lg:col-span-1">
          {/* Border for tablet/desktop */}
          <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>

          {/* Mobile heading row */}
          <div className="flex items-start gap-2 sm:hidden mb-2">
            <h3 className="text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0]">
              02
            </h3>
            <p className="text-black text-[24px] leading-[32px] tracking-[0] font-normal">
              Learn by combining theory and practice by building in the most
              stimulating US & EU cities
            </p>
          </div>

          {/* Tablet/Desktop heading + paragraph */}
          <h3 className="hidden sm:block text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0] mb-2">
            02
          </h3>
          <p className="hidden sm:block text-black mb-4 max-w-[361px] text-[24px] leading-[32px] tracking-[0] onest ">
            Learn by combining theory and practice by building in the most
            stimulating US & EU cities
          </p>

          {/* Horizontal line for mobile */}
          <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

          {/* List */}
          <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
            <li>
              Enter Meta, Tesla and Google HQ’s to absorb their mindset and
              practices.
            </li>
            <li>
              Network and work with EU and US like-minded talent, companies and
              investors.
            </li>
            <li>
              Learn from law to finance for founders from two leading
              universities.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="relative sm:col-span-2 lg:col-span-1 sm:justify-self-center pl-[24px] sm:w-full md:w-auto">
          {/* Border for tablet/desktop */}
          <div className="hidden sm:block absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-[#43AA13] to-[#BCD4C7]"></div>

          {/* Mobile heading row */}
          <div className="flex items-start gap-2 sm:hidden mb-2 ">
            <h3 className="text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0]">
              03
            </h3>
            <p className="text-black text-[24px] leading-[32px] tracking-[0] font-normal">
              75% of our students closed a round within 6 months
            </p>
          </div>

          {/* Tablet/Desktop heading + paragraph */}
          <h3 className="hidden sm:block text-[#43AA13] font-light text-[32px] leading-[32px] tracking-[0] mb-2">
            03
          </h3>
          <p className="hidden sm:block text-black mb-12 max-w-[399px] text-[24px] leading-[32px] tracking-[0] onest">
            75% of our students closed a round within 6 months
          </p>

          {/* Horizontal line for mobile */}
          <div className="block sm:hidden w-full h-[1px] bg-gradient-to-r from-[#43AA13] to-[#BCD4C7] mb-4"></div>

          {/* List */}
          <ul className="text-black text-sm space-y-2 list-disc pl-8 pr-[45px] font-light text-[18px] leading-[24px] tracking-[0]">
            <li>The investors in our network manage over $100 bln in assets</li>
            <li>
              The founders who are our mentors raised over 7.5 bln dollars
            </li>
            <li>
              Graduate with your pitch in front of over 100 investors instead of
              a thesis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyGenoa;
