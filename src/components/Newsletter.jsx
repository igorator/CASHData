import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p> Sign up to our Newsletter and stay up to date.</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black"
            ></input>
            <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black ease-in-out duration-200 active:bg-white ">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="underline text-[color:var(--text-color-main)] cursor-pointer active:text-white">
              Privacy Policy.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
