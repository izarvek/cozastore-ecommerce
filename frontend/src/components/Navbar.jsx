import React, { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { icons } from "../assets/assets";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [menu , setMenu] = useState(false)
  const [userMenu , setUserMenu] = useState(false)
  const {productId} = useContext(CartContext);
  return (
    <div className="flex justify-between items-center py-3 sm:py-4 md:py-5 px-4 sm:px-8 md:px-12 xl:px-[161px] relative shadow-sm z-50">
      {/* Left Section */}
      <div className="flex items-center ">
        <div className="text-2xl text-gray-900 tracking-wide">
          <Link to={"/"}>
            <span className="mr-1 font-bold text-indigo-600 ">COZA</span>
            <span className="font-light">STORE</span>
          </Link>
        </div>
        {/* Nav Links */}
        <div className="hidden ml-14 lg:flex">
          <ul className="flex gap-6 text-base font-medium">
            <li
              onClick={() => setActive("Home")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400 ${
                active === "Home" ? "border-b-2 " : ""
              }  hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/" className="block">
                Home
              </Link>
            </li>

            <li
              onClick={() => setActive("Shop")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400 ${
                active === "Shop" ? "border-b-2 " : ""
              } hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/shop" className="block">
                Shop
              </Link>
            </li>

            <li
              onClick={() => setActive("Feature")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400 ${
                active === "Feature" ? "border-b-2 " : ""
              } hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/features" className="block">
                Features
              </Link>
            </li>

            <li
              onClick={() => setActive("Blog")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400 ${
                active === "Blog" ? "border-b-2 " : ""
              } hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/blog" className="block">
                Blog
              </Link>
            </li>

            <li
              onClick={() => setActive("About")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400 ${
                active === "About" ? "border-b-2 " : ""
              } hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/about" className="block">
                About
              </Link>
            </li>

            <li
              onClick={() => setActive("Contact")}
              className={`text-gray-700 hover:border-b-2 border-indigo-400${
                active === "Contact" ? "border-b-2 " : ""
              } hover:text-blue-600 transition-colors duration-200`}
            >
              <Link to="/contact" className="block">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 sm:gap-6 items-center relative">
        {/* Search Icon  */}
        <div>
          <img
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-75 transition-opacity duration-200"
            src={icons.search}
            alt="Search"
          />
        </div>
        {/* Shopping Cart Icon */}
        <div className="relative">
          <Link to='/features'>
          <img
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-75 transition-opacity duration-200"
            src={icons.shoppingCart}
            alt="Shopping Cart"
          />
          </Link>
          <div
            className="absolute -top-2 -right-2 hidden md:flex items-center justify-center 
            text-[12px]  text-white bg-indigo-500 rounded 
            min-w-[18px] h-[18px] p-0.5 leading-none"
          >
            <b>{productId.length}</b>
          </div>
        </div>
        {/* Heart Icon */}
        <div className="relative hidden md:block">
          <img
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-75 transition-opacity duration-200"
            src={icons.heart}
            alt="Favorite"
          />
          <div
            className="absolute -top-2 -right-2 flex items-center justify-center 
            text-[12px] text-white bg-indigo-500 rounded 
            min-w-[18px] h-[18px] p-0.5 leading-none"
          >
            <b>0</b>
          </div>
        </div>
        {/*  Menu Icon */}
        <div>
          <img onClick={()=> {setMenu(prev => !prev); setUserMenu(false)}}
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-75 transition-opacity duration-200 lg:hidden"
            src={icons.menu}
            alt="Menu"
          />
        </div>

         <div className={`flex lg:hidden flex-col items-end absolute top-14 right-8 md:right-9 bg-white border rounded-md p-4 w-[10rem] aspect-[5/6] ${menu ? "" : "hidden"}`}>
          <Link to='/' className="mb-1 focus:border-b-2 border-indigo-400">Home</Link>
          <Link to='/shop' className="mb-1 focus:border-b-2 border-indigo-400">Shop</Link>
          <Link to='/features' className="mb-1 focus:border-b-2 border-indigo-400">Features</Link>
          <Link to='/blog' className="mb-1 focus:border-b-2 border-indigo-400">Blog</Link>
          <Link to='/about' className="mb-1 focus:border-b-2 border-indigo-400">About</Link>
          <Link to='/contact' className="mb-1 focus:border-b-2 border-indigo-400">Contact</Link>
         </div>

        {/* User Icon */}
         <div>
          <FaRegUser onClick={() => {setUserMenu(prev => !prev); setMenu(false) }} />
         </div>

          <div className={`flex flex-col items-end absolute top-14 right-0 bg-white border rounded-md p-4 w-[7rem] aspect-[5/6] ${userMenu ? "" : "hidden"}`}>
          <Link onClick={() => setUserMenu(false)} to='/user-register' className="mb-1 focus:border-b-2 border-indigo-400">Register</Link>
          <Link onClick={() => setUserMenu(false)} to='/user-login' className="mb-1 focus:border-b-2 border-indigo-400">Login</Link>
         </div>
        


      </div>
    </div>
  );
};

export default Navbar;
