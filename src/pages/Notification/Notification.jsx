import React, { useState } from "react";
import "./Notification.css";

const Notifications = () => {

    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

    const notifications = [
        {
            id: 1,
            type: "application",
            title: "Google shortlisted you",
            description: "Frontend Developer position",
            time: "2 hours ago",
            unread: true
        },
        {
            id: 2,
            type: "application",
            title: "Microsoft viewed your application",
            description: "Backend Developer role",
            time: "1 day ago",
            unread: true
        },
        {
            id: 3,
            type: "application",
            title: "Adobe rejected your application",
            description: "UI/UX Designer role",
            time: "2 days ago",
            unread: false
        },
        {
            id: 4,
            type: "job",
            title: "New React Developer job matches your profile",
            description: "Based on your skills and preferences",
            time: "3 days ago",
            unread: false
        }
    ];

    const totalNotifications = notifications.length;

    const unreadNotifications = notifications.filter(
        (notification) => notification.unread
    ).length;

    const applicationNotifications = notifications.filter(
        (notification) => notification.type === "application"
    ).length;

    const jobNotifications = notifications.filter(
        (notification) => notification.type === "job"
    ).length;

    const filteredNotifications = notifications.filter(
        (notification) => {

            const matchesSearch =
                notification.title
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                notification.description
                    .toLowerCase()
                    .includes(search.toLowerCase());

            if (!matchesSearch) return false;

            if (activeFilter === "Unread")
                return notification.unread;

            if (activeFilter === "Applications")
                return notification.type === "application";

            if (activeFilter === "Job Alerts")
                return notification.type === "job";

            return true;
        }
    );

    return (
        <div className="notifications-page">

            {/* HERO */}

            <section className="notifications-hero">

                <h1>Notifications</h1>

                <p>
                    Stay updated with your applications and job opportunities.
                </p>

            </section>

            <div className="notifications-container">

                {/* STATS */}

                <section className="stats-grid">

                    <div className="stat-card">
                        <h2>{totalNotifications}</h2>
                        <p>Total Notifications</p>
                    </div>

                    <div className="stat-card">
                        <h2>{unreadNotifications}</h2>
                        <p>Unread</p>
                    </div>

                    <div className="stat-card">
                        <h2>{applicationNotifications}</h2>
                        <p>Application Updates</p>
                    </div>

                    <div className="stat-card">
                        <h2>{jobNotifications}</h2>
                        <p>Job Alerts</p>
                    </div>

                </section>

                {/* SEARCH + FILTER */}

                <section className="filter-section">

                    <input
                        type="text"
                        placeholder="Search Notifications..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <div className="filter-buttons">

                        {[
                            "All",
                            "Unread",
                            "Applications",
                            "Job Alerts"
                        ].map((item) => (

                            <button
                                key={item}
                                className={
                                    activeFilter === item
                                        ? "filter-btn active"
                                        : "filter-btn"
                                }
                                onClick={() =>
                                    setActiveFilter(item)
                                }
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                    <button className="mark-read-btn">
                        Mark All Read
                    </button>

                </section>

                {/* NOTIFICATIONS */}

                {
                    filteredNotifications.length === 0 ? (

                        <div className="empty-state">

                            <div className="empty-icon">
                                🔔
                            </div>

                            <h2>
                                No Notifications Found
                            </h2>

                            <p>
                                Try changing your search or filter.
                            </p>

                        </div>

                    ) : (

                        <section className="notifications-list">

                            {filteredNotifications.map((notification) => (

                                <div
                                    key={notification.id}
                                    className={
                                        notification.unread
                                            ? "notification-card unread"
                                            : "notification-card"
                                    }
                                >

                                    <div className="notification-icon">
                                        {notification.icon}
                                    </div>

                                    <div className="notification-content">

                                        <h3>
                                            {notification.title}
                                        </h3>

                                        <p>
                                            {notification.description}
                                        </p>

                                        <span>
                                            {notification.time}
                                        </span>

                                    </div>

                                </div>

                            ))}

                        </section>

                    )
                }

            </div>

        </div>
    );
};

export default Notifications;