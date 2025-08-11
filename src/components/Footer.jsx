import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="px-[40px] ">
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#BCD4C7]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>{" "}
      </div>

      <div className="  flex gap-[88px] py-[80px] ">
        <div className="flex flex-col   ">
          <h1 className="text-4xl font-extrabold text-[#43AA13]"> GENOAES.</h1>
          <p className="text-[14px] leading-[20px] max-w-[380px] pt-[12px]">
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
        <div className="">
          <p className=" font-light text-[16px] leading-[16px] tracking-[0]">
            Navigation
          </p>
        </div>
        <div className="pl-[20px] flex gap-[26px]  ">
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

        <div class="flex flex-col  pr-[40px] rotate-90 gap-2">
          <span class="text-[#202020] font-extralight text-[40px] leading-[40px] tracking-[0]">
            2024©
          </span>

          <span class="text-black font-roboto font-extralight text-[16px] leading-[16px]">
            All rightsreserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
