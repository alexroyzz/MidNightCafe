import React from "react";
import "./Gallery.css";

import g1 from "../../assets/images/gallery/g1.jpg";
import g2 from "../../assets/images/gallery/g2.jpg";
import g3 from "../../assets/images/gallery/g3.jpg";
import g4 from "../../assets/images/gallery/g4.jpg";

const Gallery = () => {
  const images = [g1, g2, g3, g4];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <img key={index} src={img} className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
