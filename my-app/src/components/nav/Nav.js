import React from "react";
import "./nav.css";
import { AiTwotoneHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import Toggle from "../toggle/Toggle";

const Nav = () => {

  const [activeNav, setActiveNav] = useState("#");

  /*to change menu class*/
  const [navClick_class, setMenuClass] = useState("navClick_class unclicked");
  const [nav_header, setnavHeader] = useState("navHeader hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  //toggle Navbar icon change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("navClick_class clicked");
      setnavHeader("navHeader visible");
    } else {
      setMenuClass("navClick_class unclicked");
      setnavHeader("navHeader hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>  
      <div className="nav-icon" onClick={updateMenu}>
        <div className={navClick_class}></div>
        <div className={navClick_class}></div>
        <div className={navClick_class}></div>
      </div>

      <div className={nav_header}>
        <div className="nav-toggle">
          <Toggle />
        </div>

        <nav>
          <a
            href="# "
            onClick={() => setActiveNav("/")}
            className={activeNav === "/" ? "active" : ""}
          >
            <AiTwotoneHome />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("/#about")}
            className={activeNav === "/#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </nav>

        <ul>
          <li>
            <a href="/" target="_blank">
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <FaGithub />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
