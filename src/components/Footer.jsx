import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    // Define all navigation and contact links here
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Careers', path: '/careers' },
        { name: 'News', path: '/news' },   
         { name: 'Contact', path: '/contact' },
    ];

    const contactInfo = {
        address: '123 Global HQ, Business District, City',
        phone: '+1 (555) 123-4567',
        email: 'info@nbsholdingsllc.com',
    };

    const socialLinks = [
        { name: 'LinkedIn', icon: 'In', url: 'https://linkedin.com/nbsholdings' },
        { name: 'Twitter', icon: 'X', url: 'https://twitter.com/nbsholdings' },
        { name: 'Facebook', icon: 'f', url: 'https://facebook.com/nbsholdings' },
    ];

    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                
                {/* Column 1: Logo & Mission */}
                <div className="footer-column footer-brand">
                    <Link to="/" className="footer-logo">
                        {/* Placeholder for your NBS Holdings logo (use an <img> tag if you have one) */}
                        <span className="logo-text"><img src='/images/Logo-02.svg' alt='Logo-footer'/></span>
                    </Link>
                    <p className="mission-statement">
                        The Foundation for Integrated Excellence, building a sustainable future.
                    </p>
                </div>
                
                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Column 3: Contact Information */}
                <div className="footer-column">
                    <h4 className="footer-contact">Contact</h4>
                    <ul className="footer-links contact-details">
                        <li>Address: {contactInfo.address}</li>
                        <li>Phone: <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
                        <li>Email: <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
                    </ul>
                </div>

                {/* Column 4: Social Media & Legal */}
                <div className="footer-column footer-social">
                    <h4 className="footer-heading">Connect</h4>
                    <div className="social-icons">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.name} 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-icon"
                                title={social.name}
                            >
                                {/* In a real project, you would use an actual icon library like Font Awesome here */}
                                {social.icon} 
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Bar: Copyright & Privacy */}
            <div className="footer-bottom">
                <div className="container footer-copyright-row">
                    <p>&copy; {new Date().getFullYear()} NBS Holdings. All Rights Reserved.</p>
                    <div className="footer-legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;