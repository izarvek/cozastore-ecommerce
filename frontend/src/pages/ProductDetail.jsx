import React, { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ProductReviews from "../components/ProductReviews";

const ProductDetail = () => {
  const { products , setProductId } = useContext(CartContext);
  const { id } = useParams();
  const filteredDetailProduct = products.filter(item => item._id === id)[0];
  const [suffleImage , setSuffleImage] = useState(filteredDetailProduct.images[0])

  const handleToast = () => {
  toast.success("Product added to cart!");
   };


  const THUMBNAIL_HEIGHT_REM = 6;
  const THUMBNAIL_GAP_REM = 1;

  const MAIN_IMAGE_CALCULATED_HEIGHT = `h-[calc(4*${THUMBNAIL_HEIGHT_REM}rem+3*${THUMBNAIL_GAP_REM}rem)]`;

  return (
    <>
    <div className="flex px-4 sm:px-8 md:px-10 xl:px-40 mt-10 flex-col md:flex-row md:gap-16">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col sm:flex-row sm:gap-4 w-full md:w-full lg:w-2/5 xl:w-2/5">

        <div className="flex w-full sm:w-3/4">
          <img
            className={`w-full h-auto ${MAIN_IMAGE_CALCULATED_HEIGHT} rounded object-cover transition-opacity duration-300 hover:opacity-90`}
            src={suffleImage}
            alt="Main product view"
          />
        </div>

        <div className={`hidden sm:flex flex-col gap-4 w-1/4 ${MAIN_IMAGE_CALCULATED_HEIGHT}`}>

          {/* <img className="w-full h-24 object-contain rounded cursor-pointer bg-gray-100 ring-2 ring-transparent hover:ring-gray-900 transition-all duration-300" src={assets.product01} alt="Product thumbnail 1" /> */}
          {
            filteredDetailProduct.images.map((item , index) => (
              <div key={index}>
                <img onClick={() => setSuffleImage(item)}  className="w-full h-24 object-contain rounded cursor-pointer bg-gray-100 ring-2 ring-transparent hover:ring-gray-900 transition-all duration-300" src={item} alt="Product thumbnail 1" />
              </div>
            ))
          }

        </div>

      </div>

      <div className="pt-8 md:pt-0 md:w-full lg:w-3/5 xl:w-3/5">

        <p className="bg-gray-300 text-sm py-1 rounded-full w-20 flex justify-center">{filteredDetailProduct.category}</p>
        <h2 className="text-3xl font-bold mt-5">{filteredDetailProduct.name}</h2>
        <p className="mt-3">⭐⭐⭐⭐⭐
           <span className="ml-3">({filteredDetailProduct.rating} from {filteredDetailProduct.reviews} reviews)</span>
        </p>

        <h2 className="text-3xl font-bold mt-8">
          <span>${filteredDetailProduct.discountPrice}</span>
          <span className="line-through ml-5 text-gray-300">
            ${filteredDetailProduct.price}
            </span>
        </h2>

        <ul className="flex flex-wrap gap-3 mt-5">
          {
            filteredDetailProduct.sizes.map(index => (
              <div key={index}>
                <li className="bg-gray-400 px-4 py-2 rounded text-white cursor-pointer hover:bg-gray-500 active:scale-95 transition-all duration-150">{index}</li>
              </div>
            ))
          }
        </ul>


        <div className="flex gap-4 mt-8 flex-wrap">

          <button className="bg-gray-900 px-8 py-2 text-white uppercase rounded-full hover:bg-gray-700 active:scale-[0.98] transition-all duration-150 min-w-[150px] flex-grow shadow-md hover:shadow-lg">Buy it now</button>

          <button 
          onClick={ () => {setProductId(prev => [...prev, id]) ; handleToast(); } }
          className="border-2 px-8 py-2 rounded-full hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 min-w-[150px] flex-grow shadow-md hover:shadow-lg">Add to cart</button>
        </div>

      </div>
       
    </div>

    <div className="mb-10">
      <ProductReviews/>
    </div>
    </>
  );
};

export default ProductDetail;