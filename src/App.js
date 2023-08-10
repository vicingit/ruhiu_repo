import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Doings from "./components/Doings";
import Values from "./components/Values";
import Footer from "./components/Footer"; // Importing the Footer component
//import Yuna from "./components/Yuna";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content"> {/* Added a wrapper for content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/what-we-do" element={<Doings />} />
            {/* <Route path="/Yunacity" element ={<Yuna />} /> */}
            <Route path="/values" element={<Values />} />
          </Routes>
        </div>
        <Footer /> {/* Added the Footer component */}
      </div>
    </Router>
  );
}
