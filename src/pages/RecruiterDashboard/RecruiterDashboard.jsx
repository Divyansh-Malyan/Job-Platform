import React, { useEffect, useState } from "react";
import "./RecruiterDashboard.css";
import useUserStore from "../../store/userStore";
import { getRecruiterDashboard } from "../../api/dashboardApi";
import { useNavigate } from "react-router-dom";

const RecruiterDashboard = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const stats =
    dashboardData?.stats || {};

  const recentJobs =
    dashboardData?.jobs || [];

  const applications =
    dashboardData?.recentApplications || [];

  const filteredJobs = recentJobs.filter(
    (job) =>
      (job.role || "")
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const data =
          await getRecruiterDashboard(user.id);

        setDashboardData(data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);

      }
    };

    if (user) {
      fetchDashboard();
    }

  }, [user]);

  if (loading) {
    return <h2>Loading Dashboard...</h2>;
  }

  if (!dashboardData) {
    return <h2>Dashboard Not Found</h2>;
  }
  const pipeline =
    dashboardData?.pipeline || {};

  return (
    <div className="recruiter-dashboard">

      {/* HERO */}

      <section className="dashboard-hero">

        <h1>Recruiter Dashboard</h1>

        <p>
          Manage jobs and applications from one place.
        </p>

        <div className="hero-actions">

          <button
            className="primary-btn"
            onClick={() => navigate("/recruiterpost")}
          >
            + Post New Job
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/manage-jobs")}
          >
            Manage Jobs
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/view-applicants")}
          >
            View Applicants
          </button>

        </div>

      </section>

      <div className="dashboard-container">

        {/* STATS */}

        <section className="stats-grid">

          <div className="stat-card">
            <h2>{stats.jobsPosted || 0}</h2>
            <p>Jobs Posted</p>
          </div>

          <div className="stat-card">
            <h2>{stats.activeJobs || 0}</h2>
            <p>Active Jobs</p>
          </div>

          <div className="stat-card">
            <h2>{stats.applicants || 0}</h2>
            <p>Applicants</p>
          </div>

          <div className="stat-card">
            <h2>{stats.closedJobs || 0}</h2>
            <p>Closed Jobs</p>
          </div>

        </section>

        {/* PIPELINE */}

        <section className="dashboard-section">

          <h2>Applicant Overview</h2>

          <div className="pipeline-grid">

            <div className="pipeline-card pending">
              <h3>{pipeline.pending || 0}</h3>
              <p>Pending</p>
            </div>

            <div className="pipeline-card reviewed">
              <h3>{pipeline.reviewed || 0}</h3>
              <p>Reviewed</p>
            </div>

            <div className="pipeline-card accepted">
              <h3>{pipeline.accepted || 0}</h3>
              <p>Accepted</p>
            </div>

            <div className="pipeline-card rejected">
              <h3>{pipeline.rejected || 0}</h3>
              <p>Rejected</p>
            </div>

          </div>

        </section>

        {/* ACTIVITY */}

        <section className="dashboard-section">

          <h2>Recent Activity</h2>

          <div className="empty-state">

            <h3>No Recent Activity</h3>

            <p>
              Activity will appear here once jobs and applications start coming in.
            </p>

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

                <button
                  className="primary-btn"
                  onClick={() => navigate("/recruiterpost")}
                >
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

                        <h3>{job.role}</h3>

                        <p>
                          {job.job_type} • {job.location_job}
                        </p>

                      </div>

                      <span
                        className={`status-badge ${(job.status || "").toLowerCase()}`}
                      >
                        {job.status}
                      </span>

                    </div>

                    <h4>{job.salary}</h4>

                    <p>
                      Applicants
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

                    <h3>{app.student_name}</h3>

                    <p>Applied For</p>

                    <strong>{app.job_role}</strong>

                    <span>{app.status}</span>

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

        {/* <section className="dashboard-section">

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

                            </thead> */}

        {/* <tbody>

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

                            </tbody> */}

        {/* </table>

                    </div>

                </section> */}

      </div>

    </div>
  );
};

export default RecruiterDashboard;