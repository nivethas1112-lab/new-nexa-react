import { useParams, Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import Reveal from '../hooks/Reveal';

import imgCloud from '../assets2/cloud-computing-in-a-nutshell-1.jpg';
import imgWeb from '../assets2/cover 2.png';
import imgCyber from '../assets2/632438e832e0b51f2282e501_A-Comprehensive-Guide-to-Mobile-Application-Security-Testing.webp';
import imgUiUx from '../assets2/Accessibility_and_integration.png';
import imgAi from '../assets2/AI-1024x547.png';
import imgSoftware from '../assets2/concept-of-addressing-cu.jpg';

const imageMap = {
  'future-of-cloud-architecture': imgCloud,
  'react-king-of-frontend': imgWeb,
  'securing-mobile-apps': imgCyber,
  'designing-for-accessibility': imgUiUx,
  'ai-assisted-development': imgAi,
  'migrating-to-microservices': imgSoftware,
};

const BlogDetailPage = () => {
  const { id } = useParams();
  const blogImg = imageMap[id] || imgWeb;
  const [imgRef, imgVisible] = useScrollAnimation();

  return (
    <>
      <div className="page-header" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <Reveal>
            <div style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technology Insights</div>
            <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '1.5rem', textTransform: 'capitalize' }}>
              {id.replace('-', ' ')}
            </h1>
          </Reveal>
          <Reveal delay="delay-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              <span>By Nexa Engineering</span> • <span>April 2026</span> • <span>5 min read</span>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">

          {/* Responsive grid container */}
          <div className="detail-grid">

            {/* LEFT — Article Content */}
            <div>
              <article style={{ color: 'var(--secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <Reveal>
                  <p style={{ fontSize: '1.15rem', fontWeight: '500', marginBottom: '2rem', color: 'var(--muted)' }}>
                    In today's fast-paced digital ecosystem, staying ahead of technology trends is no longer optional—it is a business imperative. Here's our comprehensive take on {id.replace('-', ' ')}.
                  </p>
                </Reveal>

                <Reveal delay="delay-1">
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700', marginTop: '2rem' }}>The Current Landscape</h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    The software industry has seen a massive shift in paradigms over the last few years. Enterprises are increasingly moving away from monolithic architectures towards highly agile, decoupled system structures. This shift ensures rapid deployment lines and enhanced fault tolerance.
                  </p>
                  <p style={{ marginBottom: '2rem' }}>
                    When implementing these changes, engineering teams often face integration hurdles. However, proper planning and adopting containerized environments mitigate most deployment risks.
                  </p>
                </Reveal>

                <Reveal delay="delay-1">
                  <div style={{ padding: '1.5rem 2rem', backgroundColor: '#f0f9ff', borderLeft: '4px solid var(--primary)', borderRadius: 'var(--radius)', margin: '2rem 0' }}>
                    <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--primary)', margin: 0 }}>
                      "The defining metric for modern software engineering is not just lines of code, but the speed at which you can safely deliver value to customers without compromising quality."
                    </p>
                  </div>
                </Reveal>

                <Reveal delay="delay-2">
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: '700' }}>Looking Ahead</h2>
                  <p style={{ marginBottom: '2rem' }}>
                    As we look to the future, automation and AI-assisted development cycles will become the standard. Our team at Nexa Digital is already embedding these intelligent workflows into our daily pipelines, ensuring our clients receive world-class, future-proof products.
                  </p>
                </Reveal>
              </article>

              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <Link to="/blog" className="btn btn-outline">&larr; Read More Articles</Link>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="detail-sticky-img" style={{ position: 'sticky', top: '7rem' }}>
              <Reveal delay="delay-3">
                <img
                  ref={imgRef}
                  src={blogImg}
                  alt="Blog Feature"
                  className={`img-animate${imgVisible ? ' img-visible' : ''}`}
                  style={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                />
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailPage;

