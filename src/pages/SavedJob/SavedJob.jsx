import React, { useEffect, useState } from "react";
import "./SavedJob.css";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import { getSavedJobs, removeSavedJob } from "../../api/savedJobApi";
import { Riple } from "react-loading-indicators";


const SavedJobs = () => {

    const navigate =
        useNavigate();

    const profile =
        useUserStore(
            (state) => state.profile
        );

    const [savedJobs, setSavedJobs] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [filter, setFilter] =
        useState("All");

    useEffect(() => {


        if (profile?.user_student_id) {
            fetchSavedJobs();
        } else {
            setLoading(false);
        }

    }, [profile]);

    const fetchSavedJobs =
        async () => {

            try {

                const data =
                    await getSavedJobs(
                        profile.user_student_id
                    );

                setSavedJobs(
                    data.jobs || []
                );

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

    const handleRemove =
        async (jobId) => {

            try {

                await removeSavedJob(
                    profile.user_student_id,
                    jobId
                );

                setSavedJobs(
                    (prev) =>
                        prev.filter(
                            (job) =>
                                job.id !==
                                jobId
                        )
                );

            } catch (error) {

                console.error(error);

            }

        };

    const filteredJobs =
        savedJobs.filter(
            (job) => {

                const matchesSearch =
                    job.role
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const matchesFilter =
                    filter === "All" ||
                    job.work_mode === filter ||
                    job.job_type === filter;

                return (
                    matchesSearch &&
                    matchesFilter
                );

            }
        );

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

    return (
        <div className="saved-jobs-page">

            <section className="saved-jobs-hero">

                <h1>
                    Saved Jobs
                </h1>

                <p>
                    Keep track of opportunities you're interested in.
                </p>

            </section>

            <div className="saved-jobs-container">

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>
                            {savedJobs.length}
                        </h2>
                        <p>
                            Saved Jobs
                        </p>
                    </div>

                </div>

                <div className="filter-bar">

                    <input
                        type="text"
                        placeholder="Search Jobs..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    <select
                        value={filter}
                        onChange={(e) =>
                            setFilter(
                                e.target.value
                            )
                        }
                    >
                        <option>
                            All
                        </option>

                        <option>
                            Remote
                        </option>

                        <option>
                            Internship
                        </option>

                        <option>
                            Full Time
                        </option>

                    </select>

                </div>

                {filteredJobs.length === 0 ? (

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
                            onClick={() =>
                                navigate("/jobs")
                            }
                        >
                            Browse Jobs
                        </button>

                    </div>

                ) : (

                    <>

                        <div className="jobs-count">

                            <h3>
                                {
                                    filteredJobs.length
                                }
                                {" "}
                                Saved Jobs
                            </h3>

                        </div>

                        <div className="saved-jobs-grid">

                            {
                                filteredJobs.map(
                                    (job) => (

                                        <div
                                            key={job.id}
                                            className="saved-job-card"
                                        >

                                            <div className="job-header">

                                                <img
                                                    src={
                                                        job.logo_url ||
                                                        "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                                                    }
                                                    alt={job.company_name}
                                                    className="company-logo"
                                                />

                                                <div>

                                                    <h3>
                                                        {job.role}
                                                    </h3>

                                                    <p className="company-name">
                                                        {
                                                            job.company_name ||
                                                            "Company"
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="job-details">

                                                <p>
                                                    {
                                                        job.location_job
                                                    }
                                                    {" • "}
                                                    {
                                                        job.job_type
                                                    }
                                                </p>

                                                <h4>
                                                    {
                                                        job.salary
                                                    }
                                                </h4>

                                            </div>

                                            <div className="saved-badge">
                                                Saved
                                            </div>

                                            <p className="saved-date">

                                                Saved:

                                                {" "}

                                                {
                                                    new Date(
                                                        job.saved_at
                                                    ).toLocaleDateString()
                                                }

                                            </p>

                                            <div className="job-actions">

                                                <button
                                                    className="primary-btn"
                                                    onClick={() =>
                                                        navigate(
                                                            `/jobdetail/${job.id}`
                                                        )
                                                    }
                                                >
                                                    View Job
                                                </button>

                                                <button
                                                    className="remove-btn"
                                                    onClick={() =>
                                                        handleRemove(
                                                            job.id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>

                                            </div>

                                        </div>

                                    )
                                )
                            }

                        </div>

                    </>

                )}

            </div>

        </div>
    );
};

export default SavedJobs;