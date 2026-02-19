import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1>Find the Career You Deserve</h1>
        <p>Discover internships, full-time roles, and opportunities from top companies.</p>

        <div className="hero-search">
          <input type="text" placeholder="Search jobs, skills..." />
          <Link to="/jobs" className="primary-btn">Search</Link>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h2>10K+</h2>
          <p>Active Jobs</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Companies</p>
        </div>
        <div>
          <h2>25K+</h2>
          <p>Students Placed</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <h3>Verified Employers</h3>
          <p>Every company is reviewed before posting jobs.</p>
        </div>

        <div className="feature-card">
          <h3>One Click Apply</h3>
          <p>Apply to multiple roles quickly and efficiently.</p>
        </div>

        <div className="feature-card">
          <h3>Smart Filters</h3>
          <p>Filter by tech stack, salary, location and more.</p>
        </div>

        <div className="feature-card">
          <h3>Profile Visibility</h3>
          <p>Let recruiters find you directly.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div>
            <h3>1. Create Profile</h3>
            <p>Build your student profile and showcase your skills.</p>
          </div>
          <div>
            <h3>2. Explore Jobs</h3>
            <p>Browse opportunities that match your interests.</p>
          </div>
          <div>
            <h3>3. Apply & Get Hired</h3>
            <p>Submit applications and track progress easily.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Journey Today</h2>
        <Link to="/jobs" className="primary-btn">Browse Opportunities</Link>
      </section>

    </div>
  );
};

export default Home;