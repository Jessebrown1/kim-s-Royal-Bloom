    // src/components/Footer.jsx
    import React from "react";
    import { Link } from "react-router-dom";

    const Footer = () => {
    return (
        <footer className="footer glass-footer">
        <div className="footer-inner">
            <div className="footer-block">
            <h4>kim's Royal Bloom</h4>
            <p className="muted-text">
                Curated luxury waist beads, bracelets, anklets, and necklaces with a
                soft liquid-glass glow.
            </p>
            </div>
            <div className="footer-block">
            <h4>Explore</h4>
            <nav className="footer-links">
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            </div>
            <div className="footer-block">
            <h4>Stay in touch</h4>
            <p className="muted-text">Instagram • TikTok • WhatsApp</p>
            </div>
        </div>
        <div className="footer-bottom">
            <span className="muted-text">
            © {new Date().getFullYear()} kim's Royal Bloom. All rights reserved.
            </span>
        </div>
        </footer>
    );
    };

    export default Footer;
