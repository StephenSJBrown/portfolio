import React from "react";

import styled from "styled-components";

import Grid from "../containers/grid";
import Sub from '../containers/sub'

import ButtonBack from "../components/ButtonBack";

import avatar from '../images/avatar.png'

const About = () => {

  const Photo = styled.img`
    height: 216px;
    width: 216px;
    margin-right: 24px;
  `;

  const Top = styled.div`
    display: flex;
    margin-bottom: 48px;
  `;

  const Right = styled.div`
  display: inline-block;
  position: relative;
  left: 606px;
  margin-bottom: 48px;
  `;

  const Left = styled.div``;

  const Text = styled.div`
    width: 414px;
    & > * {
      margin-bottom: 12px;
    }
  `;

  return (
    <Grid>
      <Top>
        <Sub>
        <Photo src={avatar} />
        <ButtonBack x={-20} y={12} width={90} wunit={"%"} />
        </Sub>
        <Text>
          <Sub>
            <h2>about</h2>
            <ButtonBack x={20} />
          </Sub>
          <Sub>
            <p>
              stephen brown. a ux designer cum full-stack web developer from
              london, uk. enjoys good design, getting the truth from users,
              tasty micro-interactions, and challenging code puzzles.
            </p>
            <ButtonBack />
          </Sub>
        </Text>
      </Top>
      <Right>
      <Text>
        <Sub>
          <h3>abilities</h3>
          <ButtonBack x={-18} />
        </Sub>
        <Sub>
          <p>
            HTML. CSS. Javascript. ReactJS. Python. Flask AxureRP. Figma.
            AdobeXD. Sketch.<br/>User Research. User Journeys. User Testing
          </p>
          <ButtonBack />
        </Sub>
      </Text>
      </Right>
      <Left>
        <Text>
          <Sub>
            <h3>hobbies and habits</h3>
            <ButtonBack x={33} y={8} />
          </Sub>
          <Sub>
            <p>
              producing electronic rnb. guessing people’s names. urban
              choreography. buying too much cinema popcorn. cycling. giving
              complements. travel. msg. reminiscing on a breif modelling career.
            </p>
            <ButtonBack />
          </Sub>
        </Text>
      </Left>
    </Grid>
  );
};

export default About;
