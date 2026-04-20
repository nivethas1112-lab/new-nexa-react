import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../hooks/Reveal';

import imgCloud from '../assets2/cloud-computing-in-a-nutshell-1.jpg';
import imgReact from '../assets2/cover 2.png';
import imgSecurity from '../assets2/632438e832e0b51f2282e501_A-Comprehensive-Guide-to-Mobile-Application-Security-Testing.webp';
import imgAccess from '../assets2/Accessibility_and_integration.png';
import imgAi from '../assets2/AI-1024x547.png';
import imgMicroservices from '../assets2/concept-of-addressing-cu.jpg';

const BlogPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Reveal>
            <h1>Latest Insights</h1>
          </Reveal>
          <Reveal delay="delay-1">
            <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Thoughts, news, and perspectives from our engineering team.</p>
          </Reveal>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                title: 'The Future of Cloud Architecture in 2026',
                category: 'Cloud Computing',
                date: 'April 12, 2026',
                img: imgCloud,
                slug: 'future-of-cloud-architecture'
              },
              {
                title: 'Why React is Still the King of Frontend',
                category: 'Web Development',
                date: 'March 28, 2026',
                img: imgReact,
                slug: 'react-king-of-frontend'
              },
              {
                title: 'Securing Your Mobile App: A Comprehensive Guide',
                category: 'Cybersecurity',
                date: 'March 15, 2026',
                img: imgSecurity,
                slug: 'securing-mobile-apps'
              },
              {
                title: 'Designing for Accessibility: Beyond Compliance',
                category: 'UI/UX Design',
                date: 'February 22, 2026',
                img: imgAccess,
                slug: 'designing-for-accessibility'
              },
              {
                title: 'The Rise of AI-Assisted Development',
                category: 'Artificial Intelligence',
                date: 'February 05, 2026',
                img: imgAi,
                slug: 'ai-assisted-development'
              },
              {
                title: 'Migrating from Legacy Monoliths to Microservices',
                category: 'Software Engineering',
                date: 'January 18, 2026',
                img: imgMicroservices,
                slug: 'migrating-to-microservices'
              }
            ].map((post, index) => (
              <Reveal key={index} delay={`delay-${(index % 3) + 1}`}>
                <div className="project-card">
                  <img src={post.img} alt={post.title} className="project-img" style={{ height: '220px' }} />
                  <div className="project-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <div className="project-category" style={{ marginBottom: '0' }}>{post.category}</div>
                      <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{post.date}</span>
                    </div>
                    <h3 className="project-title" style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h3>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>Read Article &rarr;</Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;

