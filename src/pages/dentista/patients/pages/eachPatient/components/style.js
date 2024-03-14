import styled from "styled-components";
import "../../../../../../constants/colors.css";

export const DowloadLaudoButton = styled.button`
    border-radius: 10px;
    border: 1px solid var(--dark-purple)
    font-family: "Roboto Condensed";
    font-size: 1.2em;
    border: none;
    padding: 5px;
    cursor: pointer;
    transition: 0.2s; 
    text-transform: capitalize;
    :hover {
        transition: 0.4s;
        cursor: pointer;
        background-color: var(--dark-purple);
        color: var(--white);
        font-size:1.25em;
        font-weight: bold;
    }
`;

export const Card = styled.div`
    background-color: var(--white);
    width: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2%;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 5%;
`;