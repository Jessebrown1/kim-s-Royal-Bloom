    // src/components/CartDrawer.jsx
    import React from "react";
    import { Link } from "react-router-dom";
    import { useCart } from "../context/CartContext";

    const CartDrawer = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        subtotal,
        isCartOpen,
        closeCart
    } = useCart();

    return (
        <aside className={`cart-drawer glass-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart-drawer-header">
            <h2>Your Cart</h2>
            <button className="icon-btn" onClick={closeCart}>
            ✕
            </button>
        </div>
        <div className="cart-items">
            {cart.length === 0 ? (
            <p className="muted-text">Your cart is empty.</p>
            ) : (
            cart.map(item => (
                <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="muted-text">₵{item.price} each</p>
                    <div className="cart-qty">
                    <button
                        onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                        }
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                        }
                    >
                        +
                    </button>
                    </div>
                </div>
                <div className="cart-item-meta">
                    <span>₵{item.price * item.quantity}</span>
                    <button
                    className="link-remove"
                    onClick={() => removeFromCart(item.id)}
                    >
                    Remove
                    </button>
                </div>
                </div>
            ))
            )}
        </div>
        <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
            <span>Subtotal</span>
            <span className="cart-subtotal">₵{subtotal.toFixed(2)}</span>
            </div>
            <Link to="/cart" className="btn-primary" onClick={closeCart}>
            Go to Checkout
            </Link>
        </div>
        </aside>
    );
    };

    export default CartDrawer;
