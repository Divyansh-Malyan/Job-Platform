import { Link } from "react-router-dom";
import "./HomePage.css";
import Spotify from "../../assets/Spotify.svg";
import Asana from "../../assets/Asana.svg";
import Slack from "../../assets/Slack.svg";
import Linear from "../../assets/Linear.svg";
import Adobe from "../../assets/Adobe.svg";
import Agriculture from "../../assets/Agriculture.svg";
import Metal from "../../assets/Metal.svg";
import Commerce from "../../assets/Commerce.svg";
import Construction from "../../assets/Construction.svg";
import Hotel from "../../assets/Hotel.svg";
import Education from "../../assets/Education.svg";
import Finence from "../../assets/Finence.svg";
import Transport from "../../assets/Transport.svg";



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
      <div className="trusted-wrapper">
        <div className="trusted-by">
          <img src={Spotify} alt="Spotify" />
          <img src={Slack} alt="Slack" />
          <img src={Adobe} alt="Adobe" />
          <img src={Asana} alt="Asana" />
          <img src={Linear} alt="Linear" />

          <img src={Spotify} alt="Spotify" />
          <img src={Slack} alt="Slack" />
          <img src={Adobe} alt="Adobe" />
          <img src={Asana} alt="Asana" />
          <img src={Linear} alt="Linear" />

          <img src={Spotify} alt="Spotify" />
          <img src={Slack} alt="Slack" />
          <img src={Adobe} alt="Adobe" />
          <img src={Asana} alt="Asana" />
          <img src={Linear} alt="Linear" />
        </div>
      </div>

      {/* Recent jobs */}
      <section className="recent-jobs">

        <div className="recent-header">
          <div>
            <h2>Recent Jobs Available</h2>
            <p>Find the latest opportunities from top companies.</p>
          </div>

          <Link to="/jobs">View all</Link>
        </div>

        <div className="job-list">

          {/* CARD 1 */}
          <div className="job-card">

            <div className="job-top">
              <span className="job-time">10 min ago</span>
            </div>

            <div className="job-title-row">

              <img
                className="job-logo"
                src="https://cdn-icons-png.flaticon.com/512/5969/5969120.png"
                alt="company-logo"
              />

              <div>
                <h3>Forward Security Director</h3>
                <p className="company-name">
                  Bauch, Schuppe and Schulist Co.
                </p>
              </div>

            </div>

            <div className="job-bottom">

              <div className="job-tag">
                <span>Hotels & Tourism</span>
                <span>Full time</span>
                <span>$40000-$42000</span>
                <span>New-York, USA</span>
              </div>

              <Link to="/jobs" className="job-btn">
                Job Details
              </Link>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="job-card">

            <div className="job-top">
              <span className="job-time">12 min ago</span>
            </div>

            <div className="job-title-row">

              <img
                className="job-logo"
                src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                alt="company-logo"
              />

              <div>
                <h3>Regional Creative Facilitator</h3>
                <p className="company-name">
                  Wisokz - Becker Co.
                </p>
              </div>

            </div>

            <div className="job-bottom">

              <div className="job-tag">
                <span>Media</span>
                <span>Part time</span>
                <span>$28000-$32000</span>
                <span>Los Angeles, USA</span>
              </div>

              <Link to="/jobs" className="job-btn">
                Job Details
              </Link>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="job-card">

            <div className="job-top">
              <span className="job-time">15 min ago</span>
            </div>

            <div className="job-title-row">

              <img
                className="job-logo"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="company-logo"
              />

              <div>
                <h3>Internal Integration Planner</h3>
                <p className="company-name">
                  Mraz, Quigley and Feest Inc.
                </p>
              </div>

            </div>

            <div className="job-bottom">

              <div className="job-tag">
                <span>Construction</span>
                <span>Full time</span>
                <span>$48000-$50000</span>
                <span>Texas, USA</span>
              </div>

              <Link to="/jobs" className="job-btn">
                Job Details
              </Link>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="job-card">

            <div className="job-top">
              <span className="job-time">24 min ago</span>
            </div>

            <div className="job-title-row">

              <img
                className="job-logo"
                src="https://cdn-icons-png.flaticon.com/512/5969/5968853.png"
                alt="company-logo"
              />

              <div>
                <h3>District Intranet Director</h3>
                <p className="company-name">
                  VonRueden - Weber Co
                </p>
              </div>

            </div>

            <div className="job-bottom">

              <div className="job-tag">
                <span>Commerce</span>
                <span>Full time</span>
                <span>$42000-$48000</span>
                <span>Florida, USA</span>
              </div>

              <Link to="/jobs" className="job-btn">
                Job Details
              </Link>

            </div>

          </div>

          {/* CARD 5 */}
          <div className="job-card">

            <div className="job-top">
              <span className="job-time">26 min ago</span>
            </div>

            <div className="job-title-row">

              <img
                className="job-logo"
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                alt="company-logo"
              />

              <div>
                <h3>Corporate Tactics Facilitator</h3>
                <p className="company-name">
                  Cormier, Turner and Flatley Inc
                </p>
              </div>

            </div>

            <div className="job-bottom">

              <div className="job-tag">
                <span>Commerce</span>
                <span>Full time</span>
                <span>$38000-$40000</span>
                <span>Boston, USA</span>
              </div>

              <Link to="/jobs" className="job-btn">
                Job Details
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">

        <div className="category-header">
          <h2>Browse by Category</h2>
          <p>
            Discover opportunities from different industries and find the perfect career path.
          </p>
        </div>

        <div className="category-grid">

          <div className="category-card">
            <div className="category-icon">
              <img src={Agriculture} alt="Agriculture" />
            </div>
            <h3>Agriculture</h3>
            <span>1254 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <img src={Metal} alt="Metal" />
            </div>
            <h3>Metal Production</h3>
            <span>816 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Commerce} alt="Commerce" /></div>
            <h3>Commerce</h3>
            <span>2082 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Construction} alt="Construction" /></div>
            <h3>Construction</h3>
            <span>1520 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Hotel} alt="Hotel" /></div>
            <h3>Hotels & Tourism</h3>
            <span>1022 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Education} alt="Education" /></div>
            <h3>Education</h3>
            <span>1496 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Finence} alt="Finence" /></div>
            <h3>Financial Services</h3>
            <span>1529 Jobs</span>
          </div>

          <div className="category-card">
            <div className="category-icon"><img src={Transport} alt="Transport" /></div>
            <h3>Transport</h3>
            <span>1244 Jobs</span>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="stats">
        <div>
          <h2>12K+</h2>
          <p>Matches Made</p>
        </div>
        <div>
          <h2>50k+</h2>
          <p>Tech Jobs</p>
        </div>
        <div>
          <h2>25K+</h2>
          <p>Startup Ready Candidates</p>
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

      {/* CTA BANNER */}
      <section className="career-banner">

        <div className="banner-content">

          <div className="banner-left">
            <h2>
              Create A Better <br />
              Future For Yourself
            </h2>

            <p>
              Discover top opportunities, connect with recruiters,
              and build a successful career with Hustler.
            </p>

            <Link to="/jobs" className="banner-btn">
              Search Job
            </Link>
          </div>

          <div className="banner-right"></div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>Hustler</h2>
            <p>
              Connecting talented students with startups and companies
              to build the future together.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h3>Categories</h3>

            <a href="/">Development</a>
            <a href="/">Design</a>
            <a href="/">Marketing</a>
            <a href="/">Finance</a>
          </div>

          <div className="footer-links">
            <h3>Contact</h3>

            <a href="mailto:hello@hustler.com">
              hello@hustler.com
            </a>

            <a href="tel:+911234567890">
              +91 12345 67890
            </a>

            <a href="/">
              Rishikesh, India
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Hustler. All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="/">LinkedIn</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
          </div>
        </div>

      </footer>

      {/* CTA
      <section className="cta">
        <h2>Start Your Journey Today</h2>
        <Link to="/jobs" className="primary-btn">Browse Opportunities</Link>
      </section> */}

    </div>
  );
};

export default Home;