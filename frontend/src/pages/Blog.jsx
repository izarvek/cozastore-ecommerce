import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import { CartContext } from "../context/CartContext";
import BlogSidebar from "../components/BlogSidebar";

const Blog = () => {
  const { assets, blogs } = useContext(CartContext);
  return (
    <div className="">

      <div className="">
        <img className="" src={assets.bg02} alt="" />
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-10 xl:gap-16 px-4 sm:px-8 md:px-12 xl:px-[161px] mt-20">
        {/* Left All Blogs */}
        <div>
          <div>
            {blogs.map((item) => (
              <div className="mb-16 md:w-[50vw]">
                <div className="w-full  aspect-[16/9] bg-green-500 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-1000 ease-in-out"
                    src={item.images}
                    alt=""
                  />
                </div>

                <h1 className="mt-10 text-2xl font-bold text-gray-700 w-full">
                  {item.title}
                </h1>

                <p className="flex-wrap w-full mt-5 text-gray-400">
                 { item.description}
                </p>

                <div className="w-full h-[3rem] mt-5 flex justify-between items-center">
                  <p className="text-gray-600 flex">
                    <span>{item.author}</span>
                    <span>{item.category.map(category => (
                      <span className="hidden lg:inline-block lg:ml-2 xl:ml-4">{category}</span>
                    ))}</span>
                    <span className="hidden xl:inline-block lg:ml-2 xl:ml-4">{item.commentsCount} Comments</span>
                  </p>

                  <div>
                    <Link>
                      <h2 className="text-gray-900 cursor-pointer">
                        Continue Reading
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right All Information */}
        <div>
         <BlogSidebar/>
        </div>

      </div>

      <Footer/>

    </div>
  );
};

export default Blog;
