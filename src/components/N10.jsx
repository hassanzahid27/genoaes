import React from "react";

const N10 = () => {
  return (
    <div className="px-[40px] pt-[120px]">
      <div className="mb-8 lg:mb-16 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-12">
        {/* Heading */}
        <h1 className="roboto font-light text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[36px] md:leading-[44px] lg:leading-[48px] text-[#202020]">
          Do you have any remaining questions?
        </h1>

        {/* Line */}
        <div className="w-full lg:flex-1 border-t-2 border-[#193E2C]"></div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-x-12  border-gray-300 p-6">
        <div class="space-y-4  text-[#202020] max-w-[550px] roboto font-normal text-[24px] leading-[32px] tracking-[0]">
          <p>
            Read our FAQ to clear any doubts. <br />
            Still need assistance?  Schedule a call on calendly.
          </p>
          <p className="max-w-[330px]">
            Still need assistance? <br />
            Schedule a call on
            <a href="#" class="text-[#43AA13] font-medium underline">
              Calendly
            </a>
          </p>
        </div>

        <div class="space-y-4">
          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                How is your mentoring different from an accelerator or any other
                venture builder?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                How is your support different from Oxford, Imperial or Columbia?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                What is the duration of the program?
              </h3>
              <span class="text-xl">+</span>
            </div>
            <p class="mt-2 text-gray-600 text-sm hidden">
              The program typically lasts 6 months.
            </p>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                Are mentors online or in presence?
              </h3>
              <span class="text-xl text-[#000000]">+</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                Will mentors or alumni offer me a job if my startup fails after
                the program?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                Will the investors in the Genoa ES network invest in me?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                How available will my mentors be?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>
          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                Do I have access to mentors after the program?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>
          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                What if I need a specific mentor that is not in the list?
              </h3>
              <span class="text-xl">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N10;
