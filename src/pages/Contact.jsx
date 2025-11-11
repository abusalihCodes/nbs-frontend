import { useState, useRef, useEffect } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFormVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Frontend fallback - will work immediately
      const mailtoLink = `mailto:info@nbsholdingslic.com?subject=Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      
      // For backend integration - uncomment and modify when ready
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
      */
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for innovative and sustainable solutions</p>
          <div className="tagline">YOUR TRUSTED PARTNER FOR INNOVATIVE & SUSTAINABLE SOLUTIONS</div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="three-column-section">
        <div className="container">
          <div className="three-column-layout">
            {/* Left Column - Map */}
            <div className="column map-column">
              <div className="map-container">
                <h2>Our Headquarters</h2>
                <div className="map-wrapper">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.396766945644!2d46.67541557599733!3d24.725812478089967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NBS Headquarters Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Middle Column - Mobile Form */}
            <div className="column form-column">
              <div 
                ref={formRef}
                className={`form-container ${isFormVisible ? 'form-visible' : ''}`}
              >
                <div className="phone-mockup">
                  <div className="phone-notch"></div>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <h2>Send Us a Message</h2>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="success-message">
                        Thank you for your message! We will get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="error-message">
                        There was an error sending your message. Please try again or email us directly.
                      </div>
                    )}
                    
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows="5"
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="column info-column">
              <div className="contact-info-sidebar">
                <div className="contact-details">
                  <h3>Get In Touch</h3>
                  
                  <div className="contact-items">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-content">
                        <h4>Email</h4>
                        <a href="mailto:info@nbsholdingslic.com" className="email-link">
                          info@nbsholdingslic.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-content">
                        <h4>Address</h4>
                        <p>Kingdom of Saudi Arabia, Riyadh</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-content">
                        <h4>Phone</h4>
                        <a href="tel:+966123456789" className="phone-link">
                          +966 12 345 6789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="social-section">
                  <h4>Follow Us</h4>
                  <div className="social-links">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:info@nbsholdingslic.com" className="social-link email">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;