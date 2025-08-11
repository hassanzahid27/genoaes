import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowDropDown } from "react-icons/md";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileMenu(window.innerWidth < 1140);
    };
    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <div
        className="relative bg-no-repeat bg-center bg-cover w-full flex flex-col"
        style={{
          backgroundImage: "url('Tooltip.png')",
        }}
      >
        {/* Top Navbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-6 lg:px-20 py-6 gap-4 relative">
          {/* Logo */}
          <div className="flex flex-col text-white max-w-[400px]">
            <h1 className="text-4xl font-extrabold"> GENOAES.</h1>
            <h2>GENOAE ENTERPRENEURSHIP SCHOOL</h2>
          </div>

          {/* Desktop Nav */}
          {!isMobileMenu && (
            <div className="flex gap-[40px] text-white text-sm sm:text-base pl-[220px] font-semibold font-inter">
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
            </div>
          )}

          {/* Desktop Buttons */}
          {!isMobileMenu && (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <div className=" flex gap-3 bg-[#43AA13] text-white px-[28px] py-[10px]  font-semibold text-sm sm:text-base">
                <button className="bg-[#43AA13] text-white   hover:bg-blue-600 transition">
                  Apply
                </button>
                <span className="text-xl">→</span>
              </div>
            </div>
          )}

          {/* Toggle Icon (top-right absolute, does NOT affect layout) */}
          {isMobileMenu && (
            <div className="absolute right-4 top-6 text-2xl text-[#072661] cursor-pointer">
              <button onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu (Centered) */}
        {isMobileMenu && menuOpen && (
          <div className="flex flex-col items-center gap-4 py-4 text-[#072661] text-base font-semibold font-inter">
            <a href="#" className="hover:text-[#00BFFF]">
              Why IvyVista
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Features
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              How It Works
            </a>
            <a href="#" className="hover:text-[#00BFFF]">
              Pricing
            </a>
            <div className="flex flex-col items-center gap-2 pt-2">
              <button className="text-[#072661] font-semibold text-sm">
                Login
              </button>
              <button className="bg-[#00BFFF] text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-blue-600 transition">
                Get Started for Free
              </button>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-center px-4 lg:px-0 pt-[383px] pb-[220px] sm:pb-[240px] md:pb-[260px] lg:pb-[280px]">
          <h1 className=" text-white font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mt-4">
            LAUNCH YOUR STARTUP
            <br />
            <span className=" text-white">
              {" "}
              WHILE EARNING A MASTER'S DEGREE
            </span>
          </h1>
          <p className="   text-[#FCFAF2]  font-light sm:text-xl md:text-2xl lg:text-[27px]    ">
            Go from zero to fundraising with personalized guidance and a strong
            network while obtaining a Master's degree.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
            <button className="bg-white text-black px-6 sm:px-12 py-3   font-semibold text-sm sm:text-base hover:bg-gray-900">
              DISCOVER OUR DIFFERENCE
            </button>

            <button className="border border-[#001133] text-white bg-[#43AA13] px-6 sm:px-12 py-3   font-semibold text-sm sm:text-base hover:bg-[#001133] hover:text-white">
              LEARN MORE ABOUT OUR PROGRAM <span className="text-xl">→</span>
            </button>
          </div>

          {/* Decorative Image: RIGHT side, lower */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
