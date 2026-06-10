import React, { useState } from "react";
import "./EditJob.css";

const EditJob = () => {

    const [formData, setFormData] = useState({
        title: "Frontend Developer",
        company: "Google",
        website: "https://google.com",
        location: "Delhi",
        type: "Full Time",
        workMode: "Remote",
        salary: "₹8 LPA",
        experience: "1-3 Years",
        openings: 3,
        applicants: 32,
        description:
            "We are looking for a React developer to build modern user interfaces and collaborate with our engineering team.",
        skills: "React, Node.js, MongoDB",
        responsibilities:
            "Build frontend components\nCollaborate with backend team\nWrite clean code",
        deadline: "2026-06-30",
        status: "Active"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        console.log(formData);

        // API Call Later
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
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Company Name</label>

                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Company Website</label>

                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Location</label>

                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />

                        </div>

                        <div className="input-group">

                            <label>Job Type</label>

                            <select
                                name="type"
                                value={formData.type}
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
                                name="workMode"
                                value={formData.workMode}
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
                                name="experience"
                                value={formData.experience}
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
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <label>Required Skills</label>

                        <input
                            type="text"
                            name="skills"
                            placeholder="React, Node.js, MongoDB"
                            value={formData.skills}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-group">

                        <label>Responsibilities</label>

                        <textarea
                            rows="5"
                            name="responsibilities"
                            value={formData.responsibilities}
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
                        >
                            Close Job
                        </button>

                        <button
                            type="button"
                            className="delete-btn"
                        >
                            Delete Job
                        </button>

                    </div>

                </div>

                {/* PREVIEW */}

                <div className="preview-card">

                    <h3>{formData.title}</h3>

                    <p className="company">
                        {formData.company}
                    </p>

                    <p className="company-website">
                        {formData.website}
                    </p>

                    <p>
                        {formData.location}
                        {" • "}
                        {formData.type}
                        {" • "}
                        {formData.workMode}
                    </p>

                    <h4>{formData.salary}</h4>
                    <p className="preview-experience">
                        Experience: {formData.experience}
                    </p>

                    <span className="status-pill">
                        {formData.status}
                    </span>
                    <p className="preview-description">
                        {formData.description}
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