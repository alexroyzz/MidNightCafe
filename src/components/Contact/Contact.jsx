import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2 className="section-title">Get in touch with us</h2>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-item">
              <h3>📍 Address</h3>
              <p>Near City Mall, Your City, India</p>
            </div>

            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-item">
              <h3>🕒 Opening Hours</h3>
              <p>5:00 PM - 2:00 AM</p>
            </div>

            {/* <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Order on WhatsApp
            </a> */}

          </div>

          {/* RIGHT SIDE (MAP) */}
          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=delhi&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;