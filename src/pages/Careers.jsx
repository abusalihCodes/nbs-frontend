import React, { useState } from "react";
import { Briefcase, Send, FileText, Users } from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Project Engineer",
    location: "Madinah, Saudi Arabia",
    experience: "3+ years",
    description:
      "Lead EPC projects with cross-functional teams ensuring timelines, budgets, and compliance are met.",
  },
  {
    id: 2,
    title: "Business Development Executive",
    location: "Remote / Hybrid",
    experience: "2+ years",
    description:
      "Develop and nurture client relationships while identifying strategic growth opportunities.",
  },
  {
    id: 3,
    title: "Sustainability Consultant",
    location: "Riyadh, Saudi Arabia",
    experience: "4+ years",
    description:
      "Advise clients on environmental solutions aligned with sustainable development goals.",
  },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    statement: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    alert("Your application has been received!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      jobTitle: "",
      experience: "",
      statement: "",
      cv: null,
    });
  };

  return (
      <div className="careers-full">
      {/* HERO */}
      <section className="careers-hero">
        <div className="transition-effect">
        <div className="careers-wrapper-01">
            <div className="hero-content">
                <h1>Join Our Mission</h1>
                 <div className="banner-underline"></div>
                  <p>
                    Be part of an organization shaping the future through innovation,
                    engineering, and sustainability.
                  </p>
            </div>
          </div>
          </div>
      </section>
      
      
    <div className="careers-wrapper">
      {/* JOB LISTINGS */}
      <section className="openings-section">
        <h2 className="section-title">
          <Briefcase className="section-icon" /> Current Openings
        </h2>

        <div className="openings-grid">
          {jobOpenings.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p className="job-location">{job.location}</p>
              <p className="job-experience">
                Experience Required: {job.experience}
              </p>
              <p className="job-description">{job.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="apply-section">
        <h2 className="section-title">
          <FileText className="section-icon" /> Application Form
        </h2>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Job Title Applied For</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Sustainability Consultant"
              required
            />
          </div>

          <div className="form-group">
            <label>Years of Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 3 years"
              required
            />
          </div>

          <div className="form-group">
            <label>Short Personal Statement</label>
            <textarea
              name="statement"
              value={formData.statement}
              onChange={handleChange}
              placeholder="Tell us why you’d be a great fit..."
              rows="4"
            ></textarea>
          </div>

          <div className="form-group file-upload">
            <label>Upload CV (PDF)</label>
            <input
              type="file"
              name="cv"
              accept=".pdf"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            <Send size={18} /> Submit Application
          </button>
        </form>
      </section>

      {/* TALENT DATABASE */}
      <section className="talent-section">
        <div className="talent-card">
          <Users className="talent-icon" />
          <h3>Join the NBS Talent Database</h3>
          <p>
            Didn’t find a suitable opening? Join our talent pool to be
            considered for future opportunities.
          </p>
          <button className="join-btn">Join Now</button>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Careers;
