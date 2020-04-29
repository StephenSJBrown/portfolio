import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux'
import "./App.scss";

import Intro from "./pages/intro";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Dynamic } from "./containers/backgrounds";

function App() {

const dark = useSelector(state => state.dark)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Intro />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
      <Dynamic dark={dark}/>
    </Router>
  );
}

export default App;
