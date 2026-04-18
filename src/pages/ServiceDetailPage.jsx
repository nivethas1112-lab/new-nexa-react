import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

import imgWeb from '../assets/pngtree-web-development-illustration-modern-png-image_4461019.png';
import imgMobile from '../assets/mobile-app-developmet-1.png';
import imgUiUx from '../assets/ui ux.png';
import imgCloud from '../assets/93-930104_cloud-solutions-cloud-computing-applications-png.png';
import imgCyber from '../assets/cyber-security.png';
import imgDataAi from '../assets/data & AI.webp';

const imageMap = {
  'web-development': imgWeb,
  'mobile-development': imgMobile,
  'ui-ux': imgUiUx,
  'cloud-solutions': imgCloud,
  'cybersecurity': imgCyber,
  'data-and-ai': imgDataAi
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [imgRef, imgVisible] = useScrollAnimation();
  
  const content = {
    title: id.replace('-', ' ').toUpperCase(),
    description: `Comprehensive and cutting-edge solutions for ${id.replace('-', ' ')}. Our tailored strategy ensures that your business stays ahead of the competition.`,
    features: [
      'Strategic Planning & Analysis',
      'Custom Architecture Design',
      'Agile Integration & Development',
      '24/7 Ongoing Support'
    ]
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{content.title}</h1>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Advanced Digital Solutions</p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Empowering your business</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {content.description}
              </p>
              <p style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                We believe in delivering scalable, secure, and modern infrastructure. Our team works hand-in-hand with your stakeholders to ensure full alignment with your overarching goals.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--secondary)', fontSize: '1.125rem', lineHeight: '2' }}>
                {content.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <img
                ref={imgRef}
                src={imageMap[id] || imgWeb}
                alt={content.title}
                className={`img-animate${imgVisible ? ' img-visible' : ''}`}
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
          
          <div className="text-center" style={{ marginTop: '4rem' }}>
            <Link to="/contact" className="btn btn-primary">Request a Custom Proposal</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;
