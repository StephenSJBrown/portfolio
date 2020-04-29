import React from "react";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import Grid from "../containers/grid";
import Sub from "../containers/sub";
import Title from '../containers/title'

import github from "../images/github.png";
import studioasean from "../images/studioasean.png";
import other from "../images/other.png";
import saturday from "../images/saturday.png";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Git = styled(Button)`
margin-bottom: 48px;
margin-left: auto;
margin-right: auto;
` 

const Other = styled.div`
margin-top: 252px;
`

const Work = () => {
  return (
    <Grid>
      <Title>
        <h2>work</h2>
        <ButtonBack y={-12} />
      </Title>
      <Git>
        <h3>view my github</h3>
        <img src={github} />
        <ButtonBack x={104} width={139} wunit={"px"} />
      </Git>
      <Flex>
        <div>
          <Sub>
            <img src={studioasean} />
            <ButtonBack x={8} y={6} />
          </Sub>
          <h3>studioasean</h3>
        </div>
        <Other>
          <Sub>
            <img src={other} />
            <ButtonBack x={-5} y={6} />
          </Sub>
          <h3>otherpeopledem</h3>
        </Other>
        <div>
          <Sub>
            <img src={saturday} />
            <ButtonBack x={-4} y={-8} />
          </Sub>
          <h3>saturday</h3>
        </div>
      </Flex>
    </Grid>
  );
};

export default Work;
