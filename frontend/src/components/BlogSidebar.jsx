import React, { useContext, useRef, useState } from 'react'
import { Search } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const BlogSidebar = () => {
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const {assets} = useContext(CartContext)

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className=" rounded-xl h-full p-4 w-full">
      {/* Search bar */}
      <div
        ref={containerRef}
        className={`flex justify-between items-center bg-white border-2 py-3 px-7 rounded-full transition-all duration-500 ease-in-out ${
          isFocused ? "border-primary" : "border-gray-300"
        }`}
      >
        <input
          className="outline-none bg-transparent flex-1 "
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Search size={21} />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl text-gray-800 font-bold mb-10">Categories</h2>
        <p className="mt-5">
          {[
            "Fashion",
            "Beauty",
            "Street Style",
            "Life Style",
            "DIY & Crafts",
          ].map((item, index) => (
            <p
              className="py-3 text-gray-600 border-t-2 border-gray-200"
              key={index}
            >
              {item}
            </p>
          ))}
        </p>
      </div>

      <div className="mt-16">

        <h2 className="text-2xl text-gray-800 font-bold mb-10">Featured Product</h2>

        <div>
          <div className="mt-5 flex gap-5 ">
            <img src={assets.productMin01} alt="" />
             <div>
                <p className='text-gray-600'>White Shirt With Pleat Detail Black</p>
                <p className='mt-2 text-gray-400'>$19.00</p>
             </div>
          </div>
        </div>
        <div>
          <div className="mt-5 flex gap-5 ">
            <img src={assets.productMin02} alt="" />
             <div>
                <p className='text-gray-600'>Converse All Star Hi Black Canvas</p>
                <p className='mt-2 text-gray-400'>$39.00</p>
             </div>
          </div>
        </div>
        <div>
          <div className="mt-5 flex gap-5 ">
            <img src={assets.productMin03} alt="" />
             <div>
                <p className='text-gray-600'>Nixon Parter Leather Watch In Tan</p>
                <p className='mt-2 text-gray-400'>$17.00</p>
             </div>
          </div>
        </div>

      </div>

      <div className='mt-16'>
        <h2 className='text-2xl text-gray-800 font-bold mb-10'>Archive</h2>
        <div>

           <div className='flex justify-between text-gray-600 mb-4'>
            <p>July 2018</p>
            <p>(9)</p>
           </div>
           <div className='flex justify-between text-gray-600 mb-4'>
            <p>June 2018</p>
            <p>(39)</p>
           </div>
           <div className='flex justify-between text-gray-600 mb-4'>
            <p>May 2018</p>
            <p>(44)</p>
           </div>
           <div className='flex justify-between text-gray-600 mb-4'>
            <p>April 2018</p>
            <p>(35)</p>
           </div>
           <div className='flex justify-between text-gray-600 mb-4'>
            <p>Martch 2018</p>
            <p>(22)</p>
           </div>
           <div className='flex justify-between text-gray-600 mb-4'>
            <p>February 2018</p>
            <p>(21)</p>
           </div>

        </div>
      </div>

      <div className='mt-16'>
        <h2 className='text-2xl text-gray-800 font-bold mb-10'>Tags</h2>
        <div className='flex flex-wrap gap-3'>
            {['Fashion' ,'Lifestyle' , 'Denim' , 'StreetStyle' , 'Crafts'].map((item , index) => (
                <p className='border-2 text-sm border-gray-200 py-1 px-3 rounded-full text-gray-600' key={index}>{item}</p>
            ))}
        </div>
      </div>

    </div>
  );
}

export default BlogSidebar