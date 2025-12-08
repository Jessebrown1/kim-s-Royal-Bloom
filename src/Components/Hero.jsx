// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import kim1 from "../assets/kim1.MP4"

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background video */}
      <video
        className="hero-bg-video"
        src={kim1}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-glow" />

      <div className="hero-content glass-panel">
        <p className="hero-kicker">Minimal • Elegant • Eternal</p>
        <h1>
  Handcrafted <span className="accent-gold">Jewelry</span>  
  for Modern Style
</h1>
<p className="hero-text">
  Explore premium bracelets, anklets, waist beads, and necklaces designed
  with elegance, craftsmanship, and timeless shine.
</p>

        <div className="hero-actions">
          <Link to="/shop" className="btn-primary">
            Shop Now
          </Link>
          <Link to="/about" className="btn-ghost">
            About the House
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
