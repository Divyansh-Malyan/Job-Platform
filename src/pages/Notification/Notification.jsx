import React, { useState, useEffect } from "react";
import "./Notification.css";

import useUserStore from "../../store/userStore";

import {
    getNotifications,
    markAllRead
} from "../../api/notificationApi";

const Notifications = () => {
    const user = useUserStore((state) => state.user);
const loading = useUserStore((state) => state.loading);

console.log("User:", user);
console.log("Loading:", loading);


    const [notifications, setNotifications] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");



    useEffect(() => {

        // if (user?.user_id) {
        //     fetchNotifications();
        // }
        fetchNotifications();

    }, [user?.user_id]);

    const fetchNotifications = async () => {

        try {
    
            const data = await getNotifications(
                user.id
            );
    
            console.log("API Response:", data);
    
            setNotifications(
                data.notifications || []
            );
    
        } catch (error) {
    
            console.error(error);
    
        }
    
    };

    const handleMarkAllRead = async () => {

        try {
    
            await markAllRead(user.id);
    
            await fetchNotifications();
    
        } catch (error) {
    
            console.error(error);
    
        }
    
    };

    const totalNotifications =
        notifications.length;

    const unreadNotifications =
        notifications.filter(
            (notification) =>
                !notification.is_read
        ).length;

    const applicationNotifications =
        notifications.length;

    const jobNotifications = 0;

    const filteredNotifications =
        notifications.filter(
            (notification) => {

                const matchesSearch =

                    notification.title
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

                    ||

                    notification.message
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                if (!matchesSearch)
                    return false;

                if (
                    activeFilter ===
                    "Unread"
                ) {
                    return !notification.is_read;
                }

                return true;
            }
        );

    console.log(
        "Notifications State:",
        notifications
    );

    console.log(
        "Filtered Notifications:",
        filteredNotifications
    );

    useEffect(() => {

        if (loading) return;
    
        if (user?.id) {
            fetchNotifications();
        }
    
    }, [user, loading]);

    return (

        <div className="notifications-page">

            <section className="notifications-hero">

                <h1>
                    Notifications
                </h1>

                <p>
                    Stay updated with your
                    applications and job opportunities.
                </p>

            </section>

            <div className="notifications-container">

                <section className="stats-grid">

                    <div className="stat-card">
                        <h2>
                            {totalNotifications}
                        </h2>
                        <p>
                            Total Notifications
                        </p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {unreadNotifications}
                        </h2>
                        <p>
                            Unread
                        </p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {applicationNotifications}
                        </h2>
                        <p>
                            Application Updates
                        </p>
                    </div>

                    <div className="stat-card">
                        <h2>
                            {jobNotifications}
                        </h2>
                        <p>
                            Job Alerts
                        </p>
                    </div>

                </section>

                <section className="filter-section">

                    <input
                        type="text"
                        placeholder="Search Notifications..."
                        className="search-box"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                    />

                    <div className="filter-buttons">

                        {[
                            "All",
                            "Unread",
                            "Applications"
                        ].map(
                            (item) => (

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

                            )
                        )}

                    </div>

                    <button
                        className="mark-read-btn"
                        onClick={
                            handleMarkAllRead
                        }
                    >
                        Mark All Read
                    </button>

                </section>

                {filteredNotifications.length === 0 ? (

                    <div className="empty-state">

                        <div className="empty-icon">
                            🔔
                        </div>

                        <h2>
                            No Notifications Found
                        </h2>

                        <p>
                            Try changing your search
                            or filter.
                        </p>

                    </div>

                ) : (

                    <section className="notifications-list">

                        {filteredNotifications.map(
                            (notification) => (

                                <div
                                    key={
                                        notification.id
                                    }
                                    className={
                                        !notification.is_read
                                            ? "notification-card unread"
                                            : "notification-card"
                                    }
                                >

                                    <div className="notification-content">

                                        <h3>
                                            {
                                                notification.title
                                            }
                                        </h3>

                                        <p>
                                            {
                                                notification.message
                                            }
                                        </p>

                                        <span>
                                            {new Date(
                                                notification.created_at
                                            ).toLocaleString()}
                                        </span>

                                    </div>

                                </div>

                            )
                        )}

                    </section>

                )}

            </div>

        </div>

    );
};

export default Notifications;