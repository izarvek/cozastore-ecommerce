import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';

const ProductReviews = () => {
  const { reviews } = useContext(CartContext)
  const totalReviews = reviews.length;
  const averageRating =( reviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews).toFixed(1);
  // console.log(totalRating)
  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  return (
    <div className="mt-20 px-4 sm:px-8 md:px-10 xl:px-40">
      <h2 className="text-3xl font-bold mb-8 border-b pb-4">Customer Reviews ({totalReviews})</h2>

      <div className="flex flex-col md:flex-row gap-12">
        
        {/* Review Summary & Form */}
        <div className="w-full md:w-1/3 p-6 bg-gray-50 rounded-lg shadow-inner">
          <div className="mb-8">
            <p className="text-sm uppercase text-gray-600">Overall Rating</p>
            <div className="flex items-center mt-1">
              <span className="text-5xl font-extrabold mr-3">{averageRating}</span>
              <div className="flex flex-col">
                <span className="text-xl text-yellow-500 tracking-widest">{renderStars(averageRating)}</span>
                <span className="text-sm text-gray-500">Based on {totalReviews} reviews</span>
              </div>
            </div>
          </div>
          
          <ReviewForm />

        </div>

        {/* Review List & Filters */}
        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h3 className="text-xl font-semibold">All Verified Reviews</h3>
            <select className="p-2 border rounded-md transition-all hover:border-gray-400 focus:ring-1 focus:ring-gray-900">
              <option>Sort by: Most Recent</option>
              <option>Sort by: Highest Rating</option>
              <option>Sort by: Lowest Rating</option>
            </select>
          </div>

          <div className="space-y-8">
            {reviews.map((item , index) => (
              <ReviewCard key={index} review={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;