import React from "react";
import {Link } from "react-router-dom";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import Grid from "../containers/grid";
import Sub from "../containers/sub";

import github from "../images/github.png";
// import other from "../images/other.png";
import eyescan from '../images/eyescan.png'
import monstera from '../images/monstera.png'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: flex-start;

    img {
      height: 96px;
      width: auto;
    }

  & > * {
    margin-bottom: 12px;
  }
  }

`;

const Git = styled(Button)`
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 425px) {
    margin-bottom: 24px;
  }
`;

// const Other = styled.div`
//   margin-top: 30vh;

//   @media (max-width: 425px) {
//     margin-top: 0;
//     justify-self: flex-end;
//     margin-left: auto;
//   }
// `;

const Title = styled(Sub)`
margin-bottom: 48px;
margin-left: 252px;

@media (max-width: 768px) {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}
`

const Img = styled.img`
max-height: 240px;
max-width: 240px;
width: auto;
object-fit: contain;
`

const Work = () => {

  return (
    <>
      <Grid>
        <Title>
          <h2>work</h2>
          <ButtonBack y={-12} />
        </Title>
        <a href="https://github.com/StephenSJBrown/" target="_blank" rel="noopener noreferrer">
          <Git>
            <h3>view my github</h3>
            <img src={github} alt="github logo" />
            <ButtonBack x={104} width={139} wunit={"px"} />
          </Git>
        </a>
        <Flex>
          <Link to="/work/eyescan">
            <Sub>
              <Img src={eyescan} alt="a website" />
              <ButtonBack x={8} y={6} />
            </Sub>
            <h3>eyescan</h3>
            <p>design + development</p>
          </Link>
          {/* <Other>
            <Sub>
              <Img src={other} alt="an app" />
              <ButtonBack x={-5} y={6} />
            </Sub>
            <h3>other ting</h3>
            <p>ux design</p>
          </Other> */}
          <Link to="/work/monstera">
            <Sub>
              <Img src={monstera} alt="a website" />
              <ButtonBack x={-4} y={-8} />
            </Sub>
            <h3>monsterawear</h3>
            <p>design + development (in progress)</p>
          </Link>
        </Flex>
      </Grid>
    </>
  );
};

export default Work;
