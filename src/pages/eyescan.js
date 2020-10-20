import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Grid from "../containers/grid";
import Sub from "../containers/sub";

import ButtonBack from "../components/ButtonBack";

import eyescan from "../images/eyescanvid.mov";

const Flex = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 12px;
  }
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Vid = styled.video`
  height: auto;
  width: 100%;
  margin: 12px auto;
  max-width: 1000px;
`;

const Eyescan = () => {
  return (
    <Grid>
      <FlexRow>
        <Link to="/work">
          <Sub>
            <h3>back</h3>
            <ButtonBack x={-12} y={12} />
          </Sub>
        </Link>
        <Sub>
          <h2>Eyescan</h2>
          <ButtonBack x={37} y={12} width={50} />
        </Sub>
      </FlexRow>
      <Flex>
        <Vid src={eyescan} autoPlay loop/>
        <div>
          <Sub>
            <h3>about the project</h3>
            <ButtonBack y="8" />
          </Sub>
          <br />
          <p>
            Eyescan is a diagnostic tool for eye health professionals. The
            application lets users take picture of a patient's eye, then upload
            it to a cloud service to diagnose the eye's health.
          </p>
        </div>
        <div>
          <Sub>
            <h3>my role</h3>
            <ButtonBack y="8" />
          </Sub>
          <br />
          <p>
            I acted in many stages of project. Intially I created an asychronous
            messaging queue for backend communication, and a websocket to allow
            the user to instantly trigger camera movements from the frontend.
          <br/>
            Later, I designed the user journey and interface in a small design
            team, then took those designs and developed the front-end to pixel
            level detail, adding some animation for fun.
          </p>
        </div>
        <div>
          <Sub>
            <h3>extra deets</h3>
            <ButtonBack y="8" />
          </Sub>
          <br />
          <p>
            I designed the front-end in <strong>Figma</strong>, coded the
            frontend in <strong>React</strong> and <strong>SCSS</strong>. The
            backend communication I coded utilised <strong>aiohttp</strong> and{" "}
            <strong>socket.io</strong>
          </p>
        </div>
      </Flex>
    </Grid>
  );
};

export default Eyescan;
