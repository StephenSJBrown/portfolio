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

const Monstera = () => {
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
          <h2>Monstera</h2>
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
            MonsteraWear is an eccommerce website to sell plant-inspired t shirts. It's not yet live, but see a preview above.
          </p>
        </div>
        <div>
          <Sub>
            <h3>my role</h3>
            <ButtonBack y="8" />
          </Sub>
          <br />
          <p>
            As the founder of MonsteraWear, I took charge of designing and developing the entire site. All me, baby!
          </p>
        </div>
        <div>
          <Sub>
            <h3>extra deets</h3>
            <ButtonBack y="8" />
          </Sub>
          <br />
          <p>
          The backend server was created in <strong>Django</strong> and payments processed by <strong>Braintree</strong>. The front-end was designed in <strong>Figma</strong>, and coded 
            in plain ol' <strong>HTML5, CSS</strong>, and <strong>Javascript</strong>. 
          </p>
        </div>
      </Flex>
    </Grid>
  );
};

export default Monstera;
