// src/pages/Home.jsx
import React from "react";
import Dashboard from "../components/Dashboard";
import Startup from "../components/Startup";
import Professor from "../components/Professor";
import Master from "../components/Master";
import WhyGenoa from "../components/School";
import Network from "../components/Network";
import Enterpreneurship from "../components/Enterpreneurship";
import Scrolling from "../components/Scrolling";
import Jounney from "../components/Jounney";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#FCFAF2]">
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

export default Home;
