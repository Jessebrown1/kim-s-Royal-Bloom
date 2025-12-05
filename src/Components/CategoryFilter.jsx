    // src/components/CategoryFilter.jsx
    import React from "react";

    const categories = [
    { id: "all", label: "All" },
    { id: "bracelets", label: "Bracelets" },
    { id: "anklets", label: "Anklets" },
    { id: "waist-beads", label: "Waist Beads" },
    { id: "necklaces", label: "Necklaces" }
    ];

    const CategoryFilter = ({ active, onChange }) => {
    return (
        <div className="category-filter">
        {categories.map(cat => (
            <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`category-pill glass-pill ${
                active === cat.id ? "active" : ""
            }`}
            >
            {cat.label}
            </button>
        ))}
        </div>
    );
    };

    export default CategoryFilter;
