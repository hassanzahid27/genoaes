import React from "react";

const Overview = () => {
  return (
    <div className="lg:px-[40px] px-[15px] pt-[40px]">
      <div className="flex flex-col-reverse lg:flex-row gap-28">
        <div className="bg-[#FAF5E2] p-6 lg:w-5xl">
          <h2 className="text-[#43AA13]   mb-4 roboto font-light text-[24px] leading-[32px] tracking-[0]">
            Program Overview
          </h2>

          <div className="space-y-6 text-sm  ">
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-30 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Idea stage
              </span>{" "}
              No business idea required
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-34 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                {" "}
                Duration{" "}
              </span>{" "}
              8 months, full-time, on campus
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-31 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Locations
              </span>{" "}
              Washington, San Francisco, New York (US), Genoa (Europe)
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-36 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Cohort
              </span>{" "}
              60% international students
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-36 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Credits
              </span>{" "}
              60 ECTS European Master’s
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-28 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Admissions
              </span>{" "}
              Applications closing on 31/08/2024
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-38 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Intake
              </span>{" "}
              21/09/2024
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-24 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Requirements
              </span>{" "}
              1 month internship, BSc/BA, IELTS 7.0 or higher
            </p>
            <p class="roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              <span className="pr-38 roboto font-light text-[16px] leading-[24px] tracking-[0] text-gray-700">
                Tuition
              </span>{" "}
              €23,000 <br />
              <a
                href="#"
                className="underline pl-36  lg:pl-36 md:pl-50 xl:pl-50"
              >
                Scholarships are available
              </a>
            </p>
          </div>
          <div className="pt-[80px]">
            <button className="mt-6 w-full border border-[#43AA13] text-[#193E2C] py-3 font-medium hover:bg-[#43AA13] hover:text-white">
              APPLY NOW →
            </button>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl    mb-4 onest font-light text-[40px] leading-[48px] tracking-[0] max-w-[1965px]">
            Launch while <span className="text-[#43AA13]">studying</span> like
            Mark Zuckerberg, Bill Gates, or Elon Musk <br />
            but <span className="text-[#43AA13]">with time and support.</span>
          </h2>

          <p className="text-gray-700 mb-8 max-w-[765px] roboto font-light text-[18px] leading-[24px] tracking-[0]">
            Genoa ES helps bright bachelor graduates with little experience
            become successful founders in both the US and EU. Through a unique
            mix of academia, experts, and real-world experience, you can develop
            the skills to create a venture, build a strong network, and obtain a
            Master's.
          </p>

          <div className="grid grid-cols-2 gap-8 lg:pt-[220px]">
            <div className="border-l border-[#43AA13] pl-4">
              <p className="onest">
                Receive personalized 1:1 guidance from +100 startup experts at
                any time.
              </p>
            </div>
            <div className="border-l border-[#43AA13] pl-4">
              <p className="onest">
                Spend 1/3 of the time with university professors and 2/3 with
                industry mentors.
              </p>
            </div>
            <div className="border-l border-[#43AA13] pl-4">
              <p className="onest">
                Learn by networking and working in New York, San Francisco, and
                Washington, D.C.
              </p>
            </div>
            <div className="border-l border-[#43AA13] pl-4">
              <p className="onest">
                Pitch in front of +100 investors and obtain a prestigious
                Master’s at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
