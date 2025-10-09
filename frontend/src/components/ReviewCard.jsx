import React from 'react';

const ReviewCard = ({ review }) => {
  const { user, rating, date, title, comment } = review;
  
  // Simple function to generate star display
  const renderStars = (r) => {
    return '★'.repeat(Math.floor(r)) + '☆'.repeat(5 - Math.floor(r));
  };

  return (
    <div className="border p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-900">{user}</p>
          <p className="text-xs text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-lg font-bold text-yellow-500">{rating}.0</span>
          <span className="text-sm text-yellow-500 tracking-widest">{renderStars(rating)}</span>
        </div>
      </div>
      
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-700">{comment}</p>
      
      <div className="mt-4 pt-3 border-t text-sm text-gray-500">
        <span className="font-medium text-green-600 mr-2">✓ Verified Purchase</span>
        {/* Optional: Add helpfulness buttons */}
        <button className="ml-4 hover:text-gray-900 transition-colors">Helpful (0)</button>
      </div>
    </div>
  );
};

export default ReviewCard;