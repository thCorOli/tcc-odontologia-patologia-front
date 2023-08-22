import styled from "styled-components";
import "../../constants/colors.css";

export const FileInputLabel = styled.label`
    display: inline-block;
    padding: 1% 2%;
    background-color:  var(--confirm);
    color:  var(--black);
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-size: 1em;
    margin-bottom: 2%;
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


    