import React from 'react';
import "./Experience.styles.css";
import skills from "../../data/skills.json";
import history from  "../../data/history.json";

const Experience = () => {




  return (
        <section className='experienceContainer' id="experience">
            <h2 className='experienceTitle'>Experience</h2>
            <div className='experienceContent'>
                <div className='skills'>
                {skills.map((skill, index)=>(
                    <div key={index} className='skill'>
                        <div className='skillImageContainer'>
                            <img src={skill.imageSrc} alt="skillImage" className='skillImage'/>
                        </div>
                        <p>{skill.title}</p>
                    </div>
                ))}
                   
                </div>

                <ul className='history'>
                    {history.map((item, index)=>(
                        <li key={index} className='historyItem'>
                            <img src={item.imageSrc} alt="companyImage"/>
                            <div className='historyItemDetails'>
                                <h3>{`${item.role}, ${item.organisation}`}</h3>
                                <p>{`${item.startDate} - ${item.endDate}`}</p>
                                <ul>
                                {item.experiences.map((experience, index)=>(
                                    <li key={index}>{experience}</li>
                                ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>


  )
}

export default Experience;