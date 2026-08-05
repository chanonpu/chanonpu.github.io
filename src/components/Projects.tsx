import React, { useEffect, useState } from 'react';
import { ProjectData } from '../types';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaRocket } from 'react-icons/fa';

// A small rotating set of accent gradients so fallback cards
const FALLBACK_GRADIENTS = [
  'from-teal-500/30 via-slate-800 to-slate-800',
  'from-cyan-500/30 via-slate-800 to-slate-800',
  'from-emerald-500/30 via-slate-800 to-slate-800',
  'from-sky-500/30 via-slate-800 to-slate-800',
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.project);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 flex items-center">
          Some Things I've Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-teal-400/20 transition-all group"
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="h-64 bg-slate-900 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    className={`transition-transform duration-500 group-hover:scale-105 ${project.imageType === "mobile"
                        ? "h-full object-contain"
                        : "w-full h-full object-cover"
                      }`}
                  />
                ) : (
                  <div
                    className={`w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br ${FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
                      }`}
                  >
                    <FaCode className="text-4xl text-teal-300/80" />
                    <span className="text-teal-200/70 text-xs tracking-wide uppercase">
                      {project.techStack[0]}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-teal-300">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700 text-teal-400 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {project.demoLink && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-900 text-sm font-medium py-2 px-4 rounded-full transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaRocket className="text-xs" />
                      Live Demo
                    </motion.a>
                  )}

                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-slate-600 hover:border-teal-400 text-gray-300 hover:text-teal-400 text-sm font-medium py-2 px-4 rounded-full transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-xs" />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;