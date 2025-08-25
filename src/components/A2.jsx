import React from "react";

const A2 = () => {
  return (
    <div className="px-6 md:px-12 lg:px-[40px] py-[80px]  ">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="md:text-[40px] text-[#202020] roboto font-light text-[56px] leading-[64px] tracking-[0]">
          What we believe i
          <span className="relative inline-block">
            {/* "n" letter */}
            <span className="relative z-10">n</span>

            {/* Image behind the "n" */}
            <img
              src="/believe.png"
              alt="believe background"
              className="absolute top-2 left-0 w-[1000px] h-[30px] -z-0 rotate-6 opacity-70"
            />
          </span>
          <span className="lg:pl-[40px] pl-[20px] text-[#202020] text-lg md:text-xl roboto font-light text-[24px] leading-[32px] tracking-[0]">
            Students can impact the world if supported by industry experts.
          </span>
        </h1>
      </div>

      {/* 4 Cards Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 1 */}

        <div className="bg-[#FAF5E2] p-6  max-w-[700px]">
          <h2 className="text-[#193E2C]  lg:pt-3 text-lg   mb-3   roboto font-medium text-[32px] leading-[40px] tracking-[0] uppercase">
            GLOBAL APPROACH
          </h2>
          <p className="text-[#202020] text-sm md:text-base  lg:pt-[50px]   roboto font-normal text-[18px] leading-[24px] tracking-[0]  max-w-[552px]">
            Scaling across the Atlantic is challenging, as evidenced by Uber and
            various European ventures. We believe learning from top US and EU
            institutions and mentors at the early stage of an idea greatly aids
            in scaling. With Genoa ES, you gain deep insights into US and EU
            markets, legal frameworks, and cultures, along with a robust network
            for successful growth right from the start.
          </p>
        </div>

        {/* Card 2 */}
        <div className="lg:pr-[100px]">
          <div className="bg-[#FAF5E2] p-6  max-w-[700px]">
            <h2 className="text-[#193E2C]  lg:pt-3 text-lg   mb-3   roboto font-medium text-[32px] leading-[40px] tracking-[0] uppercase">
              PERSONAL GUIDANCE
            </h2>
            <p className="text-[#202020] text-sm md:text-base  lg:pt-[50px]   roboto font-normal text-[18px] leading-[24px] tracking-[0]  max-w-[552px]">
              Quality mentorship is essential for navigating startup
              complexities. A mentor provides tailored guidance, practical
              advice, and personalized feedback. Support from successful
              founders, investors, and leaders accelerates learning and
              increases success chances. With Genoa ES mentors, you are better
              prepared for obstacles and opportunities from idea inception to
              growth.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="lg:pl-[100px]">
          <div className="bg-[#FAF5E2] p-6  max-w-[700px]  ">
            <h2 className="text-[#193E2C]  lg:pt-3 text-lg   mb-3   roboto font-medium text-[32px] leading-[40px] tracking-[0] uppercase">
              REAL WORLD EXPERIENCE
            </h2>
            <p className="text-[#202020] text-sm md:text-base  lg:pt-[50px]   roboto font-normal text-[18px] leading-[24px] tracking-[0]  max-w-[552px]">
              Real-world experience for startup founders is essential for
              gaining practical insights and understanding how to execute.
              Thanks to a tailored class schedule and living in the world’s best
              ecosystems, at Genoa ES, you have the time to apply immediately
              what you’ve learned and iterate fast, allowing for rapid growth of
              your startup before graduation time.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="lg:pl-[50px]">
          <div className="bg-[#FAF5E2] p-6  max-w-[700px]">
            <h2 className="text-[#193E2C]  lg:pt-3 text-lg   mb-3   roboto font-medium text-[32px] leading-[40px] tracking-[0] uppercase">
              SOLID HARD SKILLS
            </h2>
            <p className="text-[#202020] text-sm md:text-base  lg:pt-[50px]   roboto font-normal text-[18px] leading-[24px] tracking-[0] max-w-[552px]">
              Solid hard skills, whether it’s coding, financial analysis, or
              marketing, are vital for startup founders because they provide the
              technical expertise necessary to execute tasks fast and
              effectively. Genoa ES mentors ensure you develop these skills
              through intense and highly focused workshops, followed by 1:1
              meetings. So you will be ready to execute as if you had years of
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default A2;
