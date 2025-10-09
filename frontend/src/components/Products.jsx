import React, { useContext, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Card from "./Card";

const Products = () => {
  const [active, setActive] = useState("All Products");
  const filters = ["All Products", "Women", "Mens", "Bag", "Shoes", "Watches"];
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const {products} = useContext(CartContext);

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      active === "All Products" ||
      (item.category &&
        typeof item.category === "string" &&
        item.category.toLowerCase().includes(active.toLowerCase()));

    const matchesSearch =
      search.trim() === "" ||
      (item.name &&
        typeof item.name === "string" &&
        item.name.toLowerCase().includes(search.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-10 lg:px-40 mt-10">
      <div className="flex justify-between ">
        <ul className="hidden md:flex gap-6">
          {filters.map((filterName) => (
            <li
              key={filterName}
              onClick={() => {
                setActive(filterName);
                setSearch("");
              }}
              className={`cursor-pointer transition-all ease-in-out duration-500 border-black whitespace-nowrap 
                ${
                  active === filterName
                    ? "border-b-2 opacity-100"
                    : "border-b-0 opacity-70"
                } `}
            >
              {filterName}
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <div className="flex gap-2 items-center py-2 px-4 shadow-xsm ">
            <span>
              <IoFilter />
            </span>
            <span>Filter</span>
          </div>
          <div
            onClick={() => setVisible((prev) => !prev)}
            className="flex gap-2 items-center py-2 px-4 shadow-xsm cursor-pointer"
          >
            <span>
              <FaSearch />
            </span>
            <span>Search</span>
          </div>
        </div>
      </div>

      <div
        className={`mt-10 ${
          visible ? " " : "hidden"
        } flex justify-center w-full`}
      >
        <div className="w-full relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search} // Bind value to state for consistency
            type="text"
            placeholder="Search your products here ..."
            className="
                    w-full 
                    py-3 
                    pl-12 
                    pr-4 
                    text-lg 
                    text-gray-700 
                    bg-white 
                    border 
                    border-gray-300 
                    rounded-xl 
                    shadow-sm 
                    transition 
                    duration-300 
                    ease-in-out
                    focus:outline-none 
                    focus:border-blue-500 
                    focus:ring-2 
                    focus:ring-blue-200"
          />

          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
            <FaSearch className="h-4 w-4" />
          </span>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-10">
          {filteredProducts.map((item) => (
            <div key={item._id}>
              <Card
              id={item._id}
              name={item.name}
              price={item.price}
              images={item.images[0]}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center bg-gray-50  font-sans mt-10">
          <div className="text-center bg-white p-10 sm:p-16  w-full transform transition duration-500 hover:scale-[1.01]">
            <h1 className="text-9xl font-extrabold text-indigo-600 mb-6 tracking-tight drop-shadow-lg">
              404
            </h1>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Oops! The product you are looking for seems to have vanished, or
              maybe you typed the address incorrectly.
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-20 mb-4">
        <button className="bg-gray-300 py-2 px-8 rounded-full items-center hover:bg-gray-400 transition-all ease-in-out duration-500">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Products;
