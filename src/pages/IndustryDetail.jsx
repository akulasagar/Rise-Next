import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const industryData = {
  'real-estate': {
    name: 'Real Estate & Ventures',
    heroDesc: 'Redefining skylines with premium properties and visionary investments.',
    overview: 'Our real estate division focuses on developing sustainable, high-value commercial and residential properties. We merge modern architecture with eco-friendly design to create spaces that inspire.',
    services: ['Commercial Development', 'Luxury Residential', 'Property Management', 'Real Estate Investment Trusts'],
    process: ['Land Acquisition & Analysis', 'Architectural Design', 'Construction & Engineering', 'Sales & Leasing']
  },
  'it-solutions': {
    name: 'IT Solutions',
    heroDesc: 'Empowering enterprises with cutting-edge technology and software solutions.',
    overview: 'We build scalable, secure, and innovative software solutions tailored to modern business needs, ranging from cloud architecture to AI implementations.',
    services: ['Cloud Infrastructure', 'Custom Software Development', 'Cybersecurity', 'AI & Machine Learning'],
    process: ['Discovery & Planning', 'Agile Development', 'Quality Assurance', 'Deployment & Maintenance']
  },
  'media': {
    name: 'Media Production (VN Studios)',
    heroDesc: 'Cinematic storytelling that captures the essence of your brand.',
    overview: 'VN Studios, our media arm, specializes in high-end video production, digital content creation, and brand storytelling that resonates with global audiences.',
    services: ['Corporate Videos', 'Commercial Advertising', 'Documentaries', 'Post-Production & VFX'],
    process: ['Pre-production Planning', 'Principal Photography', 'Editing & VFX', 'Final Delivery']
  },
  'hospitality': {
    name: 'Hospitality',
    heroDesc: 'Exceptional experiences combining ultimate luxury and pristine comfort.',
    overview: 'We operate a chain of premium boutique hotels and resorts designed to provide unforgettable stays, world-class dining, and unmatched customer service.',
    services: ['Luxury Hotels', 'Resort Management', 'Fine Dining', 'Event Hosting'],
    process: ['Guest Booking', 'Personalized Concierge', 'Experiential Activities', 'Feedback & Loyalty']
  },
  'logistics': {
    name: 'Logistics',
    heroDesc: 'Optimizing global supply chains to bridge the gaps efficiently.',
    overview: 'Our logistics division provides end-to-end supply chain solutions, ensuring timely delivery, warehouse optimization, and seamless global reach.',
    services: ['Freight Forwarding', 'Warehouse Management', 'Supply Chain Consulting', 'Last-Mile Delivery'],
    process: ['Inventory Assessment', 'Route Optimization', 'Transit Visibility', 'Delivery Confirmation']
  },
  'finance': {
    name: 'Finance',
    heroDesc: 'Strategic capital management for sustained and exponential growth.',
    overview: 'We offer comprehensive financial services including wealth management, corporate advisory, and investment strategies designed for long-term stability.',
    services: ['Wealth Management', 'Corporate Advisory', 'Investment Banking', 'Risk Assessment'],
    process: ['Financial Audit', 'Strategy Formulation', 'Asset Allocation', 'Performance Review']
  }
};

const IndustryDetail = () => {
  const { id } = useParams();
  const data = industryData[id];

  if (!data) {
    return <div className="container" style={{paddingTop: '8rem'}}><h2>Industry not found.</h2></div>;
  }

  return (
    <div className="industry-detail-page">
      {/* Hero */}
      <section className="industry-hero" style={{ padding: '8rem 0 4rem', background: 'radial-gradient(ellipse at top right, rgba(0, 242, 254, 0.1) 0%, transparent 60%)' }}>
        <div className="container">
          <Link to="/industries" className="text-muted mb-4" style={{display: 'inline-block'}}>&larr; Back to Industries</Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="hero-title text-gradient"
          >
            {data.name}
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.1}}
             className="text-muted section-desc mt-4" style={{margin: '0'}}
          >
            {data.heroDesc}
          </motion.p>
        </div>
      </section>

      <div className="container">
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '4rem 0' }}>
          {/* Overview & Services */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <h2 className="mb-4">Overview</h2>
             <p className="text-muted mb-6" style={{ lineHeight: 1.8 }}>{data.overview}</p>
             
             <h3 className="mb-4 mt-6">Core Services</h3>
             <ul className="service-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {data.services.map((service, i) => (
                  <li key={i} className="glass-panel" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <CheckCircle2 className="text-accent" size={24} />
                    <span>{service}</span>
                  </li>
                ))}
             </ul>
          </motion.div>

          {/* Process & CTA */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
             <h3 className="mb-4">Our Process</h3>
             <div className="process-timeline" style={{ borderLeft: '2px solid var(--border-glass)', marginLeft: '1rem', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {data.process.map((step, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                     <div style={{ position: 'absolute', left: '-2.6rem', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-dark)', border: '2px solid var(--accent-primary)', top: '0.2rem' }}></div>
                     <h4 className="text-gradient">Step 0{i+1}</h4>
                     <p className="mt-2 text-muted">{step}</p>
                  </div>
                ))}
             </div>

             <div className="glass-panel mt-6" style={{ padding: '2rem', marginTop: '4rem', textAlign: 'center' }}>
                <h3 className="mb-4">Ready to collaborate?</h3>
                <p className="text-muted mb-6">Let's discuss how our {data.name} solutions can drive your success.</p>
                <Link to="/contact" className="btn btn-primary w-full" style={{display: 'flex', gap: '0.5rem', justifyContent: 'center'}}>
                  Book a Consultation <ArrowRight size={20} />
                </Link>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
