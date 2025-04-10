import React, { useEffect, useState } from 'react';
import { EducationData } from '../types';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  const [education, setEducation] = useState<EducationData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setEducation(data.education);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 flex items-center">
          My Learning Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((school, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-slate-800 rounded-lg shadow-xl hover:shadow-teal-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-teal-400 text-3xl mr-4" />
                <div>
                  <div className="text-sm text-teal-400">{school.year}</div>
                  <h3 className="text-xl font-semibold text-teal-300">{school.institution}</h3>
                </div>
              </div>
              <p className="text-gray-300 text-lg">{school.degree}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;