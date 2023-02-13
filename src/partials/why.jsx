import React from "react";

const Why = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 text-blue-500">
          Why Floqast?
        </h1>
        <p className="text-center text-gray-800 mb-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="w-1/2 md:w-1/3 p-2 md:p-6">
            <div className="bg-white rounded-lg shadow-md py-4 mb-6">
              <img
                src="https://via.placeholder.com/500X500"
                alt="image here"
                className="h-20 w-20 rounded-full mx-auto"
              />
              <div className="p-2">
                <h3 className="font-bold text-lg mt-6 text-gray-800 text-center">
                  Your Title
                </h3>
                <p className="text-gray-600 text-center m-3">
                  Your description here. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
