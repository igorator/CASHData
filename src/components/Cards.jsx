import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-width-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h2 className="text: 2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium md:my-0 my-8 mx-auto px-6 py-3 text-black ease-in-out duration-200 active:bg-white active:text-[color:var(--text-color-main)]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col justify-center p-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="Double"
          />
          <h2 className="text: 2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium  my-6 mx-auto px-6 py-3 text-black ease-in-out duration-200 active:bg-white active:text-[color:var(--text-color-main)]">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Triple"
          />
          <h2 className="text: 2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[var(--text-color-main)] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black ease-in-out duration-200 active:bg-white active:text-[color:var(--text-color-main)]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};
