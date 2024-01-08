import styled, { css } from "styled-components";
import "../../../../constants/colors.css";

export const Card = styled.div`
    width: 200px;
    height: 200px;
    display:flex;
    flex-direction: column; /* Altera a direção para vertical */
    justify-content: center; /* Alinha verticalmente */
    align-items: center;    /* Alinha horizontalmente */
    cursor: pointer;
    border-radius:10%;
    background-color: var(--ligth-purple);
    margin-right: 20px;

    :hover {
        background-color: var(--medium-purple);
        transition: 0.4s;
        font-size: 1.2em;
      }
`;

export const Img = styled.img`
  max-width: 20%;
  margin-bottom: 20%;
  @media only screen and (max-width: 640px) {
    height: 25px;
  }
`;

export const CardContainer = styled.div`
    display: flex;                        
    padding: 20px;          
    flex-wrap: wrap;         
`;