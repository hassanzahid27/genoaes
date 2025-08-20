import React, { useRef } from "react";

const N9 = () => {
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
    <div className="pt-[120px]">
      <div className="flex flex-col lg:flex-row gap-[88px]">
        <p className="font-onest font-light text-[32px] leading-[40px] tracking-[0] uppercase pl-[40px] md:max-w-[524px] lg:max-w-[296px] md:flex  flex flex-col">
          Mentors present to ensure your success
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
              src="comma.png"
              alt="comma"
              className="absolute right-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80"
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
              <img src="n2.jpg" className="pt-[8px] pb-[16px]" alt="" />
            </div>
          </div>

          {/** Card 2 */}
          <div className="bg-[#BCD4C7] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}
            <p className="relative z-10 text-[24px] leading-[32px] font-light px-[16px] text-[#193E2C] pt-[16px]">
              “The other students are amazing people, and mentors are
              incredible. They are at a global level, but they take the time to
              be with you and are ready to support you 24/7.”
            </p>

            {/* Comma image */}
            <img
              src="comma.png"
              alt="comma"
              className="absolute right-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80"
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
              <img src="n3.jpg" className="pt-[8px] pb-[16px]" alt="" />
            </div>
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
              src="comma.png"
              alt="comma"
              className="absolute right-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80 "
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
              <img src="boyy.jpg" className="pt-[8px] pb-[16px]" alt="" />
            </div>
          </div>
          <div className="bg-[#E5EBDD] w-[436px] shrink-0 snap-start relative flex flex-col items-start">
            {/* Text */}
            <p className="relative z-10 text-[24px] leading-[32px] px-[16px] font-light text-[#193E2C] pt-[16px]">
              “I wasn't considering pursuing a master's degree but this course
              is practical and opens incredible doors. It certainly is the
              experience that has improved me the most in my life.”
            </p>

            {/* Comma image */}
            <img
              src="comma.png"
              alt="comma"
              className="absolute right-6 top-28 -translate-y-1/2 w-[200px] h-auto opacity-80"
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
              <img src="e.jpg" className="pt-[8px] pb-[16px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default N9;
