import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BuildingIcon, MonitorPlay, Film, Coffee, Ship, Landmark } from 'lucide-react';

const Industries = () => {
  const industries = [
    { id: 'real-estate', name: 'Real Estate & Ventures', icon: <BuildingIcon size={40}/>, desc: 'Premium properties and visionary ventures defining the skyline.' },
    { id: 'it-solutions', name: 'IT Solutions', icon: <MonitorPlay size={40}/>, desc: 'Secure, scalable, and innovative enterprise software.' },
    { id: 'media', name: 'Media Production', icon: <Film size={40}/>, desc: 'Cinematic storytelling by VN Studios capturing the essence.' },
    { id: 'hospitality', name: 'Hospitality', icon: <Coffee size={40}/>, desc: 'Exceptional experiences combining luxury and comfort.' },
    { id: 'logistics', name: 'Logistics', icon: <Ship size={40}/>, desc: 'Global supply chain optimization bridging the gaps.' },
    { id: 'finance', name: 'Finance', icon: <Landmark size={40}/>, desc: 'Strategic capital management for sustained growth.' },
  ];

  return (
    <div className="industries-page" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h1 className="hero-title">Our <span className="text-gradient">Industries</span></h1>
          <p className="text-muted section-desc mt-4">
            A cohesive ecosystem designed to lead and innovate across multiple global sectors.
          </p>
        </div>

        <div className="industries-grid" style={{ marginTop: '4rem' }}>
          {industries.map((industry, i) => (
             <motion.div 
               key={industry.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.4, delay: i * 0.1 }}
               className="industry-card glass-panel text-center"
               style={{ alignItems: 'center' }}
             >
               <div className="industry-icon mb-4" style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', borderRadius: '50%' }}>
                 {industry.icon}
               </div>
               <h3 className="mb-4">{industry.name}</h3>
               <p className="text-muted mb-6">{industry.desc}</p>
               <Link to={`/industries/${industry.id}`} className="btn btn-outline">View Details</Link>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
