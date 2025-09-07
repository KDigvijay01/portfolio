import React from "react";
import "./Hero.styles.css";

const HeroSection = () => {
  return (
    <section className="hero_section_container">
      <div className="leftContent">
        <h1 className="hero_title">Hi, i'm Digvijay</h1>
        <p className="description">
          {/* I’m a dedicated Software Developer with over 3.5 years of experience in React, JavaScript, HTML and CSS. Eager to bring my expertise to innovative projects. Reach out if you’d like to learn more! */}
          {/* A Passionate Frontend Developer with 3.5+ years of experience building scalable, user-friendly applications using React, JavaScript, HTML, and CSS. I thrive on creating clean, efficient code and dynamic interfaces that elevate user experience. Always eager to take on innovative projects and collaborate on impactful solutions—let’s connect! */}
          Frontend Developer with 3.5+ years of experience in React, JavaScript, Typescript, HTML, and CSS. I specialize in building fast, scalable, and user-friendly web applications. Always excited to take on innovative projects —let’s connect!
        </p>
        <a href="mailto:kumardigvijay01@gmail.com" className="contact_me_button">Contact Me</a>
      </div>

      {/* <div className="rightContent"> */}
        <img src="assets/hero/heroImage.png" alt="hero_image" className="heroImage"/>
      {/* </div> */}

      <div className="topBlur"></div>
      <div className="bottomBlur"></div>
    </section>
  );
};

export default HeroSection;
