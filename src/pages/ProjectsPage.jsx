import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../hooks/Reveal';

import imgFintech from '../assets3/comparison-analytics-dashboard-3d-icon-png-download-14265558.webp';
import imgBanking from '../assets3/illustration-depicts-mobile-phone-bank-icon-secure-padlock-symbolizing-safe-online-banking-transactions-modern-clean-388237193.webp';
import imgEcommerce from '../assets3/pngtree-local-artisans-e-fashion-retail-platform-featuring-3d-icon-isolated-on-a-png-image_20374351.png';
import imgTelemedicine from '../assets3/telemedicine.png';

const ProjectsPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <h1>Our Work</h1>
          </Reveal>
          <Reveal delay="delay-1">
            <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>A selection of our recent digital transformations.</p>
          </Reveal>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2">
            <Reveal delay="delay-1">
              <Link to="/projects/fintech-dashboard" className="project-card">
                <div className="project-img-container">
                  <img src={imgFintech} alt="Fintech Dashboard" className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-category">Finance • Web Application</div>
                  <h3 className="project-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Fintech Analytics Dashboard</h3>
                  <p className="service-desc">
                    We built a comprehensive analytics dashboard for a leading fintech company, processing millions of transactions in real-time.
                  </p>
                </div>
              </Link>
            </Reveal>
            
            <Reveal delay="delay-2">
              <Link to="/projects/banking-app" className="project-card">
                <div className="project-img-container">
                  <img src={imgBanking} alt="Banking App" className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-category">Banking • Mobile App</div>
                  <h3 className="project-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Secure Banking Interface</h3>
                  <p className="service-desc">
                    A fully redesigned mobile banking experience prioritizing security without compromising on user experience.
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay="delay-1">
              <Link to="/projects/ecommerce-platform" className="project-card">
                <div className="project-img-container">
                  <img src={imgEcommerce} alt="E-Commerce" className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-category">Retail • E-Commerce Platform</div>
                  <h3 className="project-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Premium Fashion Retail Site</h3>
                  <p className="service-desc">
                    A high-conversion e-commerce platform built with React and headless Shopify. Features fast checkout.
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay="delay-2">
              <Link to="/projects/telemedicine-portal" className="project-card">
                <div className="project-img-container">
                  <img src={imgTelemedicine} alt="Healthcare App" className="project-img" />
                </div>
                <div className="project-info">
                  <div className="project-category">Healthcare • Patient Portal</div>
                  <h3 className="project-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Telemedicine Patient Portal</h3>
                  <p className="service-desc">
                    An accessible, HIPAA-compliant patient portal that allows users to book appointments securely.
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;

