import React from "react";
import "./ContactUs.css";
import { Phone, Mail, Clock3, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      {/* Main Section */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-left">

          <h2>
            You Will Grow, You Will
            Succeed. We Promise That
          </h2>

          <p>
            Connect with Hustler and take the next step in your
            career journey. Whether you're a student or a recruiter,
            we're here to help you grow.
          </p>

          <div className="contact-info-grid">

            <div className="info-box">
              <Phone size={28} />
              <h3>Call for inquiry</h3>
              <span>+91 98765 43210</span>
            </div>

            <div className="info-box">
              <Mail size={28} />
              <h3>Send us email</h3>
              <span>hello@hustler.com</span>
            </div>

            <div className="info-box">
              <Clock3 size={28} />
              <h3>Opening hours</h3>
              <span>Mon - Fri: 10AM - 10PM</span>
            </div>

            <div className="info-box">
              <MapPin size={28} />
              <h3>Office</h3>
              <span>Rishikesh, Uttarakhand, India</span>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form-box">

          <h2>Contact Info</h2>

          <p>
            We'd love to hear from you. Send us your queries anytime.
          </p>

          <form>

            <div className="input-row">

              <div className="input-group">
                <label>First Name</label>
                <input type="text" placeholder="Your name" />
              </div>

              <div className="input-group">
                <label>Last Name</label>
                <input type="text" placeholder="Last name" />
              </div>

            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Your E-mail address" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit">Send Message</button>

          </form>
        </div>

      </section>
    </div>
  );
};

export default ContactUs;