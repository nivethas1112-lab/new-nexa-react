import React from 'react';
import { Code, Smartphone, Layout, Cloud, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

import imgWeb from '../assets/pngtree-web-development-illustration-modern-png-image_4461019.png';
import imgMobile from '../assets/mobile-app-developmet-1.png';
import imgUiUx from '../assets/ui ux.png';
import imgCloud from '../assets/93-930104_cloud-solutions-cloud-computing-applications-png.png';
import imgCyber from '../assets/cyber-security.png';
import imgDataAi from '../assets/data & AI.webp';

const services = [
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    desc: 'We build fast, secure, and scalable web applications using modern frameworks like React, Node.js, and Python.',
    img: imgWeb,
    link: '/services/web-development'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile experiences that users love. We develop high-performance applications.',
    img: imgMobile,
    link: '/services/mobile-development'
  },
  {
    icon: <Layout size={24} />,
    title: 'UI/UX Design',
    desc: 'Data-driven and user-centric design services. We craft intuitive interfaces that drive business goals.',
    img: imgUiUx,
    link: '/services/ui-ux'
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Solutions',
    desc: 'Future-proof your infrastructure with our cloud architecture services on AWS, Azure, and GCP.',
    img: imgCloud,
    link: '/services/cloud-solutions'
  },
  {
    icon: <Shield size={24} />,
    title: 'Cybersecurity',
    desc: 'Protect your digital assets with our comprehensive security audits and testing services.',
    img: imgCyber,
    link: '/services/cybersecurity'
  },
  {
    icon: <Database size={24} />,
    title: 'Data & AI',
    desc: 'Leverage your data for strategic advantage with robust pipelines and intelligent AI solutions.',
    img: imgDataAi,
    link: '/services/data-and-ai'
  }
];

const ServicesPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Comprehensive technology solutions tailored to your business.</p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div className="card" key={index} style={{ padding: 0, overflow: 'hidden' }}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc" style={{ marginBottom: '1rem' }}>{service.desc}</p>
                  <Link to={service.link} style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Learn More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Ready to build something amazing?</h2>
          <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
