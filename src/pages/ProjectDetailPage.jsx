import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

import imgFintech from '../assets3/comparison-analytics-dashboard-3d-icon-png-download-14265558.webp';
import imgBanking from '../assets3/illustration-depicts-mobile-phone-bank-icon-secure-padlock-symbolizing-safe-online-banking-transactions-modern-clean-388237193.webp';
import imgEcommerce from '../assets3/pngtree-local-artisans-e-fashion-retail-platform-featuring-3d-icon-isolated-on-a-png-image_20374351.png';
import imgTelemedicine from '../assets3/telemedicine.png';

const imageMap = {
  'fintech-dashboard': imgFintech,
  'banking-app': imgBanking,
  'ecommerce-platform': imgEcommerce,
  'telemedicine-portal': imgTelemedicine,
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const projectImg = imageMap[id] || imgFintech;
  const [imgRef, imgVisible] = useScrollAnimation();

  return (
    <>
      <div className="page-header" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <h1 style={{ textTransform: 'capitalize' }}>{id.replace('-', ' ')} Case Study</h1>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Discover how we drove measurable results.</p>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">

          {/* Two-column: left content, right image */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'flex-start', marginBottom: '3rem' }}>

            {/* LEFT — Content */}
            <div>
              {/* Meta strip */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
                <div>
                  <h4 style={{ color: 'var(--muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Client</h4>
                  <p style={{ fontWeight: '600', color: 'var(--secondary)', fontSize: '0.95rem' }}>Confidential Enterprise</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Industry</h4>
                  <p style={{ fontWeight: '600', color: 'var(--secondary)', fontSize: '0.95rem' }}>Technology Solutions</p>
                </div>
                <div>
                  <h4 style={{ color: 'var(--muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Services</h4>
                  <p style={{ fontWeight: '600', color: 'var(--secondary)', fontSize: '0.95rem' }}>Full-Stack &amp; UX</p>
                </div>
              </div>

              <article style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700' }}>The Challenge</h2>
                <p style={{ marginBottom: '1.75rem' }}>
                  Our client approached us with an outdated legacy system that was severely hindering their operational efficiency.
                  The application was slow, unintuitive, and suffered from frequent downtimes. They needed a modern architecture
                  capable of scaling rapidly while maintaining top-tier security standards.
                </p>

                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700' }}>Our Solution</h2>
                <p style={{ marginBottom: '1.75rem' }}>
                  We architected a microservices-based application using React for the interface and Node.js for backend services.
                  By adopting a clean, data-driven UX approach, we simultaneously modernized the aesthetics and simplified complex workflows.
                </p>

                <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700' }}>The Results</h2>
                <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>300% increase in daily active users</li>
                  <li style={{ marginBottom: '0.5rem' }}>Load times reduced by over 60%</li>
                  <li style={{ marginBottom: '0.5rem' }}>Vastly improved security auditing and compliance metrics</li>
                </ul>
              </article>

              <Link to="/projects" className="btn btn-outline">&larr; Back to Portfolio</Link>
            </div>

            {/* RIGHT — Image */}
            <div style={{ position: 'sticky', top: '7rem' }}>
              <img
                ref={imgRef}
                src={projectImg}
                alt="Project Visual"
                className={`img-animate${imgVisible ? ' img-visible' : ''}`}
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-lg)',
                  background: '#f8f9fc'
                }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
