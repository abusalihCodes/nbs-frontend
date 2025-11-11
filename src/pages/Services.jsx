import React from "react";
import {
  Briefcase,
  TrendingUp,
  PackageSearch,
  Cpu,
  Leaf,
  CircleDot,
  CheckCircle2,
  Factory,
  Zap,
  Building2,
  Network,
  Recycle,
} from "lucide-react";


const servicePillars = [
  {
    icon: <Briefcase />,
    title: "Consulting",
    desc: "Strategic guidance and insight for sustainable, high-impact business decisions.",
  },
  {
    icon: <PackageSearch />,
    title: "EPC & Logistics",
    desc: "Comprehensive engineering, procurement, construction, and logistics for reliable delivery.",
  },
  {
    icon: <Cpu />,
    title: "Technology & Innovation",
    desc: "Driving digital transformation through smart systems, automation, and innovation.",
  },
  {
    icon: <Leaf />,
    title: "Environment & Sustainability",
    desc: "Eco-conscious frameworks for responsible progress and sustainable outcomes.",
  },
];

const workflowSteps = [
  { icon: <CircleDot />, title: "Discover", desc: "Understanding client vision and project scope." },
  { icon: <CheckCircle2 />, title: "Design", desc: "Translating strategy into actionable solutions." },
  { icon: <PackageSearch />, title: "Deliver", desc: "Executing with precision, efficiency, and accountability." },
  { icon: <Leaf />, title: "Sustain", desc: "Ensuring lasting value and environmental responsibility." },
];

const sectors = [
  { icon: <Factory />, label: "Industrial" },
  { icon: <Zap />, label: "Energy" },
  { icon: <Building2 />, label: "Infrastructure" },
  { icon: <Network />, label: "Technology" },
  { icon: <Recycle />, label: "Environment" },
];

const Services = () => {
  return (
    <div className="services-wrapper">
      {/* HEADER */}
      
      <header className="services-hero">
        <div className="transition-effect">
        <div className="hero-content">
          <h1>Our Services</h1>
          <div className="banner-underline"></div>
          <div className="services-headtext"><p>Precision. Integrity. Innovation — the foundation of everything we deliver.</p></div>
          <p>NBS Holdings operates across a broad range of vital sectors that represent the pillars of the national economy and the growth markets of the future.​

The diversity of our services reflects our ability to integrate investment, engineering, technology, and sustainability, positioning us as a trusted strategic partner for both public and private sector projects.​</p>
        </div>
        </div>
      </header>
    

      {/* CORE PILLARS */}
      <section className="pillars-section">
        <h2 className="section-title">Core Pillars</h2>
        <div className="pillars-grid">
          {servicePillars.map((pillar, i) => (
            <div className="pillar-card" key={i}>
              <div className="pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="workflow-section">
        <h2 className="section-title-1">How We Work</h2>
        <div className="workflow-timeline">
          {workflowSteps.map((step, i) => (
            <div className="workflow-step" key={i}>
              <div className="workflow-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {i < workflowSteps.length - 1 && <div className="workflow-line"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* SECTORS */}
      <section className="sectors-section">
        <h2 className="section-title">Sectors We Serve</h2>
        <div className="sectors-grid">
          {sectors.map((s, i) => (
            <div className="sector-item" key={i}>
              <div className="sector-icon">{s.icon}</div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
