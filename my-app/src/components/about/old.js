import React, { useState } from "react";
import "./about.css";
import skills from "../../skills";

function About() {

  const [isHovering, setIsHovering] = useState(false);
  const boxRef = React.useRef(null);

  const handleMouseOver = (e) => {
    // console.log(e.target.style.zIndex);
    // console.log(e.target.key , e.target.index)
    console.log('index',e.target.index);
    // console.log(boxRef);
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const showTechnoligie = (e) => {
  //   // (e) => e.target.style.zIndex = '1'
  //   e.target.style.zIndex=e._targetInst.key
  //   console.log(e.target.style.zIndex);
  //   console.log(e._targetInst.key);
  // }
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
              ref={boxRef}
              index={index}
              style={{zIndex: skill.zIndex
              }}
              onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                {skill.title}
                {/* {console.log('index',i)} */}
                {/* {console.log(skill)}     */}
                <div className="bar_container">
                {/* {skill.id == i ? "yes" : "no"} */}
                {/* {console.log(skill.id , index)} */}
                  {(skill.id != index && isHovering) ? (skill.technolgiesUsed.map((x,tech) => 
                    (<div className="bar" key={tech} >
                      {/* {console.log(x)}  */}
                      <div>{tech}</div>
                    </div> )
                  )) : ''}
                </div>
              </li>
              // <li key={skill.id} onMouseEnter={showTechnoligie}>{skill.title}<span></span></li>
              ))}
            {/* <li onMouseEnter={(e) => e.target.style.zIndex = '5'}><a href="#">Technologies</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '4'}><a href="#">Javascipts Frameworks</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '3'}><a href="#">Databases</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '2'}><a href="#">Versions Control</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex = '1'}><a href="#">Others Skills</a></li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
