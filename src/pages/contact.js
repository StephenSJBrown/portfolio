import React, { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";

import Grid from "../containers/grid";
import Title from "../containers/title";
import Sub from "../containers/sub";

import sky from "../images/sky.png";
import plant from "../images/plant.png";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 50vw;
  margin-left: 50vw;
  min-width: 200px;

  &:first-child {
    margin-bottom: 22px;
  }

  * {
    margin-bottom: 12px;
  }

  @media (max-width: 425px) {
    margin-left: 0px;
    min-width: calc(100vw - 50px);
  }
`;

const Pic = styled(Sub)`
  position: relative;
  bottom: 76px;
  left: 76px;
  width: 30vw;
  min-width: 96px;
  min-height: 96px;
  max-height: 246px;
  max-width: 246px;

  @media (max-width: 425px) {
    bottom: -14vh;
  }

  @media (min-width: 1441px) {
    left: 15vw;
  }

  img {
    width: 30vw;
    min-width: 96px;
    min-height: 96px;
    max-height: 246px;
    max-width: 246px;
  }
`;

const Img = styled.img`
  min-width: 96px;
  min-height: 96px;
  max-height: 246px;
  max-width: 246px;
`;

const Blurb = styled.div`
  background: #2e2e2e;
  padding: 6px;
  width: 100%;
  max-width: 342px;

  @media (max-width: 425px) {
    width: 60vw;
  }
`;

const Contact = () => {
  const dark = useSelector((state) => state.dark);

  const [hologram, setHologram] = useState(false);

  return (
    <>
      <Grid>
        <Title>
          <h2>contact</h2>
          <ButtonBack x={-8} y={12} />
        </Title>
        <Flex>
          <Blurb>
            <p>
              hey i hope you enjoyed your peruse through my website. if you’d
              like to contact me, find some options below.
            </p>
          </Blurb>
          <a href="mailto:stephen.sjbrown@gmail.com">
            <Button>
              <h3>send an email</h3>
              <ButtonBack x={-10} width={50} wunit={"%"} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/stephensjbrown/" target="_blank">
            <Button>
              <h3>hit up my linkedin</h3>
              <ButtonBack x={-10} width={50} wunit={"%"} />
            </Button>
          </a>
          <a>
            <Button onClick={() => setHologram(!hologram)}>
              <h3>transmit hologram</h3>
              <ButtonBack x={-10} width={50} wunit={"%"} />
            </Button>
          </a>
          {hologram ? <p>available in 3020 :)</p> : <></>}
        </Flex>
        <Pic>
          {dark ? (
            <img src={sky} alt="the sky" />
          ) : (
            <img src={plant} alt="a plant" />
          )}
          <ButtonBack x={12} y={-12} />
        </Pic>
      </Grid>
    </>
  );
};

export default Contact;
