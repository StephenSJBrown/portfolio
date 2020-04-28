import React from "react";
import styled from "styled-components";

import "./App.scss";

import Navbar from "./components/Navbar";

import abackground from "./images/abackground.png";
import bbackground from "./images/bbackground.png";

const Title = styled.h1`
  margin: 0;
`;
const MainDiv = styled.div`
  background-image: url(${abackground}), url(${bbackground});
  background-position: left, right;
  background-size: 50vw 100%, 50vw 100%;
  background-repeat: no-repeat, no-repeat;
  height: calc(100vh - 48px);
  margin: 0;
`;

function App() {
  return (
    <>
      <Navbar />
      <MainDiv>
      <Title>Dual // Design</Title>
      <h3>creative digital design and development</h3>
        <p>design tells a story</p>
        <button>like this</button>
        <p>how do you want it told?</p>
        <button>like that</button>
      </MainDiv>
    </>
  );
}

export default App;
