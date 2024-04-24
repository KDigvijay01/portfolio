import React from "react";
import "./About.styles.css";



const About = () => {


  return (
    
    <section className="aboutContainer" id="about">
      <h2 className="aboutTitle">About</h2>
      <div className="aboutContent">
        <img
          src="assets/about/aboutImage.png"
          className="aboutImage"
          alt="aboutImage"
        />
        <ul className="aboutItems">
          <li className="aboutItem">
            <img src="assets/about/cursorIcon.png" alt="cursorIcon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>

          <li className="aboutItem">
            <img src="assets/about/serverIcon.png" alt="serverIcon" />
            <div className="aboutItemText">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs.
              </p>
            </div>
          </li>

         
        </ul>
      </div>
    </section>
  );
};

export default About;
