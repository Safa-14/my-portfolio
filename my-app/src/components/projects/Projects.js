import React, { useEffect } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import "./projects.css";
import mixitup from "mixitup";
import  projects  from "../../data";

function Projects() {
  

  // Just use an useEffect hook like that
  useEffect(() => {
    mixitup(".projects_container", {
      selectors: {
        target: ".project_card",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);

  const handleClick = (event) => {
    document.querySelectorAll(".project_item").forEach((l) => {
      l.classList.remove("active-project");
    });
    event.currentTarget.classList.add("active-project");
  };
  return (
    <section id="projects">
      <div className="project_filers">
        <span
          className="project_item active-project"
          onClick={handleClick}
          data-filter="all"
        >
          All
        </span>
        <span
          className="project_item "
          onClick={handleClick}
          data-filter=".front"
        >
          Frontend App
        </span>
        <span
          className="project_item"
          onClick={handleClick}
          data-filter=".back"
        >
          Backend App
        </span>
      </div>
      
      <div className="container projects_container ">
        {projects.map((project, index) => {
        //  console.log(project)
          return (
            
            <div
              className={
                "project_card mix " +
                (project.role === "frontend" ? "front" : "back")
              }
              key={index}
            >
              <ProjectCard {...project} />
              
            </div>
          );
        })}

        
      </div>
      
    </section>
  );
}

export default Projects;
