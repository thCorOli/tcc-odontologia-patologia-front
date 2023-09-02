import styled from "styled-components";
import "../../constants/colors.css";

export const Button = styled.button `
  border: none;
  border-radius: 10px;
  height: 60px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-family: "Roboto Condensed";
  font-size: 1.2em;
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: 0.2s; 
  text-transform: capitalize;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    height: 30px;
  }
  :active {
    transition: 0.2s;
    border: none;
  }
  :hover {
    transition: 0.4s;
    cursor: pointer;
    background-color: ${(props) => props.hoverBackGround };
    color:  ${(props) => props.hoverColor};
    font-size:1.45em;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default Button;
