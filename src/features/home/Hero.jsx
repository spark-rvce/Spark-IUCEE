import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ───────────────────────────────────────────────
   Typewriter effect
─────────────────────────────────────────────── */
const PHRASES = [
  'Engineers of Tomorrow',
  'Innovators at Heart',
  'Changemakers in Action',
  'Bridging Academia & Industry',
  'Driven by Curiosity',
];

const Typewriter = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    let timeout;
    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <div className="text-xl md:text-2xl font-medium text-white/60 min-h-[36px] flex items-center justify-center gap-2 tracking-wide">
      <span>{displayed}</span>
      <span className="inline-block w-0.5 h-6 bg-sparkAccent animate-pulse" />
    </div>
  );
};

/* ───────────────────────────────────────────────
   Hero Section
─────────────────────────────────────────────── */
const Hero = () => {
  const images = [
    '/images/events/2.1.jpg',
    '/images/events/3.2.jpg',
    '/images/events/5.1.jpg',
    '/images/events/7.1.jpg',
    '/images/events/7.2.jpg',
    '/images/events/11.1.jpg',
    '/images/events/11.2.jpg',
    '/images/events/11.3.jpg',
    '/images/events/13.2.jpg',
    '/images/events/14.1.jpeg',
    '/images/events/14.2.jpeg',
    '/images/events/14.3.jpeg',
  ];
  const marqueeImages = [...images, ...images];

  return (
    <section
      id="home"
      className="relative h-screen min-h-[800px] flex flex-col justify-between overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #051525 0%, #0B2447 35%, #0d2f5c 60%, #19376D 100%)',
      }}
    >
      {/* Soft radial glow overlays — no canvas, pure CSS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-sparkAccent/10 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-sparkAccent/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-sparkBlue/40 blur-[80px]" />
      </div>

      {/* Centre hero text */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 mt-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-white/55 font-medium tracking-widest text-xs mb-10 uppercase">
            IUCEE Student Chapter · RV College of Engineering
          </span>
        </motion.div>

        <div className="mb-8">
          <motion.h1
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: [0.1, 1.35, 0.85, 1], opacity: 1 }}
            transition={{ 
              duration: 1.6,
              times: [0, 0.45, 0.8, 1],
              ease: "easeInOut",
              delay: 0.3
            }}
            className="leading-none select-none"
            style={{
              fontSize: 'clamp(96px, 18vw, 220px)',
              fontFamily: '"Outfit", sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            SPARK
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Typewriter />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <a
            href="#wings"
            className="px-8 py-4 bg-sparkAccent hover:bg-cyan-400 text-white font-bold rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(25,167,206,0.4)] hover:shadow-[0_0_40px_rgba(25,167,206,0.65)] hover:-translate-y-1 text-base tracking-wide"
          >
            Discover Our Wings
          </a>
          <Link
            to="/activities"
            className="px-8 py-4 bg-white/8 hover:bg-white/15 backdrop-blur-md border border-white/25 text-white font-bold rounded-xl transition-all duration-200 hover:-translate-y-1 text-base tracking-wide"
          >
            Explore Events
          </Link>
        </motion.div>
      </div>

      {/* Infinite Image Strip */}
      <div className="relative z-10 w-full border-t border-white/10 py-5 overflow-hidden bg-white/5 backdrop-blur-sm">
        <div className="flex animate-marquee min-w-max">
          {marqueeImages.map((img, i) => (
            <div
              key={i}
              className="mx-3 w-64 h-36 rounded-xl overflow-hidden border border-white/15 shadow-lg relative group shrink-0"
            >
              <div className="absolute inset-0 bg-sparkBlue/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src={img}
                alt="SPARK IUCEE RVCE event highlights"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
