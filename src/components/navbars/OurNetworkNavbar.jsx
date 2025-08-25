import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const OurNetwork = () => {
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
            <Link to="/program" className="hover:text-[#00BFFF]">
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
            <div className="flex gap-3 bg-[#43AA13] text-white px-[28px] py-[10px] font-semibold text-base mt-4 max-w-max rounded">
              <button className="bg-[#43AA13] text-white hover:bg-blue-600 transition w-full">
                Apply
              </button>
              <span className="text-xl">→</span>
            </div>
          </nav>
        )}

        {/* Hero Section */}
        {/* Hero Section */}
        <div className="pt-[23px] pb-[80px]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[250px]">
            {/* Left Text */}
            <div className="flex flex-col max-w-[640px] gap-[16px] text-center lg:text-left">
              <h1 className="onest font-light text-[28px] sm:text-[32px] lg:text-[40px] leading-[36px] sm:leading-[40px] tracking-[0] uppercase text-[#FCFAF2]">
                leading Experts will Guide you STep by Step
              </h1>
              <p className="roboto text-[#FCFAF2] font-light text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] tracking-[0]">
                Access{" "}
                <span className="text-[#43AA13]">
                  professionals from top companies and VCs 24/7
                </span>{" "}
                for introductions and industry-specific guidance.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-[700px] flex justify-center">
              <img
                src="HN.jpg"
                alt="Hero"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Mentors Section */}
          <div className="flex flex-col gap-[32px] mt-12">
            <p className="roboto font-normal text-[16px] sm:text-[18px] leading-[24px] tracking-[0] text-[#43AA13] text-center lg:text-left">
              Joined by mentors from:
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-[34px]">
              <img
                src="s.png"
                alt="Sequoia"
                className="h-[28px] object-contain"
              />
              <img
                src="i.png"
                alt="Apple"
                className="h-[28px] object-contain"
              />
              <div className="flex items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq2nb6SeFwSCEQVSPDHCCQMX9FOB829ga_DpjzllmYx1WU70HUGtJAuqzzsOY_GHffWbQ&usqp=CAU"
                  className="h-[28px] object-contain"
                  alt="Microsoft"
                />
                <span className="text-white font-medium text-base sm:text-lg">
                  Microsoft
                </span>
              </div>
              <img
                src="meta.svg"
                alt="Meta"
                className="h-[28px] object-contain"
              />
              <span className="text-[#FCFAF2] font-medium text-lg">Google</span>
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
  );
};

export default OurNetwork;
