import React from "react";
import "./about.css";
import skills from "../../skills";

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
            {skills.map((skill,index) => (
              
              <li 
              key={skill.id} 
              style={{zIndex: skill.zIndex
              }}>
                {skill.title}
                <div className="bar_container">
                  {(skill.technolgiesUsed.map((tech,index) => 
                    (<div className="bar" key={index} >
                      <div>{tech}</div>
                    </div> )
                  ))}
                </div>
              </li>

              ))}

          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
