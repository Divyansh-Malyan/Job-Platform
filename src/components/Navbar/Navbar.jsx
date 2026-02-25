import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../../assets/profile.jpg";
import "./Navbar.css";
import { useUserStore } from "../../store/userStore";

const user = useUserStore((state) => state.user);

const Navbar = ({ isHome = false }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">Hustler</h2>

      <div className="navbar-right">
        <Link to="/jobs" className="nav-link">Find Job</Link>
        <Link to="/companies" className="nav-link">Companies</Link>

        {isHome ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/sign-up" className="nav-link">
              Sign-Up
            </Link>
          </>
        ) : (
          <>
            <div className="search-box">
              <input type="text" placeholder="Search jobs..." />
              <button>Search</button>
            </div>

            <Link to="/student/profile" className="profile-link">
              <img src={ProfilePic} alt="Profile" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;