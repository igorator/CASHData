import React from 'react';
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl fonr-bold text-[color:var(--text-color-main)] ">
          CASH<span className="text-white">Data</span>
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit beatae
          quos nulla tempora neque ea facere at atque illum perspiciatis ducimus
          asperiores quae, ipsam inventore natus sapiente officiis quisquam
          minus!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-3 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-small text-white">Analitycs</li>
            <li className="py-2 text-small text-white">Marketing</li>
            <li className="py-2 text-small text-white">Commerce</li>
            <li className="py-2 text-small text-white">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-small text-white">Pricing</li>
            <li className="py-2 text-small text-white">Documentation</li>
            <li className="py-2 text-small text-white">Guides</li>
            <li className="py-2 text-small text-white">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-small text-white">About</li>
            <li className="py-2 text-small text-white">Blog</li>
            <li className="py-2 text-small text-white">Jobs</li>
            <li className="py-2 text-small text-white">Careers</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-small text-white">Claim</li>
            <li className="py-2 text-small text-white">Policy</li>
            <li className="py-2 text-small text-white">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
