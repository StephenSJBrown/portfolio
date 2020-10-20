import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { lighten, darken } from "../actions";

import Button from "../components/Button";
import ButtonBack from "../components/ButtonBack";

import { Left, Right } from "../containers/backgrounds";

const Container = styled.div`
position: absolute;
top: 48px;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 48px;
  box-sizing: border-box;
  width: 100vw;

  @media (max-width: 425px) {
    padding: 48px 36px 0 36px;
  }
`;

const Header = styled.div`
  margin-bottom: 48px;
  position: relative;
  
  @media (max-width: 425px) {
    left: 23px;
  }
  
  @media (min-width: 426px) {
    left: 33px;
  }
  
  @media (min-width: 769px) {
    left: 47px;
  }
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
`;

const Intro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <Container>
        <Header>
          <h1>Dual /</h1>
          <h1>/ Design</h1>
        </Header>
        <Sub>
          <h3 className="intro">creative digital design and development</h3>
          <ButtonBack
            x={93}
            y={-12}
            height={48}
            hunit={"px"}
            width={60}
            wunit={"%"}
          />
        </Sub>
        <div>
          <p className="intro" style={{ marginRight: "17px" }}>
            design tells a story
          </p>
          <p className="intro" style={{ marginLeft: "17px" }}>
            how do you want it told?
          </p>
        </div>
        <Flex>
          <FlexCentre>
            <Button onClick={() => dispatch(darken(), history.push("/about"))}>
              <h3 className="intro">like this</h3>
              <ButtonBack x={-16} y={0} />
            </Button>
          </FlexCentre>
          <FlexCentre>
            <Button onClick={() => dispatch(lighten(), history.push("/about"))}>
              <h3 className="intro">like that</h3>
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
