import React from 'react';

const partnerLogos = [
    // Using free FontAwesome Solid Icons (fa-solid)
    { name: 'Global Energy Corp', iconClass: 'fa-solid fa-lightbulb' },        // Energy
    { name: 'Infrastructure Alliance', iconClass: 'fa-solid fa-building' },     // Infrastructure
    { name: 'Tech Solutions Inc', iconClass: 'fa-solid fa-microchip' },        // Technology
    { name: 'Capital Bank Group', iconClass: 'fa-solid fa-money-bill-transfer' },// Financial Services
    { name: 'Logistics Pro', iconClass: 'fa-solid fa-truck-fast' },           // Logistics
    { name: 'Health Futures', iconClass: 'fa-solid fa-heart-pulse' },          // Healthcare
    { name: 'World Education Fund', iconClass: 'fa-solid fa-graduation-cap' }, // Education
    { name: 'Aero Dynamics', iconClass: 'fa-solid fa-plane' },                 // Aviation
];

const PartnersSection = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <h2 className="partners-heading">Our Global Network of Partners</h2>
                <div className="logos-grid">
                    {partnerLogos.map((partner, index) => (
                        <div key={index} className="partner-logo-container">
                            <i 
                                className={`partner-icon-placeholder ${partner.iconClass}`}
                                title={partner.name}
                            ></i>
                            <span className="partner-name-label">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;