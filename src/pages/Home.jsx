import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BuildingIcon, MonitorPlay, Film, Coffee, Ship, Landmark } from 'lucide-react';
import './Home.css';

const Home = () => {
  const industries = [
    { name: 'Real Estate & Ventures', icon: <BuildingIcon size={32}/>, path: '/industries/real-estate', desc: 'Premium properties and visionary ventures defining the skyline.' },
    { name: 'IT Solutions', icon: <MonitorPlay size={32}/>, path: '/industries/it-solutions', desc: 'Secure, scalable, and innovative enterprise software.' },
    { name: 'Media Production', icon: <Film size={32}/>, path: '/industries/media', desc: 'Cinematic storytelling by VN Studios capturing the essence.' },
    { name: 'Hospitality', icon: <Coffee size={32}/>, path: '/industries/hospitality', desc: 'Exceptional experiences combining luxury and comfort.' },
    { name: 'Logistics', icon: <Ship size={32}/>, path: '/industries/logistics', desc: 'Global supply chain optimization bridging the gaps.' },
    { name: 'Finance', icon: <Landmark size={32}/>, path: '/industries/finance', desc: 'Strategic capital management for sustained growth.' },
  ];

  const animateIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container hero-container">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={animateIn}
            className="hero-content"
          >
            <h1 className="hero-title">
              Pioneering The <br/> <span className="text-gradient">Future of Business</span>
            </h1>
            <p className="hero-desc text-muted">
              We are a unified multi-industry conglomerate delivering excellence in Real Estate, IT, Media, Hospitality, Logistics, and Finance. One brand, infinite possibilities.
            </p>
            <div className="hero-actions">
              <Link to="/industries" className="btn btn-primary">Discover Our Ecosystem</Link>
              <Link to="/contact" className="btn btn-outline">Partner With Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="industries-section">
        <div className="container">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animateIn}
            className="section-header text-center"
          >
            <h2 className="section-title">Our <span className="text-gradient">Industries</span></h2>
            <p className="text-muted section-desc">A unified approach to diverse excellence.</p>
          </motion.div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="industry-card glass-panel"
              >
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="text-muted">{industry.desc}</p>
                <Link to={industry.path} className="industry-link">Explore Area &rarr;</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview-section">
         <div className="container">
           <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animateIn}
              className="about-preview-grid glass-panel"
           >
              <div className="about-preview-text">
                <h2>Driven By <span className="text-gradient">Vision</span></h2>
                <p className="text-muted mt-4">
                  Rise Next is more than a company; it is an ecosystem of innovative businesses. Our core philosophy is to integrate strategic insights with flawless execution across all our sectors.
                </p>
                <Link to="/about" className="btn btn-outline mt-6">Read Our Story</Link>
              </div>
              <div className="about-preview-image">
                 {/* Placeholder for future modern image or abstract object */}
                 <div className="abstract-shape"></div>
              </div>
           </motion.div>
         </div>
      </section>
      
      {/* Call To Action */}
      <section className="cta-section">
        <div className="container text-center">
            <h2 className="section-title">Ready to Elevate <span className="text-gradient">Your Business?</span></h2>
            <p className="text-muted section-desc cta-desc">Join our ecosystem and witness unprecedented growth backed by our multi-industry expertise.</p>
            <Link to="/contact" className="btn btn-primary mt-6">Get in Touch Today</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
