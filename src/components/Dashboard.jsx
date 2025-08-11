import React from "react";

const Dashboard = () => {
  return (
    <div className="relative z-10 -mt-[80px] sm:-mt-[10px] md:-mt-[120px] lg:-mt-[150px] px-4 sm:px-8 md:px-16 lg:px-[37px]  ">
      <div className="bg-[#FCFAF2]">
        <div className=" flex gap-[200.5px]  items-center justify-center pt-[62px]">
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className=" text-[90px] leading-[88px] tracking-[0] uppercase">
              {" "}
              $320K{" "}
            </p>
            <p>average raised by our students</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="  text-[90px] leading-[88px] tracking-[0] uppercase">
              75%{" "}
            </p>

            <p> of our students closed a funding round</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[16px]">
            <p className="  text-[90px] leading-[88px] tracking-[0] uppercase">
              9.8/10{" "}
            </p>
            <p>is our students' likelihood of recommending us</p>
          </div>
        </div>
        <div className="pt-[24px] text-[#43AA13] font-normal text-[24px] leading-[32px] tracking-[0] pl-[32px]">
          <p>Joined by experts with experience in: </p>
        </div>
        <div className="pl-[499px]">
          3
          <img src="Hc.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="relative z-10 -mt-[80px] sm:-mt-[10px] md:-mt-[120px] lg:-mt-[150px] px-4 sm:px-8 md:px-16 lg:px-[37px]">
//       <div className="bg-[#FCFAF2]">
//         {/* Stats */}
//         <div className="flex flex-col lg:flex-row lg:gap-[200.5px] gap-12 items-center justify-center pt-[62px]">
//           <div className="flex flex-col items-center justify-center gap-[16px]">
//             <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] uppercase">
//               $320K
//             </p>
//             <p className="text-center px-4">average raised by our students</p>
//           </div>

//           <div className="flex flex-col items-center justify-center gap-[16px]">
//             <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] uppercase">
//               75%
//             </p>
//             <p className="text-center px-4">
//               of our students closed a funding round
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center gap-[16px]">
//             <p className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[90px] leading-tight tracking-[0] uppercase">
//               9.8/10
//             </p>
//             <p className="text-center px-4">
//               is our students' likelihood of recommending us
//             </p>
//           </div>
//         </div>

//         {/* Experts section */}
//         <div className="flex flex-col lg:flex-row items-center lg:items-start pt-[24px] gap-4 lg:gap-0 lg:justify-between lg:px-[32px]">
//           <p className="text-[#43AA13] font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] tracking-[0] text-center lg:text-left">
//             Joined by experts with experience in:
//           </p>
//           <img
//             src="Hc.png"
//             alt="Companies"
//             className="max-w-full lg:max-w-[500px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
