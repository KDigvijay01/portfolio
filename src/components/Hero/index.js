import React from "react";
import "./Hero.styles.css";

const HeroSection = () => {
  return (
    <section className="hero_section_container">
      <div className="leftContent">
        <h1 className="hero_title">Hi, i'm Digvijay</h1>
        <p className="description">
          I’m a dedicated Software Developer with over 3 years of experience in React, JavaScript, HTML, CSS and Node. Eager to bring my expertise to innovative projects. Reach out if you’d like to learn more!
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
