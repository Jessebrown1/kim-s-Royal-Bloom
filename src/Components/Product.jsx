    // src/pages/Product.jsx
    import React from "react";
    import { useParams } from "react-router-dom";
    import products from "../data/products";
    import { useCart } from "../context/CartContext";

    const categoryLabels = {
    "bracelets": "Bracelet",
    "anklets": "Anklet",
    "waist-beads": "Waist Beads",
    "necklaces": "Necklace"
    };

    const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product) {
        return (
        <section className="section">
            <p className="muted-text">Product not found.</p>
        </section>
        );
    }

    return (
        <section className="section product-detail">
        <div className="product-detail-inner glass-panel">
            <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detail-info">
            <p className="muted-text upper">
                {categoryLabels[product.category] || product.category}
            </p>
            <h1>{product.name}</h1>
            <p className="product-detail-price">₵{product.price}</p>
            <p className="product-detail-desc">{product.description}</p>
            <button
                className="btn-primary"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
            </div>
        </div>
        </section>
    );
    };

    export default Product;
