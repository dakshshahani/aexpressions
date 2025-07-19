import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <p className="navbar-title">AExpressions</p>
        <div className="navbar-links">
          <a href="/" className="navbar-link">
            AExpressions
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}