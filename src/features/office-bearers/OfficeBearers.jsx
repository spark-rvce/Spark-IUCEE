import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../../components/Reveal';
import Footer from '../../components/Footer';

/* ════════════════════════════════════════════════════════════
   OFFICE BEARERS DATA (2024-25)
════════════════════════════════════════════════════════════ */

// Chairman
const chairman = {
  name: 'Dr. K N Subramanya',
  role: 'Chairman',
  designation: 'Principal, RV College of Engineering',
  photo: '/images/princi.jpg',
  email: 'principal@rvce.edu.in',
  linkedin: 'https://www.linkedin.com/',
};

// Faculty Advisors
const facultyAdvisors = [
  {
    name: 'Dr. K.S. Geetha',
    role: 'Faculty Advisor',
    designation: 'Vice Principal, RV College of Engineering',
    photo: '/images/vp.jpeg',
    email: 'geethaks@rvce.edu.in',
    linkedin: 'https://www.linkedin.com/',
  },
  {
    name: 'Dr. Shanmukha N',
    role: 'Faculty Advisor',
    designation: 'Head of Department, Mechanical Engineering',
    photo: '/images/dean.jpg',
    email: 'shanmukhan@rvce.edu.in',
    linkedin: 'https://www.linkedin.com/',
  },
];

// Faculty Coordinator
const facultyCoordinator = {
  name: 'Dr. Prapulla S B',
  role: 'Faculty Coordinator',
  designation: 'Associate Professor, Computer science and Enginnering ',
  photo: '/images/psb.jpg',
  email: 'prapullasb@rvce.edu.in',
  linkedin: 'https://www.linkedin.com/',
};

// Core Team (With Exact LinkedIn URLs)
const coreTeam = [
  {
    name: 'Kavin Krishnan C',
    role: 'President',
    dept: 'Computer science and Enginnering',
    email: 'kavinkrishnanc.cs24@rvce.edu.in',
    photo: '/images/team/Kavin_SPARK.png',
    linkedin: 'https://www.linkedin.com/in/kavin-krishnan-c-72024k',
  },
  {
    name: 'A S S S Koundinya',
    role: 'Vice President',
    dept: 'Computer science and Enginnering',
    email: 'assskoundinya.cs24@rvce.edu.in',
    photo: '/images/team/ASSS_Koundinya.jpg',
    linkedin: 'https://www.linkedin.com/in/a-s-s-s-koundinya-387a6b33a',
  },
  {
    name: 'Parinitha M',
    role: 'Secretary',
    dept: 'Computer science and Enginnering',
    email: 'parinitham.cs24@rvce.edu.in',
    photo: '/images/team/ParinithaM (2).jpeg',
    linkedin: 'https://www.linkedin.com/in/parinitha-m-b8132b377',
  },
  {
    name: 'Chinmayi Devi H N',
    role: 'Joint Secretary',
    dept: 'Mechanical Engineering',
    email: 'chinmayidevihn.me24@rvce.edu.in',
    photo: '/images/team/Chinmayi Devi H N .jpeg',
    linkedin: 'https://www.linkedin.com/in/chinmayi-devi-h-n-149802357',
    imageClass: 'object-cover object-center scale-95',
    containerClass: 'bg-white',
  },
  {
    name: 'Ameya Acharya',
    role: 'Treasurer',
    dept: 'Biotechnology',
    email: 'ameyakaa.bt24@rvce.edu.in',
    photo: '/images/team/Ameya Acharya.png',
    linkedin: 'https://www.linkedin.com/in/ameyacharya2006',
  },
];

// Verticals & Wing Heads Data (With Exact LinkedIn URLs)
const verticalsData = [
  {
    title: 'Activities & Events',
    heads: [
      {
        name: 'Manyashree S',
        role: 'Wing Head',
        dept: 'Information Science and Engineering',
        email: 'manyashrees.is24@rvce.edu.in',
        photo: '/images/team/Manyashree_S.jpeg',
        linkedin: 'https://www.linkedin.com/in/manyashree-s-828760356',
      },
      {
        name: 'Vindhya Karanth',
        role: 'Wing Head',
        dept: 'Information Science and Engineering',
        email: 'vindhyakaranth.is24@rvce.edu.in',
        photo: '/images/team/Vindhya_K.JPG',
        linkedin: 'https://www.linkedin.com/in/vindhya-karanth-08164636b',
      },
    ],
    members: [
      'Aadithya Varadaraj Seshadri',
      'Abhinav MP',
      'Ananya Karthik',
      'Arigela Thapaswi',
      'Chaitanya G',
      'Daksh Jain',
      'Jairaj S',
      'Janhavi R',
      'Jinam',
      'Krupanka R',
      'Lakshmi Bhandary',
      'Owais Sabir',
      'Ravi R',
      'Rohith Raj Reddy',
      'Sona k.m',
      'Swaroop C Kulkarni',
      'T Sai Deva Harshini',
      'Tulasi Shresta K',
      'Vaibhav Rajesh',
      'Vilas Bhandari',
    ],
  },
  {
    title: "Industrial Connect and People's Operations",
    heads: [
      {
        name: 'Dakshraj Shetty',
        role: 'Wing Head',
        dept: 'Electronics and Communication Engineering',
        email: 'dakshrajshetty.ec24@rvce.edu.in',
        photo: '/images/team/Dakshraj Shetty .jpg',
        linkedin: 'https://www.linkedin.com/in/dakshraj-shetty-752338370',
      },
    ],
    members: ['member1', 'member2'],
  },
  {
    title: 'Projects, Research & Development (P, R & D)',
    heads: [
      {
        name: 'Monish Gangadharan',
        role: 'Wing Head',
        dept: 'Biotechnology',
        email: 'monishg.bt24@rvce.edu.in',
        photo: '/images/team/Monish Gangadharan .jpg',
        linkedin: 'https://www.linkedin.com/in/monish-gangadharan-64105a335',
      },
      {
        name: 'Yashwanth S',
        role: 'Wing Head',
        dept: 'Electronics and Communication Engineering',
        email: 'yashwanths.ec24@rvce.edu.in',
        photo: '/images/team/Yashwanth S.jpg',
        linkedin: 'https://www.linkedin.com/in/yashwanth-s-537b6b279',
      },
    ],
    members: ['member1', 'member2'],
  },
  {
    title: 'Social Media Wing',
    heads: [
      {
        name: 'Banda Partha Sarathi',
        role: 'Wing Head',
        dept: 'Civil Engineering',
        email: 'bparthasarathi.cv24@rvce.edu.in',
        photo: '/images/team/Partha_spark.jpeg',
        linkedin: 'https://www.linkedin.com/in/partha-sarathi-banda-6562733b6',
      },
      {
        name: 'Pranav T M',
        role: 'Wing Head',
        dept: 'Computer Science and Enginnering',
        email: 'pranavtm.cs24@rvce.edu.in',
        photo: '/images/team/pranavtm.jpg',
        linkedin: 'https://www.linkedin.com/in/pranavtm',
      },
      {
        name: 'Tharun N',
        role: 'Wing Head',
        dept: 'Civil Engineering',
        email: 'tharunn.cv24@rvce.edu.in',
        photo: '/images/team/TharunN.jpg',
        linkedin: 'https://www.linkedin.com/in/tharun-n-977b7633a',
        imageClass: 'object-cover object-center scale-95',
        containerClass: 'bg-white',
      },
    ],
    members: [
      'Abhinandan Hegde',
      'Adithi V',
      'Advaya Mishra',
      'Ankush N Borkar',
      'Chaitanya G',
      'Chetana',
      'Harun Raju',
      'Inika Ranganath Prasad',
      'Jairaj S',
      'Mia Michael',
      'Nikhitha',
      'Pavana',
      'Ramya S',
      'Satyendra Nayak K',
      'Sinchara R Achar',
      'Sona K M',
      'Swaroop C Kulkarni',
      'Tarun Aadhithya',
      'Tharicka Murari',
      'Yashas R Gowda',
    ],
  },
  {
    title: 'Women Empowerment',
    heads: [
      {
        name: 'Mansi Rai',
        role: 'Wing Head',
        dept: 'Computer Science and Engineering',
        email: 'mansirai.cs24@rvce.edu.in',
        photo: '/images/team/MansiRai.jpeg',
        linkedin: 'https://www.linkedin.com/in/mansi-rai-587ab6371',
      },
    ],
    members: [
      'Aditi Mandviya',
      'Arigela Thapaswi',
      'Daksh Jain',
      'Janhavi R',
      'Jinam',
      'Lakshmi Bhandary',
      'Sanjana H V',
      'Sinchana R Achar',
      'Sriharini Vijaychandar',
      'Tanvi Uthappa K',
      'Tulasi Shresta K',
      'Vilas Bhandari',
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   PREVIOUS LEADERSHIP TEAMS DATA (STANDARDIZED NAMES & SORTED)
════════════════════════════════════════════════════════════ */
const previousYearsData = [
  {
    yearKey: '2025',
    yearLabel: '2025',
    coreTeam: [
      { role: 'President', name: 'Prathik P Kekare', dept: 'ECE' },
      { role: 'Vice-President', name: 'Rupini Hulikatti', dept: 'IEM' },
      { role: 'Secretary', name: 'R Sunidhi', dept: 'ECE' },
      { role: 'Joint Secretary', name: 'Prajwal Jathanna', dept: 'ECE' },
      { role: 'Treasurer', name: 'Tejas Math', dept: 'ECE' },
    ],
    wings: [
      {
        title: 'Activities and Events',
        heads: [{ name: 'Dhruthi Rudrangi', dept: 'ISE' }],
      },
      {
        title: 'Industrial Connect and People Operations',
        heads: [
          { name: 'Aaditya Raj', dept: 'CSE(CY)' },
          { name: 'Harshit Saroha', dept: 'ETE' },
        ],
      },
      {
        title: 'Projects, Research and Development',
        heads: [{ name: 'Shriyansh Agarwal', dept: 'CSE(CY)' }],
      },
      {
        title: 'Social Media',
        heads: [
          { name: 'Sachin Gowda', dept: 'EEE' },
          { name: 'Vijaylaxmi Patil', dept: 'EIE' },
        ],
      },
      {
        title: 'Women Empowerment',
        heads: [{ name: 'Aarushi Das', dept: 'BT' }],
      },
    ],
  },
  {
    yearKey: '2024',
    yearLabel: '2024',
    coreTeam: [
      { role: 'President', name: 'Ashok R' },
      { role: 'Vice-President', name: 'Nikitha Sunil' },
      { role: 'Secretary', name: 'Jigyasa Agarwaal' },
      { role: 'Treasurer', name: 'Harsh Gupta' },
    ],
    wings: [
      {
        title: 'Activities and Events',
        heads: [{ name: 'Abhishek Saraff' }],
      },
      {
        title: 'Industrial Connect and People Operations',
        heads: [{ name: 'Adarsh Shrivatsava' }, { name: 'Poornachandra' }],
      },
      {
        title: 'Projects, Research and Development',
        heads: [{ name: 'Abhishek S' }, { name: 'Yashwanth S' }],
      },
      {
        title: 'Social Media',
        heads: [{ name: 'Gayatri Venkatesh' }],
      },
      {
        title: 'Women Empowerment',
        heads: [{ name: 'Nikitha Sunil' }],
      },
    ],
  },
  {
    yearKey: '2023',
    yearLabel: '2023',
    coreTeam: [
      { role: 'President', name: 'Suraj R S' },
      { role: 'Vice-President', name: 'Inchara N Aradhya' },
      { role: 'Secretary', name: 'Shankaramma' },
      { role: 'Treasurer', name: 'Vaibhavi Mokashi' },
    ],
    wings: [
      {
        title: 'Activities and Events',
        heads: [{ name: 'Rakshith C M' }, { name: 'Varshith K Battikoppad' }],
      },
      {
        title: 'Industrial Connect and People Operations',
        heads: [{ name: 'Gohitha Maheshwari J' }, { name: 'Shruthishree S' }],
      },
      {
        title: 'Projects, Research and Development',
        heads: [
          { name: 'Chaitanya Dev Sahdev' },
          { name: 'Krish Dhankar' },
          { name: 'Mohit Chikkadi' },
          { name: 'Prajwal G Angadi' },
        ],
      },
      {
        title: 'Social Media',
        heads: [{ name: 'Mukul G Kulkarni' }, { name: 'Sahana Vaddi' }],
      },
      {
        title: 'Women Empowerment',
        heads: [{ name: 'Soundarya Das' }, { name: 'Varshini G S' }],
      },
    ],
  },
];

/* ════════════════════════════════════════════════════════════
   UNIFORM CARD COMPONENTS (FIXED DIMENSIONS & ICONS)
════════════════════════════════════════════════════════════ */

// Faculty Large Card (Chairman, Faculty Advisors, Faculty Coordinator)
const FeaturedCard = ({ name, designation, photo }) => {
  const [desigTitle, ...orgParts] = designation.split(',');

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 w-[280px] sm:w-[300px] md:w-[320px] h-[390px] flex flex-col justify-between shrink-0">
      <div className="h-64 w-full bg-gradient-to-br from-sparkBlue via-sparkBlue/90 to-sparkLightBlue relative overflow-hidden shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
      <div className="p-5 text-center flex-1 flex flex-col justify-center items-center">
        <h3 className="text-xl md:text-2xl font-black text-sparkBlue mb-1 tracking-tight leading-tight line-clamp-1">{name}</h3>
        <p className="text-slate-700 font-bold text-sm md:text-base leading-snug line-clamp-1">{desigTitle.trim()}</p>
        {orgParts.length > 0 && (
          <div className="flex flex-col items-center mt-0.5 gap-0.5">
            {orgParts.map((part, idx) => (
              <p
                key={idx}
                className={
                  idx === orgParts.length - 1 && part.trim().toLowerCase().includes('rv college')
                    ? "text-sparkAccent font-semibold text-[11px] uppercase tracking-wider mt-0.5"
                    : "text-sparkAccent font-semibold text-xs md:text-sm"
                }
              >
                {part.trim()}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Uniform Member Card (Core Team & Wing Heads)
const MemberCard = ({ name, role, dept, photo, email, linkedin, imageClass, containerClass }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 w-[280px] sm:w-[300px] md:w-[320px] h-[430px] flex flex-col justify-between shrink-0">
    {/* Image container fixed height */}
    <div className={`h-60 w-full relative overflow-hidden shrink-0 flex items-center justify-center ${containerClass || 'bg-gradient-to-br from-sparkBlue via-sparkBlue/90 to-sparkLightBlue'}`}>
      <img
        src={photo}
        alt={name}
        className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${imageClass || 'object-cover object-top'}`}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
    </div>

    {/* Text body fixed layout */}
    <div className="p-5 text-center flex-1 flex flex-col justify-between items-center">
      <div className="w-full">
        {/* Name */}
        <h4 className="text-xl md:text-2xl font-black text-sparkBlue mb-1 tracking-tight leading-tight line-clamp-1">
          {name}
        </h4>
        {/* Role and Department */}
        <p className="text-slate-700 font-bold text-sm md:text-base leading-snug line-clamp-1">
          {role}
        </p>
        {dept && (
          <p className="text-sparkAccent font-semibold text-xs md:text-sm mt-0.5">
            {dept}
          </p>
        )}
      </div>

      {/* Action Icons: LinkedIn & Email */}
      <div className="flex items-center justify-center gap-3.5 mt-3 pt-3 border-t border-slate-100 w-full">
        <a
          href={linkedin || 'https://www.linkedin.com/'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sparkBlue text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
          aria-label={`${name}'s LinkedIn`}
        >
          <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={email ? `mailto:${email}` : '#'}
          className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sparkAccent text-slate-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-110"
          aria-label={`Email ${name}`}
        >
          <svg className="w-4.5 h-4.5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

// Name Plate Card for Previous Members
const NamePlateCard = ({ role, name, dept, isCore }) => (
  <div
    className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 ${
      isCore ? 'w-[250px] sm:w-[275px] h-[130px]' : 'w-[210px] sm:w-[235px] h-[110px]'
    }`}
  >
    {/* Blue Cap Top Banner */}
    <div
      className={`bg-sparkBlue text-white font-bold uppercase tracking-wider text-center border-b border-sparkLightBlue/40 truncate shrink-0 ${
        isCore ? 'text-xs py-2.5 px-4' : 'text-[11px] py-2 px-3'
      }`}
    >
      {role}
    </div>
    {/* White Body */}
    <div className="p-3 text-center flex-1 flex flex-col justify-center items-center">
      <h5
        className={`font-black text-sparkBlue leading-tight group-hover:text-sparkAccent transition-colors line-clamp-1 ${
          isCore ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
        }`}
      >
        {name}
      </h5>
      {dept && (
        <span
          className={`inline-block mt-1 font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60 shrink-0 ${
            isCore ? 'text-xs' : 'text-[11px]'
          }`}
        >
          {dept}
        </span>
      )}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════
   OFFICE BEARERS PAGE COMPONENT
════════════════════════════════════════════════════════════ */
const OfficeBearers = () => {
  const [activeYearKey, setActiveYearKey] = useState('2025');

  const selectedYearData = previousYearsData.find((y) => y.yearKey === activeYearKey);

  return (
    <>
      {/* Hero Banner — Title ONLY */}
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
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none">Office Bearers</h1>
        </motion.div>
      </section>

      <div className="bg-white relative z-20">

        {/* ── Chairman ── */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-12">
          <Reveal>
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-sparkBlue text-white font-black text-xl md:text-3xl py-3.5 px-8 rounded-2xl shadow-lg text-center mb-8 tracking-wide border border-white/10">
                Chairman
              </div>
              <div className="flex justify-center">
                <FeaturedCard {...chairman} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Faculty Advisors (Separate Section) ── */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-12 border-t border-slate-100">
          <Reveal>
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-sparkBlue text-white font-black text-xl md:text-3xl py-3.5 px-8 rounded-2xl shadow-lg text-center mb-8 tracking-wide border border-white/10">
                Faculty Advisors
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {facultyAdvisors.map((fa) => (
                  <FeaturedCard key={fa.name} {...fa} />
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Faculty Coordinator (Separate Section) ── */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-12 border-t border-slate-100">
          <Reveal>
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-sparkBlue text-white font-black text-xl md:text-3xl py-3.5 px-8 rounded-2xl shadow-lg text-center mb-8 tracking-wide border border-white/10">
                Faculty Coordinator
              </div>
              <div className="flex justify-center">
                <FeaturedCard {...facultyCoordinator} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Core Team (Strict 3 + 2 Split Rows) ── */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-12 border-t border-slate-100">
          <Reveal>
            <div className="max-w-screen-xl mx-auto">
              <div className="bg-sparkBlue text-white font-black text-xl md:text-3xl py-3.5 px-8 rounded-2xl shadow-lg text-center mb-8 tracking-wide border border-white/10">
                Core Team
              </div>

              {/* Row 1: Top 3 (President, Vice President, Secretary) */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto mb-8">
                {coreTeam.slice(0, 3).map((m) => (
                  <MemberCard key={m.role} {...m} />
                ))}
              </div>

              {/* Row 2: Bottom 2 (Joint Secretary, Treasurer) */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-3xl mx-auto">
                {coreTeam.slice(3, 5).map((m) => (
                  <MemberCard key={m.role} {...m} />
                ))}
              </div>

            </div>
          </Reveal>
        </section>

        {/* ── Vertical-wise Wing Heads & MEMBERS Box ── */}
        <section className="w-full py-12 border-t border-slate-100">
          {verticalsData.map((vertical) => (
            <div key={vertical.title} className="w-full px-6 md:px-12 xl:px-20 mb-16 last:mb-0">
              <div className="max-w-screen-xl mx-auto">
                
                {/* Vertical Title Header Banner */}
                <Reveal>
                  <div className="bg-sparkBlue text-white font-black text-xl md:text-3xl py-3.5 px-8 rounded-2xl shadow-lg text-center mb-8 tracking-wide border border-white/10">
                    {vertical.title}
                  </div>
                </Reveal>

                {/* Wing Heads Cards (3 Heads fit in 1 single row comfortably) */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
                  {vertical.heads.map((head) => (
                    <MemberCard key={head.name} {...head} />
                  ))}
                </div>

                {/* MEMBERS Box — Full width matching the title banner */}
                <Reveal delay={0.1}>
                  <div className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm w-full max-w-screen-xl mx-auto text-center">
                    <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">MEMBERS</h5>
                    <div className="flex flex-wrap justify-center gap-3">
                      {vertical.members.map((member, idx) => (
                        <span
                          key={idx}
                          className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold bg-white text-sparkBlue border border-slate-200 shadow-sm hover:border-sparkAccent transition-all cursor-default"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

              </div>
            </div>
          ))}
        </section>

        {/* ════════════════════════════════════════════════════════════
           PREVIOUS LEADERSHIP TEAMS (ARCHIVES)
        ════════════════════════════════════════════════════════════ */}
        <section className="w-full px-6 md:px-12 xl:px-20 py-16 border-t-2 border-slate-200/60 bg-slate-100/50">
          <div className="max-w-screen-xl mx-auto">
            
            <Reveal>
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sparkBlue tracking-tight mb-3">
                  Previous Leadership Teams
                </h2>
              </div>
            </Reveal>

            {/* Academic Year Tab Selector Switcher */}
            <Reveal delay={0.1}>
              <div className="flex justify-center mb-12">
                <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-md border border-slate-200 gap-1.5 sm:gap-2">
                  {previousYearsData.map((y) => {
                    const isActive = y.yearKey === activeYearKey;
                    return (
                      <button
                        key={y.yearKey}
                        onClick={() => setActiveYearKey(y.yearKey)}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                          isActive
                            ? 'bg-sparkBlue text-white shadow-md scale-105'
                            : 'text-slate-600 hover:text-sparkBlue hover:bg-slate-50'
                        }`}
                      >
                        {y.yearLabel}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Selected Year Content */}
            {selectedYearData && (
              <motion.div
                key={selectedYearData.yearKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Previous Core Team Box */}
                <div className="bg-white/80 rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-sm max-w-5xl mx-auto">
                  <h4 className="text-center font-black text-sparkBlue text-base sm:text-lg uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">
                    Core Team
                  </h4>
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {selectedYearData.coreTeam.map((m, idx) => (
                      <NamePlateCard key={idx} role={m.role} name={m.name} dept={m.dept} isCore={true} />
                    ))}
                  </div>
                </div>

                {/* Previous Wing Heads — Grouped by Wing Box */}
                {selectedYearData.wings.map((wing) => (
                  <div
                    key={wing.title}
                    className="bg-white/80 rounded-2xl p-5 md:p-6 border border-slate-200/80 shadow-sm max-w-5xl mx-auto"
                  >
                    <h4 className="text-center font-black text-sparkBlue text-base sm:text-lg uppercase tracking-wider mb-5 pb-2 border-b border-slate-100">
                      {wing.title}
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                      {wing.heads.map((head, idx) => (
                        <NamePlateCard key={idx} role="Wing Head" name={head.name} dept={head.dept} isCore={false} />
                      ))}
                    </div>
                  </div>
                ))}

              </motion.div>
            )}

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default OfficeBearers;
