import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import "./Projects.styles.css";

const Projects = () => {
  return (
        <section className='projects' id="projects">
            <h2 className='projectsTitle'>Projects</h2>
            <div className='projectsContent'>
                {projects.map((project, index)=>(
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>
        </section>
  )
}

export default Projects