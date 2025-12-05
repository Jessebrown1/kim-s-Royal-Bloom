// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";

import { useCart } from "./context/CartContext";

const App = () => {
  const { isCartOpen } = useCart();

  return (
    <div className={`app-shell ${isCartOpen ? "cart-open" : ""}`}>
      <Navbar />
      <CartDrawer />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
