// import React from "react";
// import A1 from "../components/A1";
// import A2 from "../components/A2";
// import A4 from "../components/A4";
// import A6 from "../components/A6";
// import A7 from "../components/A7";
// import Journey from "../components/Jounney";
// import Footer from "../components/Footer";
// import A5 from "../components/A5";
// import A3 from "../components/A3";
// import A9 from "../components/A9";
// import A8 from "../components/A8";

// const About = () => {
//   return (
//     <div className="bg-[#FCFAF2]">
//       <A1 />
//       <A2 />
//       <A3 />
//       <A4 />
//       <A5 />
//       <A6 />
//       <A7 />
//       <A8 />
//       <A9 />
//       <Journey />
//       <Footer />
//     </div>
//   );
// };

// export default About;

import React from "react";
import AboutNavbar from "../components/navbars/AboutNavbar"; // ✅ import new navbar
import A1 from "../components/A1";
import A2 from "../components/A2";
import A4 from "../components/A4";
import A6 from "../components/A6";
import A7 from "../components/A7";
import Journey from "../components/Jounney";
import Footer from "../components/Footer";
import A5 from "../components/A5";
import A3 from "../components/A3";
import A9 from "../components/A9";
import A8 from "../components/A8";

const About = () => {
  return (
    <div className="bg-[#FCFAF2]">
      <AboutNavbar /> {/* ✅ now About has its own navbar */}
      <A1 />
      <A2 />
      <A3 />
      <A4 />
      <A5 />
      <A6 />
      <A7 />
      <A8 />
      <A9 />
      <Journey />
      <Footer />
    </div>
  );
};

export default About;
