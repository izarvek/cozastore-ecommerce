import React, { createContext, useState } from "react";
import { products, assets , reviews , blogs } from "../assets/assets";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productId, setProductId] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [id , setId] = useState('');

  const setItemQuantity = (id, qty) => {
    setQuantities((prev) => ({ ...prev, [id]: qty }));
    setId(id);
  };
  // console.log(quantities)

  const value = {
    products,
    assets,
    reviews,
    blogs ,
    productId,
    setProductId,
    quantities,
    setItemQuantity,
    id,
  };

 return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};