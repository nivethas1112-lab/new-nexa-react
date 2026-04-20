import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Code, Smartphone, Layout, Cloud, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import useParallax from '../hooks/useParallax';
import Reveal from '../hooks/Reveal';

import dashImg1 from '../assets4/6-best-practices-for-Dashboard-Design-Justinmind-header-768x492.png';
import dashImg2 from '../assets4/Mf9e870eb1acfd57c9bf1294a0481824d1729576481691.webp';
import dashImg3 from '../assets4/dashboard_demo.webp';


const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeDashboardSlide, setActiveDashboardSlide] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation();

  // Parallax offsets
  const heroParallax = useParallax(0.15);
  const titleParallax = useParallax(0.05);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDashboardSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="floating-shape" style={{ top: '10%', left: '5%', width: '400px', height: '400px' }}></div>
        <div className="floating-shape" style={{ bottom: '20%', right: '10%', width: '300px', height: '300px', animationDelay: '-5s' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ transform: `translateY(${heroParallax}px)` }}>
            <Reveal>
              <h1>Transform Your Digital Vision Into Reality</h1>
            </Reveal>
            <Reveal delay="delay-1">
              <p>We craft innovative software solutions that drive growth and deliver exceptional user experiences. Partner with us to build the future of your business.</p>
            </Reveal>
            <Reveal delay="delay-2">
              <div className="hero-btns">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link to="/projects" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            </Reveal>
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
          <Reveal>
            <h2 className="title text-center" style={{ transform: `translateY(${titleParallax}px)` }}>Core Services</h2>
            <br></br>
          </Reveal>
          <Reveal delay="delay-1">
            <p className="subtitle">Comprehensive digital solutions engineered with precision by our expert team.</p>
          </Reveal>
          
          <div className="grid grid-4">
            <Reveal delay="delay-1">
              <div className="card">
                <div className="service-icon"><Code size={24} /></div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-desc">Scalable, high-performance web applications built fully customized to your business needs.</p>
                <Link to="/services/web-development" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay="delay-2">
              <div className="card">
                <div className="service-icon"><Smartphone size={24} /></div>
                <h3 className="service-title">Mobile App Development</h3>
                <p className="service-desc">Engaging iOS and Android experiences that put your brand directly in your customers' hands.</p>
                <Link to="/services/mobile-development" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay="delay-3">
              <div className="card">
                <div className="service-icon"><Layout size={24} /></div>
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-desc">Human-centered design interfaces that drive engagement, retention, and conversion rates.</p>
                <Link to="/services/ui-ux" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
              </div>
            </Reveal>
            <Reveal delay="delay-4">
              <div className="card">
                <div className="service-icon"><Cloud size={24} /></div>
                <h3 className="service-title">Cloud Solutions</h3>
                <p className="service-desc">Secure, highly available cloud infrastructures tailored for growth and reliability.</p>
                <Link to="/services/cloud-solutions" style={{ color: 'var(--primary)', fontWeight: 'bold', display: 'block', marginTop: '1rem' }}>Read More &rarr;</Link>
              </div>
            </Reveal>
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
            <Reveal>
              <h2 className="title">Crafting digital excellence since 2018</h2>
            </Reveal>
            <Reveal delay="delay-1">
              <p className="service-desc" style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                At Nexa Digital Solutions, we bridge the gap between complex problems and elegant technological solutions. 
                Our team of veteran engineers and visionary designers work collaboratively to transform your ideas into 
                market-leading digital products.
              </p>
            </Reveal>
            <ul style={{ marginBottom: '2rem' }}>
              {['Enterprise-grade security', 'Agile development process', 'Post-launch support & maintenance'].map((item, i) => (
                <Reveal key={i} delay={`delay-${i + 1}`}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--secondary)', fontWeight: '500' }}>
                    <CheckCircle size={20} color="var(--primary)" /> {item}
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="stats-grid">
              <Reveal delay="delay-1">
                <div className="stat-item">
                  <h4>6+</h4>
                  <p>Years Experience</p>
                </div>
              </Reveal>
              <Reveal delay="delay-2">
                <div className="stat-item">
                  <h4>150+</h4>
                  <p>Happy Clients</p>
                </div>
              </Reveal>
              <Reveal delay="delay-3">
                <div className="stat-item">
                  <h4>300+</h4>
                  <p>Projects Delivered</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-section text-center">
        <div className="container">
          <Reveal>
            <div className="dashboard-badge">Dashboard Screenshot</div>
            <h2 className="dashboard-title">Let’s See Awesome Software UI Design Screenshot</h2>
          </Reveal>

          <div className="dashboard-container">
            <div className="dashboard-slider-wrapper">
              <div 
                className="dashboard-slider" 
                style={{ transform: `translateX(-${activeDashboardSlide * 100}%)` }}
              >
                {[dashImg1, dashImg2, dashImg3].map((img, idx) => (
                  <div className="dashboard-item" key={idx}>
                    <div className={`dashboard-image-card ${activeDashboardSlide === idx ? 'active' : ''}`}>
                      <img src={img} alt={`Dashboard Design ${idx + 1}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-nav">
              <button 
                className="dashboard-nav-btn" 
                onClick={() => setActiveDashboardSlide(prev => (prev === 0 ? 2 : prev - 1))}
                aria-label="Previous Slide"
              >
                <ArrowLeft size={24} />
              </button>
              <button 
                className="dashboard-nav-btn" 
                onClick={() => setActiveDashboardSlide(prev => (prev === 2 ? 0 : prev + 1))}
                aria-label="Next Slide"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Auto Scroller */}
      <section className="section testimonials" style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
        <div className="container">
          <Reveal>
            <h2 className="title text-center">Client Success Stories</h2>
          </Reveal>
          <Reveal delay="delay-1">
            <p className="subtitle">Don't just take our word for it. Here is what our partners have to say.</p>
          </Reveal>
          
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
          <Reveal>
            <h2 className="cta-title">Start your digital transformation today</h2>
          </Reveal>
          <Reveal delay="delay-1">
            <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
              Join industry leaders who trust Nexa Digital Solutions with their most mission-critical software projects.
            </p>
          </Reveal>
          <Reveal delay="delay-2">
            <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--white)', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Book a Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>

  );
};

export default HomePage;
