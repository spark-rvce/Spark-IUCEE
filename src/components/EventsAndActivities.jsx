import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  X, 
  FileText, 
  Download, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Award, 
  CheckCircle2, 
  Info, 
  Filter,
  ExternalLink
} from 'lucide-react';
import { eventsByYear, annualReportPdf } from '../data/eventsData';

/* ── Scroll-triggered animation wrapper ── */
const Reveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const EventsAndActivities = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeEventModal, setActiveEventModal] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const years = ['2023', '2024', '2025', '2026'];
  const currentYearData = eventsByYear[selectedYear] || eventsByYear['2025'];
  const allEvents = currentYearData.events;

  // Unique tags for active year
  const availableTags = ['All', ...new Set(allEvents.map(e => e.tag))];

  const filteredEvents = selectedTag === 'All' 
    ? allEvents 
    : allEvents.filter(e => e.tag === selectedTag);

  const openModal = (event) => {
    setActiveEventModal(event);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setActiveEventModal(null);
    setActiveImageIndex(0);
  };

  return (
    <section id="events" className="w-full bg-slate-50 py-24 px-6 md:px-12 xl:px-20 relative overflow-hidden border-t border-slate-200/60">
      {/* Decorative background glow circles matching SPARK theme */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-sparkAccent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sparkGreen/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto relative z-10">

        {/* ── Section Title Header ── */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sparkBlue/5 border border-sparkBlue/10 text-sparkBlue text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} className="text-sparkAccent" /> SPARK Timeline & Archives
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-sparkBlue leading-tight mb-4">
              Activities & Events
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Explore our journey across academic years — showcasing workshops, industrial visits, national hackathons, podcasts, and community initiatives.
            </p>
          </div>
        </Reveal>

        {/* ── Interactive Year Timeline Selector Bar (2023 - 2024 - 2025 - 2026) ── */}
        <Reveal delay={0.1}>
          <div className="mb-14 max-w-4xl mx-auto px-4">
            <div className="relative flex items-center justify-between py-6">
              
              {/* Connecting background line */}
              <div className="absolute top-1/2 left-[8%] right-[8%] h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0" />
              
              {/* Progress active line filling up to selected year index */}
              <motion.div 
                className="absolute top-1/2 left-[8%] h-1 bg-gradient-to-r from-sparkAccent to-sparkGreen -translate-y-1/2 rounded-full z-0"
                initial={false}
                animate={{
                  width: `${(years.indexOf(selectedYear) / (years.length - 1)) * 84}%`
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />

              {/* Year Nodes */}
              {years.map((y, idx) => {
                const isSelected = selectedYear === y;
                const isPast = years.indexOf(selectedYear) >= idx;

                return (
                  <div key={y} className="relative z-10 flex flex-col items-center">
                    <button
                      onClick={() => {
                        setSelectedYear(y);
                        setSelectedTag('All');
                      }}
                      className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl font-black text-base md:text-xl transition-all duration-300 shadow-md ${
                        isSelected
                          ? 'bg-sparkBlue text-white ring-4 ring-sparkAccent/30 scale-110 shadow-xl'
                          : isPast
                          ? 'bg-white text-sparkBlue border-2 border-sparkAccent hover:scale-105'
                          : 'bg-white text-slate-400 border-2 border-slate-200 hover:border-slate-300 hover:scale-105'
                      }`}
                    >
                      {y}

                      {/* Active indicator dot */}
                      {isSelected && (
                        <motion.span
                          layoutId="timeline-active-node"
                          className="absolute -bottom-2 w-3 h-3 rounded-full bg-sparkGreen shadow-[0_0_12px_#85C227]"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </button>
                    
                    {/* Status badge below node */}
                    <span className={`mt-3 text-xs font-bold tracking-wider uppercase ${
                      isSelected ? 'text-sparkBlue' : 'text-slate-400'
                    }`}>
                      {y === '2023'
                         ? '8 Events'
                       : y === '2024'
                        ? '13 Events'
                       : y === '2025'
                        ? '14 Events'
                        : y === '2026'
                        ? '4 Events'
                        : 'Archive'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Year Sub-banner Info */}
            <div className="mt-4 text-center bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
              <h3 className="text-lg font-bold text-sparkBlue">
                {currentYearData.year}: <span className="text-sparkAccent">{currentYearData.tagline}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-500 mt-1 max-w-2xl mx-auto">
                {currentYearData.description}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Category Filter Pills ── */}
        {availableTags.length > 2 && (
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Filter size={14} /> Filter:
              </span>
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    selectedTag === tag
                      ? 'bg-sparkBlue text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-sparkBlue/30 hover:bg-slate-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* ── Events Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, idx) => (
            <Reveal key={event.id} delay={0.05 * (idx % 6)}>
              <div
                onClick={() => openModal(event)}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer relative"
              >
                {/* Thumbnail Header */}
                <div className="h-56 overflow-hidden relative bg-slate-100">
                  <img
                    src={event.images[0] || '/hero.png'}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = '/hero.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sparkBlue/80 via-sparkBlue/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-sparkBlue/90 backdrop-blur-md text-white border border-white/20 shadow-md">
                      {event.tag}
                    </span>
                  </div>

                  {/* Multiple photos count badge if > 1 */}
                  {event.images.length > 1 && (
                    <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
                      📷 +{event.images.length} Photos
                    </div>
                  )}

                  {/* Date overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-2 text-white/90 text-xs font-semibold">
                    <Calendar size={14} className="text-sparkAccent" />
                    <span>{event.date}</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {event.location && (
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-medium mb-2">
                        <MapPin size={12} className="text-sparkGreen" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <h3 className="text-xl font-black text-sparkBlue group-hover:text-sparkAccent transition-colors duration-200 mb-3 leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {event.shortDesc}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sparkBlue font-bold text-xs uppercase tracking-wider group-hover:text-sparkAccent transition-colors flex items-center gap-1">
                      View Event & Gallery
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sparkBlue/5 group-hover:bg-sparkAccent group-hover:text-white text-sparkBlue flex items-center justify-center transition-all duration-300">
                      <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Empty / Placeholder State Banner for 2023, 2024, 2026 ── */}
        {currentYearData.status === 'placeholder' && (
          <Reveal delay={0.2} className="mt-12">
            <div className="bg-amber-50 border-2 border-dashed border-amber-300/70 rounded-3xl p-8 text-center max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <Info size={24} />
              </div>
              <h4 className="text-xl font-bold text-amber-900 mb-2">
                Notice for {selectedYear} Core Team Members
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed max-w-xl mx-auto">
                This year timeline entry is set up with structured placeholder cards. Respective team leaders for {selectedYear} can populate event titles, descriptions, and media links in <code className="bg-amber-100 px-2 py-0.5 rounded font-mono text-xs text-amber-900">src/data/eventsData.js</code>.
              </p>
            </div>
          </Reveal>
        )}

        {/* ════════════════════════════════════════════════════════════
            ANNUAL REPORT CALLOUT BANNER AT THE END (Requested by user)
        ════════════════════════════════════════════════════════════ */}
        <Reveal delay={0.3} className="mt-20">
          <div className="group relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-sparkBlue via-sparkLightBlue to-sparkBlue p-8 md:p-14 text-white shadow-2xl border border-white/10">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sparkAccent/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sparkGreen/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <FileText size={40} className="text-sparkGreen" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sparkAccent text-xs font-bold uppercase tracking-wider mb-3">
                    Official Document • 2025-2026
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                    SPARK IUCEE RVCE Annual Report
                  </h3>
                  <p className="text-white/70 text-base max-w-2xl leading-relaxed">
                    Want to dive deeper into our academic year metrics, financial statements, faculty mentorship, research publications, and national awards? Read the comprehensive PDF report.
                  </p>
                </div>
              </div>

              {/* Action Download / Open PDF Button */}
              <a
                href={annualReportPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-3 bg-gradient-to-r from-sparkGreen to-emerald-500 hover:from-sparkAccent hover:to-cyan-400 text-sparkBlue font-black py-4 px-8 rounded-2xl shadow-xl hover:shadow-sparkGreen/30 transition-all duration-300 text-sm md:text-base uppercase tracking-wider group-hover:-translate-y-1"
              >
                <Download size={22} className="stroke-[2.5]" />
                <span>Open Full Report (PDF)</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </Reveal>

      </div>

      {/* ════════════════════════════════════════════════════════════
          INTERACTIVE DETAIL MODAL OVERLAY
      ════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeEventModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-sparkBlue/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-white/20"
            >

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg border border-white/20"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              {/* Modal Content Scroll Container */}
              <div className="overflow-y-auto flex-1">
                
                {/* Image Gallery / Hero Viewer */}
                <div className="relative bg-slate-900 min-h-[300px] md:min-h-[420px] flex items-center justify-center overflow-hidden">
                  <img
                    src={activeEventModal.images[activeImageIndex] || '/hero.png'}
                    alt={activeEventModal.title}
                    className="w-full h-full max-h-[480px] object-contain"
                    onError={(e) => { e.target.src = '/hero.png'; }}
                  />

                  {/* Carousel Controls if multiple images */}
                  {activeEventModal.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === 0 ? activeEventModal.images.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      <button
                        onClick={() => setActiveImageIndex((prev) => (prev === activeEventModal.images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Thumbnail dots / strip */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        {activeEventModal.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImageIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              activeImageIndex === i ? 'bg-sparkAccent scale-125' : 'bg-white/40 hover:bg-white'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Event Details Content */}
                <div className="p-8 md:p-10 space-y-8">
                  
                  {/* Badges & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3">
                      <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sparkBlue text-white">
                        {activeEventModal.tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-semibold">
                        <Calendar size={16} className="text-sparkAccent" />
                        <span>{activeEventModal.date}</span>
                      </div>
                    </div>

                    {activeEventModal.location && (
                      <div className="flex items-center gap-1.5 text-slate-600 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full">
                        <MapPin size={14} className="text-sparkGreen" />
                        <span>{activeEventModal.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Full Description */}
                  <div>
                    <h2 className="text-2xl md:text-4xl font-black text-sparkBlue leading-tight mb-4">
                      {activeEventModal.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                      {activeEventModal.fullDesc}
                    </p>
                  </div>

                  {/* Highlights / Key Outcomes */}
                  {activeEventModal.highlights && activeEventModal.highlights.length > 0 && (
                    <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-sparkBlue mb-4 flex items-center gap-2">
                        <Award size={18} className="text-sparkAccent" /> Key Takeaways & Highlights
                      </h4>
                      <ul className="space-y-3">
                        {activeEventModal.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-snug">
                            <CheckCircle2 size={18} className="text-sparkGreen shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Speakers / Resource Persons */}
                  {activeEventModal.speakers && activeEventModal.speakers.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                        <Users size={16} className="text-sparkBlue" /> Resource Persons & Guests
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeEventModal.speakers.map((spk, idx) => (
                          <span key={idx} className="bg-sparkBlue/5 text-sparkBlue font-semibold text-xs md:text-sm px-3.5 py-1.5 rounded-xl border border-sparkBlue/10">
                            👤 {spk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Event Stats Badges */}
                  {activeEventModal.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                      {Object.entries(activeEventModal.stats).map(([k, v]) => (
                        <div key={k} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                            {k.replace(/([A-Z])/g, ' $1')}
                          </div>
                          <div className="text-base font-black text-sparkBlue">
                            {v}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EventsAndActivities;
