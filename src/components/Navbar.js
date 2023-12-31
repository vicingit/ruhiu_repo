import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Navbar.css"; 
import logo from '../images/1.png'; 

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container mx-auto flex p-5 flex-wrap items-center justify-between">
        <NavLink to="/" exact className="navbar-brand">
          <img src={logo} alt="Ark Link Properties Logo" className="navbar-logo" />
          Ark Link Properties
        </NavLink>
        <nav className="navbar-items">
          <NavLink to="/about" activeClassName="active" className="navbar-link">
            About
          </NavLink>
          <NavLink to="/what-we-do" activeClassName="active" className="navbar-link">
            What We Do
          </NavLink>
          <div className="navbar-dropdown">
            Projects
            <div className="navbar-dropdown-content">
              <NavLink to="dash" activeClassName="active" className="navbar-link">
                Commercial
              </NavLink>
              <NavLink to="dash" activeClassName="active" className="navbar-link">
                Hotel $ Resort
              </NavLink>
              <NavLink to="dash" activeClassName="active" className="navbar-link">
                Residential
              </NavLink>
            </div>
          </div>
          <NavLink to="/values" activeClassName="active" className="navbar-link">
            Core Values
          </NavLink>
          </nav>
        <NavLink to="/contact" className="navbar-button">
          Reach Us
          <ArrowRightIcon className="navbar-button-icon" />
        </NavLink>
      </div>
    </header>
  );
}
