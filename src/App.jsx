import React from "react";
import Navbar from "./Components/navbar";
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import About from "./Components/Ab-Section";
import Eys from "./Components/Eys";
import Feature from "./Components/Feature";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-full text-[#212121] bg-[#F1F1F1]">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Eys />
        <Feature />
      </div>
    </>
  );
}

export default App;
