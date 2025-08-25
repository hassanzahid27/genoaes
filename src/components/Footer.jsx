import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:px-[40px] px-[20px] relative">
      {/* Top border */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#BCD4C7]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[88px] py-[40px] lg:py-[80px] relative">
        {/* Left column */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-[#43AA13]"> GENOAES.</h1>
          <p className="text-[14px] leading-[20px] md:max-w-[380px] max-w-[200px] pt-[12px]">
            Scheday Associazione culturale e di promozione sociale Piazza Santa
            Maria in Via Lata 11, 16128 Genoa, Italy
          </p>
          <p className="text-[14px] leading-[20px] pt-[30px] pb-[40px]">
            Mail{" "}
            <a
              href="mailto:admission@genoaes.com"
              className="text-[#43AA13] hover:underline"
            >
              admission@genoaes.com
            </a>
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-black hover:text-[#43AA13] text-[18px]">
              <FaInstagram />
            </a>
            <a href="#" className="text-black hover:text-[#43AA13] text-[18px]">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="font-light text-[16px] leading-[16px] tracking-[0]">
            Navigation
          </p>
        </div>

        <div className="pl-[20px] flex gap-[26px] flex-wrap sm:flex-nowrap">
          <div className="flex flex-col gap-[24px]">
            <a href="#" className="hover:underline">
              ↳ About us
            </a>
            <a href="#" className="hover:underline">
              ↳ Career
            </a>
          </div>

          <a href="#" className="hover:underline">
            ↳ Master Program
          </a>
          <a href="#" className="hover:underline">
            ↳ Our network
          </a>
          <a href="#" className="hover:underline">
            ↳ Why Choose Us?
          </a>
        </div>

        {/* Vertical right corner */}
        <div className="absolute right-[40px] bottom-90 md:bottom-44 flex flex-col items-center">
          {/* Rotate the container instead of individual spans */}
          <div className="flex flex-col items-center rotate-90 origin-bottom-right">
            <span className="text-[#202020] font-extralight text-[40px] leading-[40px] tracking-[0]">
              2024©
            </span>
            <span className="text-black font-roboto font-extralight text-[16px] leading-[16px] mt-2">
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
