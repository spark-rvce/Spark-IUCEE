import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import Footer from '../../components/Footer';

const developers = [
  {
    name: 'Ravi R',
    role: 'Website Developer - Design Lead',
    email: 'raviramakrishna2006@gmail.com',
  },
  {
    name: 'Krupanka R',
    role: 'Website Developer - Coding Lead',
    email: 'krupankaramesha@gmail.com',
  },
  {
    name: 'Arya Shetty',
    role: 'Website Developer - Integration Lead',
    email: 'aryashetty020206@gmail.com',
  },
  {
    name: 'Manyashree S',
    role: 'Website Developer - Testing & QA Lead',
    email: 'manyaskaranth@gmail.com',
  },
];

const juniors = [
  {
    name: 'Sanjana H V'
  },
  {
    name: 'Ramya S'
  },
  {
    name: 'Jairaj'
  },
  {
    name: 'Satyendra'
  },
  {
    name: 'P Nikitha'
  },
  {
    name: 'Chaitanya G'
  },
  {
    name: 'Inika'
  },
  {
    name: 'Sinchana R Achar'
  },
  {
    name: 'Aadithya V S'
  }
];

const Credits = () => {
  return (
    <>
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
          <span className="text-xs font-bold tracking-widest uppercase text-sparkAccent mb-4 block">Acknowledgements</span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-4">Website Credits</h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">The developers and designers who contributed to building and maintaining the SPARK website.</p>
        </motion.div>
      </section>

      <div className="bg-slate-50 relative z-20 py-20 px-6 md:px-12 xl:px-20 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-screen-lg mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {developers.map((dev, i) => (
              <Reveal key={dev.name} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-sparkBlue mb-1">{dev.name}</h3>
                    <p className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-4">{dev.role}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Email</span>
                    <a href={`mailto:${dev.email}`} className="text-sparkAccent hover:underline font-semibold text-xs break-all">
                      {dev.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Junior Contributors */}
            <Reveal delay={0.3}>
              <div className="mb-12">
                <div className="text-center mb-8">
                  <span className="text-xl font-bold tracking-widest uppercase text-sparkAccent">
                    Main Contributors
                  </span>

                  <h2 className="text-2xl md:text-3xl font-black text-sparkBlue mt-2">
                    Junior Developers
                  </h2>

                  <p className="text-slate-400 text-sm mt-2 max-w-xxl mx-auto">
                    Students who contributed to the development, content, testing, and refinement of the SPARK website.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {juniors.map((junior, i) => (
                    <motion.div
                      key={junior.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="bg-white rounded-xl px-4 py-5 text-center border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <h3 className="text-sm md:text-base font-bold text-sparkBlue">
                        {junior.name}
                      </h3>

                      <p className="text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                        {junior.role}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

          <Reveal delay={0.4}>
            <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-md mx-auto">
              <h4 className="text-base font-bold text-sparkBlue mb-2">Built using:</h4>
              <p className="text-sparkAccent font-semibold text-sm">
                React.js · React Router · Tailwind CSS · Framer Motion
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Credits;
