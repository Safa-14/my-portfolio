import React from "react";
import About from "./components/about/About";
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
// import {themeContext} from './Context';
// import { useContext } from 'react';

const App = () => {
  // const theme = useContext(themeContext)
  // const darkMode = theme.state.darkMode

  return (
    <BrowserRouter
    //  style={{
    //   background : darkMode ? 'black' : '',
    //   color : darkMode ? 'white' : ''}
    //   }
    >
      <Nav />
      {/* <Routes>
        <Route path="#" element={<Header />} />
        
        <Route path="#about" element={<About />} />
      </Routes> */}
      <Header />
      <About />
    </BrowserRouter>
  );
};

export default App;
