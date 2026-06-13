import React, { useEffect, useState } from "react";
import "./ViewApplicants.css";
import { useNavigate, useParams } from "react-router-dom";
import { getApplicantsByJob } from "../../api/jobApi";
import { updateApplicationStatus } from "../../api/applicationApi";
import { Riple } from "react-loading-indicators";

const ViewApplicants = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (jobId) {
            fetchApplicants();
        }
    }, [jobId]);

    const fetchApplicants = async () => {
        try {
            const data =
                await getApplicantsByJob(jobId);


            setApplicants(
                data.applicants || []
            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    const totalApplicants =
        applicants.length;

    const pendingApplicants =
        applicants.filter(
            (app) =>
                app.status?.toLowerCase() ===
                "pending"
        ).length;

    const shortlistedApplicants =
        applicants.filter(
            (app) =>
                app.status?.toLowerCase() ===
                "shortlisted"
        ).length;

    const acceptedApplicants =
        applicants.filter(
            (app) =>
                app.status?.toLowerCase() ===
                "accepted"
        ).length;

    const filteredApplicants =
        applicants.filter(
            (applicant) => {

                const matchesSearch =
                    applicant.name
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const matchesStatus =
                    statusFilter === "All" ||
                    applicant.status
                        ?.toLowerCase() ===
                    statusFilter.toLowerCase();

                return (
                    matchesSearch &&
                    matchesStatus
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

    const handleAccept = async (
        applicationId
    ) => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Accepted"
            );

            fetchApplicants();

        } catch (error) {

            console.error(error);

        }

    };

    const handleReject = async (
        applicationId
    ) => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Rejected"
            );

            fetchApplicants();

        } catch (error) {

            console.error(error);

        }

    };

    const handleShortlist = async (
        applicationId
    ) => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Shortlisted"
            );

            fetchApplicants();

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <div className="view-applicants-page">

            <section className="applicants-hero">

                <h1>Applicants</h1>

                <h3>
                    {totalApplicants} Applicants
                </h3>

                <p>
                    Review and manage
                    candidates for this job.
                </p>

            </section>

            <div className="applicants-container">

                {/* Stats */}

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>
                            {totalApplicants}
                        </h2>
                        <p>
                            Total Applicants
                        </p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {pendingApplicants}
                        </h2>
                        <p>Pending</p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {shortlistedApplicants}
                        </h2>
                        <p>Shortlisted</p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {acceptedApplicants}
                        </h2>
                        <p>Accepted</p>
                    </div>

                </div>

                {/* Filters */}

                <div className="filter-bar">

                    <input
                        type="text"
                        placeholder="Search applicants..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(
                                e.target.value
                            )
                        }
                    >
                        <option>
                            All
                        </option>
                        <option>
                            Pending
                        </option>
                        <option>
                            Shortlisted
                        </option>
                        <option>
                            Accepted
                        </option>
                        <option>
                            Rejected
                        </option>
                    </select>

                </div>

                {/* Applicants */}

                {filteredApplicants.length === 0 ? (

                    <div className="empty-state">

                        <h2>
                            No Applicants Found
                        </h2>

                        <p>
                            Try changing your
                            search or filter.
                        </p>

                    </div>

                ) : (

                    <div className="applicants-grid">

                        {filteredApplicants.map(
                            (applicant) => (

                                <div
                                    key={
                                        applicant.application_id
                                    }
                                    className="applicant-card"
                                >

                                    <h3>
                                        {applicant.name}
                                    </h3>

                                    <p className="role">
                                        {
                                            applicant.headline ||
                                            "Student"
                                        }
                                    </p>

                                    <p>
                                        📧{" "}
                                        {
                                            applicant.email
                                        }
                                    </p>

                                    <p>
                                        📍{" "}
                                        {
                                            applicant.city ||
                                            "Not Provided"
                                        }
                                    </p>

                                    <p>
                                        🎓{" "}
                                        {
                                            applicant.college ||
                                            "Not Provided"
                                        }
                                    </p>

                                    <p className="applied-date">
                                        Applied:
                                        {" "}
                                        {new Date(
                                            applicant.created_at
                                        ).toLocaleDateString()}
                                    </p>

                                    <span
                                        className={`status-badge ${applicant.status.toLowerCase()}`}
                                    >
                                        {
                                            applicant.status
                                        }
                                    </span>

                                    <div className="applicant-actions">

                                        <button
                                            className="secondary-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/student/${applicant.student_id}`,
                                                    {
                                                        state: {
                                                            applicationId:
                                                                applicant.application_id,
                                                            status:
                                                                applicant.status
                                                        }
                                                    }
                                                )
                                            }
                                        >
                                            View Profile
                                        </button>


                                        {applicant.resume_url && (
                                            <a
                                                href={
                                                    applicant.resume_url
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="secondary-btn"
                                            >
                                                Resume
                                            </a>
                                        )}

                                        {applicant.status?.toLowerCase() === "pending" && (
                                            <>
                                                <button
                                                    className="secondary-btn"
                                                    onClick={() =>
                                                        handleShortlist(applicant.application_id)
                                                    }
                                                >
                                                    Shortlist
                                                </button>

                                                <button
                                                    className="primary-btn"
                                                    onClick={() =>
                                                        handleAccept(applicant.application_id)
                                                    }
                                                >
                                                    Accept
                                                </button>

                                                <button
                                                    className="danger-btn"
                                                    onClick={() =>
                                                        handleReject(applicant.application_id)
                                                    }
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                )}

            </div>

        </div>
    );
};

export default ViewApplicants;