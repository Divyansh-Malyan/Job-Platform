import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ProfilePic from "../../assets/profile.jpg";
import "./Navbar.css";
import useUserStore from "../../store/userStore";
import supabase from "../../utils/supabase_client";
import toast from "react-hot-toast";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error("Logout failed. Please try again.");
      setLoading(false);
      return;
    }

    clearUser();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>Hustler</h2>
      </div>

      {/* Center Links */}
      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
      </div>

      {/* Right Side */}
      <div className="auth-section">
        {!user ? (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/sign-up" className="register-btn">Register</Link>
          </>
        ) : (
          <>
            <Link to="/student/profile" className="profile-link">
              <img src={ProfilePic} alt="Profile" />
            </Link>

            <button
              onClick={handleLogout}
              className="logout-btn"
              disabled={loading}
            >
              {loading ? "Logging out..." : "Logout"}
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;