import React, { useState } from 'react';
import PageShell from '../../components/PageShell';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Group projects by year and sort
  const projectsByYear = projectsData.reduce((acc, project) => {
    const year = project.year || 'No Year Specified';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(projectsByYear).sort((a, b) => {
    if (a === 'No Year Specified') return 1;
    if (b === 'No Year Specified') return -1;
    return b - a;
  });

  return (
    <PageShell
      title="Projects & Innovations"
      subtitle="Explore student-led engineering projects, research studies, and prototypes."
    >
      <section className="bg-slate-50 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Page Introduction */}
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-navy-700">
              {projectsData.length} Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">
              Student Innovations
            </h2>

            <p className="mt-4 text-navy-700">
              Explore innovative projects, research initiatives, and engineering
              solutions developed by SPARK students.
            </p>
          </div>

          {/* Projects Grouped by Year */}
          {sortedYears.map((year) => (
            <div key={year} className="mb-16">
              {/* Year Header */}
              <div className="mb-6 border-b-2 border-navy-200 pb-3">
                <h3 className="text-2xl font-bold text-navy-900 md:text-3xl">
                  {year}
                </h3>
                <p className="mt-1 text-sm text-navy-600">
                  {projectsByYear[year].length} {projectsByYear[year].length === 1 ? 'Project' : 'Projects'}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectsByYear[year].map((project) => (
                  <article
                    key={project.id}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Category and Year */}
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-navy-700">
                        {project.category}
                      </span>

                      <span className="shrink-0 text-sm font-medium text-navy-600">
                        {project.year || 'N/A'}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="mt-5 text-xl font-bold leading-snug text-navy-900">
                      {project.title}
                    </h3>

                    {/* Theme */}
                    {project.theme && (
                      <p className="mt-3 text-sm font-medium text-navy-700">
                        {project.theme}
                      </p>
                    )}

                    {/* Summary */}
                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-navy-700">
                      {project.summary}
                    </p>

                    {/* View Project */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="mt-auto pt-6 text-left font-semibold text-navy-800 transition hover:opacity-70"
                    >
                      View Project →
                    </button>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 text-3xl font-light leading-none text-slate-500 transition hover:text-slate-900"
              aria-label="Close project details"
            >
              ×
            </button>

            {/* Image */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mb-8 h-64 w-full rounded-xl object-cover"
              />
            )}

            {/* Category and Year */}
            <div className="flex flex-wrap items-center gap-3 pr-10">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-navy-700">
                {selectedProject.category}
              </span>

              <span className="text-sm font-medium text-navy-600">
                {selectedProject.year || 'N/A'}
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-2xl font-bold leading-tight text-navy-900 md:text-4xl">
              {selectedProject.title}
            </h2>

            {/* Theme */}
            {selectedProject.theme && (
              <p className="mt-3 font-medium text-navy-700">
                {selectedProject.theme}
              </p>
            )}

            {/* Description */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-navy-900">
                About the Project
              </h3>

              <p className="mt-4 whitespace-pre-line leading-8 text-navy-700">
                {selectedProject.description || selectedProject.summary}
              </p>
            </div>

            {/* Project Screenshots */}
            {selectedProject.screenshots &&
              selectedProject.screenshots.length > 0 && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-navy-900">
                    Project Screenshots
                  </h3>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <button
                        key={screenshot.src || index}
                        type="button"
                        onClick={() => setSelectedImage(screenshot)}
                        className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left"
                      >
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt || `${selectedProject.title} screenshot`}
                          className="h-auto w-full transition duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>

                  <p className="mt-3 text-sm text-navy-600">
                    Click an image to view it in full size.
                  </p>
                </div>
              )}

            {/* Team Members */}
            {selectedProject.team && selectedProject.team.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-navy-900">
                  Team Members
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {selectedProject.team.map((member) => (
                    <div
                      key={member}
                      className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-navy-700"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mentor */}
            {selectedProject.mentor && (
              <div className="mt-10">
                <h3 className="text-xl font-bold text-navy-900">
                  Mentor
                </h3>

                <p className="mt-3 text-navy-700">
                  {selectedProject.mentor}
                </p>
              </div>
            )}

            {/* Resources */}
              {selectedProject.resources &&
                selectedProject.resources.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-navy-900">
                      Project Resources
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {selectedProject.resources.map((resource) => (
                        <a
                          key={resource.url}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-navy-700 transition hover:border-navy-700 hover:bg-blue-50"
                        >
                          📄 {resource.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
          </div>
        </div>
      )}

      {/* Image Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-black"
                aria-label="Close image"
              >
                ×
              </button>

              {/* Full Resolution Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || 'Project screenshot'}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        )}

    </PageShell>
  );
};

export default Projects;
