import React, { useEffect } from "react";
import Me from "../../assets/img/work.jpg";
import ProjectCard from "../projectCard/ProjectCard";
import "./projects.css";
// var mixitup = require('mixitup');
import mixitup from 'mixitup';

function Projects() {
  const projects = [
    {
      title: "web development1",
      description: "cjckvvlv1",
      imgUrl: Me,
      role: "frontend",
    },
    {
      title: "web development2",
      description: "cjckvvlv2",
      imgUrl: Me,
      role: "frontend",
    },
    {
      title: "web development3",
      description: "cjckvvlv3",
      imgUrl: Me,
      role: "backend",
    },
    {
      title: "web development4",
      description: "cjckvvlv4",
      imgUrl: Me,
      role: "backend",
    },
  ];
  

  // Just use an useEffect hook like that
useEffect(() => {
  mixitup(".projects_container", {
    selectors: {
      target: ".project_card",
    },
    animation: {
      duration: 500
    }
  });
}, []);
  

  return (
    <section id="projects">
      <div className="project_filers">
        <span className="project_item active-project" data-filter="all">
          All
        </span>
        <span className="project_item" data-filter=".front">
          Frontend App
        </span>
        <span className="project_item" data-filter=".back">
          Backend App
        </span>
      </div>

      <div className="container projects_container ">
        {projects.map((project, index) => {
      
          return (
            <div className={"project_card mix " + (project.role==='frontend' ? 'front' : 'back')} key={index}>
              <ProjectCard  {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
