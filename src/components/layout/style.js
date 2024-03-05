import styled from "styled-components";
import "../../constants/colors.css";

export const Content = styled.div`
  height: auto;
  background-color: var(--gray);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  flex-direction: column;
  @media only screen and (max-width: 640px) {
    padding: 20px 0 90px 0;
    min-height: 70vh;
  }

  @media screen and (min-width: 1200px) {
    min-height: 74vh;
  }
`;

export const MakeSide = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
`;
