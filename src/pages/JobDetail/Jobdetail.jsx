import React from "react";
import "./JobDetail.css";

import {
  BriefcaseBusiness,
  Clock3,
  Wallet,
  MapPin,
  Bookmark,
  CircleCheck,
} from "lucide-react";

const JobDetail = () => {
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
              <span>10 min ago</span>

              <Bookmark size={22} />
            </div>

            <div className="job-title-row">

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                alt="company"
              />

              <div>
                <h2>Corporate Solutions Executive</h2>
                <p>Leffler and Sons</p>
              </div>

            </div>

            <div className="job-meta">

              <div className="meta-item">
                <BriefcaseBusiness size={18} />
                <span>Commerce</span>
              </div>

              <div className="meta-item">
                <Clock3 size={18} />
                <span>Full Time</span>
              </div>

              <div className="meta-item">
                <Wallet size={18} />
                <span>$40000-$42000</span>
              </div>

              <div className="meta-item">
                <MapPin size={18} />
                <span>New-York, USA</span>
              </div>

            </div>

            <button className="apply-btn">
              Apply Job
            </button>

          </div>

          {/* DESCRIPTION */}

          <div className="detail-section">

            <h3>Job Description</h3>

            <p>
              Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
              Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
            </p>

            <p>
              Commodo fringilla sed tempor risus laoreet ultricies ipsum.
              Habitasse morbi faucibus in iaculis lectus.
            </p>

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

            <h3>Professional Skills</h3>

            <div className="points-list">

              <div className="point-item">
                <CircleCheck size={18} />
                <p>React.js & Frontend Development</p>
              </div>

              <div className="point-item">
                <CircleCheck size={18} />
                <p>REST APIs & Backend Integration</p>
              </div>

              <div className="point-item">
                <CircleCheck size={18} />
                <p>Communication & Team Collaboration</p>
              </div>

            </div>

          </div>

          {/* TAGS */}

          <div className="detail-section">

            <h3>Tags:</h3>

            <div className="tags">

              <span>Full Time</span>
              <span>Commerce</span>
              <span>New-York</span>
              <span>Corporate</span>
              <span>Location</span>

            </div>

          </div>

          {/* RELATED JOBS */}

          <div className="related-jobs">

            <h2>Related Jobs</h2>

            <p>
              Explore similar opportunities matching your skills.
            </p>

            {/* JOB CARD */}

            <div className="related-job-card">

              <div className="related-top">

                <span>24 min ago</span>

                <Bookmark size={18} />

              </div>

              <div className="related-title">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
                  alt="company"
                />

                <div>
                  <h3>Internal Creative Coordinator</h3>
                  <p>Green Group</p>
                </div>

              </div>

              <div className="related-meta">

                <div className="meta-item">
                  <BriefcaseBusiness size={16} />
                  <span>Commerce</span>
                </div>

                <div className="meta-item">
                  <Clock3 size={16} />
                  <span>Full Time</span>
                </div>

                <div className="meta-item">
                  <Wallet size={16} />
                  <span>$44000-$46000</span>
                </div>

                <div className="meta-item">
                  <MapPin size={16} />
                  <span>New-York, USA</span>
                </div>

                <button>Job Details</button>

              </div>

            </div>

          </div>

        </div>

        {/* SIDEBAR */}

        <div className="job-detail-sidebar">

          <div className="sidebar-card">

            <h3>Job Overview</h3>

            <div className="overview-item">
              <span>Job Title</span>
              <p>Corporate Solutions Executive</p>
            </div>

            <div className="overview-item">
              <span>Job Type</span>
              <p>Full Time</p>
            </div>

            <div className="overview-item">
              <span>Experience</span>
              <p>5 Years</p>
            </div>

            <div className="overview-item">
              <span>Offered Salary</span>
              <p>$40000-$42000</p>
            </div>

            <div className="overview-item">
              <span>Location</span>
              <p>New-York, USA</p>
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