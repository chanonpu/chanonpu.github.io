import React, { useEffect, useState } from 'react';
import { ExperienceData } from '../types';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setExperience(data.experience);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="experience" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 flex items-center">
          Where I've Worked
        </h2>
        
        <div className="relative border-l-2 border-teal-400 pl-8 space-y-12">
          {experience.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -left-10 w-4 h-4 bg-teal-400 rounded-full mt-1.5"></div>
              <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
                <div className="text-sm text-teal-400 mb-1">{exp.year}</div>
                <h3 className="text-xl font-semibold text-teal-300 mb-2">{exp.jobTitle}</h3>
                <p className="text-gray-300">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;