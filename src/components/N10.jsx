import React, { useState } from "react";

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the admission process?",
      answer: (
        <>
          The admission process for Genoa Entrepreneurship School includes
          completing an online application, and attending interviews.{" "}
          <a href="#" className="text-[#43AA13] underline">
            Visit page
          </a>
        </>
      ),
    },
    {
      question: "How can I apply?",
      answer: "You can apply through our online portal.",
    },
    {
      question: "What is the duration of the program?",
      answer: "The program typically lasts 6 months.",
    },
    {
      question: "What is the cost of attending?",
      answer: "The cost varies depending on scholarships and aid.",
    },
    {
      question: "Does Genoa ES offer financial aid or scholarships?",
      answer: "Yes, Genoa ES offers both need-based and merit scholarships.",
    },
    {
      question: "What sets Genoa ES apart from other programs?",
      answer: "Our hands-on approach and global network of mentors.",
    },
  ];

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

      <div className="grid md:grid-cols-2 grid-cols-1 gap-12 border-gray-300 mt-8 ">
        {/* Left text */}
        <div className="space-y-4 text-[#202020] max-w-[550px] roboto font-normal text-[24px] leading-[32px] tracking-[0]">
          <p>
            Have questions about Genoa ES? <br />
            Check out our FAQ section for answers to commonly asked questions.
          </p>
          <p className="max-w-[330px]">
            Still need assistance? <br />
            Schedule a call on{" "}
            <a href="#" className="text-[#43AA13] font-medium underline">
              Calendly
            </a>{" "}
            for further support.
          </p>
        </div>

        {/* FAQ section */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-t border-gray-200 pt-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-[#000000] roboto font-light text-[24px] leading-[32px] tracking-[0] align-middle">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-[#000000] roboto font-normal text-[18px] leading-[24px] tracking-[0] align-middle">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frequently;
