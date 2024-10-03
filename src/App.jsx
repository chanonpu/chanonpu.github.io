import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const [overview, setOverview] = useState({});
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]); 

    useEffect(() => {
      // Fetch all data from the local data.json file
      fetch('/data.json')
          .then(response => response.json())
          .then(data => {
              // Set state with the fetched data
              setOverview(data.overview);
              setEducation(data.education);
              setExperience(data.experience);
              setProjects(data.project);
          }).catch((error) => console.error("Error fetching data:", error));;
  }, []);

    return (
        <div className="container">
            {/* Overview Section */}
            <section className="mb-5">
                <h1>{overview.name}</h1>
                <p style={{textAlign:'center'}}>{overview.description}</p>
            </section>
            
            {/* Projects Section */}
            <section className="mb-5">
                <h2>Projects</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-3">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <ul>
                                        {project.techStack.map((tech, idx) => (
                                            <li key={idx}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-5">
                <h2>Education</h2>
                <ul>
                    {education.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
                        </li>
                    ))}
                </ul>
            </section>

            {/* Experience Section */}
            <section className="mb-5">
                <h2>Experience</h2>
                <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>
                            <strong>{exp.jobTitle}</strong> - {exp.company} ({exp.year})
                        </li>
                    ))}
                </ul>
            </section>

            
        </div>
    );
}

export default App;
