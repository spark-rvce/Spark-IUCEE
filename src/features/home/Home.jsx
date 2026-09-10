import React from 'react';
import Hero from './Hero';
import { IdentitySection, WingsSection } from './BentoGrid';
import { AboutLogo, DignitariesSection } from './AboutSection';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const Home = () => {
  return (
    <>
      <SEOHead
        title="SPARK IUCEE RVCE | The IUCEE Student Chapter at RV College of Engineering"
        description="SPARK IUCEE RVCE is the official IUCEE Student Chapter at RV College of Engineering, Bengaluru. Explore activities, events, projects, podcasts, wings, and student-led initiatives in engineering education."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://spark-iucee-rvce.vercel.app/" }
          ]
        }}
      />
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

