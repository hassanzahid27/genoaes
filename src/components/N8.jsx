import React, { useState } from "react";

const FilterGallery = () => {
  // ✅ Example images (you will replace with your 40 pics)
  const images = [
    {
      id: 1,
      src: "A1.png",
      category: "Mentors",
      industry: "Technology",
    },
    {
      id: 2,
      src: "A6.png",
      category: "Investors",
      industry: "Business",
    },
    {
      id: 3,
      src: "A3.png",
      category: "Professors",
      industry: "Education",
    },
    {
      id: 4,
      src: "A4.png",
      category: "Students",
      industry: "Health",
    },
    {
      id: 5,
      src: "A5.png",
      category: "Students",
      industry: "Technology",
    },
    {
      id: 6,
      src: "A7.png",
      category: "Mentors",
      industry: "Technology",
    },
    {
      id: 7,
      src: "A8.png",
      category: "Investors",
      industry: "Business",
    },
    {
      id: 8,
      src: "A99.png",
      category: "Professors",
      industry: "Education",
    },
    {
      id: 9,
      src: "A10.png",
      category: "Students",
      industry: "Health",
    },
    {
      id: 10,
      src: "A11.png",
      category: "Students",
      industry: "Technology",
    },
    {
      id: 11,
      src: "A4.png",
      category: "Mentors",
      industry: "Technology",
    },
    {
      id: 12,
      src: "A12.png",
      category: "Investors",
      industry: "Business",
    },
    {
      id: 13,
      src: "A13.png",
      category: "Professors",
      industry: "Education",
    },
    {
      id: 14,
      src: "A14.png",
      category: "Students",
      industry: "Health",
    },
    {
      id: 15,
      src: "A15.png",
      category: "Students",
      industry: "Technology",
    },

    {
      id: 7,
      src: "A7.png",
      category: "Mentors",
      industry: "Technology",
    },
    {
      id: 2,
      src: "A6.png",
      category: "Investors",
      industry: "Business",
    },
    {
      id: 3,
      src: "A3.png",
      category: "Professors",
      industry: "Education",
    },
    {
      id: 4,
      src: "A4.png",
      category: "Students",
      industry: "Health",
    },
    {
      id: 5,
      src: "A5.png",
      category: "Students",
      industry: "Technology",
    },

    // 👉 add more images here
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  // ✅ Filtering logic
  const filteredImages = images.filter((img) => {
    return (
      (selectedCategory === "All" || img.category === selectedCategory) &&
      (selectedIndustry === "All" || img.industry === selectedIndustry)
    );
  });

  return (
    <div className="px-[40px] py-4 pt-[100px]">
      <div className="mt-6   flex flex-col md:flex-row justify-between items-center pb-[40px] text-xs text-[#072661] mx-auto gap-2">
        <div className="flex w-full">
          <div className="w-1/2 border-t-2 border-[#193E2C]"></div>
          <div className="w-5/2 border-t-2 border-[#BCD4C7]"></div>
        </div>
      </div>
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        {/* Categories */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-[#202020] roboto font-normal text-[18px] leading-[24px] tracking-[0]">
            Sort by category
          </span>
          {["All", "Mentors", "Investors", "Professors", "Students"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 border   text-sm ${
                  selectedCategory === cat ? " " : ""
                }`}
              >
                {cat}
              </button>
            )
          )}
          <div className="flex items-center gap-2 lg:pl-10">
            <span className="text-sm text-[#202020] roboto font-normal text-[18px] leading-[24px] tracking-[0]">
              Sort by industry
            </span>
            <select
              className="border  px-3 py-1 text-sm"
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
            >
              <option value="Selected Item here">Selected Item here</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
          </div>
        </div>

        {/* Industry Dropdown */}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.category}
              className=" shadow-md"
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No images found
          </p>
        )}
      </div>
    </div>
  );
};

export default FilterGallery;
