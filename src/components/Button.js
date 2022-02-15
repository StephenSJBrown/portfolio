import styled from "styled-components";

const Button = styled.button`
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #f5d1d1;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    height: 48px;
    img {
    height: 24px;
    width: 24px;
    margin-left: 18px;
  }
  }

  &:focus {
    outline: none;
  }

  img {
    height: 24px;
    width: 24px;
    margin-left: 8px;
  }
`;

export default Button;
