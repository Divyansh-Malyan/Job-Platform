import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Setting.css";

const Settings = () => {

    const navigate = useNavigate();

    const [profileVisibility, setProfileVisibility] =
        useState("Recruiters Only");

    const [preferences, setPreferences] = useState({
        jobAlerts: true,
        applicationUpdates: true,
        recruiterMessages: true,
        emailNotifications: true
    });

    const toggleSetting = (key) => {
        setPreferences({
            ...preferences,
            [key]: !preferences[key]
        });
    };

    const handleSavePreferences = () => {
        console.log("Preferences Saved", {
            profileVisibility,
            preferences
        });

        // API Call Later
    };

    const handleLogout = () => {

        const confirmLogout = window.confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) return;

        // Supabase Logout Later
        navigate("/login");
    };

    const handleDeleteAccount = () => {

        const confirmDelete = window.confirm(
            "This action cannot be undone. Delete account?"
        );

        if (!confirmDelete) return;

        // Delete Account API Later
        console.log("Account Deleted");
    };

    return (
        <div className="settings-page">

            {/* HERO */}

            <section className="settings-hero">

                <h1>Settings</h1>

                <p>
                    Manage your account preferences and privacy.
                </p>

            </section>

            <div className="settings-container">

                {/* ACCOUNT SETTINGS */}

                <section className="settings-card">

                    <h2>Account Settings</h2>

                    <div className="form-grid">

                        <div className="input-group">

                            <label>Full Name</label>

                            <input
                                type="text"
                                value="Divyansh Malyan"
                                readOnly
                            />

                        </div>

                        <div className="input-group">

                            <label>Email</label>

                            <input
                                type="email"
                                value="divyansh@gmail.com"
                                readOnly
                            />

                        </div>

                        <div className="input-group">

                            <label>Phone Number</label>

                            <input
                                type="text"
                                value="+91 9876543210"
                                readOnly
                            />

                        </div>

                    </div>

                    <button
                        className="primary-btn"
                        onClick={() =>
                            navigate("/student/edit-profile")
                        }
                    >
                        Update Information
                    </button>

                </section>

                {/* NOTIFICATION PREFERENCES */}

                <section className="settings-card">

                    <h2>Notification Preferences</h2>

                    <div className="toggle-list">

                        <div className="toggle-row">

                            <span>Job Alerts</span>

                            <input
                                type="checkbox"
                                checked={preferences.jobAlerts}
                                onChange={() =>
                                    toggleSetting("jobAlerts")
                                }
                            />

                        </div>

                        <div className="toggle-row">

                            <span>Application Updates</span>

                            <input
                                type="checkbox"
                                checked={
                                    preferences.applicationUpdates
                                }
                                onChange={() =>
                                    toggleSetting(
                                        "applicationUpdates"
                                    )
                                }
                            />

                        </div>

                        <div className="toggle-row">

                            <span>Recruiter Messages</span>

                            <input
                                type="checkbox"
                                checked={
                                    preferences.recruiterMessages
                                }
                                onChange={() =>
                                    toggleSetting(
                                        "recruiterMessages"
                                    )
                                }
                            />

                        </div>

                        <div className="toggle-row">

                            <span>Email Notifications</span>

                            <input
                                type="checkbox"
                                checked={
                                    preferences.emailNotifications
                                }
                                onChange={() =>
                                    toggleSetting(
                                        "emailNotifications"
                                    )
                                }
                            />

                        </div>

                    </div>

                    <button
                        className="primary-btn"
                        onClick={handleSavePreferences}
                    >
                        Save Preferences
                    </button>

                </section>

                {/* PRIVACY SETTINGS */}

                <section className="settings-card">

                    <h2>Privacy Settings</h2>

                    <div className="input-group">

                        <label>Profile Visibility</label>

                        <select
                            value={profileVisibility}
                            onChange={(e) =>
                                setProfileVisibility(
                                    e.target.value
                                )
                            }
                        >
                            <option>Public</option>
                            <option>Recruiters Only</option>
                            <option>Private</option>
                        </select>

                    </div>

                    <button
                        className="primary-btn"
                        onClick={handleSavePreferences}
                    >
                        Save Privacy Settings
                    </button>

                </section>

                {/* SECURITY */}

                <section className="settings-card">

                    <h2>Security</h2>

                    <div className="security-actions">

                        <button className="primary-btn">
                            Change Password
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>

                    </div>

                </section>

                {/* DANGER ZONE */}

                <section className="danger-zone">

                    <h2>Delete Account</h2>

                    <p>
                        This action cannot be undone.
                    </p>

                    <button
                        className="danger-btn"
                        onClick={handleDeleteAccount}
                    >
                        Delete Account
                    </button>

                </section>

            </div>

        </div>
    );
};

export default Settings;