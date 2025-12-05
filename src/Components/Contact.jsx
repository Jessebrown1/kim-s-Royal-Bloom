    // src/pages/Contact.jsx
    import React, { useState } from "react";

    const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out. We'll respond soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="section">
        <div className="section-header">
            <h1>Contact</h1>
            <p className="muted-text">
            Questions about sizing, custom pieces, or styling? Write to us.
            </p>
        </div>

        <form className="glass-panel contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
            <label>Name</label>
            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
            />
            </div>
            <div className="form-row">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
            />
            </div>
            <div className="form-row">
            <label>Message</label>
            <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help..."
            />
            </div>
            <button type="submit" className="btn-primary">
            Send Message
            </button>
        </form>
        </section>
    );
    };

    export default Contact;
