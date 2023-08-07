import React from 'react';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import the social media icons
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="info-section">
          <h3>Email</h3>
          <p>arklinkproperties@gmail.com</p>
          <p>arklinkproperties@gmail.com</p>
        </div>
        <div className="info-section">
          <h3>Address</h3>
          <p>P.O. Box 15590-00100</p>
        </div>
        <div className="info-section">
          <h3>Phone</h3>
          <p>+254 111 44 50 45</p>
        </div>
      </div>
      <div className="contact-social">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={40} />
        </a>
      </div>
      <div className="contact-form">
        <p>
          We welcome you to reach out to us with any inquiries, feedback, or collaboration opportunities. Please fill out the form below, and our team will get back to you as soon as possible.
        </p>
        <p>
          Thank you for your interest in Ark Link Properties!
        </p>
      </div>
    </div>
  );
};

export default Contact;
