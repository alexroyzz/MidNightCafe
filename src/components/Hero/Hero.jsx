import React from "react";
import "./Hero.css";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">

        <div className="hero-text">
          <h1>
            Enjoy <span>Delicious Food</span>
          </h1>

          <p>Best food in your city</p>

          <button onClick={() => scrollToSection("menu")}>
            View Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;