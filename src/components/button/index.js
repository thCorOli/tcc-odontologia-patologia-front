import styled from "styled-components";
import "../../constants/colors.css";

export const Button = styled.button `
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 10px;
  height: 60px;
  color: ${props => props.color};
  font-family: "Roboto Condensed";
  font-size: 2em;
  font-weight: bold;
  line-height: 47px;
  width: 80%;
  margin: 0 auto;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    height: 30px;
  }
  :active {
    transition: 0.2s;
    background-color: var(--active-color);
    border: none;
  }
  :hover {
    transition: 0.1s;
    cursor: pointer;
  }
`;

export default Button;
