import React, { useState } from "react";
import PortfolioPopUp from "./PortfolioPopUp";
import projects from "../../data";

function ProjectCard({ title, imgUrl , description}) {
  const [buttonPopup, setButtonPopUp] = useState(false);

  const OpenPortfolio = (e) => {
    setButtonPopUp(true);
    // console.log(e);
    // console.log(<PortfolioPopUp/>);
  };
  return (
    <>
      <img src={imgUrl} alt="hi" className="project_img" />
      <h3 className="project_title">{title}</h3>
      <span className="project_button" onClick={OpenPortfolio}>
        Demo --*
      </span>
      {projects.map((project,index) => {
        // if (project.id === index) {
        //   // console.log(project.title ,index)

        // }
        //  console.log(projects[index].title);

        return (
          <div key={project.id} >
            {/* {project.id === index ?              console.log(<PortfolioPopUp description={project.description}/>)
 : ""} */}
                 <PortfolioPopUp  
                 
              trigger={buttonPopup}
              setTrigger={setButtonPopUp}
              title={title}
              description ={description}
              imgUrl = {imgUrl}
              // title={project.id === index ? projects[index].title : ""}
              // description={project.description}
            />
            {/* {console.log({project})} */}
          </div>
        );
      })}
      {/* */}
      {/*  */}
    </>
  );
}

export default ProjectCard;

/* <div className="portfolio_item-details">
        <h3 className="details_title">{title}</h3>
        <p className="details_description">{description}</p>
        <ul className="details_info">
          <li>
            Created<span></span>
          </li>
          <li>
            Tachnologies<span>etet</span>
          </li>
          <li>
            Role<span>{role}</span>
          </li>
          <li>
            View<span>tete</span>
          </li>
        </ul>
      </div> */
