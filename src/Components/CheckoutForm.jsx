    // src/components/CheckoutForm.jsx
    import React, { useState } from "react";
    import { useCart } from "../context/CartContext";

    const CheckoutForm = () => {
    const { subtotal, cart, clearCart } = useCart();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example Paystack inline (you must add script + your public key)
        // Add this in index.html: 
        // <script src="https://js.paystack.co/v1/inline.js"></script>

        if (!window.PaystackPop) {
        alert("Payment SDK not loaded. Please configure Paystack or Flutterwave.");
        return;
        }

        const handler = window.PaystackPop.setup({
        key: "YOUR_PAYSTACK_PUBLIC_KEY",
        email: form.email,
        amount: subtotal * 100, // kobo (if using NGN) – adjust for your currency
        currency: "GHS",
        ref: "LUXE-" + Date.now(),
        metadata: {
            custom_fields: [
            {
                display_name: form.name,
                variable_name: "items",
                value: JSON.stringify(cart.map(c => ({
                id: c.id,
                name: c.name,
                qty: c.quantity
                })))
            }
            ]
        },
        callback: function () {
            alert("Payment complete. Thank you!");
            clearCart();
        },
        onClose: function () {
            console.log("Payment window closed");
        }
        });

        handler.openIframe();
    };

    return (
        <form className="checkout-form glass-panel" onSubmit={handleSubmit}>
        <h2>Secure Checkout</h2>
        <div className="form-row">
            <label>Full Name</label>
            <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            />
        </div>
        <div className="form-row">
            <label>Email Address</label>
            <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            />
        </div>
        <div className="form-row">
            <label>Phone Number</label>
            <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+233 ..."
            />
        </div>
        <div className="form-summary">
            <span>Order Total</span>
            <strong>₵{subtotal.toFixed(2)}</strong>
        </div>
        <button type="submit" className="btn-primary full-width">
            Pay with Paystack
        </button>
        <p className="muted-text small">
            You can also integrate Flutterwave by calling <code>FlutterwaveCheckout</code> here instead.
        </p>
        </form>
    );
    };

    export default CheckoutForm;
