
import React from "react";
import "./RecruiterProfile.css";
import { useNavigate } from "react-router-dom";
import DefaultProfile from "../../assets/profile.jpg";
import { useEffect, useState } from "react";
import useUserStore from "../../store/userStore";
import { getRecruiterProfile } from "../../api/recruiterApi";
import { Riple } from "react-loading-indicators";

const RecruiterProfile = () => {

    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const userProfile =
        useUserStore((state) => state.profile);
    useEffect(() => {

        if (!userProfile?.id) return;

        fetchProfile();

    }, [userProfile]);

    const fetchProfile = async () => {

        try {

            const data =
                await getRecruiterProfile(
                    userProfile.id
                );

            setProfile({
                ...data.recruiter,
                ...data.company
            });

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

    if (!profile) {
        return <h2>Profile Not Found</h2>;
    }

    return (
        <div className="recruiter-profile-page">

            {/* HERO */}

            <section className="recruiter-profile-hero">


                <img
                    src={
                        profile.logo_url ||
                        DefaultProfile
                    }
                    alt="Company Logo"
                    className="company-logo"
                />

                <h1>{profile.company_name}</h1>

                <h3>{profile.designation}</h3>

                <h2>{profile.name}</h2>

                <p>{profile.location}</p>

                <div className="hero-actions">

                    <button
                        className="primary-btn"
                        onClick={() =>
                            navigate(
                                "/edit-recruiter-company"
                            )
                        }
                    >
                        Edit Recruiter
                    </button>

                    <button
                        className="secondary-btn"
                        onClick={() =>
                            navigate("/edit-recruiter-company")
                        }
                    >
                        Edit Company
                    </button>

                </div>

            </section>

            <div className="recruiter-profile-container">

                {/* Recruiter Information */}

                <section className="profile-card">

                    <div className="section-header">

                        <h2>Recruiter Information</h2>

                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate(
                                    "/edit-recruiter-company"
                                )
                            }
                        >
                            Edit Recruiter
                        </button>

                    </div>

                    <div className="info-grid">

                        <div>
                            <small>Name</small>
                            <h4>{profile.name}</h4>
                        </div>

                        <div>
                            <small>Designation</small>
                            <h4>{profile.designation}</h4>
                        </div>

                        <div>
                            <small>Role</small>
                            <h4>{profile.recruiter_role}</h4>
                        </div>

                        <div>
                            <small>LinkedIn</small>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </div>

                        <div>
                            <small>Joined</small>
                            <h4>
                                {new Date(
                                    profile.created_at
                                ).toLocaleDateString()}
                            </h4>
                        </div>

                    </div>

                </section>

                {/* Company Information */}

                <section className="profile-card">

                    <div className="section-header">

                        <h2>Company Information</h2>

                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate("/edit-recruiter-company")
                            }
                        >
                            Edit Company
                        </button>

                    </div>

                    <div className="info-grid">

                        <div>
                            <small>Company Name</small>
                            <h4>{profile.company_name}</h4>
                        </div>

                        <div>
                            <small>Industry</small>
                            <h4>{profile.industry}</h4>
                        </div>

                        <div>
                            <small>Location</small>
                            <h4>{profile.location}</h4>
                        </div>

                        <div>
                            <small>Website</small>

                            <a
                                href={profile.website}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit Website
                            </a>

                        </div>

                    </div>

                </section>

                {/* About Company */}

                <section className="profile-card">

                    <div className="section-header">

                        <h2>About Company</h2>

                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate("/edit-recruiter-company")
                            }
                        >
                            Edit Description
                        </button>

                    </div>

                    <p className="company-description">
                        {profile.description}
                    </p>

                </section>

                {/* Branding */}

                <section className="profile-card">

                    <div className="section-header">

                        <h2>Company Branding</h2>

                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate("/edit-recruiter-company")
                            }
                        >
                            Change Logo
                        </button>

                    </div>

                    <div className="branding-box">

                        <img
                            src={
                                profile.logo_url ||
                                DefaultProfile
                            }
                            alt="Company Logo"
                            className="company-logo"
                        />

                    </div>

                </section>

            </div>

        </div>
    );
};

export default RecruiterProfile;

