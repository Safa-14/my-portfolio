import React from "react";
import './about.css'

function About() {
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

        <div className="about_me">
          <div className="about_me-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

