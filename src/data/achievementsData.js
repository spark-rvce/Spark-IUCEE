// SPARK IUCEE RVCE — Achievements Data Store
// -----------------------------------------------
// How to maintain this file:
//
//   Add a new achievement  → add a new object to the relevant year's `achievements` array.
//   Add a new year         → add a new key to `achievementsByYear` following the pattern below.
//   Add / remove members   → edit the `teamMembers` array.
//   Add photos             → push paths into the `images` array ([] = placeholder shown).
//   Remove photos          → remove paths from the `images` array.
//   Add an external link   → set `eventLink` to the full URL; omit / set null when unavailable.
//   Optional fields        → omit the key entirely, or set to null / [] — the card handles it gracefully.
//
// Image paths use the same convention as eventsData.js:
//   - Public-root-relative paths starting with "/" (e.g., "/aavishkar_1.jpg")
//   - Or sub-folder paths (e.g., "/events_2025/event_11/IMG_7074.jpg")
//
// When images is [] the card shows a placeholder. Once you add paths the carousel activates.
// -----------------------------------------------

export const achievementsByYear = {
  '2024-25': {
    year: '2024-25',
    label: '2024–25',
    achievements: [
      {
        id: 'aavishkar-ideathon-2024',
        eventName: 'Aavishkar Manthan',
        category: 'Ideathon',
        award: '1st Place',
        teamMembers: [
          'Prathik K',
          'Rupini Hulikatti',
          'Nishant Hegde',
          'Raghava Mukunda',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am24-ideathon.jpg'],
        eventLink: null,
      },
      {
        id: 'aavishkar-elocution-2024',
        eventName: 'Aavishkar Manthan',
        category: 'Elocution',
        award: '2nd Place',
        teamMembers: [
          'Ashok R',
          'Nikhitha Sunil',
          'Rakshit CM',
          'Smitha Royals',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am24-elocution.jpg'],
        eventLink: null,
      },
      {
        id: 'aunsf-2024',
        eventName: 'AUNSF 2.0',
        category: 'Ideathon',
        award: 'Special Mentions',
        location: 'Anurag University, Hyderabad',
        teamMembers: [
          'Rupini Hulikatti — Team Entrepreneur',
          'Tejas S Math — Team Reviva',
          'Manogyna N — Team Karbon',
          'Aaditya AJ — Team Snow Sustain',
        ],
        projectTitle: null,
        description: null,
        images: [],
        eventLink: null,
      },
      {
        id: 'innofiesta-2024',
        eventName: 'Innofiesta',
        category: 'Ideation & Elocution',
        award: 'Best Presentation in Ideation; 1st & 2nd Prizes in Elocution',
        location: 'HITAM, Hyderabad',
        teamMembers: [
          'Ashok',
          'Nidhi',
          'Tarun',
        ],
        projectTitle: null,
        description: null,
        images: [],
        eventLink: null,
      },
      {
        id: 'octane-chapter-2024',
        eventName: 'OCTANE Chapter Recognition',
        category: 'Chapter Recognition',
        award: 'Chapter Recognition',
        teamMembers: [],
        projectTitle: null,
        description:
          'The SPARK chapter at RVCE was honored with Chapter Recognition by IUCEE at the IASF 2024 conference.',
        images: [],
        eventLink: null,
      },
    ],
  },

  '2025-26': {
    year: '2025-26',
    label: '2025–26',
    achievements: [
      {
        id: 'aunsf-2025-26',
        eventName: 'AUNSF',
        category: 'Ideathon',
        award: 'Special Mentions',
        teamMembers: [
          'Yashwanth S',
          'Yashwanth R',
          'Ashok R',
          'Dakshraj Shetty',
          'Chinmayi Devi H N',
          'Manish Kumar CS',
        ],
        projectTitle: null,
        description: null,
        images: [],
        eventLink: null,
      },
      {
        id: 'aavishkar-ideathon-1st-2025-26',
        eventName: 'Aavishkar Manthan',
        category: 'Ideathon',
        award: '1st Place',
        teamMembers: [
          'Parinitha M',
          'Raghava M',
          'Manogyna R',
          'Monish M',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am25-ideathon-2.jpg'],
        eventLink: null,
      },
      {
        id: 'aavishkar-ideathon-3rd-2025-26',
        eventName: 'Aavishkar Manthan',
        category: 'Ideathon',
        award: '3rd Place',
        teamMembers: [
          'Yashwanth S',
          'A S S S Koundinya',
          'Chandana B C',
          'Vijaylakshmi Ashok Patil',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am25-ideathon-1.jpg'],
        eventLink: null,
      },
      {
        id: 'aavishkar-elocution-2025-26',
        eventName: 'Aavishkar Manthan',
        category: 'Elocution',
        award: '1st Place',
        teamMembers: [
          'Dakshraj Shetty',
          'Rupini Hulikatti',
          'Prajwal J',
          'Kavin Krishnan C',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am25-elocution.jpg'],
        eventLink: null,
      },
      {
        id: 'iasf-2026',
        eventName: 'IUCEE Annual Student Forum (IASF 2026)',
        category: 'Student Chapter Project Showcase',
        award: 'Runners-up',
        teamMembers: [],
        projectTitle: 'Distributed Traction System Retrofit for Modern Railway Consists',
        description:
          'The team secured the runners-up position at IASF 2026, held from January 6–10, 2026, followed by an online jury evaluation focused on design thinking principles. The project explored retrofitting existing railway infrastructure with a distributed traction system, aiming to improve the use of existing railway infrastructure and support sustainable transportation.',
        images: [
          '/Achievements/iasf-2026-2.jpg',
          '/Achievements/iasf-2026-3.jpg',
          '/Achievements/iasf-2026-4.jpg',
        ],
        eventLink: null,
      },
      {
        id: 'srujana-2025-26',
        eventName: 'Srujana Science Exhibition',
        category: 'Science Exhibition',
        award: 'First Prize',
        location: 'JSS Academy of Higher Education & Research, Mysore',
        teamMembers: [
          'Dakshraj Shetty',
          'Yashwanth S',
          'Manish Kumar C S',
          'Ameya Acharya',
        ],
        projectTitle: 'Harvesting Waste Heat from Railway Axles Using Thermoelectric Generators',
        description:
          'The project explored converting waste heat generated by hot railway axles into electrical energy using thermoelectric generators (Peltier devices). The team also investigated doping techniques to improve efficiency.',
        images: [
          '/Achievements/srujana-1.jpg',
          '/Achievements/srujana-2.jpg',
          '/Achievements/srujana-3.jpg',
          '/Achievements/srujana-4.jpg',
        ],
        eventLink: null,
      },
    ],
  },

  '2026-27': {
    year: '2026-27',
    label: '2026–27',
    achievements: [
      {
        id: 'aavishkar-ideathon-2026-27',
        eventName: 'Aavishkar Manthan',
        category: 'Ideathon',
        award: 'Runners-up',
        teamMembers: [
          'Chinmayi Devi H N',
          'Mia Michael',
          'Yashas Gowda',
          'Ananya Karthik',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am26-ideathon.jpeg'],
        eventLink: null,
      },
      {
        id: 'aavishkar-elocution-2026-27',
        eventName: 'Aavishkar Manthan',
        category: 'Elocution',
        award: '1st Place',
        teamMembers: [
          'Dakshraj Shetty',
          'Yashwanth',
          'Adithya V S',
          'Kavin Krishnan',
        ],
        projectTitle: null,
        description: null,
        images: ['/Achievements/am26-elocution.jpg'],
        eventLink: null,
      },
    ],
  },
};

// Ordered list of year keys for the tab selector (oldest to newest)
export const achievementYears = ['2024-25', '2025-26', '2026-27'];
