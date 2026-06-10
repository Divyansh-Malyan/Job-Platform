import React, { useState } from "react";
import "./ViewApplicants.css";
import { useNavigate } from "react-router-dom";

const ViewApplicants = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const applicants = [
        {
            id: 1,
            name: "Rahul Sharma",
            role: "Frontend Developer",
            location: "Delhi, India",
            appliedDate: "12 Jun 2026",
            status: "Pending",
            skills: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            name: "Priya Singh",
            role: "UI Designer",
            location: "Bangalore, India",
            appliedDate: "10 Jun 2026",
            status: "Reviewed",
            skills: ["Figma", "Adobe XD"]
        },
        {
            id: 3,
            name: "Aman Verma",
            role: "Backend Developer",
            location: "Pune, India",
            appliedDate: "08 Jun 2026",
            status: "Accepted",
            skills: ["Java", "Spring Boot", "MySQL"]
        }
    ];

    const totalApplicants = applicants.length;

    const pendingApplicants = applicants.filter(
        app => app.status === "Pending"
    ).length;

    const reviewedApplicants = applicants.filter(
        app => app.status === "Reviewed"
    ).length;

    const acceptedApplicants = applicants.filter(
        app => app.status === "Accepted"
    ).length;

    const filteredApplicants = applicants.filter(
        (applicant) => {

            const matchesSearch =
                applicant.name
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||
                applicant.status === statusFilter;

            return matchesSearch && matchesStatus;
        }
    );

    return (
        <div className="view-applicants-page">

            <section className="applicants-hero">

                <h1>Frontend Developer</h1>

                <h3>{totalApplicants} Applicants</h3>

                <p>
                    Review and manage candidates for this job.
                </p>

            </section>

            <div className="applicants-container">

                {/* STATS */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>{totalApplicants}</h2>
                        <p>Total Applicants</p>
                    </div>

                    <div className="stat-card">
                        <h2>{pendingApplicants}</h2>
                        <p>Pending</p>
                    </div>

                    <div className="stat-card">
                        <h2>{reviewedApplicants}</h2>
                        <p>Reviewed</p>
                    </div>

                    <div className="stat-card">
                        <h2>{acceptedApplicants}</h2>
                        <p>Accepted</p>
                    </div>

                </div>

                {/* FILTERS */}

                <div className="filter-bar">

                    <input
                        type="text"
                        placeholder="Search applicants..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(e.target.value)
                        }
                    >
                        <option>All</option>
                        <option>Pending</option>
                        <option>Reviewed</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>

                </div>

                {/* APPLICANTS */}

                {
                    filteredApplicants.length === 0 ? (

                        <div className="empty-state">

                            <h2>No Applicants Found</h2>

                            <p>
                                Try changing your search or filter.
                            </p>

                        </div>

                    ) : (

                        <div className="applicants-grid">

                            {filteredApplicants.map((applicant) => (

                                <div
                                    key={applicant.id}
                                    className="applicant-card"
                                >

                                    <h3>{applicant.name}</h3>

                                    <p className="role">
                                        {applicant.role}
                                    </p>

                                    <p className="location">
                                        📍 {applicant.location}
                                    </p>

                                    <p className="applied-date">
                                        Applied: {applicant.appliedDate}
                                    </p>

                                    <div className="skills-container">

                                        {applicant.skills.map(
                                            (skill, index) => (

                                                <span
                                                    key={index}
                                                    className="skill-tag"
                                                >
                                                    {skill}
                                                </span>

                                            )
                                        )}

                                    </div>

                                    <span
                                        className={`status-badge ${applicant.status.toLowerCase()}`}
                                    >
                                        {applicant.status}
                                    </span>

                                    <div className="applicant-actions">

                                        <button
                                            className="secondary-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/student/${applicant.id}`
                                                )
                                            }
                                        >
                                            View Profile
                                        </button>

                                        <button
                                            className="secondary-btn"
                                        >
                                            Resume
                                        </button>

                                        <button
                                            className="primary-btn"
                                            disabled={
                                                applicant.status === "Accepted"
                                            }
                                        >
                                            Accept
                                        </button>

                                        <button
                                            className="danger-btn"
                                            disabled={
                                                applicant.status === "Rejected"
                                            }
                                        >
                                            Reject
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )
                }

            </div>

        </div>
    );
};

export default ViewApplicants;