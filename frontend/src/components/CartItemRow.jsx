import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItemRow = ({ id ,  item }) => {

  const {productId ,  quantities, setItemQuantity } = useContext(CartContext);
  const usedId = id || productId;
  const quantity = quantities[usedId] !== undefined ? quantities[usedId] : 1;

  
const handleIncrement = () => {
    setItemQuantity(usedId, quantity + 1);
  };

const handleDecrement = () => {
    if (quantity > 1) {
      setItemQuantity(usedId, quantity - 1);
    }
  };

  return (
  <div className="flex items-center justify-between py-6 border-b">
    {/* Product Info (Image + Name) */}
    <div className="flex items-center w-full md:w-2/5">
      <div className="w-1/4">
        <img className="w-16 h-16 object-cover rounded" src={item.images} alt={item.name} />
      </div>
      <div className="w-3/4 px-4 text-sm font-medium">
        {item.name}
      </div>
    </div>
    
    {/* Price (Mobile: Hidden, Desktop: Visible) */}
    <div className="hidden md:block w-1/5 text-center text-sm">
      $ {item.price.toFixed(2)}
    </div>

    {/* Quantity Selector */}
    <div className="w-2/5 md:w-1/5 flex justify-center">
      <div className="flex border rounded-md overflow-hidden text-sm">
        <button onClick={handleDecrement} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">-</button>
        <div className=" flex justify-center items-center px-4">{quantity}</div>
        <button onClick={handleIncrement} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors">+</button>
      </div>
    </div>
    
    {/* Total (Mobile: Hidden, Desktop: Visible) */}
    <div className="hidden md:block w-1/5 text-right font-medium text-sm">
      $ {(item.price * quantity).toFixed(2)}
    </div>
  </div>
) 

};

export default CartItemRow;