  import { Link } from 'react-router-dom';
  import AnimatedCounters from '../components/AnimatedCounters.jsx'; 
  import PartnersSection from '../components/Partners.jsx';
  import '../components/Responsive.css'

  const Home = () => {
      // --------------------------------------------------------
      // Homepage Content Data
      // --------------------------------------------------------

      const companyIntro = {
          headline: "The Foundation for Integrated Excellence",
          body: "NBS Holdings is a diversified holding company committed to building a sustainable future across various key sectors. Our strength lies in our integrated business ecosystem, driving strategic growth and delivering long-term value to our stakeholders and the nation.",
          ctaText: "Discover Our Vision"
      };

      const counterStats = [
      // Note: 'end' is a pure number. Formatting will be handled by CountUp's props.
      { end: 3500000000, label: "Assets Under Management", prefix: "$", suffix: "B", isLargeNumber: true },
      { end: 40, label: "Years of Integrated Operations", prefix: "   ", suffix: "+" },
      { end: 8, label: "Core Business Sectors", prefix: "", suffix: "" },
      { end: 500, label: "Dedicated Employees Globally", prefix: "", suffix: "+" },
  ];
      
      // --------------------------------------------------------

      return (
          <main>
              
              {/* 1. DYNAMIC BANNER / HERO SECTION */}
              <section className="dynamic-banner">
                  <div className="banner-content">
                      <div className="banner-logo-overlay">
                          <img src="/images/Logo-02.svg" alt="NBS Holdings Logo" className="logo-on-banner" />
                      </div>
                      <div className="banner-text-area">
                          <h1 className="event-title">Celebrating National Day 2025</h1>
                          <p className="event-subtitle">A commitment to progress and vision.</p>
                          {/* Optional CTA */}
                          <Link to="/news" className="banner-cta">View Event Details</Link>
                      </div>
                  </div>
              </section>

              {/* 2. BRIEF COMPANY INTRODUCTION */}
              <section className="company-introduction">
                  <div className="container-introduction">
                      <h2 className="intro-headline">{companyIntro.headline}</h2>
                      <p className="intro-body">{companyIntro.body}</p>
                      <Link to="/about" className="intro-cta-link">
                          {companyIntro.ctaText}
                      </Link>
                  </div>
              </section>
              
              {/* 3. ANIMATED COUNTERS */}
              <AnimatedCounters stats={counterStats} />

              <PartnersSection />
          </main>
      );
  };

  export default Home;