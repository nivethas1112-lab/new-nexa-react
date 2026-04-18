import React from 'react';
import { CheckCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AboutPage = () => {
  const [imgRef, imgVisible] = useScrollAnimation();
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Nexa Digital</h1>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>We are a team of passionate engineers, designers, and innovators.</p>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="title">Our Mission</h2>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                At Nexa Digital Solutions, our mission is to empower businesses to thrive in the digital era. 
                We believe that technology should be an enabler, not a hurdle. By combining cutting-edge 
                technologies with human-centered design, we build software that solves real-world problems.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Since our founding in 2018, we have partnered with over 150 companies—from agile startups 
                to Fortune 500 enterprises—delivering scalable, secure, and innovative digital products.
              </p>
              <ul style={{ marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                  <CheckCircle size={20} color="var(--primary)" /> Innovation First Approach
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                  <CheckCircle size={20} color="var(--primary)" /> Transparent Communication
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                  <CheckCircle size={20} color="var(--primary)" /> Uncompromising Quality
                </li>
              </ul>
            </div>
            <div>
              <img
                ref={imgRef}
                src="images/teamwork-business-analytics-isometric-concept-illustration-team-analyst-managers-well-coordinated-development-marketing-system-creative-staff-management-successful-partnership_146957-632.avif"
                alt="Office Collaboration"
                className={`img-animate${imgVisible ? ' img-visible' : ''}`}
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <h2 className="title text-center">Our Core Values</h2>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <div className="card text-center">
              <h3 className="service-title">Excellence</h3>
              <p className="service-desc">We settle for nothing less than extraordinary in every line of code we write and every pixel we design.</p>
            </div>
            <div className="card text-center">
              <h3 className="service-title">Integrity</h3>
              <p className="service-desc">We build trust through radical transparency, honest communication, and delivering on our promises.</p>
            </div>
            <div className="card text-center">
              <h3 className="service-title">Collaboration</h3>
              <p className="service-desc">We view our clients as partners. Your success is our success, and we win together.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
