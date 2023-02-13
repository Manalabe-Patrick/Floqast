import React from "react";

import bgAbout from "../assets/images/bg_1.png";

const About = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div className="flex flex-wrap lg:flex-no-wrap">
        <div className="w-full lg:w-1/2 p-5">
          {/* about us image */}
          <img src={bgAbout} alt="Your Image" className="rounded-xl" />
        </div>
        <div className="w-full lg:w-1/2 p-5">
          <div className="text-2xl font-bold mb-4 text-blue-500">About us</div>
          <div className="text-xl font-medium mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim.
          </div>
          <div className="text-base mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim nisl eget orci bibendum, a faucibus urna rutrum.
          </div>

          {/* card */}
          <div className="bg-white rounded-lg p-5">
            <div className="text-base mb-2 text-gray-800 text-justify border-l-8 border-main pl-8 my-10">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.""
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
