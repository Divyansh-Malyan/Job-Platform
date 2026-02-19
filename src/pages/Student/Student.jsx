import React from "react";
import "./Student.css";
import ProfilePic from "../../assets/profile.jpg";

const Student = () => {
    return (
        <div className="student-page">
            <div className="profile-container">

                {/* Header Section */}
                <div className="profile-header">
                    <div className="profile-left">
                        <img src={ProfilePic} alt="Profile" className="profile-image" />

                        <div className="profile-basic-info">
                            <h2>Divyansh Malyan</h2>
                            <p className="subtitle">B.Tech CSE • 2023–2027</p>
                            <p className="location">Dehradun, India</p>

                            <div className="availability">
                                <span className="badge">Open to Internship</span>
                            </div>
                        </div>
                    </div>

                    {/* Role-based buttons (UI only for now) */}
                    <div className="profile-actions">
                        <button className="primary-btn">Download Resume</button>
                        <button className="secondary-btn">Edit Profile</button>
                    </div>
                </div>

                {/* Professional Summary */}
                <section className="section">
                    <h3>Professional Summary</h3>
                    <p>
                        Computer Science student specializing in full-stack web development.
                        Built scalable applications with authentication and role-based dashboards.
                        Strong problem-solving skills with 400+ DSA problems solved.
                    </p>
                </section>

                {/* Skills with Progress */}
                <section className="section">
                    <h3>Skills</h3>

                    <div className="skills-container">

                        <div className="skill">
                            <div className="skill-header">
                                <span>React</span>
                                <span>80%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-header">
                                <span>Java</span>
                                <span>85%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "85%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-header">
                                <span>Node.js</span>
                                <span>70%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "70%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="skill-header">
                                <span>Python</span>
                                <span>75%</span>
                            </div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: "75%" }}></div>
                            </div>
                        </div>

                    </div>
                </section>


                {/* Projects */}
                <section className="section">
                    <h3>Projects</h3>

                    <div className="project-card">
                        <h4>Job Platform Web App</h4>
                        <p className="project-tech">MERN Stack • JWT • Role-based Dashboard</p>
                        <p>
                            Developed a full-stack job platform with authentication,
                            student-recruiter dashboards, and profile management.
                        </p>
                        <div className="project-links">
                            <button className="secondary-btn small-btn">GitHub</button>
                            <button className="primary-btn small-btn">Live Demo</button>
                        </div>
                    </div>

                    <div className="project-card">
                        <h4>Portfolio Website</h4>
                        <p className="project-tech">React • Responsive UI</p>
                        <p>
                            Built a responsive personal portfolio to showcase projects and technical skills.
                        </p>
                        <div className="project-links">
                            <button className="secondary-btn small-btn">GitHub</button>
                            <button className="primary-btn small-btn">Live Demo</button>
                        </div>
                    </div>
                </section>

                {/* Experience */}
                <section className="section">
                    <h3>Experience</h3>

                    <div className="experience-item">
                        <h4>Frontend Developer Intern</h4>
                        <p className="experience-company">XYZ Company • May 2025 – July 2025</p>
                        <ul>
                            <li>Developed responsive UI using React.js.</li>
                            <li>Improved application performance by 30%.</li>
                            <li>Collaborated with backend team for API integration.</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Student;



