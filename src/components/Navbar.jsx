import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl fonr-bold text-[color:var(--text-color-main)] ">
        CASH<span className="text-white">Data</span>
      </h1>

      <ul className="hidden md:flex">
        <li
          id="home"
          className="p-4 cursor-pointer hover:text-[color:var(--text-color-main)] ease-in-out duration-150"
        >
          Home
        </li>
        <li
          id="company"
          className="p-4 cursor-pointer hover:text-[color:var(--text-color-main)] ease-in-out duration-150"
        >
          Company
        </li>
        <li
          id="resourses"
          className="p-4 cursor-pointer hover:text-[color:var(--text-color-main)] ease-in-out duration-150"
        >
          Resourses
        </li>
        <li
          id="about"
          className="p-4 cursor-pointer hover:text-[color:var(--text-color-main)] ease-in-out duration-150"
        >
          About
        </li>
        <li
          id="contact"
          className="p-4 cursor-pointer hover:text-[color:var(--text-color-main)] ease-in-out duration-150"
        >
          Contact
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-[-100%] md:hidden'
            : 'fixed left-0 top-0 min-w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'
        }
      >
        <h1 className="w-full text-3xl fonr-bold text-[color:var(--text-color-main)] m-4 ">
          REACT. <span className="text-white">Tailwind</span>
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-700">Home</li>
          <li className="p-4 border-b border-gray-700">Company</li>
          <li className="p-4 border-b border-gray-700">Resourses</li>
          <li className="p-4 border-b border-gray-700">About</li>
          <li className="p-4"> Contact</li>
        </ul>
      </div>
    </div>
  );
};
