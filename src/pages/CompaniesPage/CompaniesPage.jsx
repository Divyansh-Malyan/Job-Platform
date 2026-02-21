import React from "react";
import "./CompaniesPage.css"

const CompaniesPage = () => {
  return (
    <div className="companies-page">

      {/* Header */}
      <div className="companies-header">
        <h1>Top Hiring Companies</h1>
        <p>Explore organizations actively hiring skilled students.</p>
      </div>

      {/* Search Bar */}
      <div className="company-search">
        <input type="text" placeholder="Search companies..." />
        <button>Search</button>
      </div>

      {/* Companies Grid */}
      <div className="companies-grid">

        <div className="company-card">
          <div className="company-logo">G</div>
          <h3>Google</h3>
          <p className="company-location">Remote</p>
          <p className="company-description">
            Leading global technology company focused on innovation.
          </p>
          <button className="view-btn">View Jobs</button>
        </div>

        <div className="company-card">
          <div className="company-logo">A</div>
          <h3>Amazon</h3>
          <p className="company-location">Bangalore</p>
          <p className="company-description">
            Global e-commerce and cloud computing leader.
          </p>
          <button className="view-btn">View Jobs</button>
        </div>

        <div className="company-card">
          <div className="company-logo">M</div>
          <h3>Microsoft</h3>
          <p className="company-location">Hyderabad</p>
          <p className="company-description">
            Empowering every person and organization to achieve more.
          </p>
          <button className="view-btn">View Jobs</button>
        </div>

      </div>

    </div>
  );
};

export default CompaniesPage;