import React from "react";

//imports
import bgThree from "../assets/images/bg_3.png";

const How = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 text-blue-500">
          How Floqast works
        </h1>
        <p className="text-center text-gray-800 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap lg:flex-no-wrap">
        <div className="w-full lg:w-1/2 p-5">
          <div className="text-2xl font-bold mb-4 text-gray-800">
            Lorem Ipsum
          </div>

          <div className="text-base mb-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim nisl eget orci bibendum, a faucibus urna rutrum.
          </div>

          {/* card */}
          <div className="bg-white rounded-lg p-5">
            <div className="text-base mb-2 p-6 text-gray-800 text-justify max-w-sm rounded overflow-hidden shadow-lg">
              <p className="font-semibold mb-2">
                <span className="w-10 h-10 bg-main py-1 px-2.5 rounded-full text-slate-200 mr-4">
                  ✓
                </span>
                Lorem Ipsum
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-base mb-2 p-6 text-gray-800 text-justify max-w-sm rounded overflow-hidden shadow-lg">
              <span className="w-10 h-10 bg-slate-400 py-1 px-2.5 rounded-full text-slate-200 mr-4">
                ✓
              </span>
              <p className="font-semibold mb-2">Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-base mb-2 p-6 text-gray-800 text-justify max-w-sm rounded overflow-hidden shadow-lg">
              <span className="w-10 h-10 bg-slate-400 py-1 px-2.5 rounded-full text-slate-200 mr-4">
                ✓
              </span>
              <p className="font-semibold mb-2">Lorem Ipsum</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-5">
          {/* about us image */}
          <img src={bgThree} alt="Your Image" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default How;
