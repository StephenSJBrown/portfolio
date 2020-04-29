import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import styled from "styled-components";
import "./App.scss";

import Intro from "./pages/intro";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";

import Navbar from "./components/Navbar";

function App() {
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
    </Router>
  );
}

export default App;
