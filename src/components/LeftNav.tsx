import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LeftNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Nav Bar */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-slate-900/90 backdrop-blur shadow-md' : 'bg-slate-900'} transition-all duration-300`}>
        <div className="flex justify-between items-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-400 font-bold text-xl">Chanon P.</span>
          </motion.div>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 hover:text-teal-400 focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-slate-800 p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-teal-400 py-2 px-4 rounded hover:bg-slate-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-teal-400 mr-2">0{index + 1}.</span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex md:w-80 bg-slate-800 fixed left-0 top-0 h-screen flex-col justify-between p-10 z-10"
      >
        <div className="space-y-10">
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-teal-400"
            >
              Chanon Palawatvichai
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400"
            >
              Computer Programming Student
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300"
          >
            Building impactful, accessible, and engaging digital experiences.
          </motion.p>
          
          <nav className="space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="group flex items-center text-gray-300 hover:text-teal-400 transition-colors"
                >
                  <span className="text-teal-400 mr-2 text-sm">0{index + 1}.</span>
                  <span className="relative">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
                  </span>
                </a>
              </motion.div>
            ))}
          </nav>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex space-x-5"
        >
          <a 
            href="https://github.com/chanonpu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a 
            href="https://www.linkedin.com/in/chanonpal/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default LeftNav;