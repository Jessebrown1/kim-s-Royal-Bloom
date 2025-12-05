// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />
      <section className="section">
        <div className="section-header">
          <h2>Featured Pieces</h2>
          <p className="muted-text">
            Handpicked favorites crafted to sit softly on the skin.
          </p>
        </div>
        <ProductGrid products={featured} />
      </section>
    </>
  );
};

export default Home;
