import React, { useState } from 'react';

// --- DATA ---
const coreValues = [
  { icon: '🌱', title: 'Sustainability', description: 'Embedding eco-conscious principles in every design choice.' },
  { icon: '💡', title: 'Innovation', description: 'Challenging norms with forward-thinking and creative solutions.' },
  { icon: '💪', title: 'Empowerment', description: 'Fostering partnerships with clients, communities, and colleagues.' },
  { icon: '⚖️', title: 'Integrity', description: 'Upholding the highest standards of professionalism and ethics.' },
  { icon: '🤝', title: 'Partnership & Trust', description: 'Upholding the highest standards of professionalism and ethics.' },
  { icon: '🎯', title: 'Executional Excellence', description: 'Upholding the highest standards of professionalism and ethics.' },
];

const experts = [
  { 
    photo: '/images/man-02.jpg',
    name: 'Dr. Evelyn Reed', 
    title: 'Chief Architect & Design Lead', 
    bio: 'Pioneering sustainable urban development with two decades of experience in large-scale infrastructure projects. Dr. Reed has led over 50 major projects across the Middle East and holds patents in sustainable building materials.',
    fullBio: 'Dr. Evelyn Reed is an award-winning architect with 20+ years of experience in sustainable urban development. She holds a PhD in Architectural Engineering from MIT and has been recognized with the Global Sustainability Award three years running. Her expertise includes green building certification, urban planning, and innovative material science applications.',
    specialties: ['Sustainable Design', 'Urban Planning', 'Green Certification'],
    education: 'PhD in Architectural Engineering, MIT',
    awards: ['Global Sustainability Award 2022', 'Innovation in Architecture 2021']
  },
  { 
    photo: '/images/man-02.jpg',
    name: 'Mark Chen', 
    title: 'Senior Project Manager', 
    bio: 'Oversees complex projects from inception to completion, ensuring timely and budget-compliant delivery across all sectors.',
    fullBio: 'Mark Chen brings 15 years of project management expertise in large-scale construction and development projects. With PMP and Six Sigma certifications, Mark has successfully delivered projects worth over $2B USD. His meticulous approach to risk management and stakeholder coordination ensures project success even in challenging environments.',
    specialties: ['Project Management', 'Risk Assessment', 'Stakeholder Coordination'],
    education: 'MBA, Harvard Business School',
    certifications: ['PMP', 'Six Sigma Black Belt']
  },
  { 
    photo: '/images/man-02.jpg',
    name: 'Sarah Khan', 
    title: 'Head of Structural Engineering', 
    bio: 'Specialist in seismically resilient design and the integration of smart materials into modern constructions.',
    fullBio: 'Sarah Khan is a structural engineering expert specializing in seismic-resistant design and smart material integration. With a Masters from Stanford University, she has pioneered several innovative construction techniques that have been adopted industry-wide. Sarah leads our structural integrity team and ensures all projects meet the highest safety standards.',
    specialties: ['Seismic Engineering', 'Smart Materials', 'Structural Analysis'],
    education: 'M.S. Structural Engineering, Stanford University',
    publications: ['Advanced Seismic Design Principles', 'Smart Materials in Modern Construction']
  },
  { 
    photo: '/images/man-02.jpg',
    name: 'David Lee', 
    title: 'Environmental Consultant', 
    bio: 'Expert in LEED certification processes and optimizing building performance for net-zero energy goals.',
    fullBio: 'David Lee is our lead environmental consultant with extensive experience in sustainable building practices. As a LEED Fellow with 12 years of experience, David has certified over 200 buildings worldwide. His expertise in energy modeling and environmental impact assessment helps clients achieve their sustainability goals while optimizing operational costs.',
    specialties: ['LEED Certification', 'Energy Modeling', 'Environmental Impact'],
    education: 'M.Sc. Environmental Science, UC Berkeley',
    certifications: ['LEED Fellow', 'BREEAM Assessor']
  },
];

const About = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExpert(null);
  };

  return (
    <div className="about-page-wrapper">

      {/* --------------------------- 1. ABOUT NBS HOLDINGS HERO --------------------------- */}
      <section className="about-intro-banner">
        <div className="container-introduction">
          <div className="transition-effect">
            <h1 className="banner-title">About Us</h1>
            <div className="banner-underline"></div>
            <p className="banner-paragraph">
              NBS Holdings was founded as an integrated Saudi platform that combines deep economic insight with practical execution.
              We operate as a multidisciplinary group in consulting, investment, engineering, technology, and sustainability, providing practical solutions that transform ideas into projects with lasting economic and social impact.
            </p>
            <p className="banner-paragraph">
              We work closely with partners from both the public and private sectors, as well as investors, to develop projects aligned with Saudi Vision 2030 — combining strategic analysis, smart financing, and on-ground implementation excellence.
            </p>
            <p className="banner-paragraph">
              Built on the principle of smart growth through partnership, NBS views every collaboration as an opportunity to create new value.
              Each project we deliver strengthens a broader ecosystem that believes true success is shared, not individual. Therefore, we go beyond traditional consulting — designing and executing strategic and developmental solutions that support national industries, encourage innovation, and open new horizons for sustainable growth in both local and global markets.
            </p>
          
        </div>
        </div>
        
      </section>

      {/* --------------------------- 2. VISION / MISSION --------------------------- */}
      <section className="about-hero-section">
        <div className="container-introduction">
        
          <div className="vision-mission-grid">
            <div className="vision-block">
              <h3 className="section-heading">Vision</h3>
              <p className="section-body">
                To be a leading Saudi model in building an integrated business ecosystem that connects economic insight with practical execution — redefining partnership through genuine collaboration that drives transformation in investment, sustainability, and technology, where success is built collectively, not individually.​ 
              </p>
            </div>

            <div className="mission-block">
              <h3 className="section-heading">Mission</h3>
              <p className="section-body">
                To enable smart and sustainable growth through an integrated ecosystem that unites consulting, investment, and execution, creating real-world projects with tangible economic and social value.​ 
                We connect minds with opportunities, and opportunities with results, building an environment where success is defined by collaboration, not scale.​ 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- 3. CORE VALUES --------------------------- */}
      <section className="core-values-section">
        <div className="container-introduction">
          <h2 className="main-section-heading">Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- 4. CEO MESSAGE --------------------------- */}
      <section className="ceo-message-section">
        <div className="container-introduction">
          <h2 className="main-section-heading">A Message From Our CEO</h2>
          <div className="ceo-content-flex">
            <div className="ceo-image-container">
              <img src="/images/man-01.webp" alt="CEO, [Name]" className="ceo-photo" />
            </div>
            <div className="ceo-text-block">
              <blockquote className="ceo-quote">
                "Our commitment goes beyond just constructing buildings; it is about cultivating spaces that enhance life, respect the environment, and stand as monuments to enduring quality. We believe that thoughtful design is the foundation of a better tomorrow."
              </blockquote>
              <p className="ceo-signature-name">Ava Maxwell</p>
              <p className="ceo-title-line">Chief Executive Officer</p>
              <div className="signature-container">
                <img src="/images/sign-02.svg" alt="CEO Digital Signature" className="ceo-signature" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- 6. EXPERTS / TEAM CARDS WITH BIO MODAL --------------------------- */}
      <section className="expert-team-section">
        <div className="container-introduction">
          <h2 className="main-section-heading">Meet Our Experts</h2>  
          <div className="expert-cards-grid">
            {experts.map((expert, index) => (
              <div 
                key={index} 
                className="expert-card"
                onClick={() => handleExpertClick(expert)}
              >
                <div className="expert-photo-wrapper">
                  <img src={expert.photo} alt={expert.name} className="expert-photo" />
                  <div className="expert-click-hint">Click for Bio →</div>
                </div>
                <h3 className="expert-name">{expert.name}</h3>
                <p className="expert-title">{expert.title}</p>
                <p className="expert-bio">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- BIO MODAL --------------------------- */}
      {isModalOpen && selectedExpert && (
        <div className="expert-modal-overlay" onClick={closeModal}>
          <div className="expert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>×</button>
            
            <div className="modal-expert-header">
              <div className="modal-expert-image">
                <img src={selectedExpert.photo} alt={selectedExpert.name} />
              </div>
              <div className="modal-expert-info">
                <h2>{selectedExpert.name}</h2>
                <p className="modal-expert-title">{selectedExpert.title}</p>
                <p className="modal-expert-education">{selectedExpert.education}</p>
              </div>
            </div>

            <div className="modal-expert-body">
              <div className="modal-bio-section">
                <h3>Biography</h3>
                <p>{selectedExpert.fullBio}</p>
              </div>

              {selectedExpert.specialties && (
                <div className="modal-specialties-section">
                  <h3>Areas of Expertise</h3>
                  <div className="specialties-tags">
                    {selectedExpert.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>
              )}

              {selectedExpert.certifications && (
                <div className="modal-certifications-section">
                  <h3>Certifications</h3>
                  <ul>
                    {selectedExpert.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExpert.awards && (
                <div className="modal-awards-section">
                  <h3>Awards & Recognition</h3>
                  <ul>
                    {selectedExpert.awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default About;