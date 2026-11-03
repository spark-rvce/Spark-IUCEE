import React, { useState, useEffect, useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './features/home/Home';
import OfficeBearers from './features/office-bearers/OfficeBearers';
import Wings from './features/wings/Wings';
import Activities from './features/activities/Activities';
import Podcasts from './features/podcasts/Podcasts';
import Projects from './features/projects/Projects';
import Achievements from './features/achievements/Achievements';
import Registrations from './features/registrations/Registrations';
import ContactUs from './features/contact-us/ContactUs';
import Credits from './features/credits/Credits';
import RecruitmentPopup from './components/RecruitmentPopup';
import recruitmentConfig from './config/recruitmentConfig';

import ScrollToTopButton from './components/ScrollToTopButton';


// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Prevent the browser from restoring the previous page's scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll immediately
    window.scrollTo(0, 0);

    // Scroll again on the next frame to handle mobile browser
    // scroll-restoration timing
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
};

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const failsafe = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(failsafe);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-slate-50 font-sans antialiased overflow-x-clip">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/office-bearers" element={<OfficeBearers />} />
            <Route path="/wings" element={<Wings />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            {recruitmentConfig.recruitmentEnabled && (
              <Route path="/registrations" element={<Registrations />} />
            )}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
        {!loading && location.pathname === '/' && <RecruitmentPopup />}
        <ScrollToTopButton />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
