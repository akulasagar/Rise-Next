import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Calendar, LogOut } from 'lucide-react';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="dashboard-login" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '4rem' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <h2 className="mb-6">Client <span className="text-gradient">Portal</span></h2>
          <p className="text-muted mb-6">Sign in to manage your services and bookings across our network.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="email" placeholder="Email Address" style={{ padding: '1rem', width: '100%', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: 'white' }} />
            <input type="password" placeholder="Password" style={{ padding: '1rem', width: '100%', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: 'white' }} />
            <button type="button" onClick={() => setIsLoggedIn(true)} className="btn btn-primary mt-4" style={{ width: '100%', padding: '1rem' }}>Log In</button>
          </form>
          <p className="text-muted mt-6 text-sm">Don't have an account? <span className="text-gradient" style={{ cursor: 'pointer' }}>Sign up</span></p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Welcome, <span className="text-gradient">John Doe</span></h1>
          <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setIsLoggedIn(false)}>
            <LogOut size={20} /> Sign Out
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
          {/* Sidebar */}
          <div className="dashboard-sidebar">
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', justifyContent: 'flex-start', border: '1px solid var(--border-glass)', width: '100%' }}>
                <User size={20} style={{ marginRight: '1rem' }} /> Profile
              </button>
              <button className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', justifyContent: 'flex-start', width: '100%' }}>
                <Calendar size={20} style={{ marginRight: '1rem' }} /> My Bookings / Services
              </button>
              <button className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', justifyContent: 'flex-start', width: '100%' }}>
                <Settings size={20} style={{ marginRight: '1rem' }} /> Settings
              </button>
            </div>
          </div>

          {/* Main Area */}
          <div className="dashboard-main">
            <div className="glass-panel" style={{ padding: '3rem' }}>
              <h2 className="mb-6">Active Services Overview</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                     <span className="text-gradient" style={{ fontWeight: 600 }}>IT Solutions</span>
                     <span className="text-muted">Status: Active</span>
                   </div>
                   <h4>Cloud Infrastructure Migration</h4>
                   <div className="mt-4" style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                     <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))', borderRadius: '4px' }}></div>
                   </div>
                   <p className="text-sm text-muted mt-2">70% Completed</p>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                     <span className="text-gradient" style={{ fontWeight: 600 }}>Hospitality</span>
                     <span className="text-muted">Status: Confirmed</span>
                   </div>
                   <h4>Oasis Retreat Suite Booking</h4>
                   <p className="text-muted mt-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> Oct 15 - Oct 20</p>
                </div>
              </div>

              <div className="mt-6" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn btn-primary">Book New Service</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
