import React from 'react';
import '../App.css';

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-container">
        
        {/* Left Side: Text Content */}
        <div className="promo-text-side">
          <span className="promo-tag">LIMITED EDITION</span>
          <h2 className="promo-heading">Better Sleep, <br /> Better Life.</h2>
          <p className="promo-description">
            Experience the pinnacle of relaxation with our premium handcrafted 
            bed frames. Designed for durability and timeless style.
          </p>
          <div className="promo-features">
            <div className="feature"><span>✓</span> Eco-friendly Material</div>
            <div className="feature"><span>✓</span> 10-Year Warranty</div>
          </div>
        </div>

        {/* Right Side: Image & Sale Badge */}
        <div className="promo-image-side">
          <div className="image-wrapper">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Luxury Bed" 
              className="bed-image"
            />
            {/* The Sale Badge Overlay */}
            <div className="sale-badge">
              <span className="sale-text">BIG SALE</span>
              <span className="sale-percent">30% OFF</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;