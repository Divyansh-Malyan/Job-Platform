import React, { useState } from "react";
import "./EditJob.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getJobById, updateJob, closeJob, deleteJob } from "../../api/jobApi";
import toast from "react-hot-toast";


const EditJob = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        role: "",
        location_job: "",
        job_type: "Full Time",
        work_mode: "Remote",
        salary: "",
        exp_required: "",
        openings: 1,
        description_job: "",
        skills_required: "",
        deadline: "",
        status: "Draft"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        try {

            await updateJob(id, formData);

            toast.success(
                "Job Updated Successfully"
            );

            navigate("/manage-jobs");

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed To Update Job"
            );

        }
    };

    useEffect(() => {
        fetchJob();
    }, []);

    const fetchJob = async () => {
        try {

            const data = await getJobById(id);

            const job = data.job;

            setFormData({
                role: job.role || "",
                location_job: job.location_job || "",
                job_type: job.job_type || "",
                work_mode: job.work_mode || "",
                salary: job.salary || "",
                exp_required: job.exp_required || "",
                openings: job.openings || 1,
                description_job:
                    job.description_job || "",
                skills_required:
                    job.skills_required || "",
                deadline:
                    job.deadline
                        ?.split("T")[0] || "",
                status: job.status || "Draft",
            });

        } catch (error) {

            console.error(error);

        }
    };

    const handleCloseJob = async () => {
        try {

            await closeJob(id);

            toast.success("Job Closed");

            navigate("/manage-jobs");

        } catch (error) {

            console.error(error);

            toast.error("Failed To Close Job");

        }
    };

    const handleDeleteJob = async () => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        try {

            await deleteJob(id);

            toast.success("Job Deleted");

            navigate("/manage-jobs");

        } catch (error) {

            console.error(error);

            toast.error("Failed To Delete Job");

        }
    };

    return (
        <div className="edit-job-page">

            {/* HERO */}

            <section className="edit-job-hero">

                <h1>Edit Job</h1>

                <p>
                    Update job details and requirements.
                </p>

                <span>
                    Last Updated: 12 June 2026
                </span>

            </section>

            {/* MAIN */}

            <div className="edit-job-container">

                {/* FORM */}

                <div className="edit-job-card">

                    <h2>Job Information</h2>

                    <div className="form-grid">

                        <div className="input-group">

                            <label>Job Title</label>

                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                            />

                        </div>


                        <div className="input-group">

                            <label>Location</label>

                            <input
                                type="text"
                                name="location_job"
                                value={formData.location_job}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Job Type</label>

                            <select
                                name="job_type"
                                value={formData.job_type}
                                onChange={handleChange}
                            >
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Internship</option>
                                <option>Contract</option>
                                <option>Freelance</option>
                            </select>

                        </div>

                        <div className="input-group">

                            <label>Work Mode</label>

                            <select
                                name="work_mode"
                                value={formData.work_mode}
                                onChange={handleChange}
                            >
                                <option>Remote</option>
                                <option>Hybrid</option>
                                <option>On Site</option>
                            </select>

                        </div>

                        <div className="input-group">

                            <label>Salary</label>

                            <input
                                type="text"
                                name="salary"
                                value={formData.salary}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Experience Required</label>

                            <select
                                name="exp_required"
                                value={formData.exp_required}
                                onChange={handleChange}
                            >
                                <option>Fresher</option>
                                <option>0-1 Years</option>
                                <option>1-3 Years</option>
                                <option>3-5 Years</option>
                                <option>5+ Years</option>
                            </select>

                        </div>

                        <div className="input-group">

                            <label>Open Positions</label>

                            <input
                                type="number"
                                min="1"
                                name="openings"
                                value={formData.openings}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    <div className="input-group">

                        <label>Job Description</label>

                        <textarea
                            rows="6"
                            name="description_job"
                            value={formData.description_job}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <label>Required Skills</label>

                        <input
                            type="text"
                            name="skills_required"
                            placeholder="React, Node.js, MongoDB"
                            value={formData.skills_required}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-grid">

                        <div className="input-group">

                            <label>Application Deadline</label>

                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Status</label>

                            <select
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option>Active</option>
                                <option>Draft</option>
                                <option>Closed</option>
                            </select>

                        </div>

                    </div>

                    <div className="action-buttons">

                        <button
                            type="button"
                            className="save-btn"
                            onClick={handleSave}
                        >
                            Save Changes
                        </button>

                        <button
                            type="button"
                            className="close-btn"
                            onClick={handleCloseJob}
                        >
                            Close Job
                        </button>

                        <button
                            type="button"
                            className="delete-btn"
                            onClick={handleDeleteJob}
                        >
                            Delete Job
                        </button>

                    </div>

                </div>

                {/* PREVIEW */}

                <div className="preview-card">

                    <h3>{formData.role}</h3>

                    <p className="company">
                        {formData.company}
                    </p>

                    <p className="company-website">
                        {formData.website}
                    </p>

                    <p>
                        {formData.location_job}
                        {" • "}
                        {formData.job_type}
                        {" • "}
                        {formData.work_mode}
                    </p>

                    <h4>{formData.salary}</h4>
                    <p className="preview-experience">
                        Experience: {formData.exp_required}
                    </p>

                    <span className="status-pill">
                        {formData.status}
                    </span>
                    <p className="preview-description">
                        {formData.description_job}
                    </p>

                    <div className="preview-info">

                        <div>

                            <small>Applicants</small>

                            <h5>{formData.applicants}</h5>

                        </div>

                        <div>

                            <small>Openings</small>

                            <h5>{formData.openings}</h5>

                        </div>

                        <div>

                            <small>Deadline</small>

                            <h5>
                                {new Date(formData.deadline).toLocaleDateString()}
                            </h5>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default EditJob;