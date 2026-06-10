import React from "react";
import "./SavedJob.css";
import { useNavigate } from "react-router-dom";

const SavedJobs = () => {

    const navigate = useNavigate();

    const savedJobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Google",
            logo: "https://via.placeholder.com/60",
            location: "Remote",
            type: "Internship",
            salary: "₹30,000/month",
            savedDate: "2 days ago"
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "Microsoft",
            logo: "https://via.placeholder.com/60",
            location: "Bangalore",
            type: "Full Time",
            salary: "₹10 LPA",
            savedDate: "Yesterday"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Adobe",
            logo: "https://via.placeholder.com/60",
            location: "Remote",
            type: "Full Time",
            salary: "₹9 LPA",
            savedDate: "4 days ago"
        }
    ];

    return (
        <div className="saved-jobs-page">

            {/* HERO */}

            <section className="saved-jobs-hero">

                <h1>Saved Jobs</h1>

                <p>
                    Keep track of opportunities you're interested in.
                </p>

            </section>

            <div className="saved-jobs-container">

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>24</h2>
                        <p>Saved Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>8</h2>
                        <p>Applied Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>4</h2>
                        <p>Expired Jobs</p>
                    </div>


                </div>

                {/* SEARCH + FILTER */}

                <div className="filter-bar">

                    <input
                        type="text"
                        placeholder="Search Jobs..."
                        className="search-box"
                    />

                    <select>
                        <option>All</option>
                        <option>Remote</option>
                        <option>Internship</option>
                        <option>Full Time</option>
                    </select>

                </div>

                {/* JOBS */}

                {
                    savedJobs.length === 0 ? (

                        <div className="empty-state">

                            <div className="empty-icon">
                                💼
                            </div>

                            <h2>
                                No Saved Jobs Yet
                            </h2>

                            <p>
                                Start saving jobs to view them later.
                            </p>

                            <button
                                className="primary-btn"
                                onClick={() => navigate("/jobs")}
                            >
                                Browse Jobs
                            </button>

                        </div>

                    ) : (

                        <>

                            <div className="jobs-count">

                                <h3>
                                    {savedJobs.length} Saved Jobs
                                </h3>

                            </div>

                            <div className="saved-jobs-grid">

                                {savedJobs.map((job) => (

                                    <div
                                        key={job.id}
                                        className="saved-job-card"
                                    >

                                        <div className="job-header">

                                            <img
                                                src={job.logo}
                                                alt={job.company}
                                                className="company-logo"
                                            />

                                            <div>

                                                <h3>{job.title}</h3>

                                                <p className="company-name">
                                                    {job.company}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="job-details">

                                            <p>
                                                {job.location} • {job.type}
                                            </p>

                                            <h4>
                                                {job.salary}
                                            </h4>

                                        </div>

                                        <div className="saved-badge">
                                            Saved
                                        </div>

                                        <p className="saved-date">
                                            Saved: {job.savedDate}
                                        </p>

                                        <div className="job-actions">

                                            <button
                                                className="primary-btn"
                                                onClick={() =>
                                                    navigate(`/jobs/${job.id}`)
                                                }
                                            >
                                                View Job
                                            </button>

                                            <button
                                                className="secondary-btn"
                                                onClick={() =>
                                                    navigate(`/jobs/${job.id}`)
                                                }
                                            >
                                                Apply
                                            </button>

                                            <button className="remove-btn">
                                                Remove
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </>

                    )
                }

            </div>

        </div>
    );
};

export default SavedJobs;