import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/profile.jpg";
import "./Navbar.css";
import useUserStore from "../../store/userStore";
import supabase from "../../utils/supabase_client";
import toast from "react-hot-toast";
import { IoIosNotifications } from "react-icons/io";
import { getNotifications }
  from "../../api/notificationApi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Navbar = () => {

  const [notificationCount, setNotificationCount] = useState(0);
  const location = useLocation();
  const user = useUserStore((state) => state.user);
  const profile = useUserStore((state) => state.profile);
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }

    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);

  const handleLogout = async () => {

    setLoading(true);

    const { error } =
      await supabase.auth.signOut();

    if (error) {

      toast.error(
        "Logout failed. Please try again."
      );

      setLoading(false);
      return;

    }

    clearUser();

    toast.success(
      "Logged out successfully"
    );

    navigate("/");

  };

  useEffect(() => {

    const fetchNotificationCount =
      async () => {

        if (!user?.id) return;

        try {

          const data =
            await getNotifications(user.id);

          const unread =
            data.notifications.filter(
              n => !n.is_read
            ).length;

          setNotificationCount(unread);

        } catch (error) {

          console.error(error);

        }

      };

    fetchNotificationCount();

  }, [user]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);


  return (

    <nav className="navbar">

      {/* Logo */}

      <Link to="/" className="logo">
        <h2>Hustler</h2>
      </Link>

      {/* Navigation */}

      <div className="nav-links">

        <NavLink
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>

        {
          profile?.role === "recruiter" ? (
            <>

              <NavLink
                to="/recruiterpost"
                className="nav-link"
              >
                Post Job
              </NavLink>

              <NavLink
                to="/manage-jobs"
                className="nav-link"
              >
                Manage Jobs
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/jobs"
              className="nav-link"
            >
              Jobs
            </NavLink>
          )
        }

        <NavLink
          to="/about"
          className="nav-link"
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className="nav-link"
        >
          Contact Us
        </NavLink>

      </div>

      {/* Right Side */}

      <div className="auth-section">

        {/* Mobile Hamburger */}

        <div
          className="mobile-menu-btn"
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
        >
          {mobileMenuOpen
            ? <FaTimes />
            : <FaBars />}
        </div>

        {!user ? (

          <>
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/sign-up"
              className="register-btn"
            >
              Register
            </Link>
          </>

        ) : (

          <>

            {/* Notifications */}

            <Link
              to="/notifications"
              className="notification-link"
            >

              <IoIosNotifications />

              {
                notificationCount > 0 && (
                  <span className="notification-count">
                    {notificationCount}
                  </span>
                )
              }

            </Link>

            {/* Profile Dropdown */}

            <div
              className="profile-dropdown"
              ref={menuRef}
            >

              <div
                className="profile-trigger"
                onClick={() =>
                  setShowMenu(!showMenu)
                }
              >

                <img
                  src={
                    profile?.profile_photo ||
                    ProfilePic
                  }
                  alt="Profile"
                />

              </div>

              {
                showMenu && (

                  <div className="dropdown-menu">

                    <button
                      onClick={() => {

                        if (
                          profile?.role ===
                          "recruiter"
                        ) {

                          navigate(
                            "/recruiter-profile"
                          );

                        } else {

                          navigate(
                            "/student/profile"
                          );

                        }

                        setShowMenu(false);

                      }}
                    >
                      My Profile
                    </button>

                    {
                      profile?.role !== "recruiter" && (

                        <button
                          onClick={() => {

                            navigate(
                              "/saved-jobs"
                            );

                            setShowMenu(false);

                          }}
                        >
                          Saved Jobs
                        </button>

                      )
                    }

                    <button
                      onClick={() => {

                        navigate(
                          "/settings"
                        );

                        setShowMenu(false);

                      }}
                    >
                      Settings
                    </button>

                    <div className="dropdown-divider"></div>

                    <button
                      onClick={() => {

                        setShowMenu(false);

                        handleLogout();

                      }}
                      disabled={loading}
                    >
                      {
                        loading
                          ? "Logging out..."
                          : "Logout"
                      }
                    </button>

                  </div>

                )
              }

            </div>

          </>

        )}

      </div>

      {
        mobileMenuOpen && (

          <div className="mobile-menu">

            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>

            {
              profile?.role === "recruiter" ? (
                <>
                  <NavLink
                    to="/recruiterpost"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Post Job
                  </NavLink>

                  <NavLink
                    to="/manage-jobs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Manage Jobs
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/jobs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jobs
                </NavLink>
              )
            }

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            {
              user && (
                <>
                  <NavLink
                    to="/notifications"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Notifications
                    {
                      notificationCount > 0 &&
                      ` (${notificationCount})`
                    }
                  </NavLink>

                  <button
                    onClick={() => {

                      if (
                        profile?.role === "recruiter"
                      ) {
                        navigate(
                          "/recruiter-profile"
                        );
                      } else {
                        navigate(
                          "/student/profile"
                        );
                      }

                      setMobileMenuOpen(false);

                    }}
                  >
                    My Profile
                  </button>

                  {
                    profile?.role !== "recruiter" && (
                      <button
                        onClick={() => {
                          navigate("/saved-jobs");
                          setMobileMenuOpen(false);
                        }}
                      >
                        Saved Jobs
                      </button>
                    )
                  }

                  <button
                    onClick={() => {
                      navigate("/settings");
                      setMobileMenuOpen(false);
                    }}
                  >
                    Settings
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                  >
                    Logout
                  </button>
                </>
              )
            }

            {
              !user && (
                <>
                  <Link
                    to="/login"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Login
                  </Link>

                  <Link
                    to="/sign-up"
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                  >
                    Register
                  </Link>
                </>
              )
            }

          </div>

        )
      }

    </nav>

  );

};

export default Navbar;