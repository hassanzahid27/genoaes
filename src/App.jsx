// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Program from "./pages/program";
// import About from "./pages/About";
// import Network from "./pages/Network";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/program" element={<Program />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/network" element={<Network />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Program from "./pages/Program";
import About from "./pages/About";
import Network from "./pages/Network";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </Router>
  );
};

export default App;
