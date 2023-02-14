import React from "react";

// imports
import bgFour from "../assets/images/bg_4.png";

//partials
import Header from "../partials/Header";
import About from "../partials/About";
import MBG from "../partials/MBG";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="pt-40 md:pt-56 xl:text-5xl text-4xl font-bold text-center text-slate-200 opacity-90 pb-20 md:pb-40 ">
          About us
        </h1>
        <img
          src={bgFour}
          alt="image four "
          className="w-full header-bg mt-24 absolute top-0 right-0 -z-20 h-1/4 md:h-1/2"
        />
      </div>

      <About />
      <MBG />
    </div>
  );
};

export default AboutUs;
