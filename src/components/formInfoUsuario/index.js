import styled, { css } from "styled-components";

export const Panel = styled.div`
  width: 70%;
  max-width: 100%; 
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 70%;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
    height: 80%;
  }
`;

export const Logo = styled.img`
  width: 80%;
  margin-bottom: 45px;
  object-fit: contain;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  overflow: hidden;

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const LinkLogo = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;

export const LinksOtherPages = styled.a`
  align-self: flex-start;
  margin: -35px 0 50px 0;
  text-decoration: none;
  color: var(--black);
  font-family: "Roboto Condensed";
  cursor: pointer;
  transition: 0.3s;
  
  :hover {
    color: var(--medium-purple);
    transition: 0.3s;
  }
`;

export const TextWithLink = styled.text`
  text-decoration: none;
  color: var(--black);
  font-family: "Roboto Condensed";
`;

export const CentralizedLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
  width: 100%;
  
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;