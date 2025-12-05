    // src/components/ProductCard.jsx
    import React from "react";
    import { Link } from "react-router-dom";
    import { useCart } from "../context/CartContext";

    const categoryLabels = {
    "bracelets": "Bracelet",
    "anklets": "Anklet",
    "waist-beads": "Waist Beads",
    "necklaces": "Necklace"
    };

    const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAdd = (e) => {
        e.preventDefault();
        addToCart(product);
    };

    return (
        <Link to={`/product/${product.id}`} className="product-card-link">
        <article className="product-card glass-card">
            <div className="product-image-wrap">
            <img src={product.image} alt={product.name} />
            <span className="product-tag">
                {categoryLabels[product.category] || product.category}
            </span>
            </div>
            <div className="product-info">
            <h3>{product.name}</h3>
            <div className="product-meta">
                <span className="product-price">₵{product.price}</span>
            </div>
            <button
                className="btn-add-cart"
                onClick={handleAdd}
            >
                Add to Cart
            </button>
            </div>
        </article>
        </Link>
    );
    };

    export default ProductCard;
