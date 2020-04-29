import React from 'react'

import styled from 'styled-components'

import abackground from "../images/abackground.png";
import bbackground from "../images/bbackground.png";

const Left = styled.div`
  clip-path: polygon(
    100% 0,
    100% 48px,
    calc(100% - 30px) 126px,
    calc(100% - 30px) 100%,
    0 100%,
    0 0
  );
  background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(31, 91, 48, 0.7),
      rgba(31, 91, 48, 0.7)
    ),
    /* bottom, image */ url(${abackground});
  background-size: cover;
  position: absolute;
  height: calc(100vh - 48px);
  width: 52vw;
  z-index: -2;
  left: 0;
  top: 48px;
`;

const Right = styled.div`
  clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 126px, 30px 48px);
  background: 
    /* top, transparent red, faked with gradient */ linear-gradient(
      rgba(30, 152, 201, 0.7),
      rgba(30, 152, 201, 0.7)
    ),
    /* bottom, image */ url(${bbackground});
  background-size: cover;
  position: absolute;
  height: calc(100vh - 48px);
  width: calc(50vw + 17px);
  z-index: -2;
  right: 0;
  top: 48px;
`;

const Dynamic = ({dark}) => {

const Back = styled.div`
background: ${ dark ? `linear-gradient(
      rgba(31, 91, 48, 0.7),
      rgba(31, 91, 48, 0.7)
    ),
    /* bottom, image */ url(${abackground})` : `linear-gradient(
      rgba(30, 152, 201, 0.7),
      rgba(30, 152, 201, 0.7)
    ),
   url(${bbackground})`} ;
   background-size: cover;
height: calc(100vh - 48px);
width: 100vw;
z-index: -3;
position: absolute;
top: 48px;
`

return (
  <Back/>
)
}


export {Left, Right, Dynamic};