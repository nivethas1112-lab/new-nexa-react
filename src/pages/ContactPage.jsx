import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <div className="page-header" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <h1>Get In Touch</h1>
          <p className="subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Ready to transform your business? Let's start the conversation.</p>
        </div>
      </div>
      
      <section className="section bg-white" style={{ marginTop: '-4rem', paddingTop: '0' }}>
        <div className="container">
          <div className="grid grid-2">
            <div className="card" style={{ boxShadow: 'var(--shadow-lg)', border: 'none', zIndex: '10' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Send us a message</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--secondary)' }}>Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '1rem' }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--secondary)' }}>Email Address</label>
                  <input type="email" id="email" placeholder="john@company.com" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '1rem' }} />
                </div>
                <div>
                  <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--secondary)' }}>Interested In</label>
                  <select id="service" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '1rem', backgroundColor: 'white' }}>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>UI/UX Design</option>
                    <option>Cloud Solutions</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--secondary)' }}>Message</label>
                  <textarea id="message" rows="5" placeholder="Tell us about your project..." style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '1rem', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: '0.5rem' }}>
                  Send Message
                </button>
              </form>
            </div>
            
            <div style={{ paddingTop: '4rem', paddingLeft: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--secondary)' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem', color: 'var(--secondary)' }}>Our Headquarters</h4>
                  <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>123 Tech Avenue, Suite 400<br/>Silicon Valley, CA 94025<br/>United States</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem', color: 'var(--secondary)' }}>Email Us</h4>
                  <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>contact@nexadigital.com<br/>support@nexadigital.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: '#eff6ff', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.25rem', color: 'var(--secondary)' }}>Call Us</h4>
                  <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>+1 (555) 123-4567<br/>Mon-Fri from 8am to 6pm PST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
