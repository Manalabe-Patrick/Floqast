import React from "react";

import bg from "../assets/images/bg_6.png";

const Team = () => {
  return (
    <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
      <div>
        <h1 className="text-center text-2xl font-bold mb-4 text-blue-500">
          Meet the team
        </h1>
      </div>
      <div className="grid grid-cols-2   md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-20">
        {[1, 2, 3, 4, 5, 6].map((image, index) => (
          <div
            className="relative group rounded-lg overflow-hidden"
            data-aos="fade-down"
          >
            <img className="w-full h-full object-cover" src={bg} alt="" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-center">Team Name</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
