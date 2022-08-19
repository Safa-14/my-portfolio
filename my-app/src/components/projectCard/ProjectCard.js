import React from "react";
// import Projects from "../projects/Projects";

function ProjectCard({title,description,imgUrl, role}) {
  // const [role, setRole] = useState('backend')

  // console.log(<Projects >{this} </Projects >);
  return (
    <>
    {/* {console.log({role})} */}
        <img src={imgUrl} alt='hi'className="project_img"/>
        <h3 className="project_title">{title}</h3>
        <span className="project_button">Demo
            --*
        </span>

        <div className="portfolio_item-details">
            <h3 className="details_title">{title}</h3>
            <p className="details_description">{description}</p>
            <ul className="details_info">
                <li>Created<span></span></li>
                <li>Tachnologies<span>etet</span></li>
                <li>Role<span>{role}</span></li>
                <li>View<span>tete</span></li> 
            </ul>
        </div>
      
    </>
  );
}

export default ProjectCard;
