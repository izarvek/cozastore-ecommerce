import React, { useState } from 'react';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(0);
    setTitle('');
    setComment('');
  };

  return (
    <div className="border-t pt-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        
        {/* Rating Stars */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((rate) => (
              <span key={rate} onClick={() => setRating(rate)}
                className={`text-3xl cursor-pointer transition-colors duration-150 ${
                  rate <= rating ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-400' }`}>
                ★
              </span>
            ))}
            <span className="text-sm ml-3 pt-2 text-gray-500">({rating} Stars)</span>
          </div>
        </div>

        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="reviewTitle" className="block text-sm font-medium text-gray-700 mb-1">Review Headline</label>
          <input
            id="reviewTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-gray-900 focus:border-gray-900 transition-all"
            placeholder="Summarize your experience"
            required
          />
        </div>

        {/* Comment Field */}
        <div className="mb-6">
          <label htmlFor="reviewComment" className="block text-sm font-medium text-gray-700 mb-1">Your Comment</label>
          <textarea
            id="reviewComment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-md focus:ring-gray-900 focus:border-gray-900 transition-all"
            placeholder="What did you like or dislike about the product?"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 active:scale-[0.99] transition-all duration-150 disabled:opacity-50"
          disabled={rating === 0 || !comment.trim()}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;