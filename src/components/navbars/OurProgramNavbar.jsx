import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const OurProgram = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative bg-[#193E2C]">
      <div className="relative bg-no-repeat bg-center bg-cover w-full flex flex-col md:px-[40px] px-[16px]">
        {/* Top Navbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 gap-4 relative border-b border-[#43AA13]">
          {/* Logo */}
          <div className="flex flex-col text-white">
            <img src="Union.png" alt="Logo" />
          </div>

          {/* Desktop Nav - show only on xl and above */}
          <nav className="hidden xl:flex gap-[40px] roboto text-white text-sm sm:text-base pl-[420px] font-inter">
            <Link to="/about" className="hover:text-[#00BFFF]">
              About
            </Link>
            <Link to="program" className="hover:text-[#00BFFF]">
              Our Program
            </Link>
            <a href="/network" className="hover:text-[#00BFFF]">
              Our Network
            </a>
            <Link to="#" className="hover:text-[#00BFFF]">
              Why Choose Us?
            </Link>
            <a href="#" className="hover:text-[#00BFFF]">
              Career
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#00BFFF] transition"
            >
              En
              <MdArrowDropDown size={20} />
            </a>
          </nav>

          {/* Desktop Buttons - show only on xl and above */}
          <div className="hidden xl:flex flex-col sm:flex-row gap-2 sm:gap-4">
            <div className="flex gap-3 bg-[#43AA13] text-white px-[20px] py-[7px] font-semibold text-sm sm:text-base">
              <button className="bg-[#43AA13] text-white hover:bg-blue-600 transition">
                Apply
              </button>
              <span className="text-xl">→</span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button - visible below xl */}
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none absolute top-6 right-2 xl:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu - visible below xl when open */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 text-white items-center justify-center bg-opacity-80 px-6 py-6   border-[#FCFAF2] xl:hidden">
            <a href="#" className="hover:text-[#00BFFF]">
              About
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Our Program
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Our Network
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Why Choose Us?
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Career
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-[#00BFFF] transition"
            >
              En
              <MdArrowDropDown size={20} />
            </a>
            <div className="flex gap-3 bg-[#43AA13] text-white px-[28px] py-[10px] font-semibold text-base mt-4 max-w-max rounded">
              <button className="bg-[#43AA13] text-white hover:bg-blue-600 transition w-full">
                Apply
              </button>
              <span className="text-xl">→</span>
            </div>
          </nav>
        )}

        {/* Hero Section */}
        <div className=" pt-[23px]">
          <img src="Hero.jpg" className="" alt="" />

          <div className="flex items-center justify-center flex-col p-[40px]">
            <h1 class="text-[#FCFAF2] onest font-light text-[64px] max-w-[800px] leading-[64px] tracking-[0] text-center uppercase">
              Create your startup and obtain a Master's
            </h1>
            <p className="text-[#43AA13] roboto pt-[8px]  max-w-[880px] font-light text-[24px] leading-[32px] tracking-[0] text-center">
              Master’s in International Business Creation
              <span className="text-[#FCFAF2] ">
                by UniGe with Georgetown University.
              </span>
            </p>
            <p className="text-[#FCFAF2] font-light roboto text-[24px] leading-[32px] tracking-[0] text-center">
              {" "}
              Go from zero to fundraising with personalized guidance and a
              strong network in Europe and in the US
            </p>
          </div>

          <div className="flex flex-col lg:flex-row  lg:items-start pb-8 gap-4 lg:gap-0 lg:justify-between lg:px-[32px]">
            <p className="text-[#FCFAF2] font-normal text-[20px] sm:text-[22px] md:text-[24px] leading-[32px] tracking-[0] max-w-[200px] md:max-w-none text-left md:text-center lg:text-left">
              Joined by experts with experience in:
            </p>

            {/* Logos */}
            <div className="lg:pt-[40px] flex flex-wrap md:flex-nowrap justify-center md:justify-center lg:justify-start items-center md:gap-x-[40px] gap-y-[20px] max-w-[1000px] mx-auto">
              <div className="w-1/3 md:w-auto flex justify-center">
                <img
                  src="s.png"
                  alt="Sequoia"
                  className="h-[28px] object-contain"
                />
              </div>
              <div className="w-1/3 md:w-auto flex justify-center">
                <img
                  src="i.png"
                  alt="Apple"
                  className="h-[28px] object-contain"
                />
              </div>
              <div className="w-1/3 md:w-auto flex justify-center items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2nb6SeFwSCEQVSPDHCCQMX9FOB829ga_DpjzllmYx1WU70HUGtJAuqzzsOY_GHffWbQ&usqp=CAU"
                  className="h-[28px] object-contain"
                  alt="Microsoft"
                />
                <span className="text-white font-medium text-base sm:text-lg">
                  Microsoft
                </span>
              </div>
              <div className="w-1/3 md:w-auto flex justify-center">
                <img
                  src="meta.svg"
                  alt="Meta"
                  className="h-[28px] object-contain"
                />
              </div>
              <div className="w-1/3 md:w-auto flex justify-center">
                <span className="text-[#FCFAF2] font-medium text-lg">
                  Google
                </span>
              </div>
              <div className="w-1/3 md:w-auto flex justify-center">
                <img
                  src="t.png"
                  alt="Tesla"
                  className="h-[28px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgram;
