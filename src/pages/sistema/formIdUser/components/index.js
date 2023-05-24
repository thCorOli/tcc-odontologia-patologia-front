import styled from "styled-components";
import "../../../../constants/colors.css";

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 40%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

export const Img = styled.img`
  margin-bottom: 100px;
  @media screen and (max-width: 640px) {
    width: 60%;
    align-self: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    width: 50%;
    font-size: 1.2em;
    align-self: center;
  }
`;
