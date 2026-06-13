import React, { useEffect, useState } from "react";
import "./JobPage.css";
import Instagram from "../../assets/insta.svg";
import Tesla from "../../assets/tesla.svg";
import McDonalds from "../../assets/Mcdi.svg";
import Apple from "../../assets/Apple.svg";
import { getJobs } from "../../api/jobApi";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../api/config";
import { Ripple } from "react-loading-indicators";

const JobPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [locationFilter, setLocationFilter] = useState("");
  const [jobTypes, setJobTypes] = useState([]);
  const [experienceLevels, setExperienceLevels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        console.log("API_URL =", API_URL);

        const data = await getJobs();

        console.log("Jobs API Response =", data);

        setJobs(data.jobs);

      } catch (error) {
        console.error("Jobs Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

  }, []);



  const handleJobTypeChange = (type) => {
    setJobTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const handleExperienceChange = (level) => {
    setExperienceLevels((prev) =>
      prev.includes(level)
        ? prev.filter((e) => e !== level)
        : [...prev, level]
    );
  };

  const filteredJobs = [...jobs]
    .filter((job) => {

      const matchesSearch =
        !searchTerm ||
        job.role
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        job.company_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesLocation =
        !selectedLocation ||
        job.location_job
          ?.toLowerCase()
          .trim() ===
        selectedLocation
          .toLowerCase()
          .trim();

      const matchesJobType =
        jobTypes.length === 0 ||
        jobTypes.includes(job.job_type);

      const matchesExperience =
        experienceLevels.length === 0 ||
        experienceLevels.includes(job.exp_required);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesJobType &&
        matchesExperience
      );

    })
    .sort((a, b) => {

      switch (sortBy) {

        case "latest":
          return (
            new Date(b.created_at) -
            new Date(a.created_at)
          );

        case "oldest":
          return (
            new Date(a.created_at) -
            new Date(b.created_at)
          );

        case "company":
          return (a.company_name || "")
            .toLowerCase()
            .localeCompare(
              (b.company_name || "").toLowerCase()
            );

        case "salary-high":
          return (
            parseInt(
              String(b.salary).replace(/\D/g, "")
            ) -
            parseInt(
              String(a.salary).replace(/\D/g, "")
            )
          );

        case "salary-low":
          return (
            parseInt(
              String(a.salary).replace(/\D/g, "")
            ) -
            parseInt(
              String(b.salary).replace(/\D/g, "")
            )
          );

        default:
          return 0;

      }

    });

  if (loading) {
    return (
      <div className="jobs-loader">
        <Ripple
          color="#35b0a7"
          size="medium"
          text="Loading jobs..."
          textColor="#666"
        />
      </div>
    );
  }

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
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <div className="filter-section">
            <h4>Location</h4>

            <select
              value={selectedLocation}
              onChange={(e) =>
                setSelectedLocation(e.target.value)
              }
            >
              <option value="">
                All Cities
              </option>

              {[...new Set(jobs.map(job => job.location_job))]
                .map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </div>

          <div className="filter-section">
            <h4>Job Type</h4>

            <label>
              <input
                type="checkbox"
                checked={jobTypes.includes("Full Time")}
                onChange={() =>
                  handleJobTypeChange("Full Time")
                }
              />
              Full Time
            </label>
            <label>
              <input
                type="checkbox"
                checked={jobTypes.includes("Part Time")}
                onChange={() =>
                  handleJobTypeChange("Part Time")
                }
              />
              Part Time
            </label>
            <label>
              <input
                type="checkbox"
                checked={jobTypes.includes("Internship")}
                onChange={() =>
                  handleJobTypeChange("Internship")
                }
              />
              Internship
            </label>
            <label>
              <input
                type="checkbox"
                checked={jobTypes.includes("Freelance")}
                onChange={() =>
                  handleJobTypeChange("Freelance")
                }
              />
              Freelance
            </label>
          </div>

          <div className="filter-section">
            <h4>Experience Level</h4>

            <label>
              <input
                type="checkbox"
                checked={experienceLevels.includes("Fresher")}
                onChange={() =>
                  handleExperienceChange("Fresher")
                }
              />
              Fresher
            </label>
            <label>
              <input
                type="checkbox"
                checked={experienceLevels.includes("Intermediate")}
                onChange={() =>
                  handleExperienceChange("Intermediate")
                }
              />
              Intermediate
            </label>
            <label>
              <input
                type="checkbox"
                checked={experienceLevels.includes("Expert")}
                onChange={() =>
                  handleExperienceChange("Expert")
                }
              />
              Expert
            </label>
          </div>

        </aside>

        {/* RIGHT */}
        <div className="jobs-content">

          <div className="jobs-topbar">

            <p>
              Showing {filteredJobs.length} jobs
            </p>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >
              <option value="latest">
                Latest First
              </option>

              <option value="oldest">
                Oldest First
              </option>

              <option value="company">
                Company Name A-Z
              </option>

              <option value="salary-high">
                Salary High-Low
              </option>

              <option value="salary-low">
                Salary Low-High
              </option>
            </select>

          </div>

          {/* JOBS */}

          <div className="jobs-list">

            {filteredJobs.map((job) => (

              <div className="job-card" key={job.id}>

                <div className="job-top">
                  <span className="job-time">
                    New
                  </span>
                </div>

                <div className="job-middle">

                  <div className="job-info">

                    <img
                      src={
                        job.logo_url ||
                        "https://cdn-icons-png.flaticon.com/512/5969/5969120.png"
                      }
                      alt={job.company_name}
                      className="job-logo"
                    />

                    <div>
                      <h3>{job.role}</h3>
                      <h5 className="comp_name">{job.company_name}</h5>
                      <p>
                        {
                          job.description_job?.length > 180
                            ? `${job.description_job.slice(0, 180)}...`
                            : job.description_job
                        }
                      </p>
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