import React from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import logo from "./../images/logo.svg";

const Background = styled.div`
  position: fixed;
  width: 100vw;
  background-color: #f5d1d1;
  height: 48px;
  padding: 0 36px;
  box-sizing: border-box;
  padding-top: 6px;
  z-index: 1;
  display: flex;
justify-content: flex-start;

  @media (max-width: 425px) {
    padding: 6px 12px;
  }
  @media (min-width: 1024px) {
    height: 96px;
  }

`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  transition-duration: 1s;

  &:hover {
    animation-name: spin;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

const Main = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1024px) {
  max-width: 65vw;
}
`;

const Navbar = () => {
  return (
    <Background>
      <Main>
        <a href="/">
          <Logo src={logo} alt="logo" />
        </a>
        {/* <Right>
          <Link to="/#about" className="nav">
            about
          </Link>
          <Link to="/#work" className="nav">
            work
          </Link>
          <Link to="/#contact" className="nav">
            contact
          </Link>
        </Right> */}
      </Main>
    </Background>
  );
};

export default Navbar;
