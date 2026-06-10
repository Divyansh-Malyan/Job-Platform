import React, { useState } from "react";
import "./EditProfile.css";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  const navigate = useNavigate();

  const profile = useUserStore((state) => state.profile);
  const updateProfile = useUserStore((state) => state.updateProfile);

  const [formData, setFormData] = useState({

    /* Basic */
    name: profile?.name || "",
    headline: profile?.headline || "",
    phone: profile?.phone || "",
    city: profile?.city || "",
    country: profile?.country || "",

    /* Education */
    college: profile?.college || "",
    course: profile?.course || "",
    // batch: profile?.batch || "",
    graduationYear: profile?.graduationYear || "",
    // currentYear: profile?.currentYear || "",
    cgpa: profile?.cgpa || "",

    /* About */
    bio: profile?.bio || "",

    /* Skills */
    skills: profile?.skills || "",

    experiences: profile?.experiences || [
      {
        company: "",
        role: "",
        duration: "",
        description: ""
      }
    ],

    projects: profile?.projects || [
      {
        name: "",
        techStack: "",
        github: "",
        demo: "",
        description: ""
      }
    ],

    /* Links */
    github: profile?.github || "",
    linkedin: profile?.linkedin || "",
    portfolio: profile?.portfolio || "",
    leetcode: profile?.leetcode || "",

    /* Resume */
    resume: "",

    /* Preferences */
    openToWork: profile?.openToWork || "true",

    preferredJobType:
      profile?.preferredJobType || "",

    workMode:
      profile?.workMode || "",

    preferredLocation:
      profile?.preferredLocation || ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addExperience = () => {

    setFormData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          company: "",
          role: "",
          duration: "",
          description: ""
        }
      ]
    }));

  };

  const addProject = () => {

    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          techStack: "",
          github: "",
          demo: "",
          description: ""
        }
      ]
    }));

  };

  const handleExperienceChange = (
    index,
    field,
    value
  ) => {

    const updated = [...formData.experiences];

    updated[index][field] = value;

    setFormData({
      ...formData,
      experiences: updated
    });

  };

  const handleProjectChange = (
    index,
    field,
    value
  ) => {

    const updated = [...formData.projects];

    updated[index][field] = value;

    setFormData({
      ...formData,
      projects: updated
    });

  };

  const handleSubmit = async () => {

    await updateProfile(formData);

    navigate("/student/profile");
  };

  return (

    <div className="edit-profile-page">

      {/* HERO */}

      <section className="edit-profile-hero">

        <h1>Edit Profile</h1>

        <p>
          Keep your profile updated to attract recruiters.
        </p>

      </section>

      {/* FORM */}

      <div className="edit-profile-container">

        <div className="edit-profile-card">

          <h2>Profile Picture</h2>

          <input
            type="file"
            accept="image/*"
          />

          {/* BASIC */}

          <h2>Basic Information</h2>

          <div className="form-grid">

            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              value={profile?.email || ""}
              disabled
            />

            <input
              name="headline"
              placeholder="Frontend Developer"
              value={formData.headline}
              onChange={handleChange}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
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

          </div>

          {/* EDUCATION */}

          <h2>Education</h2>

          <div className="form-grid">

            <input
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
            />

            <input
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
            />

            {/* <input
              name="batch"
              placeholder="Batch"
              value={formData.batch}
              onChange={handleChange}
            /> */}

            <input
              name="graduationYear"
              placeholder="Graduation Year"
              value={formData.graduationYear}
              onChange={handleChange}
            />

            {/* <input
              name="currentYear"
              placeholder="Current Year"
              value={formData.currentYear}
              onChange={handleChange}
            /> */}

            <input
              name="cgpa"
              placeholder="CGPA"
              value={formData.cgpa}
              onChange={handleChange}
            />

          </div>

          {/* ABOUT */}

          <h2>About</h2>

          <textarea
            name="bio"
            placeholder="Tell recruiters about yourself..."
            value={formData.bio}
            onChange={handleChange}
          />

          {/* SKILLS */}

          <h2>Skills</h2>

          <textarea
            name="skills"
            rows="3"
            placeholder="React, Node.js, MongoDB..."
            value={formData.skills}
            onChange={handleChange}
          />

          {/* EXPERIENCE */}

          <h2>Experience</h2>

          {
            formData.experiences.map(
              (exp, index) => (

                <div
                  className="experience-block"
                  key={index}
                >

                  <div className="form-grid">

                    <input
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "company",
                          e.target.value
                        )
                      }
                    />

                    <input
                      placeholder="Role"
                      value={exp.role}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "role",
                          e.target.value
                        )
                      }
                    />

                    <input
                      placeholder="Duration (May 2025 - Aug 2025)"
                      value={exp.duration || ""}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "duration",
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <textarea
                    placeholder="Describe your work..."
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  {
                    formData.experiences.length > 1 && (
                      <button
                        type="button"
                        className="danger-btn"
                        onClick={() => {

                          const updated =
                            formData.experiences.filter(
                              (_, i) => i !== index
                            );

                          setFormData({
                            ...formData,
                            experiences: updated
                          });

                        }}
                      >
                        Remove Experience
                      </button>
                    )
                  }

                </div>

              )
            )
          }

          <button
            type="button"
            className="secondary-btn"
            onClick={addExperience}
          >
            + Add Experience
          </button>

          {/* PROJECTS */}

          <h2>Projects</h2>

          {
            formData.projects.map(
              (project, index) => (

                <div
                  className="project-block"
                  key={index}
                >

                  <div className="form-grid">

                    <input
                      placeholder="Project Name"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "name",
                          e.target.value
                        )
                      }
                    />

                    <input
                      placeholder="Tech Stack (React, Node.js)"
                      value={project.techStack || ""}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "techStack",
                          e.target.value
                        )
                      }
                    />

                    <input
                      placeholder="Github Link"
                      value={project.github}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "github",
                          e.target.value
                        )
                      }
                    />

                    <input
                      placeholder="Live Demo Link"
                      value={project.demo}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "demo",
                          e.target.value
                        )
                      }
                    />

                  </div>

                  <textarea
                    placeholder="Project Description"
                    value={project.description}
                    onChange={(e) =>
                      handleProjectChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />

                  {
                    formData.projects.length > 1 && (
                      <button
                        type="button"
                        className="danger-btn"
                        onClick={() => {

                          const updated =
                            formData.projects.filter(
                              (_, i) => i !== index
                            );

                          setFormData({
                            ...formData,
                            projects: updated
                          });

                        }}
                      >
                        Remove Project
                      </button>
                    )
                  }

                </div>

              )
            )
          }

          <button
            type="button"
            className="secondary-btn"
            onClick={addProject}
          >
            + Add Project
          </button>
          {/* LINKS */}

          <h2>Links</h2>

          <div className="form-grid">

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

            <input
              name="portfolio"
              placeholder="Portfolio Website"
              value={formData.portfolio}
              onChange={handleChange}
            />

            <input
              name="leetcode"
              placeholder="LeetCode"
              value={formData.leetcode}
              onChange={handleChange}
            />

          </div>
          {/* RESUME */}

          <h2>Resume</h2>

          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                resume: e.target.files[0]
              }))
            }
          />

          {
            formData.resume && (
              <p className="resume-file-name">
                Selected Resume: {formData.resume.name}
              </p>
            )
          }
          {/* PREFERENCES */}

          <h2>Preferences</h2>

          <div className="form-grid">

            <select
              name="openToWork"
              value={formData.openToWork}
              onChange={handleChange}
            >
              <option value="true">
                Open To Work
              </option>

              <option value="false">
                Not Looking
              </option>
            </select>

            <select
              name="preferredJobType"
              value={formData.preferredJobType}
              onChange={handleChange}
            >
              <option value="">
                Preferred Job Type
              </option>

              <option>Full Time</option>
              <option>Internship</option>
              <option>Part Time</option>
              <option>Contract</option>
              <option>Freelance</option>

            </select>

            <select
              name="workMode"
              value={formData.workMode}
              onChange={handleChange}
            >
              <option value="">
                Preferred Work Mode
              </option>

              <option>Remote</option>
              <option>Hybrid</option>
              <option>On Site</option>

            </select>

            <input
              name="preferredLocation"
              placeholder="Preferred Location"
              value={formData.preferredLocation}
              onChange={handleChange}
            />

          </div>

          {/* SAVE */}

          <button
            className="save-profile-btn"
            onClick={handleSubmit}
          >
            Save Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default EditProfile;