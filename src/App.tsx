import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LeftNav from './components/LeftNav';
import Volunteer from './components/Volunteer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row">
        <LeftNav />
        <main className="w-full md:ml-80 p-6">
          <About />
          <Projects />
          <Experience />
          <Volunteer />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;