import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="px-6 py-2 xl:px-72 lg:px-38 mt-20 md:mt-48">
        <div className="bg-zinc-900 rounded-xl p-20">
          <div>
            <h1 className="font-semibold text-slate-300 text-3xl">
              LEARN MORE ABOUT FLOQAST
            </h1>
            <p className="text-sm text-zinc-500 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-600 focus:outline-none focus:shadow-outline border border-zinc-600  py-2 px-4 w-full md:w-1/3 appearance-none leading-normal mb-2"
            />
            <button
              type="submit"
              className="bg-main py-2  px-3 font-semibold md:ml-2 text-slate-200 block md:inline m-auto hover:bg-green-800"
            >
              SCHEDULE NOW
            </button>
            <p className="text-sm text-zinc-500 mb-10 mt-2">
              LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
