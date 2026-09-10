import React from 'react';
import { motion } from 'framer-motion';
import PageShell from '../../components/PageShell';
import SEOHead from '../../components/SEOHead';

const wingsData = [
  {
    id: 1,
    title: "Activities and Events",
    heads: ["Manyashree S", "Vindhya karanth"],
    color: "from-sparkLightBlue to-sparkBlue",
    details: [
      "Arranging some fun-filled workshops, Activities, Seminars, Quizzes, site visits, etc.",
      "Talks from Industry Experts which give us a platform to learn new concepts from people who are well-versed in their respective fields.",
      "Planning the activities with the respective mini-courses so there is a strong grip on their respective courses.",
      "To organize the talk to bring awareness to the essentials of learning on a new platforms."
    ]
  },
  {
    id: 2,
    title: "Industrial Connect and People Operations",
    heads: ["Dakshraj Shetty"],
    color: "from-sparkLightBlue to-sparkBlue",
    details: [
      "To establish collaborations with industries for technical learning and experience.",
      "To have innovation in learning and gain practical knowledge.",
      "To enhance healthy relationships amongst the wings as well as between members and the core committee.",
      "Strive to enhance experience and values among all the members of the chapter.",
      "To maintain a proper documentation and record of all the activities performed in the Chapter."
    ]
  },
  {
    id: 3,
    title: "Projects, Research and Development",
    heads: ["Monish Gangadharan", "Yashwanth S"],
    color: "from-sparkLightBlue to-sparkBlue",
    details: [
      "Understanding the methods of Research Study mainly through Literature Reviews and Survey.",
      "Later on Guiding them on how to write a Research Paper by considering various aspects like choosing a specific topic, making an outline and In-Depth study through available materials.",
      "Mainly focuses on Project-based learning which is a student-centered approach to education.",
      "Allowing them to do the models and prototypes on their projects and engaging them in workshops, seminars, and conducting research initiatives on their selected topics."
    ]
  },
  {
    id: 4,
    title: "Social Media",
    heads: ["Banda Partha Sarathi", "Pranav T M", "Tharun N"],
    color: "from-sparkLightBlue to-sparkBlue",
    details: [
      "The social media wing performs by disseminating information via all available platforms.",
      "Prepare fashionable posters, artwork, graphics, and other media content, we attempt to keep your eyes glued to the screens.",
      "Building a network through social media accounts like Instagram, LinkedIn, Facebook and Twitter.",
      "Regular updates and posting of all the events and activities in these social media handles, exchange information, and ideate in virtual communities and networks."
    ]
  },
  {
    id: 5,
    title: "Women Empowerment",
    heads: ["Mansi Rai"],
    color: "from-sparkLightBlue to-sparkBlue",
    details: [
      "Promoting a sense of self-worth and ability of Women to determine their own choices.",
      "To educate about their right to influence social change for themselves and others.",
      "Awareness about proper sanitation and Psychological balance of Women.",
      "Providing Technical Education and conducting various activities to improvise their skills."
    ]
  }
];

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

const WingCard = ({ wing, index }) => {
  return (
    <motion.div variants={cardVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]">
      <motion.div 
        className="h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
      >
        <div className={`h-3 w-full bg-gradient-to-r ${wing.color}`}></div>
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${wing.color} text-white flex items-center justify-center shrink-0 shadow-md font-black text-2xl`}>
              {index + 1}
            </div>
            <h3 className="text-2xl font-black text-slate-800 leading-tight">{wing.title}</h3>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            {wing.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <svg className="w-5 h-5 text-sparkBlue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="leading-relaxed text-sm md:text-base">{detail}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-6 border-t border-slate-100 mt-auto">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">Wing Heads</h4>
            <div className="flex flex-wrap gap-2">
              {wing.heads.map((head, idx) => (
                <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                  {head}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Wings = () => {
  return (
    <PageShell
      title="The 5 Wings"
      subtitle="Five specialized wings working in unison to create a complete ecosystem for student growth."
    >
      <SEOHead
        title="The 5 Wings | SPARK IUCEE RVCE"
        description="Explore the five specialized wings of SPARK IUCEE RVCE — Activities & Events, Industrial Connect, Projects R&D, Social Media, and Women Empowerment at RV College of Engineering."
        path="/wings"
      />
      <div className="bg-slate-50 min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Our Ecosystem</h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              SPARK operates through five distinct wings, each focused on a unique aspect of student development and community building. Together, they create a well-rounded experience.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-8"
          >
            {wingsData.map((wing, index) => (
              <WingCard key={wing.id} wing={wing} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
};

export default Wings;
