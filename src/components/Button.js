import styled from "styled-components";

const Button = styled.button`
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background: none;

  &:hover > div {
    left: -10%;
    top: 0;
    width: 120%;
    height: 100%;
  }
`;

export default Button;
