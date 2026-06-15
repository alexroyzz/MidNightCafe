import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* LEFT */}
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>📍 Location</p>
          <p>📞 +91 9876543210</p>
          <p>✉️ demo@gmail.com</p>
        </div>

        {/* CENTER */}
        <div className="footer-box center">
          <h2>MidNightCafe</h2>
          <p>
            Best late night food in your city. Fresh taste with amazing quality.
          </p>

          <div className="social-icons">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>ig</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-box">
          <h3>Opening Hours</h3>
          <p>Everyday</p>
          <p>5:00 PM - 2:00 AM</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 All Rights Reserved By NightCafe</p>
      </div>
    </footer>
  );
};

export default Footer;
