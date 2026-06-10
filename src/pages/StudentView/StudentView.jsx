import React from "react";
import "./StudentView.css";
import ProfilePic from "../../assets/profile.jpg";

const StudentView = () => {

    return (
        <div className="student-view-page">

            {/* HERO */}

            <section className="student-view-hero">

                <img
                    src={ProfilePic}
                    alt="Profile"
                    className="student-view-image"
                />

                <h1>Rahul Sharma</h1>

                <h3>Frontend Developer</h3>

                <p>📍 Delhi, India</p>

                <span className="open-to-work-badge">
                    Open To Work
                </span>

                <div className="recruiter-actions">

                    <button className="download-btn">
                        Download Resume
                    </button>

                    <button className="accept-btn">
                        Accept
                    </button>

                    <button className="shortlist-btn">
                        Shortlist
                    </button>

                    <button className="reject-btn">
                        Reject
                    </button>
                </div>
                <div className="candidate-status">

                    <h4>Application Status</h4>

                    <span className="status-badge">
                        Pending Review
                    </span>

                    <p className="applied-date">
                        Applied on 12 June 2026
                    </p>

                </div>


            </section>

            <div className="student-view-container">

                {/* ABOUT */}

                <section className="profile-section">

                    <h2>About</h2>

                    <p>
                        Passionate Frontend Developer with strong experience
                        building responsive and scalable web applications
                        using React, JavaScript and modern frontend tools.

                        Interested in creating user-centric products,
                        collaborating with teams and solving real-world
                        problems through technology.
                    </p>

                </section>

                {/* EXPERIENCE */}

                <section className="profile-section">

                    <h2>Experience</h2>

                    <div className="experience-card">

                        <div className="experience-top">

                            <div>

                                <h3>
                                    Frontend Developer Intern
                                </h3>

                                <p>
                                    Google
                                </p>

                            </div>

                            <span>
                                May 2025 - Jul 2025
                            </span>

                        </div>

                        <ul>

                            <li>
                                Built responsive React interfaces.
                            </li>

                            <li>
                                Improved application performance.
                            </li>

                            <li>
                                Integrated REST APIs.
                            </li>

                        </ul>

                    </div>

                </section>

                {/* PROJECTS */}

                <section className="profile-section">

                    <h2>Projects</h2>

                    <div className="projects-grid">

                        <div className="project-card">

                            <h3>
                                Job Platform
                            </h3>

                            <p className="project-tech">
                                React • Node.js • MongoDB
                            </p>

                            <p>
                                Full-stack recruitment platform with
                                dashboards and authentication.
                            </p>

                        </div>

                        <div className="project-card">

                            <h3>
                                Portfolio Website
                            </h3>

                            <p className="project-tech">
                                React • CSS
                            </p>

                            <p>
                                Personal portfolio showcasing projects
                                and technical skills.
                            </p>

                        </div>

                        <div className="project-card">

                            <h3>
                                AI Resume Analyzer
                            </h3>

                            <p className="project-tech">
                                MERN • OpenAI
                            </p>

                            <p>
                                Resume screening and analysis platform.
                            </p>

                        </div>

                    </div>

                </section>

                {/* EDUCATION */}

                <section className="profile-section">

                    <h2>Education</h2>

                    <div className="education-card">

                        <div className="education-top">

                            <div>

                                <h3>
                                    Bachelor of Technology
                                </h3>

                                <p>
                                    Computer Science Engineering
                                </p>

                            </div>

                            <span>
                                2023 - 2027
                            </span>

                        </div>

                        <div className="education-grid">

                            <div>

                                <small>
                                    University
                                </small>

                                <h4>
                                    Graphic Era Hill University
                                </h4>

                                <small>
                                    CGPA
                                </small>

                                <h4>
                                    8.2
                                </h4>

                            </div>

                            <div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* SKILLS */}

                <section className="profile-section">

                    <h2>Skills</h2>

                    <div className="skills-grid">

                        <span>React</span>
                        <span>JavaScript</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Java</span>
                        <span>Python</span>
                        <span>Docker</span>
                        <span>Git</span>
                        <span>REST API</span>

                    </div>

                </section>

                {/* JOB PREFERENCES */}

                <section className="profile-section">

                    <h2>Job Preferences</h2>

                    <div className="preferences-grid">

                        <div>

                            <small>Open To Work</small>

                            <h4>Yes</h4>

                        </div>

                        <div>

                            <small>Preferred Job Type</small>

                            <h4>Full Time</h4>

                        </div>

                        <div>

                            <small>Work Mode</small>

                            <h4>Remote</h4>

                        </div>

                        <div>

                            <small>Preferred Location</small>

                            <h4>Delhi</h4>

                        </div>

                    </div>

                </section>

                {/* SOCIAL LINKS */}

                <section className="profile-section">

                    <h2>Social Links</h2>

                    <div className="social-grid">

                        <div className="social-card">

                            <h4>GitHub</h4>

                            <a
                                href="https://github.com/rahul"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/rahul
                            </a>

                        </div>

                        <div className="social-card">

                            <h4>LinkedIn</h4>

                            <a
                                href="https://linkedin.com/in/rahul"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/rahul
                            </a>

                        </div>

                        <div className="social-card">

                            <h4>Portfolio</h4>

                            <a
                                href="https://rahul.dev"
                                target="_blank"
                                rel="noreferrer"
                            >
                                rahul.dev
                            </a>

                        </div>

                        <div className="social-card">

                            <h4>LeetCode</h4>

                            <a
                                href="https://leetcode.com/rahul"
                                target="_blank"
                                rel="noreferrer"
                            >
                                leetcode.com/rahul
                            </a>

                        </div>

                    </div>

                </section>

                <section className="profile-section">

                    <h2>Contact Information</h2>

                    <div className="contact-grid">

                        <div>
                            <small>Email</small>
                            <p>rahul@gmail.com</p>
                        </div>

                        <div>
                            <small>Phone</small>
                            <p>9876543210</p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default StudentView;