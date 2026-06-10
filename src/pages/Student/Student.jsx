import React from "react";
import "./Student.css";
import ProfilePic from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const Student = () => {

    const navigate = useNavigate();
    const profileCompletion = 75;   
    const projects = [
        {
            id: 1,
            title: "Job Platform Web App",
            tech: "React • Node.js • MongoDB",
            description:
                "Developed a full-stack recruitment platform with authentication, dashboards, applications, and profile management.",
            github: "#",
            demo: "#",
        },
        {
            id: 2,
            title: "Portfolio Website",
            tech: "React • CSS",
            description:
                "Responsive developer portfolio showcasing projects and skills.",
            github: "#",
            demo: "#",
        },
    ];

    return (
        <div className="student-page">

            {/* HERO */}

            <section className="profile-hero">

                <h1>Career Profile</h1>

                <p>
                    Build your professional identity and stand out to recruiters.
                </p>

            </section>

            <div className="profile-container">

                {/* PROFILE CARD */}

                <section className="profile-card">

                    <div className="profile-main">

                        <img
                            src={ProfilePic}
                            alt="profile"
                            className="profile-image"
                        />

                        <div className="profile-content">

                            <h2>Divyansh Malyan</h2>

                            <h4>Full Stack Developer</h4>

                            <p className="profile-location">
                                Dehradun, India
                            </p>

                            <div className="profile-badges">

                                <span className="badge">
                                    Open To Work
                                </span>

                                <span className="badge secondary">
                                    Remote Friendly
                                </span>

                            </div>

                        </div>

                    </div>
                    <div className="completion-card">

                        <span>Profile Completion</span>

                        <h2>{profileCompletion}%</h2>

                        <p>
                            Complete your profile to attract more recruiters.
                        </p>

                    </div>

                    <div className="profile-actions">

                        <button className="primary-btn">
                            Download Resume
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => navigate("/edit-profile")}
                        >
                            Edit Profile
                        </button>

                    </div>

                </section>

                {/* ABOUT */}

                <section className="section">

                    <h3>About</h3>

                    <p>
                        Passionate Full Stack Developer with experience
                        building modern web applications using React,
                        Node.js, Express, and MongoDB.

                        Interested in scalable systems, product
                        development, startups, and open source.

                        Looking for opportunities where I can create
                        meaningful products and grow as an engineer.
                    </p>

                </section>

                {/* EXPERIENCE */}

                <section className="section">

                    <h3>Experience</h3>

                    <div className="experience-card">

                        <div className="experience-header">

                            <div>

                                <h4>
                                    Frontend Developer Intern
                                </h4>

                                <p>
                                    XYZ Company
                                </p>

                            </div>

                            <span>
                                May 2025 - Jul 2025
                            </span>

                        </div>

                        <ul>

                            <li>
                                Built responsive React.js interfaces.
                            </li>

                            <li>
                                Improved application performance by 30%.
                            </li>

                            <li>
                                Integrated backend APIs.
                            </li>

                        </ul>

                    </div>

                </section>

                {/* PROJECTS */}

                <section className="section">

                    <h3>Projects</h3>

                    {
                        projects.length === 0 ? (

                            <div className="empty-state">

                                <h4>No Projects Added Yet</h4>

                                <p>
                                    Add your projects to showcase your work to recruiters.
                                </p>

                            </div>

                        ) : (

                            <div className="projects-grid">

                                {projects.map((project) => (

                                    <div
                                        className="project-card"
                                        key={project.id}
                                    >

                                        <h4>
                                            {project.title}
                                        </h4>

                                        <p className="tech-stack">
                                            {project.tech}
                                        </p>

                                        <p>
                                            {project.description}
                                        </p>

                                        <div className="project-buttons">

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="secondary-btn"
                                            >
                                                Github
                                            </a>

                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="primary-btn"
                                            >
                                                Live Demo
                                            </a>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )
                    }

                </section>

                {/* EDUCATION */}

                <section className="section">

                    <h3>Education</h3>

                    <div className="education-card">

                        <div className="education-top">

                            <div>

                                <h4>
                                    Bachelor of Technology
                                </h4>

                                <p>
                                    Computer Science & Engineering
                                </p>

                            </div>

                            <span>
                                2023 - 2027
                            </span>

                        </div>

                        <div className="education-meta">

                            <div>
                                <small>University</small>
                                <h5>Graphic Era Hill University</h5>
                            </div>

                            <div>
                                <small>CGPA</small>
                                <h5>8.2</h5>
                            </div>

                            <div>
                                <small>Current Year</small>
                                <h5>3rd Year</h5>
                            </div>

                        </div>

                    </div>

                </section>

                {/* SKILLS */}

                <section className="section">

                    <h3>Skills</h3>

                    <div className="skills-grid">

                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>Java</span>
                        <span>Python</span>
                        <span>Docker</span>
                        <span>Git</span>
                        <span>REST APIs</span>
                        <span>JWT</span>

                    </div>

                </section>

                {/* CERTIFICATIONS */}

                <section className="section">

                    <h3>Certifications</h3>

                    <div className="cert-grid">

                        <div className="cert-card">
                            <h4>React Development</h4>
                            <p>Udemy</p>
                        </div>

                        <div className="cert-card">
                            <h4>Java Programming</h4>
                            <p>Oracle Academy</p>
                        </div>

                        <div className="cert-card">
                            <h4>Git & Github</h4>
                            <p>Coursera</p>
                        </div>

                    </div>

                </section>

                {/* SOCIAL LINKS */}

                <section className="section">

                    <h3>Social Links</h3>

                    <div className="social-links-grid">

                        <a
                            href="https://github.com/divyansh"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://portfolio.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Portfolio Website
                        </a>

                        <a
                            href="https://leetcode.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LeetCode
                        </a>

                    </div>

                </section>

                {/* RESUME */}

                <section className="section">

                    <h3>Resume</h3>

                    <div className="resume-card">

                        <div>

                            <h4>
                                Divyansh_Malyan_Resume.pdf
                            </h4>

                            <p>
                                Last Updated: June 2026
                            </p>

                        </div>

                        <button className="primary-btn">
                            Download
                        </button>

                    </div>

                </section>

                {/* CONTACT */}

                <section className="section">

                    <h3>Contact Information</h3>

                    <div className="contact-grid">

                        <div>
                            <small>Email</small>
                            <p>divyansh@example.com</p>
                        </div>

                        <div>
                            <small>Phone No.</small>
                            <p>9998887771</p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default Student;