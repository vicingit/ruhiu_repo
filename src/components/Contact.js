import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div>
          <h3>Email</h3>
          <p>arklinkproperties@gmail.com</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>P.O. Box 15590-00100</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+254 111 44 50 45</p>
        </div>
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
