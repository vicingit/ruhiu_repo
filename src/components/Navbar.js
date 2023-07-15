import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Navbar.css"; // Import the CSS file for styling

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="navbar-logo">
          Ark Link
        </Link>
        <nav className="navbar-items">
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/what-we-do" className="navbar-link">
            What We Do
          </Link>
          {/* <Link to="/Yunacity" className="navbar-link">
            Yuna City
          </Link> */}
          <Link to="/values" className="navbar-link">
            Core Values
          </Link>
          <Link to="/contact" className="navbar-link">
            Contacts
          </Link>
        </nav>
        <Link
          to="/contact"
          className="navbar-button"
        >
          Reach Us
          <ArrowRightIcon className="navbar-button-icon" />
        </Link>
      </div>
    </header>
  );
}
