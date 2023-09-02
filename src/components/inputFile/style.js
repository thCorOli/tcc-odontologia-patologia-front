import styled from "styled-components";
import "../../constants/colors.css";

export const FileInputLabel = styled.label`
    display: inline-block;
    padding: 1% 2%;
    background-color:  var(--dark-purple);
    color:  var(--white);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-size: 1em;
    margin-bottom: 2%;
    transition: 0.4s;
    

    &:hover{
      background-color: var(--ligth-purple);
      color:  var(--black);
      transition: 0.4s;
      
    }
`;
  
export const FileInput = styled.input`
    display: none;
    margin-left:2%;
`;

export const MakeSide = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
`;


    