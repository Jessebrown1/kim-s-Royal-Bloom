    // src/components/ProductGrid.jsx
    import React from "react";
    import ProductCard from "./ProductCard";

    const ProductGrid = ({ products }) => {
    if (!products.length) {
        return <p className="muted-text">No pieces found. Try another filter.</p>;
    }

    return (
        <div className="product-grid">
        {products.map(p => (
            <ProductCard key={p.id} product={p} />
        ))}
        </div>
    );
    };

    export default ProductGrid;
