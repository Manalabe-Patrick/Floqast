import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-6 py-2 xl:px-72 lg:px-38">
        <h1 className="pt-48 xl:text-5xl text-4xl font-bold text-gray-600 text-center md:text-start">
          The
          <span className="text-main "> Fastest, Most Accurate </span>
          way
        </h1>
        <h1 className="xl:text-5xl text-4xl font-bold text-gray-600 text-center md:text-start">
          to close your books!
        </h1>
        <p className="md:w-2/5 mt-5 w-4/5 mx-auto md:mx-0 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <button className="bg-main text-slate-200 font-semibold px-10 py-3 rounded-md mt-4 hover:bg-green-700 block mx-auto md:absolute">
          SCHEDULE A DEMO
        </button>
      </div>
      <div
        className="w-3/5 header-bg mt-5 absolute top-0 right-0 -z-20 opacity-60 md:opacity-90"
        style={{ height: "40rem" }}
      ></div>
      {/* header cards */}
      <div>
        <div className="container mx-auto px-6 md:mt-48">
          <div className="flex flex-wrap justify-center">
            <div className="w-64 h-64 bg-white rounded-lg shadow-md m-6 mx-7 p-6 flex flex-col items-center justify-center">
              <img
                className="h-20 w-20 rounded-full mx-auto"
                src="https://via.placeholder.com/500X500"
                alt="Your Image"
              />
              <h3 className="font-bold text-lg mt-6 text-gray-800">
                Your Title
              </h3>
              <p className="text-gray-600 text-center">
                Your description here. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-64 h-64 bg-main rounded-lg shadow-md m-6 mx-12 p-6 flex flex-col items-center justify-center ">
              <img
                className="h-20 w-20 rounded-full mx-auto"
                src="https://via.placeholder.com/500X500"
                alt="Your Image"
              />
              <h3 className="font-bold text-lg mt-6 text-slate-200">
                Your Title
              </h3>
              <p className="text-slate-300 text-center ">
                Your description here. Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-64 h-64 bg-white rounded-lg shadow-md m-6 mx-7 p-6 flex flex-col items-center justify-center">
              <img
                className="h-20 w-20 rounded-full mx-auto"
                src="https://via.placeholder.com/500X500"
                alt="Your Image"
              />
              <h3 className="font-bold text-lg mt-6 text-gray-800">
                Your Title
              </h3>
              <p className="text-gray-600 text-center">
                Your description here. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
