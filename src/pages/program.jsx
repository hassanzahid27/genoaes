import React from "react";
import Overview from "../components/O";
import September from "../components/September";
import October from "../components/October";
import November from "../components/November";
import Questions from "../components/Questions";
import January from "../components/January";
import May from "../components/May";
import Student from "../components/Student";
import Help from "../components/Help";
import Personallly from "../components/Personally";
import Town from "../components/Town";
import Professssssor from "../components/Professor";
import Program from "../components/Program";
import Surrounded from "../components/Surrounded";
import Scrol from "../components/Scroll";
import Microsoft from "../components/Microsoft";
import Frequently from "../components/Frequently";
import Applications from "../components/Applications";
import Journey from "../components/Jounney";
import Footer from "../components/Footer";
import Genoa from "../components/Genoa";
import OurProgram from "../components/navbars/OurProgramNavbar";

const program = () => {
  return (
    <div className="bg-[#FCFAF2]">
      <OurProgram />
      <Overview />
      <September />
      <October />
      <November />
      <January />
      <May />
      <Questions />
      <Student />
      <Help />
      <Personallly />
      <Town />
      <Genoa />
      <Program />
      <Surrounded />
      <Scrol />
      <Microsoft />
      <Frequently />
      <Applications />
      <Journey />
      <Footer />
    </div>
  );
};

export default program;
