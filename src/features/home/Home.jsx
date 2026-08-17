import React from 'react';
import Hero from './Hero';
import { IdentitySection, WingsSection } from './BentoGrid';
import { AboutLogo, DignitariesSection } from './AboutSection';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <IdentitySection />
      <AboutLogo />
      <DignitariesSection />
      <WingsSection />
      <Footer />
    </>
  );
};

export default Home;
