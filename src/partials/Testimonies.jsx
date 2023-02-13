import React from "react";

const Testimonies = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div>
        <div className="relative w-4/5 md:w-1/2 mx-auto border border-gray-400 rounded-lg px-8 py-12">
          <img
            src="https://i.pinimg.com/564x/af/12/09/af1209f94a05a757f1497b54238255e4.jpg"
            alt="your-image-description"
            className="absolute top-0 left-0 right-0 mx-auto -mt-14 rounded-full h-24 w-24"
          />
          <p className="text-gray-600  text-center md:w-2/3 mx-auto">
            <i>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </i>
          </p>

          <div className="mt-6">
            <p className="text-gray-600  text-center font-bold">John Doe</p>
            <p className="text-gray-600  text-center">Supervisor at ChowChow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
