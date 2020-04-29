import React from "react";

import styled from "styled-components";

import ButtonBack from "../components/ButtonBack";
import Button from "../components/Button";
import Form from "../components/Form";

import Grid from "../containers/grid";
import Title from "../containers/title";
import Sub from "../containers/sub";

import sky from "../images/sky.png";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Pic = styled(Sub)`
margin-top: 216px;
`

const Contact = () => {
  return (
    <Grid>
        <Title>
          <h2>contact</h2>
          <ButtonBack x={-8} y={12} />
        </Title>
      <Flex>
        <Pic>
          <img src={sky} />
          <ButtonBack x={12} y={-12} />
        </Pic>
        <div>
          <Form />
          <Button>
            <h3>send it</h3>
            <ButtonBack x={-10} width={71} wunit={"px"} />
          </Button>
        </div>
      </Flex>
    </Grid>
  );
};

export default Contact;
