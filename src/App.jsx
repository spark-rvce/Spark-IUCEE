import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './features/home/Home';
import OfficeBearers from './features/office-bearers/OfficeBearers';
import Wings from './features/wings/Wings';
import Activities from './features/activities/Activities';
import Podcasts from './features/podcasts/Podcasts';
import Projects from './features/projects/Projects';
import ContactUs from './features/contact-us/ContactUs';
import Credits from './features/credits/Credits';

import ScrollToTopButton from './components/ScrollToTopButton';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const failsafe = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(failsafe);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-slate-50 font-sans antialiased overflow-x-hidden">
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
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </main>
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
