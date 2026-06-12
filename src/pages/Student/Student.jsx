import React, { useEffect, useState } from "react";
import "./Student.css";
import ProfilePic from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";
import { getStudentProfile } from "../../api/studentApi";

const Student = () => {
    const user = useUserStore((state) => state.user);

    const [student, setStudent] = useState(null);
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [experience, setExperience] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const profile = useUserStore((state) => state.profile);


    useEffect(() => {

        if (profile?.role === "recruiter") {
            navigate("/recruiterdashboard");
            return;
        }

        const fetchProfile = async () => {

            if (!user?.id) return;

            try {

                const data =
                    await getStudentProfile(user.id);

                setStudent(data.student);
                setProjects(data.projects);
                setSkills(data.skills);
                setExperience(data.experience);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, [user, profile, navigate]);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    if (!student) {
        return (
            <div className="student-page">
                <h2>Profile Not Found</h2>
            </div>
        );
    }


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
                            src={
                                student?.profile_photo ||
                                ProfilePic
                            }
                            alt="profile"
                            className="profile-image"
                        />

                        <div className="profile-content">

                            <h2>{student?.name}</h2>

                            <h4>{student?.headline || "Add Headline"}</h4>

                            <p className="profile-location">
                                {[student?.city, student?.country]
                                    .filter(Boolean)
                                    .join(", ") || "Location Not Added"}
                            </p>

                            <div className="profile-badges">

                                {student?.open_to_work && (
                                    <span className="badge">
                                        Open To Work
                                    </span>
                                )}

                                {student?.work_mode && (
                                    <span className="badge secondary">
                                        {student.work_mode}
                                    </span>
                                )}

                            </div>

                        </div>

                    </div>
                    {/* <div className="completion-card">

                        <span>Profile Completion</span>

                        <h2>{profileCompletion}%</h2>

                        <p>
                            Complete your profile to attract more recruiters.
                        </p>

                    </div> */}

                    <div className="profile-actions">

                        {student?.resume_url ? (
                            <a
                                href={student.resume_url}
                                target="_blank"
                                rel="noreferrer"
                                className="primary-btn"
                            >
                                Download Resume
                            </a>
                        ) : (
                            <button className="primary-btn">
                                No Resume Uploaded
                            </button>
                        )}

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
                        {student?.about || "No About Information Added Yet"}
                    </p>

                </section>

                {/* EXPERIENCE */}
                <section className="section">
                    <h3>Experience</h3>
                    {
                        experience.length === 0 ? (

                            <div className="empty-state">

                                <h4>No Experience Added Yet</h4>

                                <p>
                                    Add your work experience to attract recruiters.
                                </p>

                            </div>

                        ) : (

                            experience.map((exp) => (

                                <div
                                    className="experience-card"
                                    key={exp.id}
                                >

                                    <div className="experience-header">

                                        <div>

                                            <h4>{exp.role}</h4>

                                            <p>{exp.company_name}</p>

                                        </div>

                                        <span>
                                            {exp.duration || "Present"}
                                        </span>

                                    </div>

                                    <p>{exp.about}</p>

                                </div>

                            ))

                        )
                    }
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
                                            {project.project_name}
                                        </h4>

                                        <p className="tech-stack">
                                            {project.tech_stack || "Tech Stack Not Added"}
                                        </p>

                                        <p>
                                            {project.description}
                                        </p>

                                        <div className="project-buttons">

                                            <a
                                                href={project.github_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="secondary-btn"
                                            >
                                                Github
                                            </a>

                                            <a
                                                href={project.demo_link}
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
                                    {student?.course || "Course Not Added"}
                                </p>

                            </div>

                            <span>
                                {student?.batch || "Batch Not Added"}
                            </span>

                        </div>

                        <div className="education-meta">

                            <div>
                                <small>University</small>
                                <h5>{student?.college || "College Not Added"}</h5>
                            </div>

                            <div>
                                <small>CGPA</small>
                                <h5>{student?.cgpa || "N/A"}</h5>
                            </div>

                            <div>
                                <small>Completion Year</small>
                                <h5>{student?.year_completion || "N/A"}</h5>
                            </div>

                        </div>

                    </div>

                </section>

                {/* SKILLS */}
                <section className="section">
                    <h3>Skills</h3>

                    <div className="skills-grid">

                        {
                            skills.length === 0 ? (

                                <p>
                                    No Skills Added Yet
                                </p>

                            ) : (

                                skills.map((skill) => (

                                    <span key={skill.id}>
                                        {skill.name}
                                    </span>

                                ))

                            )
                        }

                    </div>
                </section>

                {/* CERTIFICATIONS

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

                </section> */}

                {/* SOCIAL LINKS */}
                <section className="section">

                    <h3>Social Links</h3>

                    {
                        !student?.github &&
                            !student?.linkedin &&
                            !student?.portfolio &&
                            !student?.leetcode ? (

                            <div className="empty-state">

                                <h4>No Social Links Added Yet</h4>

                                <p>
                                    Add your Github, LinkedIn, Portfolio or LeetCode profile.
                                </p>

                            </div>

                        ) : (

                            <div className="social-links-grid">

                                {student?.github && (
                                    <a
                                        href={student.github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                )}

                                {student?.linkedin && (
                                    <a
                                        href={student.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                )}

                                {student?.portfolio && (
                                    <a
                                        href={student.portfolio}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Portfolio
                                    </a>
                                )}

                                {student?.leetcode && (
                                    <a
                                        href={student.leetcode}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LeetCode
                                    </a>
                                )}

                            </div>

                        )
                    }

                </section>

                {/* RESUME */}

                <section className="section">

                    <h3>Resume</h3>

                    <div className="resume-card">

                        <div>

                            <h4>
                                Resume
                            </h4>

                            <p>
                                {student?.resume_url
                                    ? "Resume Uploaded"
                                    : "No Resume Uploaded"}
                            </p>

                        </div>

                        {
                            student?.resume_url ? (
                                <a
                                    href={student.resume_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="primary-btn"
                                >
                                    Download
                                </a>
                            ) : (
                                <button className="primary-btn">
                                    No Resume
                                </button>
                            )
                        }

                    </div>

                </section>

                {/* CONTACT */}

                <section className="section">

                    <h3>Contact Information</h3>

                    <div className="contact-grid">

                        <div>
                            <small>Email</small>
                            <p>{user?.email}</p>
                        </div>

                        <div>
                            <small>Phone No.</small>
                            <p>{student?.phone || "Not Added"}</p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default Student;