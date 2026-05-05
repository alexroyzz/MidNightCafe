import React, { useState } from "react";
import menuData from "../../constants/menuData";
import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="section-subtitle">Most popular items</p>

        {/* ITEMS */}
        <div className="menu-grid">
          {menuData[activeCategory].map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-img" />

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
