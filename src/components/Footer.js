import React from "react";

import styled from "styled-components";

import email from "../images/email.svg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

const Foot = styled.div`
  position: relative;
  top: 96px;
  color: #2e2e2e;
  width: 100vw;
  padding: 32px;
  box-sizing: border-box;
  background: #f5d1d1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 14px;

  img {
    height: 24px;
    width: 24px;
    margin-right: 36px;

    &::last-of-type {
      margin-right: 0;
    }
  }
`;

const Email = styled.p`
margin-top: -18px;
margin-bottom: 18px;
color: #2e2e2e;
`

const Footer = () => {
  return (
    <Foot>
      <h3 className="footer">stephen sj brown</h3>
      <Email >stephen.sjbrown@gmail.com</Email>
      <Icons>
        <a href="mailto:stephen.sjbrown@gmail.com">
          <img src={email} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/stephensjbrown/">
          <img src={linkedin} />
        </a>
        <a target="_blank" href="https://github.com/StephenSJBrown/">
          <img src={github} />
        </a>
      </Icons>
    </Foot>
  );
};

export default Footer;
