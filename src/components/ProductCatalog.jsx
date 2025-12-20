import React from 'react';
import '../App.css';

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "Cloud Sofa", price: "$1200", type: "Sofa", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400" },
    { id: 2, name: "Velvet Bed Frame", price: "$850", type: "Bed", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400" },
    { id: 3, name: "Ortho-Memory Foam", price: "$500", type: "Mattress", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400" },
    { id: 4, name: "Minimalist Sectional", price: "$2500", type: "Sofa", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400" },
    { id: 5, name: "Wooden Platform Bed", price: "$750", type: "Bed", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400" },
    { id: 6, name: "Hybrid Comfort", price: "$650", type: "Mattress", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400" },
    { id: 7, name: "Modern Loveseat", price: "$900", type: "Sofa", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400" },
    { id: 8, name: "Nordic Queen Bed", price: "$1100", type: "Bed", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400" },
  ];

  return (
    <section className="catalog-section">
      <div className="catalog-header">
        <h2>Our Collection</h2>
        <p>Swipe to explore sofas, beds, and mattresses.</p>
      </div>

      <div className="scroll-wrapper">
        <div className="scroll-container">
          {products.map((item) => (
            <div key={item.id} className="catalog-card">
              <div className="card-image">
                <img src={item.img} alt={item.name} />
                <span className="type-tag">{item.type}</span>
              </div>
              <div className="card-details">
                <h3>{item.name}</h3>
                <div className="rating">★★★★★</div>
                <p className="price">{item.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom Scrollbar Visual */}
      <div className="scroll-indicator">
        <div className="scroll-dot active"></div>
        <div className="scroll-dot"></div>
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default ProductCatalog;