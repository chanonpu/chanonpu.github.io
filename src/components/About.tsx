import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaWordpress, 
  FaBootstrap, FaNodeJs, FaJava, FaPython, FaGithub, FaGitlab, 
  FaGit, FaCode, FaDatabase, FaNpm,
  FaVuejs, FaTerminal, FaServer, FaCogs
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, SiNextdotjs, SiMongodb,
  SiPostman, SiRedux
} from 'react-icons/si';

const About: React.FC = () => {
  const skillsData = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'ReactJS', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
    { name: 'Vite', icon: < FaVuejs className="text-purple-500" /> },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-500" /> },
    { name: 'Elementor', icon: <FaCode className="text-pink-500" /> },
    { name: 'Spring Boot', icon: <FaCogs className="text-green-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-700" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'JWT', icon: <FaCode className="text-gray-300" /> },
    { name: 'SQL', icon: <FaDatabase className="text-blue-400" /> },
    { name: 'Oracle', icon: <FaDatabase className="text-red-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'POSTMAN', icon: <SiPostman className="text-orange-500" /> },
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500" /> },
    { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
    { name: 'Packet Tracer', icon: <FaServer className="text-blue-600" /> },
    { name: 'Jira', icon: <FaCode className="text-blue-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'GitLab', icon: <FaGitlab className="text-orange-600" /> },
    { name: 'Git', icon: <FaGit className="text-red-500" /> },
    { name: 'Katalon', icon: <FaCode className="text-green-400" /> },
    { name: 'VSCode', icon: <FaCode className="text-blue-500" /> },
    { name: 'IntelliJ', icon: <FaTerminal className="text-pink-500" /> },
    { name: 'Mongoose', icon: <FaDatabase className="text-green-400" /> },
    { name: 'npm', icon: <FaNpm className="text-red-500" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-teal-400 flex items-center">
          About Me
        </h2>
        
        <div className="space-y-12">
          <div className="space-y-6 max-w-3xl">
            <p className="text-gray-300">
              In 2022, I found myself feeling bored at work and decided to explore something new: I started learning Java. 
              To my surprise, I discovered a passion for coding and problem-solving that I never knew I had. 
              This newfound love for programming led me to enroll at Humber College in Toronto, 
              where I'm honing my skills with a focus on creating user-friendly applications.
            </p>
            
            <p className="text-gray-300">
              My main goal is to develop software that not only meets user needs but also provides an enjoyable experience. 
              I thrive on challenges and enjoy finding solutions to complex problems.
            </p>
            
            <p className="text-gray-300">
              Outside of coding, I have a few hobbies that keep me balanced. I love making coffee—there's something special about 
              brewing the perfect cup. When I'm not experimenting with coffee beans, you can find me playing games, 
              where I can immerse myself in different worlds and narratives.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-teal-300">Skills & Technologies</h3>
            
            <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-colors"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <span className="text-xs text-center text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;