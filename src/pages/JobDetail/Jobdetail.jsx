import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./JobDetail.css";
import { applyJob, checkApplied } from "../../api/applicationApi";
import useUserStore from "../../store/userStore";
import { useNavigate } from "react-router-dom";
import { saveJob, removeSavedJob, checkSavedJob } from "../../api/savedJobApi";

import {
  BriefcaseBusiness,
  Clock3,
  Wallet,
  MapPin,
  Bookmark,
  CircleCheck,
} from "lucide-react";

const JobDetail = () => {

  const user = useUserStore((state) => state.user);
  const profile = useUserStore((state) => state.profile);
  const { id } = useParams();
  console.log("Job ID from URL:", id);
  const [job, setJob] = useState(null);
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [relatedJobs, setRelatedJobs] = useState([]);

  const navigate = useNavigate();
  if (profile?.role === "recruiter") {
    return (
      <div>
        Recruiters cannot apply for jobs.
      </div>
    );
  }
  console.log(profile);

  useEffect(() => {

    const checkUserApplication = async () => {

      if (!profile || !job) return;

      try {

        const response = await checkApplied(
          job.id,
          profile.user_student_id
        );

        setApplied(response.applied);

      } catch (error) {

        console.error(error);

      }
    };

    checkUserApplication();

  }, [job, profile]);

  useEffect(() => {

    const fetchJob = async () => {

      try {

        const response = await axios.get(
          `http://localhost:8080/jobs/${id}`
        );

        const currentJob = response.data.job;

        setJob(currentJob);

        const jobsResponse = await axios.get(
          "http://localhost:8080/jobs"
        );

        const filteredJobs = jobsResponse.data.jobs
          .filter((j) => {

            if (j.id === currentJob.id) {
              return false;
            }

            const sameJobType =
              j.job_type?.toLowerCase().trim() ===
              currentJob.job_type?.toLowerCase().trim();

            const sameLocation =
              j.location_job?.toLowerCase().trim() ===
              currentJob.location_job?.toLowerCase().trim();

            const roleKeyword =
              currentJob.role
                ?.toLowerCase()
                .split(" ")[0];

            const similarRole =
              j.role
                ?.toLowerCase()
                .includes(roleKeyword);

            return (
              sameJobType ||
              sameLocation ||
              similarRole
            );

          });

        if (filteredJobs.length > 0) {

          setRelatedJobs(
            filteredJobs.slice(0, 3)
          );

        } else {

          const fallbackJobs = jobsResponse.data.jobs
            .filter((j) => j.id !== currentJob.id)
            .slice(0, 2);

          setRelatedJobs(fallbackJobs);

        }

      } catch (error) {

        console.error(error);

      }
    };

    fetchJob();

  }, [id]);

  useEffect(() => {

    const checkSaved = async () => {

      if (!profile || !job) return;

      try {

        const response =
          await checkSavedJob(
            profile.user_student_id,
            job.id
          );

        setSaved(
          response.saved
        );

      } catch (error) {

        console.error(error);

      }

    };

    checkSaved();

  }, [profile, job]);

  if (!job) {
    return <h2>Loading...</h2>;
  }

  console.log("User:", user);
  console.log("Profile:", profile);

  const handleApply = async () => {

    if (!user || !profile) {

      navigate("/login", {
        state: {
          redirectTo: `/jobdetail/${job.id}`
        }
      });

      return;
    }

    try {

      await applyJob(
        job.id,
        profile.user_student_id
      );

      setApplied(true);

      alert("Application submitted successfully");

    } catch (error) {

      if (
        error.response?.data?.message ===
        "You have already applied for this job"
      ) {
        setApplied(true);
      }

      alert(
        error.response?.data?.message ||
        "Failed To Apply"
      );

    }
  };



  const handleSaveJob = async () => {

    if (!profile) {

      navigate("/login", {
        state: {
          redirectTo: `/jobdetail/${job.id}`
        }
      });

      return;
    }

    try {

      if (saved) {

        await removeSavedJob(
          profile.user_student_id,
          job.id
        );

        setSaved(false);

      } else {

        await saveJob(
          profile.user_student_id,
          job.id
        );

        setSaved(true);

      }

    } catch (error) {

      console.error(error);

    }

  };

  const getTimeAgo = (date) => {

    const seconds =
      Math.floor(
        (new Date() - new Date(date)) / 1000
      );

    const minutes =
      Math.floor(seconds / 60);

    const hours =
      Math.floor(minutes / 60);

    const days =
      Math.floor(hours / 24);

    if (days > 0)
      return `${days} day${days > 1 ? "s" : ""} ago`;

    if (hours > 0)
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    if (minutes > 0)
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

    return "Just now";
  };

  return (
    <div className="job-detail-page">

      {/* HERO */}

      <section className="job-detail-hero">
        <h1>Job Details</h1>
      </section>

      {/* MAIN */}

      <section className="job-detail-container">

        {/* LEFT SIDE */}

        <div className="job-detail-left">

          {/* TOP CARD */}

          <div className="job-top-card">

            <div className="job-save">

              <span>
                {getTimeAgo(job.created_at)}
              </span>

              <Bookmark
                size={22}
                onClick={handleSaveJob}
                style={{
                  cursor: "pointer",
                  fill: saved
                    ? "#35b0a7"
                    : "none",
                  color: "#35b0a7"
                }}
              />

            </div>

            <div className="job-title-row">

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="company"
              />

              <div>
                <h2>{job.role}</h2>
                <p>{job.company_name} • {job.location_job}</p>
              </div>

            </div>

            <div className="job-meta">

              {/* <div className="meta-item">
                <BriefcaseBusiness size={18} />
                <span>Commerce</span>
              </div> */}

              <div className="meta-item">
                <Clock3 size={18} />
                <span>{job.job_type}</span>
              </div>

              <div className="meta-item">
                <Wallet size={18} />
                <span>{job.salary}</span>
              </div>

              <div className="meta-item">
                <MapPin size={18} />
                <span>{job.location_job}</span>
              </div>

            </div>

            <button
              className="apply-btn"
              disabled={applied}
              onClick={handleApply}
            >
              {
                applied
                  ? "Applied"
                  : !user
                    ? "Login to Apply"
                    : "Apply Job"
              }
            </button>

          </div>

          {/* DESCRIPTION */}

          <div className="detail-section">

            <h3>Job Description</h3>

            <p>{job.description_job}</p>

          </div>

          {/* RESPONSIBILITIES */}

          <div className="detail-section">

            <h3>Key Responsibilities</h3>

            <div className="points-list">

              <div className="point-item">
                <CircleCheck size={18} />
                <p>
                  Ornare varius faucibus nisi vitae vitae cras ornare.
                </p>
              </div>

              <div className="point-item">
                <CircleCheck size={18} />
                <p>
                  Cras facilisis dignissim augue lorem amet.
                </p>
              </div>

              <div className="point-item">
                <CircleCheck size={18} />
                <p>
                  Tortor amet porta proin in orci imperdiet.
                </p>
              </div>

            </div>

          </div>

          {/* SKILLS */}

          <div className="detail-section">

            <h3>Required Skills</h3>

            <div className="points-list">

              {job.skills_required
                ?.split(",")
                .map((skill, index) => (

                  <div className="point-item" key={index}>
                    <CircleCheck size={18} />
                    <p>{skill.trim()}</p>
                  </div>

                ))}

            </div>

          </div>

          {/* TAGS */}

          <div className="detail-section">

            <h3>Tags:</h3>

            <div className="tags">

              <span>{job.job_type}</span>

              <span>{job.location_job}</span>

              <span>{job.exp_required}</span>

              <span>{job.salary}</span>

            </div>

          </div>

          {/* RELATED JOBS */}

          <div className="related-jobs">

            <h2>Related Jobs</h2>

            <p>
              Explore similar opportunities matching your skills.
            </p>

            {/* JOB CARD */}

            {
              relatedJobs.map((relatedJob) => (

                <div
                  className="related-job-card"
                  key={relatedJob.id}
                >

                  <div className="related-top">

                    <span>Related Job</span>

                    <Bookmark size={18} />

                  </div>

                  <div className="related-title">

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                      alt="company"
                    />

                    <div>
                      <h3>{relatedJob.role}</h3>

                      <p>
                        {relatedJob.company_name || "Company"}
                      </p>
                    </div>

                  </div>

                  <div className="related-meta">

                    <div className="meta-item">
                      <Clock3 size={16} />
                      <span>{relatedJob.job_type}</span>
                    </div>

                    <div className="meta-item">
                      <Wallet size={16} />
                      <span>{relatedJob.salary}</span>
                    </div>

                    <div className="meta-item">
                      <MapPin size={16} />
                      <span>{relatedJob.location_job}</span>
                    </div>

                    <button
                      onClick={() =>
                        navigate(`/jobdetail/${relatedJob.id}`)
                      }
                    >
                      Job Details
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="job-detail-sidebar">

          <div className="sidebar-card">

            <h3>Job Overview</h3>

            <div className="overview-item">
              <span>Job Title</span>
              <p>{job.role}</p>
            </div>

            <div className="overview-item">
              <span>Job Type</span>
              <p>{job.job_type}</p>
            </div>

            <div className="overview-item">
              <span>Experience</span>
              <p>{job.exp_required}</p>
            </div>

            <div className="overview-item">
              <span>Offered Salary</span>
              <p>{job.salary}</p>
            </div>

            <div className="overview-item">
              <span>Location</span>
              <p>{job.location_job}</p>
            </div>

          </div>

          {/* CONTACT */}

          <div className="sidebar-card">

            <h3>Send Us Message</h3>

            <form className="sidebar-form">

              <input type="text" placeholder="Full Name" />

              <input type="email" placeholder="Email Address" />

              <input type="text" placeholder="Phone Number" />

              <textarea
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default JobDetail;