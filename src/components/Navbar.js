import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";
import "./Navbar.css"; 
import logo from '../images/logo.jpeg'; 

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
              <NavLink to="/educational" activeClassName="active" className="navbar-link">
                Educational
              </NavLink>
              <NavLink to="/industrial" activeClassName="active" className="navbar-link">
                Industrial
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
