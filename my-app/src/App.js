import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experiences from "./components/experiences/Experiences";
// import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
// import {themeContext} from './Context';
// import { useContext } from 'react';

const App = () => {
  // const theme = useContext(themeContext)
  // const darkMode = theme.state.darkMode

  return (
    //  style={{
    //   background : darkMode ? 'black' : '',
    //   color : darkMode ? 'white' : ''}
    //   }
    <>
      
      {/* <Routes>
        <Route path="#" element={<Header />} />
        
        <Route path="#about" element={<About />} />
      </Routes> */}
      <Header />
      <Nav />
       <About />
       <Experiences />
       <Projects />
       <Contact />
      {/* <Routes>
        <Route element={<Header />} index />
        <Route path="#about" element={<About />} />
      </Routes> */}
    </>
  );
};

export default App;
