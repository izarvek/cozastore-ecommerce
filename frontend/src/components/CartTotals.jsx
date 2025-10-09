
const CartTotals = ({originalPrice ,  totalDiscountPercent, total }) => {
  const shippingMessage = "There are no shipping methods available. Please double check your address, or contact us if you need any help.";
  
  return (
    <div className="w-full lg:w-1/3 mt-8 lg:mt-0 p-8 bg-white border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-6 border-b pb-3">CART TOTALS</h2>
      
      {/* Subtotal Row */}
      <div className="flex justify-between items-center py-2 border-b">
        <span className="font-semibold text-gray-700">Price :</span>
        <span className="font-medium text-lg">${isNaN(originalPrice.toFixed(2)) ? '00.00' : originalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center py-2 border-b">
        <span className="font-semibold text-gray-700">Discount :</span>
        <span className="font-medium text-lg">{totalDiscountPercent.toFixed(2)} %</span>
      </div>
      
      {/* Shipping Section */}
      <div className="py-4 border-b">
        <span className="font-semibold text-gray-700">Shipping:</span>
        <div className="mt-2 text-sm text-red-600/90 italic">
            {shippingMessage}
        </div>
        
        <p className="text-xs font-semibold mt-4 mb-2 text-gray-700 uppercase">Calculate Shipping</p>
        <div className="space-y-3">
          <select className="w-full p-2 border rounded-md text-sm focus:ring-gray-900 focus:border-gray-900 transition-all">
            <option>Select a country...</option>
            <option>United States</option>
            <option>Canada</option>
          </select>
          <input type="text" placeholder="State / country" className="w-full p-2 border rounded-md text-sm focus:ring-gray-900 focus:border-gray-900 transition-all" />
          <input type="text" placeholder="Postcode / zip" className="w-full p-2 border rounded-md text-sm focus:ring-gray-900 focus:border-gray-900 transition-all" />
        </div>
        <button className="mt-4 px-6 py-2 bg-gray-200/80 rounded-full text-sm font-semibold hover:bg-gray-300 active:scale-[0.99] transition-all">
          UPDATE TOTALS
        </button>
      </div>
      
      {/* Total Row */}
      <div className="flex justify-between items-center py-4">
        <span className="font-bold text-lg">Total:</span>
        <span className="font-extrabold text-xl">${isNaN(total.toFixed(2)) ? '00.00' : total.toFixed(2)}</span>
      </div>
      
      {/* Checkout Button */}
      <button className="w-full mt-4 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 active:scale-[0.98] transition-all duration-150 shadow-md">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartTotals;