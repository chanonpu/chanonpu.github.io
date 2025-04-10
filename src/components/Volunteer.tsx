import React, { useEffect, useState } from 'react';
import { VolunteerData } from '../types';
import { motion } from 'framer-motion';

const Volunteer: React.FC = () => {
  const [volunteer, setVolunteer] = useState<VolunteerData[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => response.json())
      .then((data) => {
        setVolunteer(data.volunteer);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section id="volunteer" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 flex items-center">
          Where I've Volunteered
        </h2>
        
        <div className="space-y-6">
          {volunteer.map((vol, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-slate-800 rounded-lg shadow-xl hover:shadow-teal-400/10 transition-all"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-xl font-semibold text-teal-300">{vol.jobTitle}</h3>
              <p className="text-gray-300">{vol.company} <span className="text-teal-400 italic">({vol.year})</span></p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Volunteer;