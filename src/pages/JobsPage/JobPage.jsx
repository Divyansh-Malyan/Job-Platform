import React, { useEffect, useState } from "react";
import "./JobPage.css";
import Instagram from "../../assets/insta.svg";
import Tesla from "../../assets/tesla.svg";
import McDonalds from "../../assets/mcdi.svg";
import Apple from "../../assets/apple.svg";
import { getJobs } from "../../api/jobApi";
import { useNavigate } from "react-router-dom"; 

const JobPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchJobs = async () => {
      try {

        const data = await getJobs();

        setJobs(data.jobs);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    fetchJobs();

  }, []);

  if (loading) {
    return <h2>Loading Jobs...</h2>;
  }
  console.log(jobs);

  return (
    <div className="jobs-page">

      {/* HERO */}
      <section className="jobs-hero">
        <h1>Jobs</h1>
      </section>

      {/* MAIN */}
      <section className="jobs-main">

        {/* SIDEBAR */}
        <aside className="filters">

          <h3>Search by Job Title</h3>

          <input
            type="text"
            placeholder="Job title or company"
            className="search-input"
          />

          <div className="filter-section">
            <h4>Location</h4>

            <select>
              <option>Choose city</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
            </select>
          </div>

          <div className="filter-section">
            <h4>Category</h4>

            <label><input type="checkbox" /> Commerce</label>
            <label><input type="checkbox" /> Telecommunications</label>
            <label><input type="checkbox" /> Hotels & Tourism</label>
            <label><input type="checkbox" /> Education</label>
            <label><input type="checkbox" /> Financial Services</label>
          </div>

          <div className="filter-section">
            <h4>Job Type</h4>

            <label><input type="checkbox" /> Full Time</label>
            <label><input type="checkbox" /> Part Time</label>
            <label><input type="checkbox" /> Freelance</label>
            <label><input type="checkbox" /> Internship</label>
          </div>

          <div className="filter-section">
            <h4>Experience Level</h4>

            <label><input type="checkbox" /> Fresher</label>
            <label><input type="checkbox" /> Intermediate</label>
            <label><input type="checkbox" /> Expert</label>
          </div>

        </aside>

        {/* RIGHT */}
        <div className="jobs-content">

          <div className="jobs-topbar">

            <p>Showing 6-6 of 10 results</p>

            <select className="sort-select">
              <option>Sort by latest</option>
              <option>Oldest</option>
            </select>

          </div>

          {/* JOBS */}

          <div className="jobs-list">

            {jobs.map((job) => (

              <div className="job-card" key={job.id}>

                <div className="job-top">
                  <span className="job-time">
                    New
                  </span>
                </div>

                <div className="job-middle">

                  <div className="job-info">

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5969/5969120.png"
                      alt=""
                      className="job-logo"
                    />

                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.description_job}</p>
                    </div>

                  </div>

                  <button
                    className="details-btn"
                    onClick={() => navigate(`/jobdetail/${job.id}`)}
                  >
                    Job Details
                  </button>

                </div>

                <div className="job-tags">

                  <span>{job.job_type}</span>

                  <span>{job.salary}</span>

                  <span>{job.location_job}</span>

                  <span>{job.exp_required}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TOP COMPANIES */}
      <section className="top-companies">

        <div className="companies-header">
          <h2>Top Company</h2>

          <p>
            Discover leading companies actively hiring talented
            students and professionals.
          </p>
        </div>

        <div className="companies-grid">

          {/* CARD */}
          <div className="company-card">

            <div className="company-icon">
              <img
                src={Instagram}
                alt="Instagram"
              />
            </div>

            <h3>Instagram</h3>

            <p>
              Build social experiences and connect billions
              of people worldwide.
            </p>

            <span>8 open jobs</span>

          </div>

          {/* CARD */}
          <div className="company-card">

            <div className="company-icon">
              <img
                src={Tesla}
                alt="Tesla"
              />
            </div>

            <h3>Tesla</h3>

            <p>
              Shape the future of electric vehicles and
              sustainable technology.
            </p>

            <span>18 open jobs</span>

          </div>

          {/* CARD */}
          <div className="company-card">

            <div className="company-icon">
              <img
                src={McDonalds}
                alt="McDonalds"
              />
            </div>

            <h3>McDonald’s</h3>

            <p>
              Join global operations and customer-focused
              innovation teams.
            </p>

            <span>12 open jobs</span>

          </div>

          {/* CARD */}
          <div className="company-card">

            <div className="company-icon">
              <img
                src={Apple}
                alt="Apple"
              />
            </div>

            <h3>Apple</h3>

            <p>
              Create world-class products with cutting-edge
              hardware and software.
            </p>

            <span>9 open jobs</span>

          </div>

        </div>

      </section>

    </div>
  );
};

export default JobPage;