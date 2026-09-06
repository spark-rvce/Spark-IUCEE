import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mic } from 'lucide-react';
import Reveal from '../../components/Reveal';

import MissionPhoto from './assets/Mission-photo.jpeg';
import VisionPhoto from './assets/Vision-photo.jpeg';

const wings = [
  {
    label: 'Projects & R&D',
    desc: 'Project-based learning, research studies, literature reviews, and prototype development.',
    image: '/images/events/2.2.jpg',
  },
  {
    label: 'Industrial Connect',
    desc: 'Collaborations with industries for technical learning and building lasting professional relationships.',
    image: '/images/IV1.jpg',
  },
  {
    label: 'Activities & Events',
    desc: 'Workshops, expert talks, mini-courses, and interactive technical sessions.',
    image: '/img4.jpg',
  },
  {
    label: 'Women Empowerment',
    desc: 'Promoting self-worth, educating rights, and creating pathways for women in technology.',
    image: '/images/empowher.JPG',
  },
  {
    label: 'Social Media Wing',
    desc: 'Disseminating information, designing artwork, and building our online community.',
    image: '/img3.jpg',
  },
];

const IdentitySection = () => {
  return (
    <div className="bg-white relative z-20">

      {/* ════════════════════════════════════
          IDENTITY — One unified premium card
      ════════════════════════════════════ */}
      <section id="vision" className="w-full bg-slate-100 py-24 px-6 md:px-12 xl:px-20">

        {/* Section heading */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-sparkBlue leading-none">Our Identity</h2>
          </div>
        </Reveal>

        {/* The big unified card */}
        <div className="max-w-screen-xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_32px_80px_-12px_rgba(11,36,71,0.25)] border border-slate-200/60">

          {/* ── Row 1: Vision (image left, text right) ── */}
          <Reveal direction="left">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[240px] bg-white">
              {/* Vision Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={VisionPhoto}
                    alt="SPARK Vision"
                    className="w-full h-full object-contain"
                  />
                </div>
              {/* Text */}
              <div className="flex flex-col justify-center px-8 py-10 md:px-12 xl:px-14 bg-white">
                <h3 className="text-3xl md:text-4xl font-black text-sparkBlue mb-3 leading-tight">
                  Vision
                </h3>
                <p className="text-slate-500 leading-relaxed text-base text-justify">
                  Believe in studying through projects and activities for renewing knowledge.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-slate-100" />

          {/* ── Row 2: Mission (text left, image right) ── */}
          <Reveal direction="right" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[240px] bg-slate-50">
              {/* Text */}
              <div className="flex flex-col justify-center px-8 py-10 md:px-12 xl:px-14 order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-black text-sparkBlue mb-3 leading-tight">
                  Mission
                </h3>
                <p className="text-slate-500 leading-relaxed text-base text-justify">
                  Aim to enrich and enhance our community through technical and cultural diversity, curiosity, and the overall development of engineering students. Improving the educational experience beyond classroom walls and enhancing our ethical values. Innovations by out-of-the-box thinking.
                </p>
              </div>
              {/* Mission Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100 order-1 md:order-2">
                  <img
                    src={MissionPhoto}
                    alt="SPARK Mission"
                    className="w-full h-full object-contain"
                  />
                </div>
            </div>
          </Reveal>

          {/* ── Divider ── */}
          <div className="h-px w-full bg-slate-200" />

          {/* ── Row 3: About Chapter ── */}
          <Reveal direction="up" delay={0.15}>
            <div className="bg-sparkBlue px-10 py-16 md:px-14 xl:px-16 relative overflow-hidden">
              <div className="absolute top-0 left-1/4 w-80 h-80 bg-sparkAccent/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sparkGreen/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {/* Banner Image */}
                <div className="relative shrink-0 w-full md:w-96 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <img
                    src="/images/about_chapter_banner.png"
                    alt="SPARK - The IUCEE Student Chapter of RVCE"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    About the Chapter
                  </h3>
                  <p className="text-white/55 leading-relaxed text-base md:text-lg max-w-2xl mx-auto md:mx-0 text-justify">
                    RV College is dedicated to the holistic development of individuals, shaping their personalities with strong values and ethics. The institution focuses on providing quality education and, through this chapter, promises a practical, hands-on learning platform to enhance students' knowledge. The IUCEExRVCE student chapter offers an innovative experience beyond conventional classroom learning. It aims to cultivate leadership qualities and social responsibility among engineers, encouraging them to contribute to society and the environment. By adopting a practical approach to problem-solving and fostering unique ideas and solutions, the chapter motivates students to undertake projects beneficial to society. These projects are integrated into both self-learning topics and the curriculum. Additionally, students are encouraged to participate in competitions and present their ideas, gaining valuable feedback for improvement and development. This approach not only enhances their technical skills but also prepares them to make meaningful contributions to the broader community.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

const WingsSection = () => {
  return (
    <div className="bg-white relative z-20">
      {/* ════════════════════════════════════
          WINGS — Full-width
      ════════════════════════════════════ */}
      <section id="wings" className="w-full px-12 py-24 md:px-16 xl:px-24">
        <Reveal>
          <div className="mb-14">
            <h2 className="text-4xl md:text-6xl font-black text-sparkBlue leading-none mb-5">The 5 Wings</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {wings.map((w, i) => (
            <Reveal key={w.label} delay={i * 0.07}>
              <div className="group bg-white border border-slate-100 border-t-4 border-t-sparkBlue rounded-3xl p-6 md:p-8 h-full flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 hover:border-x-sparkAccent/20 hover:border-b-sparkAccent/20 transition-all duration-300 cursor-default">
                {/* Wing Image */}
                <div className="w-full h-36 rounded-2xl overflow-hidden shadow-sm mb-7 shrink-0 bg-slate-100">
                  <img
                    src={w.image}
                    alt={w.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="text-base font-bold text-sparkBlue mb-3">{w.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{w.desc}</p>
                <Link to="/wings" className="mt-6 px-5 py-2 rounded-lg border border-sparkAccent/40 text-sparkAccent text-xs font-bold tracking-wider uppercase hover:bg-sparkAccent hover:text-white transition-all duration-200 hover:shadow-md inline-block">
                  Know More
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Podcasts card */}
        <Reveal delay={0.3} className="mt-8">
          <div
            id="podcasts"
            className="group relative w-full rounded-3xl overflow-hidden bg-sparkBlue p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 cursor-pointer hover:shadow-[0_20px_60px_rgba(11,36,71,0.35)] transition-shadow duration-500"
          >
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-sparkAccent/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sparkGreen/10 rounded-full blur-[80px]" />

            <div className="relative z-10 flex items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mic size={36} className="text-sparkAccent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3">SPARK Podcasts</h3>
                <p className="text-white/60 text-base max-w-lg">Exclusive conversations on technology, SDGs, engineering careers, and life at RVCE — straight from the people who live it.</p>
              </div>
            </div>

            <Link to="/podcasts" className="relative z-10 shrink-0 flex items-center gap-3 bg-white text-sparkBlue font-bold py-4 px-8 rounded-2xl hover:bg-sparkAccent hover:text-white transition-all duration-300 text-base tracking-widest uppercase group-hover:-translate-y-1 group-hover:shadow-xl">
              Discover <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

// Named exports
export { IdentitySection, WingsSection };
