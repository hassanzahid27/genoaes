import React from "react";
import Navbar from "./components/Navbar";
import Professor from "./components/Professor";
import Enterpreneurship from "./components/Enterpreneurship";
import Jounney from "./components/Jounney";
import WhyGenoa from "./components/School";
import Scrolling from "./components/Scrolling";
import Footer from "./components/Footer";
import Startup from "./components/Startup";
import Master from "./components/Master";
import Network from "./components/Network";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-[#FCFAF2]">
      <Navbar />
      <Dashboard />
      <Startup />
      <Professor />
      <Master />
      <WhyGenoa />
      <Network />
      <Enterpreneurship />

      <Scrolling />
      <Jounney />
      <Footer />
    </div>
  );
};

export default App;
