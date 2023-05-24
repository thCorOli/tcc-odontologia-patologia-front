import styled, { css } from "styled-components/";
import "../../../../../constants/colors.css";

export const CardContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 640px) {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 275px;
  height: 265px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  height: 50%;
  margin-bottom: 20px;
`;

export const TitleCard = styled.p`
  font-family: "Roboto Condensed";
  font-weight: bold;
  font-size: 2.25em;
  text-align: center;
  color: var(--black);
  line-height: 40px;
  ${({ width }) => css`
    width: ${width};
  `};
`;

export const Teste = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;
