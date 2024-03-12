import styled, { css } from "styled-components";
import "../../../../constants/colors.css";

export const Card = styled.div`
    width: 220px; 
    height: 220px; 
    display: flex;
    transition: 0.4s;
    flex-direction: column; 
    align-items: center;  
    justify-content: center; 
    cursor: pointer;
    border-radius: 10%;
    margin-right: 20px;
    background-color: var(--ligth-purple);
    padding: 20px; 
    text-align: center;

    :hover {
        background-color: var(--medium-purple);
        transition: 0.4s;
        font-size: 1.2em;
      
    }

    @media only screen and (max-width: 960px) {
        width: 120px;
        height: 120px;
        margin-right: 0;
        margin-bottom: 5%;
    }
`;

export const Img = styled.img`
    max-width: 40%; /* Ajustando a largura máxima da imagem */
    margin-bottom: 20%; /* Ajustando o espaço entre a imagem e o texto */
    @media only screen and (max-width: 640px) {
        height: 25px;
    }
`;

export const CardContainer = styled.div`
    display: flex;                        
    padding: 20px;          
    flex-wrap: wrap;
    flex-direction: row; 
    @media only screen and (max-width: 960px) {
        flex-direction: column; 
        justify-content: space-between;
    }    
        
`;
