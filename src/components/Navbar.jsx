import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Office Bearers and Members', to: '/office-bearers' },
    { name: 'Wings', to: '/wings' },
    { name: 'Activities & Events', to: '/activities' },
    { name: 'Podcasts', to: '/podcasts' },
  ];

  const moreLinks = [
    { name: 'Projects', to: '/projects' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-3 left-1/2 -translate-x-1/2 w-[98%] max-w-screen-2xl z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sparkBlue/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(11,36,71,0.4)] py-2.5 md:py-3 rounded-2xl border border-white/10'
          : 'bg-white/10 backdrop-blur-md shadow-md border border-white/20 py-3 md:py-3.5 rounded-2xl'
      }`}
    >
      <div className="px-6 md:px-8 flex justify-between items-center">
        {/* Independent 3 Logos: RVCE (White Lines) | SPARK | IUCEE */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 group shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/images/rvce.png" alt="RVCE Logo" className="h-11 md:h-13 lg:h-[56px] object-contain drop-shadow-md invert" />
            <img src="/spark.png" alt="SPARK Logo" className="h-11 md:h-13 lg:h-[56px] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300" />
            <img src="/images/iucee.png" alt="IUCEE Logo" className="h-11 md:h-13 lg:h-[56px] object-contain drop-shadow-md" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`text-base font-semibold transition-all duration-200 hover:scale-105 inline-block ${
                isActive(link.to) ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              {isActive(link.to) && (
                <motion.div layoutId="navIndicator" className="h-0.5 bg-sparkAccent rounded-full mt-0.5" />
              )}
            </Link>
          ))}
          {/* More dropdown */}
          <div className="relative group cursor-pointer">
            <span className={`flex items-center gap-1 text-base font-semibold transition-all duration-200 group-hover:scale-105 inline-flex ${
              moreLinks.some(l => isActive(l.to)) ? 'text-white' : 'text-white/70 group-hover:text-white'
            }`}>
              More <ChevronDown size={16} className="mt-0.5 group-hover:rotate-180 transition-transform duration-300" />
            </span>
            <div className="absolute top-full right-0 mt-5 w-52 bg-sparkBlue/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`block px-5 py-3.5 text-sm font-semibold hover:bg-white/10 transition-colors ${
                    isActive(link.to) ? 'text-white bg-white/5' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full mt-3 bg-sparkBlue/95 rounded-2xl shadow-xl overflow-hidden border border-white/10"
          >
            <div className="py-5 px-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-lg font-semibold transition-colors ${
                    isActive(link.to) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-lg font-semibold transition-colors ${
                    isActive(link.to) ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
