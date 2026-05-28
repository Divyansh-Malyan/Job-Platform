import React, { useState } from "react";
import "./EditProfile.css";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  const navigate = useNavigate();

  const profile = useUserStore((state) => state.profile);
  const updateProfile = useUserStore((state) => state.updateProfile);

  const [formData, setFormData] = useState({

    name: profile?.name || "",
    course: profile?.course || "",
    batch: profile?.batch || "",
    college: profile?.college || "",
    city: profile?.city || "",
    country: profile?.country || "",

    bio: profile?.bio || "",

    skills: profile?.skills || "",

    github: profile?.github || "",
    linkedin: profile?.linkedin || "",

    experience_company: profile?.experience_company || "",

    company: profile?.company || ""

  });


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async () => {
    await updateProfile(formData);
    navigate("/student/profile");
  };


  return (
    <div className="edit-profile-page">

      <div className="edit-profile-container">

        <h2>Edit Profile</h2>

        <div className="edit-profile-form">

          {/* BASIC INFO */}
          <h3>Basic Information</h3>

          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
          />

          <input
            name="batch"
            placeholder="Batch"
            value={formData.batch}
            onChange={handleChange}
          />

          <input
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />


          {/* SUMMARY */}
          <h3>Professional Summary</h3>

          <textarea
            name="bio"
            placeholder="Write about yourself"
            value={formData.bio}
            onChange={handleChange}
          />


          {/* SKILLS */}
          <h3>Skills</h3>

          <input
            name="skills"
            placeholder="React, Node, Java"
            value={formData.skills}
            onChange={handleChange}
          />


          {/* EXPERIENCE */}
          <h3>Experience</h3>

          <input
            name="experience_company"
            placeholder="Company where you worked"
            value={formData.experience_company}
            onChange={handleChange}
          />


          {/* LINKS */}
          <h3>Links</h3>

          <input
            name="github"
            placeholder="Github"
            value={formData.github}
            onChange={handleChange}
          />

          <input
            name="linkedin"
            placeholder="LinkedIn"
            value={formData.linkedin}
            onChange={handleChange}
          />


          <button className="save-profile-btn" onClick={handleSubmit}>
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditProfile;