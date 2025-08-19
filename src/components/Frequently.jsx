import React from "react";

const Frequently = () => {
  return (
    <div className="px-[40px] ">
      <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
        Frequently asked questions
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-x-12  border-gray-300 p-6">
        <div class="space-y-4  text-[#202020] max-w-[550px] roboto font-normal text-[24px] leading-[32px] tracking-[0]">
          <p>
            Have questions about Genoa ES? <br />
            Check out our FAQ section for answers to commonly asked questions.
          </p>
          <p className="max-w-[330px]">
            Still need assistance? <br />
            Schedule a call on
            <a href="#" class="text-[#43AA13] font-medium underline">
              Calendly
            </a>
            for further support.
          </p>
        </div>

        <div class="space-y-4">
          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                What is the admission process?
              </h3>
              <span class="text-xl">+</span>
            </div>
            <p class="text-[#000000] pt-5roboto font-normal text-[18px] leading-[24px] tracking-[0] align-middle">
              The admission process for Genoa Entrepreneurship School includes
              completing an online application, and attending interviews.
              <a href="#" class="text-[#43AA13]">
                Visit page
              </a>
            </p>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                How can I apply?
              </h3>
              <span class="text-xl">+</span>
            </div>
            <p class="mt-2 text-gray-600 text-sm hidden">
              You can apply through our online portal.
            </p>
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
                What is the cost of attending?
              </h3>
              <span class="text-xl text-[#000000]">+</span>
            </div>
            <p class="mt-2 text-gray-600 text-sm hidden">
              The cost varies depending on scholarships and aid.
            </p>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                Does Genoa ES offer financial aid or scholarships?
              </h3>
              <span class="text-xl">+</span>
            </div>
            <p class="mt-2 text-gray-600 text-sm hidden">
              Yes, Genoa ES offers both need-based and merit scholarships.
            </p>
          </div>

          <div class="border-t border-gray-200 pt-3">
            <div class="flex justify-between items-center cursor-pointer">
              <h3 class=" text-[#000000]  roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                What sets Genoa ES apart from other programs?
              </h3>
              <span class="text-xl">+</span>
            </div>
            <p class="mt-2 text-gray-600 text-sm hidden">
              Our hands-on approach and global network of mentors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
