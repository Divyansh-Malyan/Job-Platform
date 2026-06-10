import React, { useState } from "react";
import "./ManageJobs.css";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            location: "Delhi",
            type: "Full Time",
            salary: "₹8 LPA",
            applicants: 32,
            status: "Active",
            postedDate: "12 Jun 2026"
        },
        {
            id: 2,
            title: "Backend Developer",
            location: "Bangalore",
            type: "Full Time",
            salary: "₹10 LPA",
            applicants: 18,
            status: "Closed",
            postedDate: "08 Jun 2026"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            location: "Remote",
            type: "Contract",
            salary: "₹6 LPA",
            applicants: 24,
            status: "Draft",
            postedDate: "05 Jun 2026"
        }
    ];

    const totalJobs = jobs.length;

    const activeJobs = jobs.filter(
        (job) => job.status === "Active"
    ).length;

    const closedJobs = jobs.filter(
        (job) => job.status === "Closed"
    ).length;

    const totalApplicants = jobs.reduce(
        (total, job) => total + job.applicants,
        0
    );

    const filteredJobs = jobs.filter(
        (job) =>
            job.title
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    return (
        <div className="manage-jobs-page">

            {/* HERO */}

            <section className="manage-jobs-hero">

                <h1>Manage Jobs</h1>

                <p>
                    View, edit and track all your job postings.
                </p>

                <button
                    className="primary-btn"
                    onClick={() => navigate("/recruiterpost")}
                >
                    + Post New Job
                </button>

            </section>

            <div className="manage-jobs-container">

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>{totalJobs}</h2>
                        <p>Total Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>{activeJobs}</h2>
                        <p>Active Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>{closedJobs}</h2>
                        <p>Closed Jobs</p>
                    </div>

                    <div className="stat-card">
                        <h2>{totalApplicants}</h2>
                        <p>Total Applicants</p>
                    </div>

                </div>

                {/* FILTERS */}

                <div className="filter-bar">

                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <select>
                        <option>All</option>
                        <option>Active</option>
                        <option>Closed</option>
                        <option>Draft</option>
                    </select>

                    <select>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Most Applicants</option>
                    </select>

                </div>

                {/* EMPTY STATE */}

                {filteredJobs.length === 0 ? (

                    <div className="empty-state">

                        <div className="empty-icon">
                            📄
                        </div>

                        <h2>No Jobs Found</h2>

                        <p>
                            Try another search or create a new job.
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

                        {filteredJobs.map((job) => (

                            <div
                                key={job.id}
                                className="job-manage-card"
                            >

                                <h3>{job.title}</h3>

                                <p className="job-meta">
                                    {job.location} • {job.type} • {job.salary}
                                </p>

                                <div className="job-details">

                                    <p>
                                        <strong>Posted:</strong>{" "}
                                        {job.postedDate}
                                    </p>

                                    <p className="applicant-count">
                                        👥 {job.applicants} Applicants
                                    </p>

                                </div>

                                <span
                                    className={`job-status ${job.status.toLowerCase()}`}
                                >
                                    {job.status}
                                </span>

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

                                    <button
                                        className="secondary-btn"
                                        disabled={
                                            job.status === "Closed"
                                        }
                                    >
                                        Close Job
                                    </button>

                                    <button
                                        className="danger-btn"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default ManageJobs;