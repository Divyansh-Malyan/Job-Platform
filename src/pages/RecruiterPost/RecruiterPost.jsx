import React from "react";
import "./RecruiterPost.css";

const RecruiterPost = () => {
  return (
    <div className="post-job-page">

      {/* Hero Section */}

      <section className="post-job-hero">

        <h1>Post a Job</h1>

        <p>
          Find talented students and professionals for your company.
        </p>

      </section>

      {/* Main Form */}

      <section className="post-job-container">

        <div className="post-job-card">

          <h2>Create New Job Opening</h2>

          <form>

            {/* Row 1 */}

            <div className="form-row">

              <div className="input-group">

                <label>Job Title</label>

                <input
                  type="text"
                  placeholder="Frontend Developer"
                />

              </div>

              <div className="input-group">

                <label>Company Name</label>

                <input
                  type="text"
                  placeholder="Hustler Inc."
                />

              </div>

            </div>

            {/* Row 2 */}

            <div className="form-row">

              <div className="input-group">

                <label>Location</label>

                <input
                  type="text"
                  placeholder="Remote / Delhi / Bangalore"
                />

              </div>

              <div className="input-group">

                <label>Job Type</label>

                <select>

                  <option>Full Time</option>

                  <option>Internship</option>

                  <option>Part Time</option>

                  <option>Freelance</option>

                  <option>Remote</option>

                  <option>Hybrid</option>

                </select>

              </div>

            </div>

            {/* Row 3 */}

            <div className="form-row">

              <div className="input-group">

                <label>Salary Range</label>

                <input
                  type="text"
                  placeholder="₹20,000 - ₹50,000"
                />

              </div>

              <div className="input-group">

                <label>Experience Level</label>

                <select>

                  <option>Fresher</option>

                  <option>0-1 Years</option>

                  <option>1-3 Years</option>

                  <option>3-5 Years</option>

                  <option>5+ Years</option>

                </select>

              </div>

            </div>

            {/* Row 4 */}

            <div className="form-row">

              <div className="input-group">

                <label>Number of Openings</label>

                <input
                  type="number"
                  placeholder="5"
                />

              </div>

              <div className="input-group">

                <label>Job Status</label>

                <select>

                  <option>Active</option>

                  <option>Draft</option>

                  <option>Closed</option>

                </select>

              </div>

            </div>

            {/* Job Description */}

            <div className="input-group">

              <label>Job Description</label>

              <textarea
                rows="8"
                placeholder="Describe the role, responsibilities, and expectations..."
              ></textarea>

            </div>

            {/* Responsibilities */}

            <div className="input-group">

              <label>Responsibilities</label>

              <textarea
                rows="6"
                placeholder="List key responsibilities..."
              ></textarea>

            </div>

            {/* Skills */}

            <div className="input-group">

              <label>Required Skills</label>

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
              />

            </div>

            {/* Deadline */}

            <div className="input-group">

              <label>Application Deadline</label>

              <input type="date" />

            </div>

            {/* Actions */}

            <div className="form-actions">

              <button
                type="button"
                className="draft-btn"
              >
                Save Draft
              </button>

              <button
                type="submit"
                className="publish-btn"
              >
                Publish Job
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
};

export default RecruiterPost;