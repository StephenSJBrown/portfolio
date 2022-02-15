import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";

import Home from "./pages/home";
import Bank from "./pages/bank";
import Eyescann from "./pages/eyescann";
import CMS from "./pages/cms";
import Monstera from "./pages/monstera";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// import { Dynamic } from "./containers/backgrounds";

function App() {
  // const dark = useSelector((state) => state.dark);

  // const location = useLocation();

  // console.log(location.pathname);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (null ) }
        <div hidden={isLoading}>
          <Navbar />
          {/* <Dynamic dark={dark} /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cms">
              <CMS />
            </Route>
            <Route path="/bank">
              <Bank />
            </Route>
            <Route path="/eyescan">
              <Eyescann />
            </Route>
            <Route path="/monstera">
              <Monstera />
            </Route>
          </Switch>
          <Footer />
        </div>

    </>
  );
}

export default App;
