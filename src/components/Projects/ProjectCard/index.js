import React from 'react';
import "./ProjectCard.styles.css";


const ProjectCard = ({key, project}) => {
  return (
    <div className="ProjectCard">
        <img src={project.imageSrc} alt={project.title}/>
        <h3 className='projectCardTitle'>{project.title}</h3>
        <p className='projectDescription'>
            {project.description}
        </p>

        <ul className='projectSkills'>
            {project.skills.map((skill, index)=>(
                <li className='projectSkill'>
                    {skill}
                </li>
            ))}
        </ul>

        <div className='links'>
            <a href={project.demo} className='link' target="_blank" rel="noreferrer">Demo</a>
            <a href={project.source} className='link' target="_blank" rel="noreferrer">Source</a>
        </div>
    </div>
  )
}

export default ProjectCard