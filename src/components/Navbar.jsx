import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import recruitmentConfig from '../config/recruitmentConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Office Bearers and Members', to: '/office-bearers' },
    { name: 'Wings', to: '/wings' },
    { name: 'Activities & Events', to: '/activities' },
    { name: 'Podcasts', to: '/podcasts' },
    { name: 'Projects', to: '/projects' },
  ];

  const moreLinks = [
    { name: 'Achievements', to: '/achievements' },
    ...(recruitmentConfig.recruitmentEnabled
      ? [{ name: 'Registrations', to: '/registrations' }]
      : []),
    { name: 'Credits', to: '/credits' },
    { name: 'Contact Us', to: '/contact-us' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-3 left-1/2 z-50 w-[98%] max-w-screen-2xl -translate-x-1/2 transition-all duration-500 ${
        scrolled
          ? 'rounded-2xl border border-white/10 bg-sparkBlue/95 py-2.5 shadow-[0_8px_32px_rgba(11,36,71,0.4)] backdrop-blur-xl md:py-3'
          : 'rounded-2xl border border-white/20 bg-white/10 py-3 shadow-md backdrop-blur-md md:py-3.5'
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-8">

        {/* Logos */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <img
              src="/images/rvce.png"
              alt="RVCE Logo"
              className="h-11 object-contain drop-shadow-md invert md:h-13 lg:h-[56px]"
            />

            <img
              src="/spark.png"
              alt="SPARK Logo"
              className="h-11 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105 md:h-13 lg:h-[56px]"
            />

            <img
              src="/images/iucee.png"
              alt="IUCEE Logo"
              className="h-11 object-contain drop-shadow-md md:h-13 lg:h-[56px]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`inline-block text-base font-semibold transition-all duration-200 hover:scale-105 ${
                isActive(link.to)
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}

              {isActive(link.to) && (
                <motion.div
                  layoutId="navIndicator"
                  className="mt-0.5 h-0.5 rounded-full bg-sparkAccent"
                />
              )}
            </Link>
          ))}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1 text-base font-semibold transition-colors ${
                moreLinks.some((link) => isActive(link.to))
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              More
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-full z-50 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-sparkBlue/95 py-2 shadow-xl backdrop-blur-xl"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-5 py-3 text-sm font-semibold transition-colors ${
                        isActive(link.to)
                          ? 'bg-white/10 text-white'
                          : 'text-white/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>


        
      {/* Mobile Toggle */}
      <button
        type="button"
        className="text-white lg:hidden"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
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
          transition={{ duration: 0.25 }}
          className="absolute left-0 top-full mt-3 w-full overflow-hidden rounded-2xl border border-white/10 bg-sparkBlue/95 shadow-xl backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-5 px-8 py-5">

            {/* Main Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-lg font-semibold transition-colors ${
                  isActive(link.to)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile More Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className="flex w-full items-center justify-between text-lg font-semibold text-white/70 transition-colors hover:text-white"
              >
                More

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 ${
                    moreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-2 mt-3 flex flex-col gap-4 border-l border-white/20 pl-4">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.to}
                          className={`text-base font-medium transition-colors ${
                            isActive(link.to)
                              ? 'text-white'
                              : 'text-white/65 hover:text-white'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
