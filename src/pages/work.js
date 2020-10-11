import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import Grid from "../containers/grid";
import Sub from "../containers/sub";

import github from "../images/github.png";
import studioasean from "../images/studioasean.png";
import other from "../images/other.png";
import saturday from "../images/saturday.png";

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

const Other = styled.div`
  margin-top: 30vh;

  @media (max-width: 425px) {
    margin-top: 0;
    justify-self: flex-end;
    margin-left: auto;
  }
`;

const Title = styled(Sub)`
margin-bottom: 48px;
margin-left: 252px;

@media (max-width: 768px) {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
}
`

const Work = () => {
  const history = useHistory();

  return (
    <>
      <Grid>
        <Title>
          <h2>work</h2>
          <ButtonBack y={-12} />
        </Title>
        <a href="https://github.com/StephenSJBrown/" target="_blank">
          <Git>
            <h3>view my github</h3>
            <img src={github} alt="github logo" />
            <ButtonBack x={104} width={139} wunit={"px"} />
          </Git>
        </a>
        <Flex>
          <div>
            <Sub>
              <img src={studioasean} alt="a website" />
              <ButtonBack x={8} y={6} />
            </Sub>
            <h3>eyescan</h3>
          </div>
          <Other>
            <Sub>
              <img src={other} alt="an app" />
              <ButtonBack x={-5} y={6} />
            </Sub>
            <h3>uk university</h3>
          </Other>
          <div>
            <Sub>
              <img src={saturday} alt="a website" />
              <ButtonBack x={-4} y={-8} />
            </Sub>
            <h3>monsterawear</h3>
          </div>
        </Flex>
      </Grid>
    </>
  );
};

export default Work;
