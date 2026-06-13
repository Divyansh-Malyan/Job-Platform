import React, { useEffect, useState } from "react";
import "./RecruiterDashboard.css";
import useUserStore from "../../store/userStore";
import { getRecruiterDashboard } from "../../api/dashboardApi";
import { useNavigate } from "react-router-dom";
import { Riple } from "react-loading-indicators";

const RecruiterDashboard = () => {

  const navigate = useNavigate();

  const user = useUserStore(
    (state) => state.user
  );

  const [dashboardData, setDashboardData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const data =
          await getRecruiterDashboard(
            user.id
          );

        setDashboardData(data);

      } catch (error) {


      } finally {

        setLoading(false);

      }

    };

    if (user) {
      fetchDashboard();
    }

  }, [user]);

  if (loading) {
    return (
      <div className="jobs-loader">
        <Riple
          color="#35b0a7"
          size="large"
        />
      </div>
    );
  }

  if (!dashboardData) {
    return <h2>Dashboard Not Found</h2>;
  }

  const stats =
    dashboardData?.stats || {};

  const pipeline =
    dashboardData?.pipeline || {};

  const recentJobs =
    dashboardData?.jobs || [];

  const applications =
    dashboardData?.recentApplications || [];

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
            onClick={() =>
              navigate("/recruiterpost")
            }
          >
            + Post New Job
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              navigate("/manage-jobs")
            }
          >
            Manage Jobs
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

            <div className="pipeline-card shortlisted">
              <h3>{pipeline.shortlisted || 0}</h3>
              <p>Shortlisted</p>
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

        {/* RECENT JOBS */}

        <section className="dashboard-section">

          <div className="section-header">

            <h2>Recent Jobs</h2>

            <button
              className="secondary-btn"
              onClick={() =>
                navigate("/manage-jobs")
              }
            >
              View All
            </button>

          </div>

          {
            recentJobs.length === 0 ? (

              <div className="empty-state">

                <h3>
                  No Jobs Posted Yet
                </h3>

                <p>
                  Post your first job to start receiving applications.
                </p>

                <button
                  className="primary-btn"
                  onClick={() =>
                    navigate("/recruiterpost")
                  }
                >
                  Post Job
                </button>

              </div>

            ) : (

              <div className="jobs-grid">

                {recentJobs.map((job) => (

                  <div
                    key={job.id}
                    className="job-card"
                  >

                    <div className="job-top">

                      <div>

                        <h3>
                          {job.role}
                        </h3>

                        <p>
                          {job.job_type}
                          {" • "}
                          {job.location_job}
                        </p>

                      </div>

                      <span
                        className={`status-badge ${(job.status || "").toLowerCase()}`}
                      >
                        {job.status}
                      </span>

                    </div>

                    <h4>
                      {job.salary}
                    </h4>

                    <p>
                      Status: {job.status}
                    </p>

                    <div className="job-actions">

                      <button
                        className="primary-btn"
                        onClick={() =>
                          navigate(
                            `/job/${job.id}/applicants`
                          )
                        }
                      >
                        View Applicants
                      </button>

                      <button
                        className="secondary-btn"
                        onClick={() =>
                          navigate(
                            `/edit-job/${job.id}`
                          )
                        }
                      >
                        Edit Job
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )
          }

        </section>


      </div>

    </div>

  );
};

export default RecruiterDashboard;