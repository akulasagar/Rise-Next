import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer border-t border-glass">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="navbar-logo">
              <span className="logo-text">RISE <span className="text-gradient">NEXT</span></span>
            </Link>
            <p className="footer-desc mt-4 text-muted">
              Pioneering excellence across Real Estate, IT Solutions, Media, Hospitality, Logistics, and Finance. Elevating businesses to the next level.
            </p>
            <div className="social-links mt-6">
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Industries</h4>
            <ul>
              <li><Link to="/industries/real-estate">Real Estate & Ventures</Link></li>
              <li><Link to="/industries/it-solutions">IT Solutions</Link></li>
              <li><Link to="/industries/media">Media Production</Link></li>
              <li><Link to="/industries/hospitality">Hospitality</Link></li>
              <li><Link to="/industries/logistics">Logistics</Link></li>
              <li><Link to="/industries/finance">Finance</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="text-muted mb-4">Subscribe to our newsletter for the latest insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="glass-input" />
              <button type="submit" className="glass-btn-icon">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted">&copy; {new Date().getFullYear()} Rise Next. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
