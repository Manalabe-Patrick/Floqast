import React from "react";

//partials
import Header from "../partials/Header";
import Service from "../partials/service";
import How from "../partials/How";
import Footer from "../partials/Footer";

import bgFour from "../assets/images/bg_7.png";

const Services = () => {
  return (
    <div>
      <div>
        <Header />
        <h1 className="pt-40 md:pt-56 xl:text-5xl text-4xl font-bold text-center text-slate-200 opacity-90 pb-20 md:pb-40 ">
          About us
        </h1>
        <img
          src={bgFour}
          alt="image four "
          className="w-full header-bg mt-24 absolute top-0 right-0 -z-20 h-1/4 md:h-1/2"
          data-aos="zoom-out-down"
          data-aos-delay="200"
        />
      </div>

      <Service />
      <How />
      <Footer />
    </div>
  );
};

export default Services;
