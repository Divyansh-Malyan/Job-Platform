import React, { useState } from "react";
import "./ManageJobs.css";
import { data, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRecruiterJobs, closeJob, deleteJob } from "../../api/jobApi";
import useUserStore from "../../store/userStore";
import { Ripple } from "react-loading-indicators";

const ManageJobs = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useUserStore();

    const totalJobs = jobs.length;

    const activeJobs = jobs.filter(
        (job) => job.status === "Active"
    ).length;

    const closedJobs = jobs.filter(
        (job) => job.status === "Closed"
    ).length;

    const totalApplicants = jobs.reduce(
        (total, job) => total + Number(job.applicants || 0),
        0
    );

    const filteredJobs = jobs.filter(
        (job) =>
            job.role
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    useEffect(() => {
        if (user?.id) {
            fetchJobs();
        }
    }, [user]);

    const fetchJobs = async () => {
        try {

            const data = await getRecruiterJobs(
                user.id
            );

            setJobs(data.jobs || []);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

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

    const handleCloseJob = async (jobId) => {
        try {
            await closeJob(jobId);

            setJobs((prevJobs) =>
                prevJobs.map((job) =>
                    job.id === jobId
                        ? { ...job, status: "Closed" }
                        : job
                )
            );

            toast.success("Job Closed");

        } catch (error) {
            console.error(error);
            toast.error("Failed To Close Job");
        }
    };

    const handleDeleteJob = async (jobId) => {
        try {
            await deleteJob(jobId);

            setJobs((prevJobs) =>
                prevJobs.filter((job) => job.id !== jobId)
            );

            toast.success("Job Deleted");

        } catch (error) {
            toast.error("Failed To Delete Job");
        }
    };


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

                                <h3>{job.role}</h3>

                                <p className="job-meta">
                                    {job.company_name} • {job.location_job} • {job.job_type} • {job.salary}
                                </p>

                                <div className="job-details">

                                    <p>
                                        <strong>Posted:</strong>{" "}
                                        {new Date(job.created_at).toLocaleDateString()}
                                    </p>

                                    <p className="applicant-count">
                                        👥 {job.applicants || 0} Applicants
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
                                        disabled={job.status === "Closed"}
                                        onClick={() => handleCloseJob(job.id)}
                                    >
                                        Close Job
                                    </button>

                                    <button
                                        className="danger-btn"
                                        onClick={() => handleDeleteJob(job.id)}
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