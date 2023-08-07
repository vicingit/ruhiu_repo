import React from "react";
import './About.css'; 
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'
import about4 from '../images/about4.png'
import about5 from '../images/about5.png'
import about6 from '../images/about6.png'

export default function About() {
  return (
    <div className="about-container">
      <h1>About Ark Link Properties</h1>

      <div className="about-description">
        <p>
          Ark Link Properties is a reputable real estate development company that stands at the forefront of creating innovative and sustainable residential and commercial properties. Our rich history and unwavering commitment to excellence have solidified our reputation as a trusted name in the industry.
        </p>

        <div className="image-section">
          <img src={about1} alt="Site Imag" className="about-image" />
          <img src={about2} alt="Technical Imag" className="about-image" />
        </div>

        <p>
          Our mission is to go beyond delivering high-quality construction, engineering, and architectural solutions. We aim to create sustainable and innovative spaces that not only exceed client expectations but also enhance communities and contribute to Kenya's holistic development.
        </p>
        <div className="image-section">
          <img src={about3} alt="Site Imag" className="about-image" />
          <img src={about4} alt="Green Architecture Imag" className="about-image" />
        </div>
        <p>
          We pride ourselves on meticulous attention to detail and an unwavering commitment to exceptional workmanship. At Ark Link, every project becomes a testament to our dedication to client satisfaction. Our team of professionals, from architects to engineers, ensures that creativity and expertise are at the heart of everything we do.
        </p>
        <div className="image-section">
          <img src={about5} alt="Site Imag" className="about-image" />
          <img src={about6} alt="Green Architecture Imag" className="about-image" />
        </div>
        <p>
          Embracing sustainability, we incorporate energy-efficient systems, groundbreaking technologies, and eco-friendly materials in all our projects. By staying updated with industry trends and advancements, we're always a step ahead, ensuring efficiency, cost-effectiveness, and environmental harmony.
        </p>

        <p>
          As we continue to make strides in the construction industry, our diverse portfolio showcases projects from luxury apartments to retail complexes. Each one bears the hallmark of our quality, innovation, and customer-centric approach.
        </p>

        <p className="conclusion">
          Join us in our journey. Together, let's shape the future of real estate and construction in Kenya and aim for a brighter, sustainable tomorrow.
        </p>
      </div>
    </div>
  );
}
