import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Real Estate', 'IT Solutions', 'Media Production', 'Hospitality'];
  
  const projects = [
    { id: 1, title: 'Skyline Azure', category: 'Real Estate', img: 'abstract-bg-1', desc: 'A 50-story eco-conscious smart residential tower.' },
    { id: 2, title: 'CloudSync ERP', category: 'IT Solutions', img: 'abstract-bg-2', desc: 'Enterprise management system deployed for global logistics firms.' },
    { id: 3, title: 'The Silent Echo', category: 'Media Production', img: 'abstract-bg-3', desc: 'Award-winning documentary produced by VN Studios.' },
    { id: 4, title: 'Oasis Retreat', category: 'Hospitality', img: 'abstract-bg-4', desc: 'Luxury eco-resort nestled in the mountains.' },
    { id: 5, title: 'TechHub Plaza', category: 'Real Estate', img: 'abstract-bg-5', desc: 'A modern commercial space for tech startups.' },
    { id: 6, title: 'CyberShield AI', category: 'IT Solutions', img: 'abstract-bg-6', desc: 'Advanced threat detection system.' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="text-center mb-6">
          <h1 className="hero-title">Featured <span className="text-gradient">Projects</span></h1>
          <p className="text-muted section-desc mt-4">
            Showcasing our multi-industry portfolio of excellence and innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="filters" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
               style={{ padding: '0.5rem 1.5rem', borderRadius: '30px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          <AnimatePresence>
            {filteredProjects.map(project => (
               <motion.div
                 key={project.id}
                 layout
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.3 }}
                 className="project-card glass-panel"
                 style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
               >
                 <div className="project-img-placeholder" style={{ height: '200px', background: 'linear-gradient(135deg, rgba(0,242,254,0.1), rgba(0,0,0,0.5))', borderBottom: '1px solid var(--border-glass)' }}></div>
                 <div className="project-info" style={{ padding: '2rem' }}>
                    <span className="text-muted text-sm text-gradient mb-2" style={{ display: 'block', fontWeight: 600 }}>{project.category}</span>
                    <h3 className="mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {project.title} <ArrowUpRight size={24} className="text-muted" />
                    </h3>
                    <p className="text-muted">{project.desc}</p>
                 </div>
               </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
