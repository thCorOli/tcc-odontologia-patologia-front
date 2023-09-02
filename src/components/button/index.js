import styled from "styled-components";
import "../../constants/colors.css";

export const Button = styled.button `
  border: none;
  border-radius: 10px;
  height: 60px;
  color: ${props => props.color};
  font-family: "Roboto Condensed";
  font-size: 1em;
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: 0.3s;
  @media screen and (max-width: 960px) {
    font-size: 1em;
    height: 30px;
  }
  :active {
    transition: 0.2s;
    border: none;
  }
  :hover {
    transition: 0.3s;
    cursor: pointer;
    background-color: ${(props) => props.hoverBackGround };
    color:  ${(props) => props.hoverColor};
    font-size:1.2em;
  }
`;

export default Button;
