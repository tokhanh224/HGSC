import React from "react";
import { assets } from "../assets/assets";
import ScrollToTop from "react-scroll-to-top";
import CustomScrollToTop from "./CustomScrollToTop";
const Footer = () => {
  return (
    <div>
      < CustomScrollToTop/>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className=" w-full md:w-2/3 text-gray-600">
            lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
            tincidunt elementum sem non luctus
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivey</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+8465903298</li>
            <li>tokhanh224@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center footer">
          © 2024 Copyright - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
