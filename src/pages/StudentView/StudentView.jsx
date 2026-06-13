import React from "react";
import "./StudentView.css";
import {useEffect, useState} from "react";
import "./StudentView.css";
import ProfilePic from "../../assets/profile.jpg";
import {useParams} from "react-router-dom";
import {getStudentById} from "../../api/studentApi";
import { useLocation } from "react-router-dom";
import {updateApplicationStatus} from "../../api/applicationApi";
import { Riple } from "react-loading-indicators";

const StudentView = () => {

    const { studentId } = useParams();
    const location = useLocation();

    const applicationId =
        location.state?.applicationId;
    const currentStatus =
        location.state?.status;

    const [student, setStudent] = useState(null);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [experience, setExperience] = useState([]);
    const [email, setEmail] = useState("");

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        fetchStudent();

    }, [studentId]);

    const fetchStudent = async () => {

        try {

            const data =
                await getStudentById(
                    studentId
                );

            setStudent(data.student);
            setSkills(data.skills || []);
            setProjects(data.projects || []);
            setExperience(
                data.experience || []
            );
            setEmail(data.email || "");

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };

    if (loading) {
        return (
            <div className="jobs-loader">
                <Riple
                    color="#35b0a7"
                    size="medium"
                    text="Loading jobs..."
                    textColor="#666"
                />
            </div>
        );
    }

    if (!student) {
        return <h2>Student Not Found</h2>;
    }

    const handleAccept = async () => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Accepted"
            );

            alert("Application Accepted");

        } catch (error) {

            console.error(error);

        }

    };

    const handleReject = async () => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Rejected"
            );

            alert("Application Rejected");

        } catch (error) {

            console.error(error);

        }

    };

    const handleShortlist = async () => {

        try {

            await updateApplicationStatus(
                applicationId,
                "Shortlisted"
            );

            alert("Application Shortlisted");

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <div className="student-view-page">
            <section className="student-view-hero">

                <img
                    src={
                        student?.profile_photo ||
                        ProfilePic
                    }
                    alt="Profile"
                    className="student-view-image"
                />

                <h1>{student.name}</h1>

                <h3>
                    {student.headline || "No Headline"}
                </h3>

                <p>
                    📍 {student.city || "N/A"},
                    {" "}
                    {student.country || "N/A"}
                </p>

                {
                    student.open_to_work && (
                        <span className="open-to-work-badge">
                            Open To Work
                        </span>
                    )
                }
                <div className="recruiter-actions">

                    {
                        student.resume_url ? (

                            <a
                                href={student.resume_url}
                                target="_blank"
                                rel="noreferrer"
                                className="download-btn"
                            >
                                Download Resume
                            </a>

                        ) : (

                            <button
                                className="download-btn"
                                disabled
                            >
                                No Resume
                            </button>

                        )
                    }

                    {
                        currentStatus?.toLowerCase() === "pending" && (
                            <>
                                <button
                                    className="accept-btn"
                                    onClick={() =>
                                        handleAccept(applicationId)
                                    }
                                >
                                    Accept
                                </button>

                                <button
                                    className="shortlist-btn"
                                    onClick={() =>
                                        handleShortlist(applicationId)
                                    }
                                >
                                    Shortlist
                                </button>

                                <button
                                    className="reject-btn"
                                    onClick={() =>
                                        handleReject(applicationId)
                                    }
                                >
                                    Reject
                                </button>
                            </>
                        )
                    }

                </div>

            </section>

            {/* HERO */}



            <div className="student-view-container">

                {/* ABOUT */}

                <section className="profile-section">

                    <h2>About</h2>

                    <p>
                        {student.about || "No About Information Added"}
                    </p>

                </section>

                {/* EXPERIENCE */}

                <section className="profile-section">

                    <h2>Experience</h2>

                    {
                        experience.length === 0 ? (

                            <p>No Experience Added</p>

                        ) : (

                            experience.map((exp) => (

                                <div
                                    key={exp.id}
                                    className="experience-card"
                                >

                                    <div className="experience-top">

                                        <div>

                                            <h3>{exp.role}</h3>

                                            <p>{exp.company_name}</p>

                                        </div>

                                        <span>
                                            {exp.start_date}
                                            {" - "}
                                            {exp.end_date || "Present"}
                                        </span>

                                    </div>

                                    <p>{exp.about}</p>

                                </div>

                            ))

                        )
                    }

                </section>

                {/* PROJECTS */}

                <section className="profile-section">

                    <h2>Projects</h2>

                    {
                        projects.length === 0 ? (

                            <p>No Projects Added</p>

                        ) : (

                            <div className="projects-grid">

                                {
                                    projects.map((project) => (

                                        <div
                                            key={project.id}
                                            className="project-card"
                                        >

                                            <h3>
                                                {project.project_name}
                                            </h3>

                                            <p>
                                                {project.description}
                                            </p>

                                            <br />

                                            {
                                                project.github_link && (
                                                    <a
                                                        href={project.github_link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Github
                                                    </a>
                                                )
                                            }

                                            {
                                                project.demo_link && (
                                                    <>
                                                        {" | "}
                                                        <a
                                                            href={project.demo_link}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Demo
                                                        </a>
                                                    </>
                                                )
                                            }

                                        </div>

                                    ))
                                }

                            </div>

                        )
                    }

                </section>

                {/* EDUCATION */}

                <section className="profile-section">

                    <h2>Education</h2>

                    <div className="education-card">

                        <div className="education-top">

                            <div>

                                <h3>
                                    {student.course || "Not Added"}
                                </h3>

                                <p>
                                    {student.batch || "Not Added"}
                                </p>

                            </div>

                        </div>

                        <div className="education-grid">

                            <div>

                                <small>College</small>

                                <h4>
                                    {student.college || "Not Added"}
                                </h4>

                            </div>

                            <div>

                                <small>CGPA</small>

                                <h4>
                                    {student.cgpa || "N/A"}
                                </h4>

                            </div>

                        </div>

                    </div>

                </section>

                {/* SKILLS */}

                <section className="profile-section">

                    <h2>Skills</h2>

                    {
                        skills.length === 0 ? (

                            <div className="empty-state">
                                <p>No Skills Added Yet</p>
                            </div>

                        ) : (

                            <div className="skills-grid">

                                {
                                    skills.map((skill) => (

                                        <span key={skill.id}>
                                            {skill.name}
                                        </span>

                                    ))
                                }

                            </div>

                        )
                    }

                </section>

                {/* JOB PREFERENCES */}

                <section className="profile-section">

                    <h2>Job Preferences</h2>

                    <div className="preferences-grid">

                        <div>

                            <small>Open To Work</small>

                            <h4>
                                {student.open_to_work
                                    ? "Yes"
                                    : "No"}
                            </h4>

                        </div>

                        <div>

                            <small>Preferred Job Type</small>

                            <h4>
                                {student.preferred_job_type || "Not Added"}
                            </h4>

                        </div>

                        <div>

                            <small>Work Mode</small>

                            <h4>
                                {student.work_mode || "Not Added"}
                            </h4>

                        </div>

                        <div>

                            <small>Preferred Location</small>

                            <h4>
                                {student.preferred_location || "Not Added"}
                            </h4>

                        </div>

                    </div>

                </section>

                {/* SOCIAL LINKS */}

                <section className="profile-section">

                    <h2>Social Links</h2>

                    {
                        !student.github &&
                            !student.linkedin &&
                            !student.portfolio &&
                            !student.leetcode ? (

                            <p>No Social Links Added</p>

                        ) : (

                            <div className="social-grid">

                                {student.github && (
                                    <div className="social-card">
                                        <h4>GitHub</h4>
                                        <a
                                            href={student.github}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {student.github}
                                        </a>
                                    </div>
                                )}

                                {student.linkedin && (
                                    <div className="social-card">
                                        <h4>LinkedIn</h4>
                                        <a
                                            href={student.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {student.linkedin}
                                        </a>
                                    </div>
                                )}

                                {student.portfolio && (
                                    <div className="social-card">
                                        <h4>Portfolio</h4>
                                        <a
                                            href={student.portfolio}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {student.portfolio}
                                        </a>
                                    </div>
                                )}

                                {student.leetcode && (
                                    <div className="social-card">
                                        <h4>LeetCode</h4>
                                        <a
                                            href={student.leetcode}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {student.leetcode}
                                        </a>
                                    </div>
                                )}

                            </div>

                        )
                    }

                </section>

                <section className="profile-section">

                    <h2>Contact Information</h2>

                    <div className="contact-grid">

                        <div>
                            <small>Email</small>
                            <p>{email}</p>
                        </div>

                        <div>
                            <small>Phone</small>
                            <p>{student.phone || "Not Added"}</p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
};

export default StudentView;