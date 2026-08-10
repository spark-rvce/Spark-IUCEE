import React from 'react';
import PageShell from '../../components/PageShell';

const Projects = () => {
  return (
    <PageShell
      title="Projects & Innovations"
      subtitle="Explore student-led engineering projects, research studies, and prototypes."
    >
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-sparkBlue">
            Projects
          </h2>

          <p className="mt-4 text-slate-600">
            Our projects will be showcased here.
          </p>
        </div>
      </section>
    </PageShell>
  );
};

export default Projects;