import React from "react";

const Applications = () => {
  return (
    <div className="md:px-[40px] px-[20px]  pt-[120px]">
      <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
        Application process
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      <h1 class="font-roboto font-light text-[24px] leading-[32px] tracking-[0] max-w-[670px] text-[#202020]">
        We work in calendar month batches, and we announce the selected students
        at the end of each month. From application to end, the process takes
        about three weeks.
      </h1>
      <div class="  py-12">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-12">
          <div class="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
            <div class="flex items-center gap-2">
              <p class="text-xl font-light">01</p>
            </div>
            <h3 class="text-base font-semibold">Complete your application</h3>
            <p class="text-sm font-normal text-gray-700 leading-6">
              Start by filling out the free application form
              <a href="#" class="text-[#43AA13] underline">
                here
              </a>
              .<br />
              Our committee of mentors will review your profile
            </p>
          </div>

          <div class="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
            <div class="flex items-center gap-2">
              <span class="text-[#43AA13]">➝</span>
              <p class="text-xl font-light">02</p>
            </div>
            <h3 class="text-base font-semibold">Initial call invitation</h3>
            <p class="text-sm font-normal text-gray-700 leading-6">
              If you pass, we’ll invite you to an initial call to discuss your
              aspirations and see if you are a good fit for us.
            </p>
          </div>

          <div class="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
            <div class="flex items-center gap-2">
              <span class="text-[#43AA13]">➝</span>
              <p class="text-xl font-light">03</p>
            </div>
            <h3 class="text-base font-semibold">Second call invitation</h3>
            <p class="text-sm font-normal text-gray-700 leading-6">
              Successful candidates will be invited to a second call to discuss
              their background and skills in more detail.
            </p>
          </div>

          <div class="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6">
            <div class="flex items-center gap-2">
              <p class="text-xl font-light">04</p>
            </div>
            <h3 class="text-base font-semibold">Monthly admission results</h3>
            <p class="text-sm font-normal text-gray-700 leading-6 max-w-[900px] lg:whitespace-nowrap">
              At the end of each calendar month, we send the admission results
              to applicants’ email inboxes.
            </p>
          </div>

          <div class="flex flex-col gap-2 border-t border-[#E5E5E5] pt-6 xl:pl-[150px]">
            <div class="flex items-center gap-2">
              <span class="text-[#43AA13]">➝</span>
              <p class="text-xl font-light">05</p>
            </div>
            <h3 class="text-base font-semibold">Successfully enroll</h3>
            <p class="text-sm font-normal text-gray-700 leading-6  max-w-[900px] lg:whitespace-nowrap">
              Upon admission, students successfully enroll in the program within
              10 days by paying a €2282 deposit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;
