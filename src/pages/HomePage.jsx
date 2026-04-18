import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Smartphone, Layout, Cloud, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

import imgFintech from '../assets3/comparison-analytics-dashboard-3d-icon-png-download-14265558.webp';
import imgBanking from '../assets3/illustration-depicts-mobile-phone-bank-icon-secure-padlock-symbolizing-safe-online-banking-transactions-modern-clean-388237193.webp';
import imgEcommerce from '../assets3/pngtree-local-artisans-e-fashion-retail-platform-featuring-3d-icon-isolated-on-a-png-image_20374351.png';
import imgTelemedicine from '../assets3/telemedicine.png';

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation();
  const [proj1Ref, proj1Visible] = useScrollAnimation();
  const [proj2Ref, proj2Visible] = useScrollAnimation();
  const [proj3Ref, proj3Visible] = useScrollAnimation();
  const [proj4Ref, proj4Visible] = useScrollAnimation();

  const testimonials = [
    {
      text: '"Nexa Digital transformed our legacy systems into a modern cloud infrastructure seamlessly. Their technical prowess is unmatched."',
      img: '/assets/testimonial_1_1776422090737.png',
      name: 'Sarah Jenkins',
      role: 'CTO, TechFlow Inc.'
    },
    {
      text: '"The mobile app they built for us increased our user engagement by 300%. Absolutely phenomenal team and communication."',
      img: '/assets/testimonial_2_1776422178912.png',
      name: 'Michael Chen',
      role: 'CEO, RetailNova'
    },
    {
      text: '"Working with Nexa was a breath of fresh air. They delivered our clinical portal ahead of schedule and under budget."',
      img: '/assets/testimonial_3_1776422202059.png',
      name: 'Elena Rodriguez',
      role: 'Director, HealthPlus'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Digital Vision Into Reality</h1>
            <p>We craft innovative software solutions that drive growth and deliver exceptional user experiences. Partner with us to build the future of your business.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              ref={heroRef}
              src="/images/218-2186550_software-png-transparent-image-software-solutions-removebg-preview.png"
              alt="Digital Solutions Illustration"
              className={`img-animate${heroVisible ? ' img-visible' : ''}`}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
        <div className="container">
          <h2 className="title text-center">Core Services</h2>
          <p className="subtitle">Comprehensive digital solutions engineered with precision by our expert team.</p>
          
          <div className="grid grid-4">
            <div className="card">
              <div className="service-icon"><Code size={24} /></div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-desc">Scalable, high-performance web applications built fully customized to your business needs.</p>
              <Link to="/services/web-development" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
            </div>
            <div className="card">
              <div className="service-icon"><Smartphone size={24} /></div>
              <h3 className="service-title">Mobile App Development</h3>
              <p className="service-desc">Engaging iOS and Android experiences that put your brand directly in your customers' hands.</p>
              <Link to="/services/mobile-development" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
            </div>
            <div className="card">
              <div className="service-icon"><Layout size={24} /></div>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-desc">Human-centered design interfaces that drive engagement, retention, and conversion rates.</p>
              <Link to="/services/ui-ux" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
            </div>
            <div className="card">
              <div className="service-icon"><Cloud size={24} /></div>
              <h3 className="service-title">Cloud Solutions</h3>
              <p className="service-desc">Secure, highly available cloud infrastructures tailored for growth and reliability.</p>
              <Link to="/services/cloud-solutions" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
        <div className="container">
          <div className="about-image">
            <img src="/images/pngtree-software-development-isometric-web-concept-png-image_11719509.png" alt="Nexa Digital Team" />
          </div>
          <div>
            <h2 className="title">Crafting digital excellence since 2018</h2>
            <p className="service-desc" style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              At Nexa Digital Solutions, we bridge the gap between complex problems and elegant technological solutions. 
              Our team of veteran engineers and visionary designers work collaboratively to transform your ideas into 
              market-leading digital products.
            </p>
            <ul style={{ marginBottom: '2rem' }}>
              {['Enterprise-grade security', 'Agile development process', 'Post-launch support & maintenance'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                  <CheckCircle size={20} color="var(--primary)" /> {item}
                </li>
              ))}
            </ul>
            <div className="stats-grid">
              <div className="stat-item">
                <h4>6+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>150+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h4>300+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" style={{ backgroundColor: 'rgba(240, 248, 255, 0.95)' }}>
        <div className="container">
          <h2 className="title text-center">Featured Projects</h2>
          <p className="subtitle">Discover how we've helped businesses achieve digital dominance.</p>
          
          <div className="grid grid-2">
            <Link to="/projects/fintech-dashboard" className="project-card">
              <img ref={proj1Ref} src={imgFintech} alt="Fintech Dashboard" className={`project-img img-animate${proj1Visible ? ' img-visible' : ''}`} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="project-info">
                <div className="project-category">Web Application</div>
                <h3 className="project-title">Fintech Analytics Dashboard</h3>
              </div>
            </Link>
            <Link to="/projects/banking-app" className="project-card">
              <img ref={proj2Ref} src={imgBanking} alt="Banking App" className={`project-img img-animate${proj2Visible ? ' img-visible' : ''}`} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="project-info">
                <div className="project-category">Mobile App</div>
                <h3 className="project-title">Secure Banking Interface</h3>
              </div>
            </Link>
            <Link to="/projects/ecommerce-site" className="project-card">
              <img ref={proj3Ref} src={imgEcommerce} alt="E-Commerce" className={`project-img img-animate${proj3Visible ? ' img-visible' : ''}`} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="project-info">
                <div className="project-category">E-Commerce</div>
                <h3 className="project-title">Premium Fashion Retail Site</h3>
              </div>
            </Link>
            <Link to="/projects/healthcare-portal" className="project-card">
              <img ref={proj4Ref} src={imgTelemedicine} alt="Healthcare App" className={`project-img img-animate${proj4Visible ? ' img-visible' : ''}`} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="project-info">
                <div className="project-category">Healthcare App</div>
                <h3 className="project-title">Telemedicine Patient Portal</h3>
              </div>
            </Link>
          </div>
          
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Auto Scroller */}
      <section className="section testimonials" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
        <div className="container">
          <h2 className="title text-center">Client Success Stories</h2>
          <p className="subtitle">Don't just take our word for it. Here is what our partners have to say.</p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', height: '300px' }}>
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  opacity: activeSlide === idx ? 1 : 0, 
                  transition: 'opacity 0.5s ease-in-out',
                  pointerEvents: activeSlide === idx ? 'auto' : 'none'
                }}
              >
                <div className="testimonial-card" style={{ boxShadow: 'var(--shadow-lg)', backgroundColor: 'var(--white)' }}>
                  <img src={testimonial.img} alt={testimonial.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '3px solid var(--primary)' }} />
                  <p className="testimonial-text" style={{ fontSize: '1.25rem' }}>{testimonial.text}</p>
                  <div>
                    <h5 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--secondary)' }}>{testimonial.name}</h5>
                    <p style={{ color: 'var(--primary)', fontWeight: '600' }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ position: 'absolute', bottom: '-40px', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: activeSlide === idx ? 'var(--primary)' : 'var(--border)', cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" style={{ backgroundColor: 'rgba(37, 99, 235, 0.95)' }}>
        <div className="container">
          <h2 className="cta-title">Start your digital transformation today</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
            Join industry leaders who trust Nexa Digital Solutions with their most mission-critical software projects.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
