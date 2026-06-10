import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyApplication.css";

const MyApplications = () => {

    const [search, setSearch] = useState("");

    const applications = [
        {
            id: 1,
            job_id: 101,
            title: "Frontend Developer",
            company: "Google",
            logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
            location: "Delhi",
            type: "Full Time",
            salary: "₹8 LPA",
            appliedDate: "12 Jun 2026",
            status: "Pending",
        },
        {
            id: 2,
            job_id: 102,
            title: "React Developer",
            company: "Microsoft",
            logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            location: "Bangalore",
            type: "Internship",
            salary: "₹6 LPA",
            appliedDate: "10 Jun 2026",
            status: "Reviewed",
        },
        {
            id: 3,
            job_id: 103,
            title: "UI Designer",
            company: "Adobe",
            logo: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
            location: "Remote",
            type: "Full Time",
            salary: "₹7 LPA",
            appliedDate: "08 Jun 2026",
            status: "Rejected",
        },
    ];

    const filteredApplications = applications.filter(
        (app) =>
            app.title.toLowerCase().includes(search.toLowerCase()) ||
            app.company.toLowerCase().includes(search.toLowerCase())
    );

    const totalApplications = applications.length;

    const pendingApplications = applications.filter(
        app => app.status === "Pending"
    ).length;

    const reviewedApplications = applications.filter(
        app => app.status === "Reviewed"
    ).length;

    const rejectedApplications = applications.filter(
        app => app.status === "Rejected"
    ).length;

    return (
        <div className="applications-page">

            <section className="applications-hero">
                <h1>My Applications</h1>
                <p>Track all jobs you've applied to</p>
            </section>

            <div className="applications-container">

                {/* Activity Banner */}

                {pendingApplications > 0 && (
                    <div className="activity-banner">
                        You have {pendingApplications} pending application{pendingApplications > 1 ? "s" : ""} awaiting review.
                    </div>
                )}

                {/* Stats */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>{totalApplications}</h2>
                        <span>Total Applications</span>
                    </div>

                    <div className="stat-card">
                        <h2>{pendingApplications}</h2>
                        <span>Pending</span>
                    </div>

                    <div className="stat-card">
                        <h2>{reviewedApplications}</h2>
                        <span>Reviewed</span>
                    </div>

                    <div className="stat-card">
                        <h2>{rejectedApplications}</h2>
                        <span>Rejected</span>
                    </div>

                </div>

                {/* Search */}

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search applications..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Applications */}

                {/* Applications */}

                {
                    applications.length === 0 ? (

                        <div className="empty-state">

                            <div className="empty-icon">
                                📄
                            </div>

                            <h2>No Applications Yet</h2>

                            <p>
                                Start exploring opportunities and apply for jobs.
                            </p>

                            <Link
                                to="/jobs"
                                className="browse-btn"
                            >
                                Browse Jobs
                            </Link>

                        </div>

                    ) : filteredApplications.length === 0 ? (

                        <div className="empty-state">

                            <div className="empty-icon">
                                🔍
                            </div>

                            <h2>No Matching Applications</h2>

                            <p>
                                Try searching with another keyword.
                            </p>

                        </div>

                    ) : (

                        <div className="applications-list">

                            {filteredApplications.map((job) => (

                                <div
                                    className="application-card"
                                    key={job.id}
                                >

                                    <div className="application-left">

                                        <div className="application-header">

                                            <img
                                                src={job.logo}
                                                alt={job.company}
                                                className="company-logo"
                                            />

                                            <div>

                                                <h3>{job.title}</h3>

                                                <p className="company">
                                                    {job.company}
                                                </p>

                                            </div>

                                        </div>

                                        <div className="job-meta">

                                            <span>{job.location}</span>

                                            <span>{job.type}</span>

                                            <span>{job.salary}</span>

                                        </div>

                                        <div className="application-info">

                                            <p>
                                                Applied on:
                                                <strong> {job.appliedDate}</strong>
                                            </p>

                                            <div
                                                className={`status ${job.status.toLowerCase()}`}
                                            >
                                                {job.status}
                                            </div>

                                        </div>

                                    </div>

                                    <div className="application-actions">

                                        <Link
                                            to={`/jobdetail/${job.job_id}`}
                                            className="view-job-btn"
                                        >
                                            View Job
                                        </Link>

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

export default MyApplications;