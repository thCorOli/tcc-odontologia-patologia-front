import styled, { css } from "styled-components";
import "../../../../constants/colors.css";

export const SideBySide = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 640px) {
    display: block;
    flex-direction: column;
  }
`;

export const LinkLogo = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  opacity: 0;
  
  transition: opacity 1s ease, transform 1s ease;
  &.animate {
    opacity: 1;
  }
`;

export const LogoFullLogin = styled.img`
  width: 80%;
  margin-bottom: 45px;
  object-fit: contain;
`;

export const ContentContainer = styled.div`
  width: 70%;
  height: 85%;
  margin: 0 auto;
  padding: 0.1% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  

  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `};
  ${({ borderRadius }) => css`
    border-radius: ${borderRadius};
  `};
  @media only screen and (max-width: 640px) {
    width: 90%;
    padding: 50px;
    margin: 0 auto;
  }

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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-around;
`;

export const Text = styled.p`
  font-family: "Roboto Condensed";
`;

export const TextContainer = styled.div`
  display:flex;
  justify-content: left;
  width: 100%;
  margin-bottom: 2%;
`;


export const Input = styled.input`
  display: block;
  width: 100%;
  height: 15px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  padding: 16px 16px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  resize: none;
  border-radius: 10px;
  transition: border-color 0.3s;
  background-color: var(--input);

  &:focus {
    border-bottom-color: var(--primary);
  }
`;

export const WrapperFormField = styled.div`
  position: relative;
  width: 100%;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
  margin-bottom: 45px;
`;

export const Linked = styled.a`
  align-self: center;
  text-decoration: none;
  color: var(--black);
  font-family: "Roboto Condensed";
  cursor: pointer;
  transition: 0.4s;
  font-size: 1em;

  :hover {
    color: var(--medium-green);
    transition: 0.4s;
    font-size: 1.2em;
  }
`;