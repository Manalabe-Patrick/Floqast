import React from "react";

// imports
import bgFive from "../assets/images/bg_5.png";

const MBG = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 text-blue-500">
          Our Mission, Vission, ang Goals
        </h1>
        <p className="text-center text-gray-800 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* mission, vission and goals */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-main py-20 px-10"
        style={{ backgroundImage: `url(${bgFive})` }}
      >
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-10">
            <h3 className="text-lg font-bold mb-2 text-center">Mission</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-10">
            <h3 className="text-lg font-bold mb-2 text-center">Vission</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md overflow-hidden">
          <div className="p-10">
            <h3 className="text-lg font-bold mb-2 text-center">Goals</h3>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MBG;
