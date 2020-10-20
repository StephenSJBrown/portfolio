import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";

import Intro from "./pages/intro";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Eyescan from "./pages/eyescan"
import Monstera from "./pages/monstera"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Dynamic } from "./containers/backgrounds";


function App() {
  const dark = useSelector((state) => state.dark);
  
  const location = useLocation()

  console.log(location.pathname)

  return (
    <>
      <Navbar />
      <Dynamic dark={dark} />
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work/eyescan">
          <Eyescan/>
        </Route>
        <Route path="/work/monstera">
          <Monstera />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      { location.pathname === "/" ? '' : <Footer /> }  
      
    </>
  );
}

export default App;
