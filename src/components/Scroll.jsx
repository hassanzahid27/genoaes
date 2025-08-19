import React, { useRef } from "react";

const Scrol = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="px-[40px] pt-[120px]">
      <p className="text-[#43AA13] text-lg font-normal text-[24px] leading-[32px] tracking-[0]">
        Life-changing for the students
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>
      <div className="flex flex-col  gap-[88px]">
        <p className="font-onest font-light text-[32px] leading-[40px] tracking-[0] uppercase   md:max-w-[524px] lg:max-w-[596px] md:flex  flex flex-col">
          Hands-on accelerated growth
        </p>

        <div
          ref={scrollRef}
          className="flex gap-[8px] overflow-x-auto scroll-smooth w-full max-w-screen px-4 snap-x snap-mandatory scrollbar-hide"
        >
          {/** Card 1 */}
          <div className="bg-[#E5EBDD] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}
            <p className="relative z-10 text-[24px] leading-[32px] font-light px-[16px] text-[#193E2C] pt-[16px]">
              “I wasn't considering pursuing a master's degree but this course
              is practical and opens incredible doors. It certainly is the
              experience that has improved me the most in my life.”
            </p>

            {/* Comma image */}
            <img
              src="coma.png"
              alt="comma"
              className="absolute left-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80"
            />
            <div className="pl-[16px] pt-[84px]">
              <a
                href="https://www.linkedin.com/in/hassan-zahid-29367b360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="IconButton.png" alt="LinkedIn" />
              </a>
            </div>

            <div className="flex-col px-[16px] pt-[24px]">
              <h2 className="font-medium text-[18px] leading-[24px] tracking-[0] text-[#202020]">
                Lea Delic
              </h2>

              <p className="font-light text-[18px] leading-[24px] tracking-[0] text-[#202020]">
                Student founder 2023
              </p>
            </div>
          </div>

          {/** Card 2 */}
          <div className="  w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Comma image */}
            <img src="Boy.jpg" className="" alt="" />
          </div>

          <div className="bg-[#BCD4C7] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}
            <p className="relative z-10 text-[24px] leading-[32px]  font-light px-[16px] text-[#193E2C] pt-[16px]">
              “The other students are amazing people, and mentors are
              incredible. They are at a global level, but they take the time to
              be with you and are ready to support you 24/7.”
            </p>

            {/* Comma image */}
            <img
              src="coma.png"
              alt="comma"
              className="absolute left-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80 "
            />

            <div className="pl-[16px] pt-[84px]">
              <a
                href="https://www.linkedin.com/in/hassan-zahid-29367b360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="IconButton.png" alt="LinkedIn" />
              </a>
            </div>

            <div className="flex-col px-[16px] pt-[24px]">
              <h2 className="font-medium text-[18px] leading-[24px] tracking-[0] text-[#202020]">
                Chalermchon Puapolthep
              </h2>
              <p className="font-light text-[18px] leading-[24px] tracking-[0] text-[#202020]">
                Student founder 2023
              </p>
              <img src="boy.jpg" className="pt-[8px] pb-[16px]" alt="" />
            </div>
          </div>
          <div className="bg-[#E5EBDD] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}

            <img src="B2.jpg" alt="" />
          </div>

          <div className="bg-[#E5EBDD] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}

            <img src="Girl.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrol;
