import React, { useState } from "react";
import "./about.css";

function About() {
  // const [toggle,setToggle] = useState(false)
  const [bgColour, setBgColour] = useState("#fafafa");
  // const toggleFunction = () => {
  //   setToggle(true)
  // }

  // function MouseOver(e) {
  //   // event.target.style.background = 'red';
  //   console.log(e+'MouseOver');
  // }
  // function MouseOut(event){
  //   // event.target.style.background="";
  //   console.log(event.target+'MouseOut');
  // }
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            voluptatibus. Enim ratione, dignissimos veritatis similique
            architecto, unde reiciendis, debitis saepe fugit hic necessitatibus
            iusto eum ea esse eaque magnam quas.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            facere ipsa, quis vero assumenda libero quia. Laborum reprehenderit
            saepe aspernatur totam sapiente aut tempore excepturi. Officia ipsa
            cupiditate blanditiis incidunt?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            facere ipsa, quis vero assumenda libero quia. Laborum reprehenderit
            saepe aspernatur totam sapiente aut tempore excepturi. Officia ipsa
            cupiditate blanditiis incidunt?
          </p>
        </div>

        <div className="right_side">
          <ul className="main_skills">
            <li onMouseEnter={(e) => e.target.style.zIndex= '3'}
        onMouseLeave={(e) => e.target.style.background = 'red'}><a href="#"><span></span>Frontend Skills</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex= '2'}><a href="#" ><span></span>Backend Skills</a></li>
            <li onMouseEnter={(e) => e.target.style.zIndex= '1'}><a href="#"><span></span>Others Skills</a></li>
          </ul>
          {/* <div className="main_img">
            <span className="circle">1</span>
            <span className="circle">2</span>
            <span className="circle">3</span>
            <span className="circle">4</span>
            <span className="circle">5</span>
            <span className="circle">6</span>
            <span className="circle">7</span>
            <span className="circle">8</span>
          </div>
          <img src="" alt="" /> */}
        </div>
      </div>
    </section>
  );
}

export default About;
