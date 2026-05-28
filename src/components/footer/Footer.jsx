import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Hustler</h2>
          <p>
            Connecting talented students with startups
            and companies to build the future together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/jobs">Jobs</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h3>Categories</h3>
          <a href="/">Development</a>
          <a href="/">Design</a>
          <a href="/">Marketing</a>
          <a href="/">Finance</a>
        </div>

        {/* Contact */}
        <div className="footer-links">
          <h3>Contact</h3>
          <p>hello@hustler.com</p>
          <p>+91 12345 67890</p>
          <p>Rishikesh, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Hustler. All rights reserved.</p>

        <div className="social-links">
          <a href="/">LinkedIn</a>
          <a href="/">Twitter</a>
          <a href="/">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;