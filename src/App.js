import React from "react";
import styled from "styled-components";

import "./App.scss";

import Navbar from "./components/Navbar";
import Button from './components/Button'
import ButtonBack from './components/ButtonBack'

import abackground from "./images/abackground.png";
import bbackground from "./images/bbackground.png";

const Left = styled.div`
  clip-path: polygon(
    100% 0,
    100% 48px,
    calc(100% - 30px) 126px,
    calc(100% - 30px) 100%,
    0 100%,
    0 0
  );
  background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(31, 91, 48, 0.7),
      rgba(31, 91, 48, 0.7)
    ),
    /* bottom, image */ url(${abackground});
  background-size: cover;
  position: absolute;
  height: calc(100vh - 48px);
  width: 52vw;
  z-index: -2;
  left: 0;
  top: 48px;
`;

const Right = styled.div`
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 126px, 30px 48px);
  background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(30, 152, 201, 0.7),
      rgba(30, 152, 201, 0.7)
    ),
    /* bottom, image */ url(${bbackground});
  background-size: cover;
  position: absolute;
  height: calc(100vh - 48px);
  width: calc(50vw + 17px);
  z-index: -2;
  right: 0;
  top: 48px;
`;

const Container = styled.div`
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  box-sizing: border-box;
  width: 100vw;
`;

const Header = styled.div`
  margin-bottom: 48px;
  position: relative;
  left: 47px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  right: 17px;
  height: 100%;
  width: 100%;
`;

const FlexCentre = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const H3 = styled.h3`
  margin-bottom: 48px;
`;



function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Header>
          <h1>Dual /</h1>
          <h1>/ Design</h1>
        </Header>
        <H3>creative digital design and development</H3>
        <div>
          <p style={{marginRight:"17px"}}>design tells a story</p>
          <p style={{marginLeft:"17px"}}>how do you want it told?</p>
        </div>
        <Flex>
          <FlexCentre>
            <Button><h3>like this</h3><ButtonBack x={-31} y={0}/></Button>
          </FlexCentre>
          <FlexCentre>
            <Button><h3>like that</h3><ButtonBack x={49} y={0}/></Button>
          </FlexCentre>
        </Flex>
      </Container>
      <Left />
      <Right />
    </>
  );
}

export default App;
