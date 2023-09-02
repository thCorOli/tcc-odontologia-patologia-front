import styled, { css } from "styled-components";

export const Panel = styled.div`
  width: 50%;
  height: 80vh;
  margin: 0 auto 45px auto;

  @media screen and (max-width: 960px) {
    width: 80%;
    height: 70vh;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
    height: 80vh;
  }
`;

export const Logo = styled.img`
  width: 80%;
  margin-bottom: 45px;
  object-fit: contain;
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
`;

export const LinkLogo = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
`;

export const ResendEmail = styled.a`
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
