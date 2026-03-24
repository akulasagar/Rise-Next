import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'glass-nav' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Rise Next Logo" className="logo-image" />
          <span className="logo-text">RISE <span className="text-gradient">NEXT</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/dashboard" className="btn btn-outline">Dashboard</Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav glass-nav"
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="mobile-nav-link">
                    {link.name}
                  </Link>
                </li>
              ))}
              <div className="mobile-nav-actions">
                <Link to="/contact" className="btn btn-primary w-full">Contact Us</Link>
                <Link to="/dashboard" className="btn btn-outline w-full">Dashboard</Link>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
