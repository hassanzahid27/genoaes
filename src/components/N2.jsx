import React from "react";
import { LucideSquare, LucideUser, LucideStar } from "lucide-react"; // using lucide-react icons

const N2 = () => {
  const features = [
    {
      icon: <LucideSquare className="text-[#43AA13] w-6 h-6" />,
      title: "Topic specific workshops and 1:1s",
      desc: "Class workshops are followed by hands-on 30-minute 1:1 sessions, ensuring that the learning is directly and specifically applied to your venture.",
    },
    {
      icon: <LucideUser className="text-[#43AA13] w-6 h-6" />,
      title: "Personalized weekly 1:1 sessions",
      desc: "You'll be paired with an industry expert in your field who, through weekly 30-minute 1:1 sessions, will ensure you improve each week of the program.",
    },
    {
      icon: <LucideStar className="text-[#43AA13] w-6 h-6" />,
      title: "Hands on support 24/7",
      desc: "Mentors will remain available at any time via email or phone, so any problems can be resolved quickly and your startup's progress won't be interrupted.",
    },
  ];

  return (
    <div className="px-[20px] sm:px-[40px] py-[60px] pt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-start gap-4 lg:gap-[100px]"
          >
            {/* Divider + Title */}
            <div className="w-full border-t border-[#202020] pt-4 flex items-center gap-2 xl:gap-[30px]">
              {f.icon}
              <h3 className="onest  text-[#202020]   sm:text-[20px]   roboto font-normal text-[24px] leading-[32px] align-bottom tracking-[0]">
                {f.title}
              </h3>
            </div>
            {/* Description */}
            <p className=" text-[#202020]   sm:text-[16px] roboto font-light text-[18px] leading-[24px] tracking-[0] align-bottom max-w-[410px]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default N2;
