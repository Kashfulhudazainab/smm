import React from 'react';
import "../App.css";
const Section = () => {
  const products = [
    {
      id: 1,
      name: "Wood Chair",
      price: "$145.00",
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=300&auto=format&fit=crop" // Replace with your image
    },
    {
      id: 2,
      name: "Modern Chair",
      price: "$115.00",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=300&auto=format&fit=crop" // Replace with your image
    },
    {
      id: 3,
      name: "Classy Chair",
      price: "$145.00",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=300&auto=format&fit=crop" // Replace with your image
    }
  ];

  return (
    <section className="featured-section">
      <div className="vertical-label">Featured</div>
      
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
        
        {/* Next/Arrow Button */}
        <button className="next-arrow">
          <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default Section;