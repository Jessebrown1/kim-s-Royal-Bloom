    // src/pages/Shop.jsx
    import React, { useState } from "react";
    import products from "../data/products";
    import CategoryFilter from "../components/CategoryFilter";
    import ProductGrid from "../Components/ProductGrid";

    const Shop = () => {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");

    const filtered = products.filter(p => {
        const matchCategory = category === "all" || p.category === category;
        const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="section">
        <div className="section-header">
            <h1>Shop the Collection</h1>
            <p className="muted-text">
            Explore bracelets, anklets, waist beads, and necklaces in a dark & gold universe.
            </p>
        </div>

        <div className="shop-controls">
            <CategoryFilter active={category} onChange={setCategory} />
            <div className="search-wrap glass-panel">
            <input
                type="text"
                placeholder="Search for 'waist beads', 'gold bracelet'..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>
        </div>

        <ProductGrid products={filtered} />
        </section>
    );
    };

    export default Shop;
