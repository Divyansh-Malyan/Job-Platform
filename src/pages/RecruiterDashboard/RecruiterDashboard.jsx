import React, { useState } from "react";
import "./RecruiterDashboard.css";

const RecruiterDashboard = () => {
    const [search, setSearch] = useState("");

    const recentJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            location: "Delhi",
            type: "Full Time",
            salary: "₹8 LPA",
            applicants: 32,
            status: "Active"
        },
        {
            id: 2,
            title: "Backend Developer",
            location: "Bangalore",
            type: "Full Time",
            salary: "₹10 LPA",
            applicants: 18,
            status: "Active"
        }
    ];

    const applications = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Frontend Developer",
            applied: "2 days ago"
        },
        {
            id: 2,
            name: "Priya Singh",
            role: "UI/UX Designer",
            applied: "Yesterday"
        },
        {
            id: 3,
            name: "Aman Verma",
            role: "Backend Developer",
            applied: "3 days ago"
        }
    ];

    const filteredJobs = recentJobs.filter(
        (job) =>
          job.title
            .toLowerCase()
            .includes(search.toLowerCase())
      );

    return (
        <div className="recruiter-dashboard">

            {/* HERO */}

            <section className="dashboard-hero">

                <h1>Recruiter Dashboard</h1>

                <p>
                    Manage jobs and applications from one place.
                </p>

                <div className="hero-actions">

                    <button className="primary-btn">
                        + Post New Job
                    </button>

                    <button className="secondary-btn">
                        Manage Jobs
                    </button>

                    <button className="secondary-btn">
                        View Applicants
                    </button>

                </div>

            </section>

            <div className="dashboard-container">

                {/* STATS */}

                <section className="stats-grid">

                    <div className="stat-card">
                        <h2>12</h2>
                        <p>Jobs Posted</p>
                    </div>

                    <div className="stat-card">
                        <h2>8</h2>
                        <p>Active Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>156</h2>
                        <p>Applicants</p>
                    </div>

                    <div className="stat-card">
                        <h2>4</h2>
                        <p>Closed Jobs</p>
                    </div>

                </section>

                {/* PIPELINE */}

                <section className="dashboard-section">

                    <h2>Applicant Overview</h2>

                    <div className="pipeline-grid">

                        <div className="pipeline-card pending">
                            <h3>12</h3>
                            <p>Pending</p>
                        </div>

                        <div className="pipeline-card reviewed">
                            <h3>8</h3>
                            <p>Reviewed</p>
                        </div>

                        <div className="pipeline-card accepted">
                            <h3>2</h3>
                            <p>Accepted</p>
                        </div>

                        <div className="pipeline-card rejected">
                            <h3>4</h3>
                            <p>Rejected</p>
                        </div>

                    </div>

                </section>

                {/* ACTIVITY */}

                <section className="dashboard-section">

                    <h2>Recent Activity</h2>

                    <div className="activity-feed">

                        <div className="activity-item">
                            ✓ Rahul Sharma applied for Frontend Developer
                        </div>

                        <div className="activity-item">
                            ✓ Priya Singh shortlisted for UI/UX Designer
                        </div>

                        <div className="activity-item">
                            ✓ Backend Developer job updated
                        </div>

                        <div className="activity-item">
                            ✓ New applicant received
                        </div>

                    </div>

                </section>

                {/* RECENT JOBS */}

                <section className="dashboard-section">

                    <div className="section-header">

                        <h2>Recent Jobs</h2>

                        <button className="secondary-btn">
                            View All
                        </button>

                    </div>

                    {
  filteredJobs.length === 0 ? (

    <div className="empty-state">

      <h3>No Jobs Posted Yet</h3>

      <p>
        Post your first job to start receiving applications.
      </p>

      <button className="primary-btn">
        Post Job
      </button>

    </div>

  ) : (

    <div className="jobs-grid">

      {filteredJobs.map((job) => (

        <div
          key={job.id}
          className="job-card"
        >

          <div className="job-top">

            <div>

              <h3>{job.title}</h3>

              <p>
                {job.type} • {job.location}
              </p>

            </div>

            <span
              className={`status-badge ${job.status.toLowerCase()}`}
            >
              {job.status}
            </span>

          </div>

          <h4>{job.salary}</h4>

          <p>
            {job.applicants} Applicants
          </p>

          <div className="job-actions">

            <button className="primary-btn">
              View Applicants
            </button>

            <button className="secondary-btn">
              Edit Job
            </button>

          </div>

        </div>

      ))}

    </div>

  )
}

                </section>

                {/* RECENT APPLICATIONS */}

                <section className="dashboard-section">

                    <h2>Recent Applications</h2>

                    {
  applications.length === 0 ? (

    <div className="empty-state">

      <h3>No Applications Yet</h3>

      <p>
        Applications will appear here once candidates apply.
      </p>

    </div>

  ) : (

    <div className="applications-grid">

      {applications.map((app) => (

        <div
          key={app.id}
          className="application-card"
        >

          <h3>{app.name}</h3>

          <p>Applied For</p>

          <strong>{app.role}</strong>

          <span>{app.applied}</span>

          <button className="primary-btn">
            View Profile
          </button>

        </div>

      ))}

    </div>

  )
}

                </section>

                {/* JOB TABLE */}

                <section className="dashboard-section">

                    <div className="section-header">

                        <h2>Job Management</h2>

                        <input
  type="text"
  placeholder="Search jobs..."
  className="search-box"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>

                    </div>

                    <div className="table-wrapper">

                        <table>

                            <thead>

                                <tr>

                                    <th>Job</th>

                                    <th>Type</th>

                                    <th>Applicants</th>

                                    <th>Status</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Frontend Developer</td>

                                    <td>Full Time</td>

                                    <td>22</td>

                                    <td>
                                        <span className="status-badge">
                                            Active
                                        </span>
                                    </td>

                                    <td className="table-actions">

                                        <button>
                                            View
                                        </button>

                                        <button>
                                            Edit
                                        </button>

                                        <button className="danger-btn">
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                                <tr>

                                    <td>Backend Developer</td>

                                    <td>Full Time</td>

                                    <td>18</td>

                                    <td>
                                        <span className="status-badge">
                                            Active
                                        </span>
                                    </td>

                                    <td className="table-actions">

                                        <button>
                                            View
                                        </button>

                                        <button>
                                            Edit
                                        </button>

                                        <button className="danger-btn">
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default RecruiterDashboard;

// const RecruiterDashboard = () => {
//     return <h1>Recruiter Dashboard Works</h1>;
//   };
  
//   export default RecruiterDashboard;