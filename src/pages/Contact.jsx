import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div className="container">

        <div className="text-center mb-6">
          <h1 className="hero-title">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-muted section-desc mt-4">
            Connect with our unified global network. Reach out to our central hub for inquiries across any of our industries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '6rem' }}>

          {/* Contact Details & Map placeholder */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="mb-4">Global Headquarters</h2>
            <div className="glass-panel mt-6" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><MapPin size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Address</h4>
                  <p className="text-muted text-sm">Rise Next Tower, Financial District, Global City, 10001</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><Phone size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Phone</h4>
                  <p className="text-muted text-sm">+91 9876543210</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}><Mail size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem' }}>Email</h4>
                  <p className="text-muted text-sm">info@risenext.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-panel" style={{ marginTop: '2rem', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-panel)' }}>
              <p className="text-muted">Interactive Map Placeholder</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h3 className="mb-6">Send an Inquiry</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <input type="text" placeholder="First Name" className="glass-input" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', color: 'white' }} />
                  <input type="text" placeholder="Last Name" className="glass-input" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', color: 'white' }} />
                </div>
                <input type="email" placeholder="Email Address" className="glass-input" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', color: 'white' }} />
                <select className="glass-input" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-glass)', color: 'white', appearance: 'none' }}>
                  <option value="" disabled selected>Select Industry Interest</option>
                  <option value="real-estate" style={{ background: '#050505' }}>Real Estate</option>
                  <option value="it" style={{ background: '#050505' }}>IT Solutions</option>
                  <option value="media" style={{ background: '#050505' }}>Media Production</option>
                  <option value="hospitality" style={{ background: '#050505' }}>Hospitality</option>
                  <option value="logistics" style={{ background: '#050505' }}>Logistics</option>
                  <option value="finance" style={{ background: '#050505' }}>Finance</option>
                  <option value="other" style={{ background: '#050505' }}>Other / General</option>
                </select>
                <textarea placeholder="Your Message" rows="5" className="glass-input" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-glass)', color: 'white', resize: 'vertical' }}></textarea>
                <button type="button" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '1rem' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
