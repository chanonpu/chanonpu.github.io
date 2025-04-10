import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Get In Touch</h2>
        <p className="text-gray-300 mb-8 text-lg">
          I'm currently open to new opportunities! Feel free to reach out if you
          have a project in mind or just want to connect.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
          <motion.a 
            href="mailto:c.palawatvichai@gmail.com"
            className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-slate-900 py-3 px-6 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            Email Me
          </motion.a>
          
          <motion.a 
            href="https://github.com/chanonpu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-teal-400 py-3 px-6 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            GitHub
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/chanonpal/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-teal-400 py-3 px-6 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>
        </div>
        
        <motion.div
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Designed & Built by Chanon Palawatvichai © {new Date().getFullYear()}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;