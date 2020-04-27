import React from "react";
import styled from "styled-components";

import "./App.css";

import Navbar from "./components/Navbar";

const Title = styled.h1`
  font-size: 40px;
  margin: 0;
  color: #C4C4C4;
`;
const MainDiv = styled.div`
  background-color: #1e98c9;
  background-image: url(), url();
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
        <a>like this</a>
        <p>how do you want it told?</p>
        <a>like that</a>
      </MainDiv>
    </>
  );
}

export default App;
