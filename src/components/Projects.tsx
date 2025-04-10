import React, { useEffect, useState } from 'react';
import { ProjectData } from '../types';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.project);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
              className="bg-slate-800 rounded-lg overflow-hidden shadow-xl hover:shadow-teal-400/20 transition-all"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
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
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span>View Project</span>
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;