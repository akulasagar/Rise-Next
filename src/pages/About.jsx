import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="hero-title">Shaping the <span className="text-gradient">Future</span></h1>
            <p className="text-muted section-desc mt-4">
              Rise Next is a global leader uniting diverse industries under a singular vision of technological and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mission-section">
        <div className="container grid-two-cols">
           <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6"
           >
              <Target size={40} className="mb-4 text-accent" />
              <h3>Our Mission</h3>
              <p className="text-muted mt-2">To empower businesses and communities by integrating the strengths of diverse industries—from real estate and IT to media, hospitality, and finance—into a unified, growth-centric ecosystem.</p>
           </motion.div>

           <motion.div 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-panel p-6"
           >
              <Zap size={40} className="mb-4 text-accent" />
              <h3>Our Vision</h3>
              <p className="text-muted mt-2">To be the global benchmark for modern enterprise, where innovation meets sustainability, creating limitless possibilities and a legacy of excellence for generations to come.</p>
           </motion.div>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title text-center mb-6">Our <span className="text-gradient">Journey</span></h2>
          <div className="timeline">
            {[2010, 2015, 2018, 2023, 'Present'].map((year, i) => (
               <motion.div 
                key={year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item"
               >
                 <div className="timeline-dot"></div>
                 <div className="timeline-content glass-panel p-4">
                   <h4 className="text-gradient">{year}</h4>
                   <p className="text-muted text-sm mt-2">Strategic milestone achieved, expanding our footprint across the global market.</p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container text-center">
           <h2 className="section-title">Leadership <span className="text-gradient">Team</span></h2>
           <p className="text-muted section-desc mb-6">Guided by visionaries who redefine excellence.</p>
           
           <div className="team-grid">
             {[1,2,3,4].map((member) => (
                <motion.div
                  key={member}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="team-card glass-panel"
                >
                  <div className="team-avatar">
                     <Users size={48} className="text-muted" />
                  </div>
                  <h4 className="mt-4">Executive Name</h4>
                  <p className="text-muted text-sm text-gradient">Chief Executive Officer</p>
                </motion.div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
