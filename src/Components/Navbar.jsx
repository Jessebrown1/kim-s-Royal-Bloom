    // src/components/Navbar.jsx
    import React from "react";
    import { Link, NavLink } from "react-router-dom";
    import { useCart } from "../context/CartContext";

    const Navbar = () => {
    const { cart, toggleCart } = useCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="navbar glass-nav">
        <div className="navbar-inner">
            <Link to="/" className="brand">
            <span className="brand-mark">kim's Royal Bloom</span>
            <span className="brand-sub">Jewelry</span>
            </Link>
            <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </nav>
            <button className="cart-icon-btn" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            {count > 0 && <span className="cart-count">{count}</span>}
            </button>
        </div>
        </header>
    );
    };

    export default Navbar;
