import React from "react";

import styled from "styled-components";

import spinner from "../images/SpinnerLight.svg";

const LoadAnim = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.img`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  transition-duration: 1s;

  animation-name: spin;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Loader = () => {
  return (
    <LoadAnim>
      <Spinner src={spinner} />
    </LoadAnim>
  );
};

export default Loader;
