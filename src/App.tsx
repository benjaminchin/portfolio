import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-gradient">
      <div className="z-50">
        <Navbar />
      </div>
      <div id="home" className="z-0">
        <Hero />
      </div>
      <div id="about" className="z-0">
        <About />
      </div>
      <div id="work" className="z-0">
        <Work />
      </div>
    </div>
  );
};

export default App;
