import React, { useContext, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import CartItemRow from "../components/CartItemRow";
import CartTotals from "../components/CartTotals";
import { CartContext } from "../context/CartContext";
// Mock data for the cart items

const Feature = () => {
  const { products, productId, quantities, id  } = useContext(CartContext);
  const mockCartItems = products.filter((item) => productId.includes(item._id));
  const CartItemsLength = mockCartItems.length || 1;

  const originalPrice = mockCartItems.reduce( (acc, item) => acc + item.price * quantities[id],0);
   
  const discountPercent = mockCartItems.reduce(
    (acc, item) => acc + (100 - (item.discountPrice * 100) / item.price),
    0
  );
  const totalDiscountPercent = discountPercent / CartItemsLength;

  // const total = mockCartItems.reduce((acc, item) => acc + item.discountPrice, 0);
  const total =( originalPrice * (100 - totalDiscountPercent)) / 100 ;

  useEffect(() => {
   if(mockCartItems.length <= 0){
    toast.error("No item in you Cart")
   }
  }, []);

  

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8 md:p-10">
     <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Product List Section */}
        <div className="w-full lg:w-2/3 p-6 bg-white border rounded-lg shadow-sm">
          {/* Table Header (Visible on Desktop) */}
          <div className="hidden md:flex justify-between border-b pb-4 mb-4 uppercase text-sm font-semibold text-gray-500">
            <div className="w-2/5">PRODUCT</div>
            <div className="w-1/5 text-center">PRICE</div>
            <div className="w-1/5 text-center">QUANTITY</div>
            <div className="w-1/5 text-right">TOTAL</div>
          </div>

          {/* Cart Item Rows */}
          <div className="space-y-4">
            {mockCartItems.length > 0 ? (
              mockCartItems.map((item) => (
                <CartItemRow key={item._id} id={item._id} item={item} />
              ))
            ) : (
              <div className="text-gray-500">No items in cart</div>
            )}
          </div>

          {/* Coupon and Update Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-6 border-t gap-4">
            <div className="flex w-full sm:w-auto gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="p-2 border rounded-md text-sm w-1/2 sm:w-auto focus:ring-gray-900 focus:border-gray-900 transition-all"
              />
              <button className="px-4 py-2 bg-gray-200/80 rounded-full text-sm font-semibold hover:bg-gray-300 active:scale-[0.99] transition-all">
                APPLY COUPON
              </button>
            </div>
            <button  className="px-6 py-2 bg-gray-200/80 rounded-full text-sm font-semibold hover:bg-gray-300 active:scale-[0.99] transition-all w-full sm:w-auto">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* Cart Totals Section */}
        <CartTotals
          totalDiscountPercent={totalDiscountPercent}
          originalPrice={originalPrice}
          total={total}
        />
      </div>
    </div>
  );
};

export default Feature;
