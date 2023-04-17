import React from "react";
import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <section id="analitycs" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[color:var(--text-color-main)] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            odio perspiciatis exercitationem ducimus, reiciendis a, aperiam
            velit architecto soluta doloribus porro ut, asperiores pariatur?
            Aliquid corrupti animi placeat temporibus iusto.
          </p>
          <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-black ease-in-out duration-200 active:bg-white ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
