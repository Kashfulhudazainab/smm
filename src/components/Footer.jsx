import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-main">Furniture Mart</span>
            <span className="logo-sub">EST. 2024</span>
          </div>
          <p className="footer-bio">
            Crafting minimal, high-quality furniture that transforms your living space into a modern sanctuary.
          </p>
          <div className="social-links">
            <a href="#">Fb</a>
            <a href="#">Ig</a>
            <a href="#">Tw</a>
            <a href="#">Pi</a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h4>Collection</h4>
          <ul>
            <li><a href="#">Living Room</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Dining</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Showroom</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h4>Stay Inspired</h4>
          <p>Join our list for design tips and exclusive offers.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Email address" />
            <button>→</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Furniture Mart. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;