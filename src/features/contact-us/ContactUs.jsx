import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const contacts = [
  {
    name: 'Dr. SHANMUKHA NAGARAJ',
    role: 'Faculty Advisor',
    email: 'shanmukhan@rvce.edu.in',
  },
  {
    name: 'Kavin Krishnan C',
    role: 'President',
    email: 'kavinkrishnanc.cs24@rvce.edu.in',
  },

  
  
  {
    name: 'Parinitha M',
    role: 'Secretary',
    email: 'parinitham.cs24@rvce.edu.in',
  },
];

const ContactUs = () => {
  return (
    <>
      <SEOHead
        title="Contact Us | SPARK IUCEE RVCE"
        description="Get in touch with SPARK IUCEE RVCE — the official IUCEE Student Chapter at RV College of Engineering, Bengaluru. Contact our faculty advisors and student leaders."
        path="/contact-us"
      />
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #051525 0%, #0B2447 35%, #0d2f5c 60%, #19376D 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sparkAccent/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sparkAccent/8 blur-[100px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-sparkAccent mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">Reach Out To Us</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Have questions or want to collaborate with SPARK IUCEE RVCE? Connect with our team.</p>
        </motion.div>
      </section>

      <div className="bg-slate-50 relative z-20 py-20 px-6 md:px-12 xl:px-20 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-screen-lg mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contacts.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-sparkBlue mb-2">{c.name}</h3>
                    <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-6">{c.role}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Email</span>
                    <a href={`mailto:${c.email}`} className="text-sparkAccent hover:underline font-semibold text-sm break-all">
                      {c.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="text-center mb-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-md mx-auto">
              <h4 className="text-base font-bold text-sparkBlue mb-2">Contact us at:</h4>
              <a href="mailto:spark.iucee@rvce.edu.in" className="text-sparkAccent font-bold text-lg hover:underline">
                spark.iucee@rvce.edu.in
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="text-center">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Follow Us On</h4>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/company/spark-iucee-rvce/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-sparkBlue flex items-center justify-center hover:bg-sparkAccent transition-colors duration-300 shadow-md hover:-translate-y-1" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/spark_rvce/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-sparkBlue flex items-center justify-center hover:bg-sparkAccent transition-colors duration-300 shadow-md hover:-translate-y-1" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@sparkiuceervce" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-sparkBlue flex items-center justify-center hover:bg-sparkAccent transition-colors duration-300 shadow-md hover:-translate-y-1" aria-label="YouTube">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.facebook.com/sparkrvce" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-sparkBlue flex items-center justify-center hover:bg-sparkAccent transition-colors duration-300 shadow-md hover:-translate-y-1" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
