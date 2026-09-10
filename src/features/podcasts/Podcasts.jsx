import { motion } from 'framer-motion';
import PageShell from '../../components/PageShell';
import SEOHead from '../../components/SEOHead';

const podcastEpisodes = [
  {
    id: 'F1',
    title: "The Insight | Podcast with Dr. K. N. Subramanya (Principal)",
    url: "https://www.youtube.com/watch?v=ceAfsPzPQsw",
    description: "An exclusive conversation with the Principal of RVCE discussing his experiences, strategies, and the path to success in engineering and leadership."
  },
  {
    id: 'F2',
    title: "The Insight | Podcast with Dr. K. S. Geetha (Vice Principal)",
    url: "https://www.youtube.com/watch?v=BSohvjHTLNw",
    description: "Explore the inspiring journey of our Vice Principal, diving deep into the challenges faced, leadership qualities, and her vision for the future."
  },
  {
    id: 'F3',
    title: "The Insight | Podcast with Dr. Shanmukha Nagaraj (Faculty Advisor & Former Dean Academics)",
    url: "https://www.youtube.com/watch?v=uZfv9dnFVm4",
    description: "A fun and lighthearted episode featuring the Faculty Advisor, sharing memorable stories, laughs, and unfiltered moments from RVCE."
  },
  {
    id: 'F4',
    title: "The Insight | Podcast with Dean – Cultural Affairs",
    url: "https://www.youtube.com/watch?v=KA-sEiwCFS0",
    description: "Discover the beautiful intersection of art and academia in this engaging conversation."
  },
  {
    id: 'F5',
    title: "The Insight | Podcast with Supreet R.",
    url: "https://www.youtube.com/watch?v=yJZQ6TJBAw4",
    description: "Join us as we explore the experiences, career journey, and valuable insights shared by Supreet R. in this exclusive episode."
  },
  {
    id: 'C1',
    title: `“ಮಾತಿನ ನಾದ: ಕನ್ನಡದ ಹಾದಿ”   ಪ್ರತಿ ಮಾತು — ಒಂದು ಪಯಣ, ಒಂದು ಪ್ರೇರಣೆ`,
    url: "https://youtu.be/ubsZVTZyM1Y?si=hWY592ca2xm5Go5O",
    description: "A soulful glimpse into our college’s Kannada Sangha — celebrating Kannada as more than a language, but as our identity, culture, and pride. From literature to folk traditions, discover how the Sangha keeps the spirit of Namma Kannada alive by blending tradition, creativity, and the energy of today’s youth."
  },
  {
    id: 'C2',
    title: "The Insight | Podcast with 8th Mile",
    url: "https://www.youtube.com/watch?v=PzY2a52d-1w",
    description: "Discover the behind-the-scenes magic and massive effort that goes into organizing 8th Mile, RVCE's flagship techno-cultural fest."
  },
  {
    id: 'C3',
    title: "The Insight | Podcast with Milesh",
    url: "https://www.youtube.com/watch?v=qYl0aN7UQsE",
    description: "An engaging conversation with Milesh detailing campus life, engineering milestones, and words of wisdom for juniors."
  },
  {
    id: 'C4',
    title: "The Insight | Podcast with E-Cell",
    url: "https://www.youtube.com/watch?v=VKsdX9mIRp4",
    description: "Dive into the world of entrepreneurship and innovation with the members of E-Cell as they share startup stories and advice."
  },
  {
    id: 'C5',
    title: "The Insight | Podcast with E-CARV",
    url: "https://www.youtube.com/watch?v=yBUgQBeuebQ",
    description: "Get the inside scoop on E-CARV, their latest automotive projects, and what it takes to build a competitive electric vehicle."
  },
  {
    id: 'C6',
    title: "The Insight | Podcast with Kannada CARV",
    url: "https://www.youtube.com/watch?v=u_7vFQu3ZtA",
    description: "Celebrating culture and language—a wonderful discussion with the team from Kannada CARV about their initiatives and events."
  },
  {
    id: 'C7',
    title: "ALAAP: The Rhythm within RVCE",
    url: "https://www.youtube.com/watch?v=KVI5I-SF1XI",
    description: "From the excitement of auditions and the energy of live performances to competitions, collaborations, and the moments that happen behind the scenes, this conversation takes us through the journey of ALAAP. Discover what it takes to bring different voices, instruments, genres, and personalities together, and how a shared passion for music creates a community that keeps growing and inspiring."
  },
  {
    id: 'C8',
    title: "Beyond the Parade | NCC RVCE",
    url: "https://www.youtube.com/watch?v=HmLhhtLBYz4",
    description: "From training and camps to leadership, teamwork, and unforgettable moments, this conversation offers a glimpse into the life and culture of NCC at RVCE."
  },
  {
    id: 'C9',
    title: "ACCELERATE RVCE : Beyond the syntax, into the System !!",
    url: "https://www.youtube.com/watch?v=oyYWtpJQmtU",
    description: "From hackathons and workshops to innovation challenges and idea-pitching events like PitchIT, Accelerate creates a space where students can innovate, connect, and inspire. In this conversation, we dive into what goes on behind the scenes — the journey of building technical skills, working on ideas, organizing impactful events, and being part of a community that encourages students to turn their ideas into action."
  }
];

// ════════════════════════════════════════════════════════════
// PODCAST ARRANGEMENT LOGIC
// ════════════════════════════════════════════════════════════

// Faculty Podcasts: Automatically filtered by 'F' prefix and sorted ascending.
// New Faculty podcasts (e.g. F6) will automatically appear at the END.
const getFacultyPodcasts = () => {
  const facEps = podcastEpisodes.filter(ep => typeof ep.id === 'string' && ep.id.startsWith('F'));
  return facEps.sort((a, b) => {
    const numA = parseInt(a.id.replace('F', ''), 10);
    const numB = parseInt(b.id.replace('F', ''), 10);
    return numA - numB;
  });
};

// Club Podcasts: Automatically filtered by 'C' prefix.
// Sorted descending (newest first, e.g. C6, C5, C4...)
const getClubPodcasts = () => {
  const clubEps = podcastEpisodes.filter(ep => typeof ep.id === 'string' && ep.id.startsWith('C'));
  return clubEps.sort((a, b) => {
    const numA = parseInt(a.id.replace('C', ''), 10);
    const numB = parseInt(b.id.replace('C', ''), 10);
    return numB - numA; // Sort descending
  });
};

// Helper to get thumbnail from YouTube url
const getYoutubeThumbnail = (url) => {
  try {
    let videoId = '';
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else {
      videoId = url.split('v=')[1].split('&')[0];
    }
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  } catch (e) {
    return 'https://via.placeholder.com/640x360.png?text=Podcast+Thumbnail';
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const PodcastCard = ({ episode }) => {
  const thumbnailUrl = getYoutubeThumbnail(episode.url);
  const watchLink = episode.url;

  return (
    <motion.a
      variants={cardVariants}
      href={watchLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col md:flex-row group block"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail Section */}
      <div className="relative w-full md:w-80 shrink-0 aspect-video md:aspect-auto overflow-hidden bg-slate-100">
        <img
          src={thumbnailUrl}
          alt={episode.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col justify-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight mb-3 group-hover:text-sparkBlue transition-colors">
          {episode.title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {episode.description || "Listen to our exclusive conversations diving into stories, strategies, and experiences from top minds at RVCE."}
        </p>
      </div>
    </motion.a>
  );
};

const Podcasts = () => {
  return (
    <PageShell
      title="SPARK Podcasts"
      subtitle="Exclusive conversations on technology, SDGs, engineering careers, and life at RVCE."
    >
      <SEOHead
        title="SPARK Podcasts | SPARK IUCEE RVCE"
        description="Listen to exclusive SPARK IUCEE RVCE podcast conversations on technology, SDGs, engineering careers, and campus life at RV College of Engineering."
        path="/podcasts"
      />
      <div className="bg-slate-50 min-h-screen py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-sparkBlue mb-4">The Insight - Faculty Podcasts</h2>
              <div className="h-1.5 w-48 bg-gradient-to-r from-sparkAccent to-sparkBlue mx-auto rounded-full"></div>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              {getFacultyPodcasts().map((episode) => (
                <PodcastCard
                  key={episode.id}
                  episode={episode}
                />
              ))}
            </motion.div>
          </div>

          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-sparkBlue mb-4">The Insight - Club Connect</h2>
              <div className="h-1.5 w-48 bg-gradient-to-r from-sparkAccent to-sparkBlue mx-auto rounded-full"></div>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              {getClubPodcasts().map((episode) => (
                <PodcastCard
                  key={episode.id}
                  episode={episode}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default Podcasts;
