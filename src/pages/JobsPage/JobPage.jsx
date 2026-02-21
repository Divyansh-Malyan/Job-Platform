import React from "react";
import "./JobPage.css";

const JobPage = () => {
  return (
    <div className="jobs-page">

      {/* Page Header */}
      <div className="jobs-header">
        <h1>Explore Job Opportunities</h1>
        <p>Find roles that match your skills and ambition.</p>
      </div>

      <div className="jobs-container">

        {/* Filters Sidebar */}
        <aside className="filters">
          <h3>Filters</h3>

          <div className="filter-group">
            <label>Role</label>
            <select>
              <option>All</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Location</label>
            <select>
              <option>All</option>
              <option>Remote</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Experience</label>
            <select>
              <option>All</option>
              <option>0-1 Years</option>
              <option>1-3 Years</option>
              <option>3+ Years</option>
            </select>
          </div>
        </aside>

        {/* Jobs List */}
        <section className="jobs-list">

          {/* Job Card */}
          <div className="job-card">
            <h3>Frontend Developer</h3>
            <p className="company">Google • Remote</p>
            <p className="salary">₹8-12 LPA</p>
            <p className="description">
              Looking for a React developer with strong UI skills.
            </p>

            <div className="job-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <button className="apply-btn">Apply Now</button>
          </div>

          {/* Duplicate for layout demo */}
          <div className="job-card">
            <h3>Backend Developer</h3>
            <p className="company">Amazon • Bangalore</p>
            <p className="salary">₹10-15 LPA</p>
            <p className="description">
              Node.js backend role building scalable APIs.
            </p>

            <div className="job-tags">
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>

            <button className="apply-btn">Apply Now</button>
          </div>

        </section>

      </div>

    </div>
  );
};

export default JobPage;