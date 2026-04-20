import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Reveal from '../hooks/Reveal';

const AboutPage = () => {
  const [imgRef, imgVisible] = useScrollAnimation();
  const [activeFeedbackSlide, setActiveFeedbackSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeedbackSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <h1>About Nexa Digital</h1>
          </Reveal>
          <Reveal delay="delay-1">
            <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>We are a team of passionate engineers, designers, and innovators.</p>
          </Reveal>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <Reveal>
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
              </Reveal>
              <ul style={{ marginBottom: '2rem' }}>
                <Reveal delay="delay-1">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                    <CheckCircle size={20} color="var(--primary)" /> Innovation First Approach
                  </li>
                </Reveal>
                <Reveal delay="delay-2">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                    <CheckCircle size={20} color="var(--primary)" /> Transparent Communication
                  </li>
                </Reveal>
                <Reveal delay="delay-3">
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                    <CheckCircle size={20} color="var(--primary)" /> Uncompromising Quality
                  </li>
                </Reveal>
              </ul>
            </div>
            <div>
              <img
                ref={imgRef}
                src="/images/teamwork-business-analytics-isometric-concept-illustration-team-analyst-managers-well-coordinated-development-marketing-system-creative-staff-management-successful-partnership_146957-632.avif"
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
          <Reveal>
            <h2 className="title text-center">Our Core Values</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal delay="delay-1">
              <div className="card text-center">
                <h3 className="service-title">Excellence</h3>
                <p className="service-desc">We settle for nothing less than extraordinary in every line of code we write and every pixel we design.</p>
              </div>
            </Reveal>
            <Reveal delay="delay-2">
              <div className="card text-center">
                <h3 className="service-title">Integrity</h3>
                <p className="service-desc">We build trust through radical transparency, honest communication, and delivering on our promises.</p>
              </div>
            </Reveal>
            <Reveal delay="delay-3">
              <div className="card text-center">
                <h3 className="service-title">Collaboration</h3>
                <p className="service-desc">We view our clients as partners. Your success is our success, and we win together.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {/* Client Feedback Section */}
      <section className="feedback-section">
        <div className="container">
          <div className="feedback-header">
            <div className="feedback-header-left">
              <Reveal>
                <div className="feedback-badge">Clients Feedback</div>
                <h2 className="feedback-title">What Our Customer’s Say About Solutions</h2>
              </Reveal>
            </div>
            <div className="feedback-nav">
              <button 
                className="feedback-nav-btn" 
                onClick={() => setActiveFeedbackSlide(prev => Math.max(0, prev - 1))}
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className="feedback-nav-btn" 
                onClick={() => setActiveFeedbackSlide(prev => Math.min(2, prev + 1))}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="feedback-slider-container">
            <div 
              className="feedback-slider" 
              style={{ transform: `translateX(-${windowWidth <= 768 ? activeFeedbackSlide * 106 : activeFeedbackSlide * 35}%)` }}
            >
              {[
                {
                  logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
                  name: "Stripe",
                  text: "Sed ut perspiciatis unde omniste natus errors voluptatem accusantium doloreue laudantium eaque ipsauae abtore verita architecto beatae vitae dicta sunxplica nemo enimsam voluntatem quia natur aut odit aut."
                },
                {
                  logo: "https://www.vectorlogo.zone/logos/airbnb/airbnb-icon.svg",
                  name: "Airbnb",
                  text: "Sed ut perspiciatis unde omniste natus errors voluptatem accusantium doloreue laudantium eaque ipsauae abtore verita architecto beatae vitae dicta sunxplica nemo enimsam voluntatem quia natur aut odit aut."
                },
                {
                  logo: "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
                  name: "Slack",
                  text: "Sed ut perspiciatis unde omniste natus errors voluptatem accusantium doloreue laudantium eaque ipsauae abtore verita architecto beatae vitae dicta sunxplica nemo enimsam voluntatem quia natur aut odit aut."
                },
                {
                  logo: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg",
                  name: "Spotify",
                  text: "Sed ut perspiciatis unde omniste natus errors voluptatem accusantium doloreue laudantium eaque ipsauae abtore verita architecto beatae vitae dicta sunxplica nemo enimsam voluntatem quia natur aut odit aut."
                }
              ].map((item, idx) => (
                <div className="feedback-card" key={idx}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src={item.logo} alt={item.name} className="company-logo" style={{ width: '48px', height: '48px', borderRadius: '8px' }} />
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827' }}>{item.name}</span>
                  </div>
                  <p className="feedback-text">
                    {item.text.split('eaque ipsauae abtore').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="highlight-text">eaque ipsauae abtore</span>}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
