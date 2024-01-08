import styled, { css } from "styled-components";
import "../../../../constants/colors.css";

export const Card = styled.div`
    width: 220px; /* Aumentando a largura para acomodar ambos os elementos */
    height: 220px; /* Ajustando a altura também */
    display: flex;
    transition: 0.4s;
    flex-direction: column; 
    align-items: center;  
    justify-content: center; 
    cursor: pointer;
    border-radius: 10%;
    margin-right: 20px;
    background-color: var(--ligth-purple);
    padding: 20px; /* Adicionando padding para dar espaço entre a imagem e o texto */

    :hover {
        background-color: var(--medium-purple);
        transition: 0.4s;
        font-size: 1.2em;
        width: 240px; /* Aumentando a largura no hover */
        height: 240px; /* Ajustando a altura no hover */
    }

    @media only screen and (max-width: 640px) {
        width: 120px;
        height: 120px;
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
`;