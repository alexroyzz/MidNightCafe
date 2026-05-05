import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Footer from "./components/footer/footer";
import Menu from "./components/Menu/Menu";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "about",
        "menu",
        "gallery",
        "contact",
      ];

      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollY &&
          el.offsetTop + el.offsetHeight > scrollY
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
