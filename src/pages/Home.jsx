import React from "react";

//components
import Header from "../partials/Header";
import About from "../partials/About";
import Hero from "../partials/Hero";
import Why from "../partials/why";
import How from "../partials/How";
import Partners from "../partials/Partners";
import Testimonies from "../partials/Testimonies";
import Contact from "../partials/Contact";
import Footer from "../partials/Footer";

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
        className="hidden md:block w-full absolute right-0 -z-10"
        style={{ top: "126rem", height: "28rem" }}
        data-aos="zoom-y-out"
        data-aos-delay="150"
      />
      <Why />
      <How />
      <Partners />
      <Testimonies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
