import React from "react";

//components
import Header from "../partials/Header";
import About from "../partials/About";
import Hero from "../partials/Hero";
import Why from "../partials/why";
import How from "../partials/How";

// imports
import bgTwo from "../assets/images/bg_2.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <img
        src={bgTwo}
        alt="Image here"
        className="hidden md:block absolute right-0 -z-10"
        style={{ top: "125rem" }}
      />
      <Why />
      <How />
    </div>
  );
};

export default Home;
