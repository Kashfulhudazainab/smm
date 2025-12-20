import React, { useState } from 'react';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your message has been sent.');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <span className="sub-title">GET IN TOUCH</span>
          <h2 className="main-title">We’d love to help you design your space.</h2>
          <p className="description">
            Visit our showroom or send us a message. Our interior experts are 
            available for free consultations.
          </p>
          
          <div className="info-details">
            <div className="detail-item">
              <strong>Email</strong>
              <p>hello@furnituremart.com</p>
            </div>
            <div className="detail-item">
              <strong>Phone</strong>
              <p>+1 (555) 000-1234</p>
            </div>
            <div className="detail-item">
              <strong>Address</strong>
              <p>123 Design District, NY 10001</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea 
                rows="5" 
                placeholder="How can we help?" 
                required
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;