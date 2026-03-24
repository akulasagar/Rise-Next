import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: 'Senior Software Engineer', dept: 'IT Solutions', type: 'Full-time · Remote' },
    { title: 'Commercial Director', dept: 'Real Estate', type: 'Full-time · On-site' },
    { title: 'Cinematographer', dept: 'Media Production (VN Studios)', type: 'Contract · Hybrid' },
    { title: 'Supply Chain Analyst', dept: 'Logistics', type: 'Full-time · On-site' },
  ];

  return (
    <div className="careers-page" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
       {/* Hero */}
       <section className="container text-center mb-6">
         <h1 className="hero-title">Build the <span className="text-gradient">Future</span> With Us</h1>
         <p className="text-muted section-desc mt-4">
           Join our multi-industry ecosystem. We are always looking for visionary talent across all our global divisions.
         </p>
       </section>

       <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', marginTop: '6rem' }}>
          {/* Sidebar / Training */}
          <div>
            <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
               <GraduationCap size={40} className="text-accent mb-4" />
               <h3 className="mb-4">Rise Next Academy</h3>
               <p className="text-muted mb-4">We believe in continuous growth. Explore our corporate training programs designed to upskill our workforce across all sectors.</p>
               <button className="btn btn-outline w-full" style={{ width: '100%' }}>View Training Programs</button>
            </div>
          </div>

          {/* Job Listings */}
          <div>
             <h2 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <Briefcase className="text-accent" /> Open Positions
             </h2>
             <div className="jobs-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
               {jobs.map((job, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
                  >
                    <div>
                      <h3 className="mb-2">{job.title}</h3>
                      <div className="text-muted text-sm" style={{ display: 'flex', gap: '1rem' }}>
                        <span className="text-gradient" style={{ fontWeight: 500 }}>{job.dept}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      Apply Now <ArrowRight size={16} />
                    </button>
                  </motion.div>
               ))}
             </div>
             
             {/* General Application */}
             <div className="glass-panel" style={{ padding: '3rem', marginTop: '4rem', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(0, 242, 254, 0.05) 0%, transparent 80%)' }}>
                <h3 className="mb-4">Don't see a perfect fit?</h3>
                <p className="text-muted mb-6">Submit your resume for future opportunities across all our divisions.</p>
                <button className="btn btn-outline">Submit General Application</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Careers;
