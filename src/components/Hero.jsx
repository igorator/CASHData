import Typed from "react-typed";
import React from "react";

export const Hero = () => {
  return (
    <section id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[color:var(--text-color-main)] font-bold p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for{" "}
            <Typed
              className="text-[color:var(--text-color-main)] "
              strings={["BTB", "BTC", "SaaS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            ></Typed>
          </p>

          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Monitor your data analytics to increase your revenue for BTB, BTC &
            SAAS platforms.
          </p>

          <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black ease-in-out duration-200 active:bg-white ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
