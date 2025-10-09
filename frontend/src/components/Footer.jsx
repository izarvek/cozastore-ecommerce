import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { icons } from "../assets/assets";
const Footer = () => {
  return (
    <div className=" bg-gray-900 w-full h-auto px-5 md:px-10 lg:px-40 py-20 mt-20" >
      <div className="flex sm:flex-row flex-col   justify-between text-white ">

        <div className="mb-4">
          <h1 className="text-xl mb-4">Categories</h1>
          <ul>
           { ['Women' ,'Men' , 'Shoes' ,'Watches'].map((item , index) => (
            <li key={index} className="text-sm text-gray-400 mb-1">{item}</li>
           ))
           }
          </ul>
        </div>

        <div className="mb-4">
          <h1  className="text-xl mb-4">Help</h1>
          <ul>
            { ['Track Order' ,'Returns' , 'Shipping' ,'FAQs'].map((item , index) => (
            <li key={index} className="text-sm text-gray-400 mb-1">{item}</li>
           ))
           }
          </ul>
        </div>

        <div className="mb-4">
          <h1  className="text-xl mb-4">Get In Touch</h1>
          <p className="text-sm text-gray-400 mb-1">
            Any questions? Let us Know in store at 8th floor, <br /> 379 Hudson St,<br />
            New York , NY 10018 or call us on +91 7700777099
          </p>
          <ul className="flex gap-2 mt-4">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaPinterestP />
            </li>
          </ul>
        </div>

        <div > 
          <h1  className="text-xl mb-4">NewsLetter</h1>
          <p className="text-sm text-gray-400 mb-1">email@gmail.com</p>
          <hr className="h-2"/>
          <button className="bg-primary py-2 px-6 rounded-full mt-3">Subscribe</button>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-center gap-2">
           <img src={icons.iconPay01} alt="" />
           <img src={icons.iconPay02} alt="" />
           <img src={icons.iconPay03} alt="" />
           <img src={icons.iconPay04} alt="" />
           <img src={icons.iconPay05} alt="" />
        </div>
        <div className="flex justify-center mt-3">
             <p className="text-gray-400 text-sm ">Copyright @2025 All rights reserved | Created by Vivek Sharma</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
