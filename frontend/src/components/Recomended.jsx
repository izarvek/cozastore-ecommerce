import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Recomended = () => {
  const { assets } = useContext(CartContext)

  return (
    <div className="w-full h-auto lg:px-40 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-9 lg:px-0">

        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src={assets.banner01}
            alt="Women"

            className="w-full h-full border-2 border-gray-200 transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
       
          <div className="flex flex-col absolute top-12 left-12 z-20">
            <h2 className="text-4xl font-bold text-gray-800">Women</h2>
            <p className="mt-1 text-gray-600">Spring 2018</p>
          </div>


          <div className="absolute inset-0 bg-blue-500/40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          
            <a
              href="#"
              className="font-semibold absolute bottom-10 left-12 border-b border-b-2 border-transparent pb-1 uppercase transition-all duration-300 ease-in-out group-hover:border-black hover:text-gray-200"
            >
              SHOP NOW
            </a>
          </div>
        </div>

       
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src={assets.banner02}
            alt="Men"
           
            className="w-full h-full border-2 border-gray-200 transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
         
          <div className="flex flex-col absolute top-12 left-12 z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <h2 className="text-4xl font-bold text-gray-800">Men</h2>
            <p className="mt-1 text-gray-600">Spring 2018</p>
          </div>

         
          <div className="absolute inset-0 bg-blue-500/40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <a
              href="#"
              className="absolute bottom-10 left-12 text-gray-800 opacity-0 border-b border-b-2 border-transparent pb-1 uppercase font-semibold transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:border-gray-800"
            >
              SHOP NOW
            </a>
          </div>
        </div>

        
        <div className="relative group overflow-hidden cursor-pointer">
          <img
            src={assets.banner03}
            alt="Accessories"
           
            className="w-full h-full border-2 border-gray-200 transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
         
          <div className="flex flex-col absolute top-12 left-12 z-10 transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
            <h2 className="text-4xl font-bold text-gray-800">Accessories</h2>
            <p className="mt-1 text-gray-600">Spring 2018</p>
          </div>

          
          <div className="absolute inset-0 bg-blue-500/40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <a
              href="#"
              className="absolute bottom-10 left-12 text-gray-800 opacity-0 border-b border-b-2 border-transparent pb-1 uppercase font-semibold 
                           transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:border-gray-800"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
