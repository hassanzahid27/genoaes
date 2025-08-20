import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative">
      <div
        className="relative bg-no-repeat bg-center bg-cover w-full flex flex-col md:px-[40px] px-[16px]"
        style={{
          backgroundImage: "url('Tooltip.png')",
        }}
      >
        {/* Top Navbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between py-6 gap-4 relative border-b border-[#FCFAF2]">
          {/* Logo */}
          <div className="flex flex-col text-white">
            <img src="Union.jpg" alt="Logo" />
          </div>

          {/* Desktop Nav - show only on xl and above */}
          <div className="hidden xl:flex gap-[40px] roboto text-white text-sm sm:text-base pl-[420px] font-inter">
            <Link to="/about" className="hover:text-[#00BFFF]">
              About
            </Link>
            <Link to="/program" className="hover:text-[#00BFFF]">
              Our Program
            </Link>
            <Link to="/network" className="hover:text-[#00BFFF]">
              Our Network
            </Link>
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
          </div>

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
            <Link to="/program" className="hover:text-[#00BFFF]">
              Our Program
            </Link>

            <Link to="/network" className="hover:text-[#00BFFF]">
              Our Network
            </Link>
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
        <div className="relative flex flex-col items-center justify-center text-center px-4 lg:px-0 pt-[183px] md:pt-[200px] xl:pt-[483px] pb-[110px] sm:pb-[240px] md:pb-[260px] lg:pb-[280px]">
          <h1 className="text-white onest text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mt-4">
            <span className="whitespace-nowrap">LAUNCH YOUR STARTUP</span>
            <br />
            <span className="text-white">
              WHILE EARNING A MASTER'S <sm:br> DEGREE</sm:br>{" "}
            </span>
          </h1>

          <p className="roboto text-[#FCFAF2] font-light sm:text-xl md:text-2xl lg:text-[27px] max-w-8xl mt-4">
            Go from zero to fundraising with personalized guidance and a strong
            network while obtaining a Master's degree.
          </p>
          <div className="flex flex-wrap gap-4 mt-10 justify-center sm:justify-center">
            <button className="border border-[#001133] bg-white text-black px-16 py-3 font-semibold text-sm sm:text-base hover:bg-[#001133] hover:text-white transition whitespace-nowrap">
              DISCOVER OUR DIFFERENCE
            </button>

            <button className="border border-[#001133] text-white bg-[#43AA13] px-6 py-3 font-semibold text-sm sm:text-base hover:bg-[#001133] hover:text-white transition whitespace-nowrap">
              LEARN MORE ABOUT OUR PROGRAM <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
