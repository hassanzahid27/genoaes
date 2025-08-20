import React from "react";
import N1 from "../components/N1";
import N2 from "../components/N2";
import N3 from "../components/N3";
import N7 from "../components/N7";
import N9 from "../components/N9";
import N10 from "../components/N10";
import Journey from "../components/Jounney";
import Footer from "../components/Footer";
import N8 from "../components/N8";
import N6 from "../components/N6";
import N4 from "../components/N4";
import N5 from "../components/N5";

const Network = () => {
  return (
    <div className="bg-[#FCFAF2]">
      <N1 />
      <N2 />
      <N3 />

      <N4 />
      <div className="bg-white space-y-6 pt-6 ">
        <N5 />
        <N6 />
      </div>

      <N7 />
      <N8 />
      <N9 />
      <N10 />
      <Journey />
      <Footer />
    </div>
  );
};

export default Network;
