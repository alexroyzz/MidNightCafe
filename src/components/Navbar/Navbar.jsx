import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Night Cafe</div>

        {/* MENU */}
        <div className={`mobile-menu ${open ? "active" : ""}`}>
          <span
            onClick={() => {
              scrollToSection("home");
              setOpen(false);
            }}
          >
            Home
          </span>

          <span
            onClick={() => {
              scrollToSection("menu");
              setOpen(false);
            }}
          >
            Menu
          </span>

          <span
            onClick={() => {
              scrollToSection("contact");
              setOpen(false);
            }}
          >
            Contact
          </span>
        </div>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
