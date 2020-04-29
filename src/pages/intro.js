import React from "react";

import styled from "styled-components";

import Button from '../components/Button'
import ButtonBack from '../components/ButtonBack'

import {Left, Right} from '../containers/backgrounds'

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

const Sub = styled.div`
/* height: 48px; */
position: relative;
display: inline-block;
/* align-items: center; */
margin-bottom: 60px;
`

const Intro = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Dual /</h1>
          <h1>/ Design</h1>
        </Header>
        <Sub>
          <h3>creative digital design and development</h3>
          <ButtonBack x={93} y={-12} height={48} hunit={"px"} width={480} wunit={"px"} />
        </Sub>
        <div>
          <p style={{ marginRight: "17px" }}>design tells a story</p>
          <p style={{ marginLeft: "17px" }}>how do you want it told?</p>
        </div>
        <Flex>
          <FlexCentre>
            <Button>
              <h3>like this</h3>
              <ButtonBack x={-54} y={0} />
            </Button>
          </FlexCentre>
          <FlexCentre>
            <Button>
              <h3>like that</h3>
              <ButtonBack x={49} y={0} />
            </Button>
          </FlexCentre>
        </Flex>
      </Container>
      <Left />
      <Right />
    </>
  );
};

export default Intro;
