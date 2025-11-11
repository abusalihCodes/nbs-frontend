import React from 'react';
import { Link } from 'react-router-dom';

const StrategicEcosystem = () => {
    // Data representing the integrated sectors
    const sectors = [
        { name: 'Energy & Resources', path: '/sectors#energy', icon: '⚡' },
        { name: 'Infrastructure & Real Estate', path: '/sectors#infra', icon: '🏗️' },
        { name: 'Technology & Digital', path: '/sectors#tech', icon: '💻' },
        { name: 'Financial Services', path: '/sectors#finance', icon: '💲' },
        { name: 'Logistics & Trade', path: '/sectors#logistics', icon: '🚢' },
        { name: 'Healthcare & Life Sciences', path: '/sectors#health', icon: '⚕️' },
        { name: 'Education & Training', path: '/sectors#education', icon: '🎓' },
        { name: 'Aviation & Defense', path: '/sectors#aviation', icon: '✈️' },
    ];

    return (
        <section className="strategic-ecosystem">
            <div className="container">
                <header className="ecosystem-header">
                    <h2>Our Integrated Strategic Direction</h2>
                    <p>
                        The NBS Holdings ecosystem drives synergistic growth by integrating core capabilities across vital global sectors, ensuring resilience and sustainable value creation.
                    </p>
                </header>

                <div className="ecosystem-diagram">
                    {/* The Central Hub */}
                    <div className="central-hub">
                        <h3 className="hub-title">NBS Holdings</h3>
                        <p className="hub-motto">Integrated Excellence</p>
                    </div>

                    {/* The Sector Nodes */}
                    <div className="sector-nodes-grid">
                        {sectors.map((sector, index) => (
                            <Link 
                                to={sector.path} 
                                key={index} 
                                className="sector-node" 
                                title={`Explore ${sector.name}`}
                            >
                                <span className="sector-icon">{sector.icon}</span>
                                <span className="sector-name">{sector.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                
                <div className="ecosystem-cta">
                    <Link to="/sectors" className="ecosystem-cta-button">
                        View All Sectors
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default StrategicEcosystem;