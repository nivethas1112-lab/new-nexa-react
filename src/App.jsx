import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BlogDetailPage from './pages/BlogDetailPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo" style={{ color: 'var(--secondary)' }} onClick={() => setIsMenuOpen(false)}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 14 10 8 15 13 20 8"></polyline>
              <polyline points="4 19 10 13 15 18 20 13" style={{ opacity: 0.5 }}></polyline>
            </svg>
          </div>
          <span style={{ fontSize: '1.75rem' }}>Nexa<span style={{ color: 'var(--primary)' }}>.</span></span>
        </Link>
        <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={isActive('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className={isActive('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/projects" className={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/blog" className={isActive('/blog')} onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/contact" className={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/contact" className="mobile-only btn btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
        </nav>
        <Link to="/contact" className="btn btn-primary desktop-only">
          Get Started
        </Link>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Nexa Digital Solutions</div>
            <p className="footer-desc">
              Transforming businesses through innovative software development, mobile apps, and cloud solutions. We build the digital future.
            </p>
            <div className="social-links">
              <a href="#">FB</a>
              <a href="#">TW</a>
              <a href="#">IN</a>
              <a href="#">IG</a>
            </div>
          </div>
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects portfolio</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-links">
              <li>Camp Road Junction, Selaiyur, 
                East Tambaram</li>
              <li>Contact@nexadigital.com</li>
              <li>+91 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexa Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
