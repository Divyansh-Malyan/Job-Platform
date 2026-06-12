import React, { useState } from "react";
import "./RecruiterPost.css";
import { createJob, getRecruiterCompany } from "../../api/jobApi";
import toast from "react-hot-toast";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { getRecruiterJobs } from "../../api/jobApi";
import { useEffect } from "react";

const RecruiterPost = () => {
  const initialFormData = {
    role: "",
    description_job: "",
    location_job: "",
    exp_required: "",
    salary: "",
    deadline: "",
    job_type: "Full Time",
    skills_required: "",
    work_mode: "Remote",
    openings: 1,
  };
  const [companyInfo, setCompanyInfo] = useState({
    company_name: "",
    website: "",
  });


  const [formData, setFormData] =
    useState(initialFormData);

  const { user } = useUserStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await createJob({
        recruiterId: user.id,
        company_name: companyInfo.company_name,
        website: companyInfo.website,
        ...formData,
        status: "Active",
      });

      toast.success(
        "Job Posted Successfully"
      );

      setFormData(initialFormData);

      navigate("/manage-jobs");

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed To Post Job"
      );

    }
  };


  const handleDraft = async () => {
    try {

      await createJob({
        recruiterId: user.id,
        company_name: companyInfo.company_name,
        website: companyInfo.website,
        ...formData,
        status: "Draft",
      });

      toast.success("Draft Saved");

      setFormData(initialFormData);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed To Save Draft"
      );

    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchCompanyInfo();
    }
  }, [user]);

  const fetchCompanyInfo = async () => {
    try {

      const data =
        await getRecruiterCompany(user.id);

      setCompanyInfo({
        company_name:
          data.company.company_name || "",
        website:
          data.company.website || "",
      });

    } catch (error) {

      console.error(error);

    }
  };


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

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="input-group">
                <label>Company Name</label>

                <input
                  type="text"
                  value={companyInfo.company_name}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      company_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input-group">
                <label>Company Website</label>

                <input
                  type="text"
                  value={companyInfo.website}
                  onChange={(e) =>
                    setCompanyInfo({
                      ...companyInfo,
                      website: e.target.value,
                    })
                  }
                />
              </div>

            </div>

            {/* Row 1 */}

            <div className="form-row">

              <div className="input-group">

                <label>Job Title</label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Frontend Developer"
                />

              </div>

            </div>

            {/* Row 2 */}

            <div className="form-row">

              <div className="input-group">

                <label>Location</label>

                <input
                  type="text"
                  name="location_job"
                  value={formData.location_job}
                  onChange={handleChange}
                  placeholder="Remote / Delhi / Bangalore"
                />

              </div>

              <div className="input-group">

                <label>Job Type</label>

                <select
                  name="job_type"
                  value={formData.job_type}
                  onChange={handleChange}
                >

                  <option>Full Time</option>

                  <option>Part Time</option>

                  <option>Internship</option>

                  <option>Contract</option>

                  <option>Freelance</option>

                </select>

              </div>
              <div className="input-group">
                <label>Work Mode</label>

                <select
                  name="work_mode"
                  value={formData.work_mode}
                  onChange={handleChange}
                >
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>On Site</option>
                </select>
              </div>

            </div>

            {/* Row 3 */}

            <div className="form-row">

              <div className="input-group">

                <label>Salary Range</label>

                <input
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="₹20,000 - ₹50,000"
                />

              </div>

              <div className="input-group">

                <label>Experience Level</label>

                <select
                  name="exp_required"
                  value={formData.exp_required}
                  onChange={handleChange}
                >

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
                  name="openings"
                  value={formData.openings}
                  onChange={handleChange}
                  placeholder="5"
                />

              </div>

            </div>

            {/* Job Description */}

            <div className="input-group">

              <label>Job Description</label>

              <textarea
                rows="8"
                name="description_job"
                value={formData.description_job}
                onChange={handleChange}
                placeholder="Describe the role..."
              ></textarea>

            </div>

            {/* Skills */}

            <div className="input-group">

              <label>Required Skills</label>

              <input
                type="text"
                name="skills_required"
                value={formData.skills_required}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB"
              />

            </div>

            {/* Deadline */}

            <div className="input-group">

              <label>Application Deadline</label>

              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />

            </div>

            {/* Actions */}

            <div className="form-actions">

              <button
                type="button"
                className="draft-btn"
                onClick={handleDraft}
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