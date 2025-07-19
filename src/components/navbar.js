import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <p className="navbar-title">AExpressions</p>
        <div className="navbar-links">
            <a href="/popularExpressions" className="navbar-link">
              Popular Expressions
            </a>
            <a href="/chat" className="navbar-link">
            Ask AI
          </a>
          <a href="/about" className="navbar-link">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}