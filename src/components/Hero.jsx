import React from 'react';
import "../App.css";

const Hero = () => {
  return (
    <div className="page-wrapper">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-accent">Modern</span>
          <span className="logo-text">Modora Living</span>
          <span className="logo-tagline">INTERIOR DESIGN</span>
        </div>
        
        <ul className="nav-menu">
          <li className="nav-item"><a href="#home">The art of comfort</a></li>
          <li className="nav-item"><a href="#shop">Collections</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item search-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay">
          <div className="hero-container">
            <div className="hero-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M7 13v-2h10v2h-1v5h1v2H7v-2h1v-5H7zm5.5-8C10.57 5 9 6.57 9 8.5V11h7V8.5C16 6.57 14.43 5 12.5 5z" />
              </svg>
            </div>
            <h1 className="hero-title">Comfort without limits</h1>
            <p className="hero-subtitle">
              Experience the perfect blend of craftsmanship and modern minimalism for your home.
            </p>
            <button className="hero-cta">Explore the Collection</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;