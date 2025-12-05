    // src/pages/Cart.jsx
    import React from "react";
    import { useCart } from "../context/CartContext";
    import CheckoutForm from "../Components/CheckoutForm";

    const Cart = () => {
    const { cart, subtotal, updateQuantity, removeFromCart } = useCart();

    return (
        <section className="section cart-page">
        <div className="section-header">
            <h1>Your Cart</h1>
            <p className="muted-text">
            Review your pieces and complete your purchase securely.
            </p>
        </div>

        <div className="cart-layout">
            <div className="cart-list glass-panel">
            {cart.length === 0 ? (
                <p className="muted-text">Your cart is empty.</p>
            ) : (
                cart.map(item => (
                <div className="cart-row" key={item.id}>
                    <div className="cart-row-main">
                    <h3>{item.name}</h3>
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
                    <div className="cart-row-side">
                    <span className="cart-row-total">
                        ₵{item.price * item.quantity}
                    </span>
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

            <div className="cart-summary-row">
                <span>Subtotal</span>
                <span className="cart-subtotal">₵{subtotal.toFixed(2)}</span>
            </div>
            </div>

            <CheckoutForm />
        </div>
        </section>
    );
    };

    export default Cart;
