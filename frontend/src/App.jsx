import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import { CartProvider } from "./context/CartContext";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

const App = () => {
  return (
    <CartProvider>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-register" element={<UserRegister />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
