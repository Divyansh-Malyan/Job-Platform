import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Hustler</h1>
        {/* <p>
          Connecting talented students with startups and companies
          to create meaningful career opportunities.
        </p> */}
      </section>

      {/* About Content */}
      <section className="about-content">

        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            Hustler is a modern job platform designed to help students
            discover internships, freelance work, and career opportunities
            while helping startups find skilled young talent.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap between ambitious students
            and innovative companies by making hiring simpler, faster,
            and more accessible.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            We envision a future where every student gets equal access
            to opportunities and every startup can discover passionate
            individuals ready to grow.
          </p>
        </div>

      </section>

      {/* Stats Section */}
      <section className="about-stats">

        <div className="stat-box">
          <h2>500+</h2>
          <p>Students Joined</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Jobs Posted</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Startups Connected</p>
        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Start Your Journey With Hustler</h2>
        <p>
          Explore jobs, connect with startups, and build your future today.
        </p>

        <button>Explore Jobs</button>
      </section>

    </div>
  );
};

export default AboutUs;