import styled from "styled-components";
import "../../constants/colors.css";

export const H1sistem = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 4em;
  height: 75px;
  line-height: 75px;
  margin-left: 150px;
  color: var(--black);
  background-color: var(--white);

  @media only screen and (max-width: 640px) {
    height: auto;
    font-size: 2rem;
    line-height: 2rem;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const Text = styled.p`
  font-family: "Roboto Condensed";
  font-weight: bold;
  line-height: 32px;
  font-size: 1.6875em;
  @media only screen and (max-width: 640px) {
    font-size: 1.2em;
  }
`;

export const TextCard = styled.p`
  font-family: "Roboto Condensed";
  font-size: 1.5em;
  line-height: 50px;
  color: var(--black);

  @media only screen and (max-width: 640px) {
    font-size: 1em;
  }
`;

export const Option = styled.p`
  font-family: "Roboto Condensed";
  font-size: 1.2em;
  color: var(--black);

  @media only screen and (max-width: 640px) {
    font-size: 0.25em;
  }
`;

export const Errors = styled.p`
  font-family: "Roboto Condensed";
  font-size: 1.5em;

  color: var(--errors);
`;

export const Subtitle = styled.p`
  font-family: "Roboto Condensed";
  font-size: 1em;
  line-height: 50px;
  color: var(--black);
  margin-bottom: 2%;
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    font-size: 0.75em;
  }
`;