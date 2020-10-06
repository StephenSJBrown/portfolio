import React, {useState} from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";
import Form from "../components/Form";

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

  &:first-child {
    margin-bottom: 22px;
  }

  * {
    margin-bottom: 12px;
  }
`;

const Pic = styled(Sub)`
  position: absolute;
  bottom: 76px;
  left: 16px;
  min-width: 96px;
  min-height: 96px;
  max-height: 246px;
  max-width: 246px;
`;

const Img = styled.img`
  min-width: 96px;
  min-height: 96px;
  max-height: 246px;
  max-width: 246px;
  
`

const Blurb = styled.div`
  background: #2e2e2e;
  padding: 6px;
  width: 20vw;
  max-width: 342px;
`;

const Contact = () => {
  const dark = useSelector((state) => state.dark);

  const [hologram, setHologram] = useState(false)

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
                <ButtonBack x={-10} width={71} wunit={"px"} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/stephensjbrown/">
              <Button>
                <h3>hit up my linkedn</h3>
                <ButtonBack x={-10} width={71} wunit={"px"} />
              </Button>
            </a>
            <Button onClick={()=>setHologram(true)}>
              <h3>transmit hologram</h3>
              <ButtonBack x={-10} width={71} wunit={"px"} />
            </Button>
            {hologram? <p>available in 3020 :)</p> : <></>}
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
