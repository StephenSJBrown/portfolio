import React from "react";

import styled from "styled-components";

import Grid from "../containers/grid";
import Sub from "../containers/sub";

import ButtonBack from "../components/ButtonBack";

import avatar from "../images/avatar.png";

  const Photo = styled.img`
    max-height: 216px;
    min-height: 96px;
    height: 30vw;
    max-width: 216px;
    min-width: 96px;
    margin-right: 24px;
  `;

  const Top = styled.div`
    display: flex;
    margin-bottom: 48px;
  `;

  const Right = styled.div`
    display: inline-block;
    position: relative;
    left: 50vw;
    @media (max-width: 768px) {
      left: 6vw;
    }
    margin-bottom: 48px;
  `;

  const Left = styled.div``;

  const Text = styled.div`
    max-width: 414px;
    width: 100%;

    @media (max-width: 425px) {
      max-width: 80vw;
    }

    & > * {
      margin-bottom: 12px;
    }
  `;

const About = () => {


  return (
    <>
      <Grid>
        <Top>
          <Sub>
            <Photo src={avatar} alt="my headshot"/>
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
                AdobeXD. Sketch. User Research. User Journeys. User Testing
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
                <a id="soundcloud" href="https://soundcloud.com/powehi" target="_blank">producing electronic rnb.</a> guessing people’s names. open style
                choreography. buying too much cinema popcorn. cycling. giving
                complements. travel. msg. reminiscing on a breif modelling
                career.
              </p>
              <ButtonBack />
            </Sub>
          </Text>
        </Left>
      </Grid>
    </>
  );
};

export default About;
