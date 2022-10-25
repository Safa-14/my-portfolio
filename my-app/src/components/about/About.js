import React, { useState } from "react";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__content">
        <p>
            I am a junior full stack developer.
          </p>
          <p>
            I graduated as Electrical engineer and then changed my path to web development career.
          </p>
          <p>
            I enjoy programming and making websites.
          </p>
        </div>

        <div className="right_side">
          <ul className="main_skills">
            <li onMouseEnter={(e) => e.target.style.zIndex = '5'}><a href="#">Technologies</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '4'}><a href="#">Javascipts Frameworks</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '3'}><a href="#">Databases</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '2'}><a href="#">Versions Control</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '1'}><a href="#">Others Skills</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
