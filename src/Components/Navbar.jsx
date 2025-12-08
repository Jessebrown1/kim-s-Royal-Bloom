    // src/components/Navbar.jsx
    import React, { useState } from "react";
    import { Link, NavLink } from "react-router-dom";
    import { useCart } from "../context/CartContext";

    const Navbar = () => {
    const { cart, toggleCart } = useCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    const [open, setOpen] = useState(false); // mobile menu state

    const closeMenu = () => {
        setOpen(false);
        document.body.classList.remove("menu-open");
    };

    const toggleMenu = () => {
        const next = !open;
        setOpen(next);
        document.body.classList.toggle("menu-open", next);
    };

    return (
        <header className="navbar glass-nav">
        <div className="navbar-inner">
            <Link to="/" className="brand">
            <span className="brand-mark">kim's Royal Bloom</span>
            <span className="brand-sub">Jewelry</span>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="nav-links desktop-only">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* RIGHT SIDE: CART + BURGER */}
            <div className="nav-actions">
            <button className="cart-icon-btn" onClick={toggleCart}>
                <span className="cart-icon">🛒</span>
                {count > 0 && <span className="cart-count">{count}</span>}
            </button>

            {/* MOBILE BURGER BUTTON */}
            <button
                className="burger-btn mobile-only"
                onClick={toggleMenu}
            >
                ☰
            </button>
            </div>
        </div>

        {/* FULL-SCREEN MOBILE MENU */}
        {open && (
            <div
            className="mobile-menu"
            onClick={closeMenu} // click outside to close
            >
            <nav
                className="mobile-menu-inner glass-panel"
                onClick={(e) => e.stopPropagation()} // keep clicks inside
            >
                <NavLink
                to="/"
                end
                className="mobile-link"
                onClick={closeMenu}
                >
                Home
                </NavLink>

                <NavLink
                to="/shop"
                className="mobile-link"
                onClick={closeMenu}
                >
                Shop
                </NavLink>

                <NavLink
                to="/about"
                className="mobile-link"
                onClick={closeMenu}
                >
                About
                </NavLink>

                <NavLink
                to="/contact"
                className="mobile-link"
                onClick={closeMenu}
                >
                Contact
                </NavLink>
            </nav>
            </div>
        )}
        </header>
    );
    };

    export default Navbar;
