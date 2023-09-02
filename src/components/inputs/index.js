import styled from "styled-components";
import "../../constants/colors.css";

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 50%;
    background-color: transparent;
    display:flex;
    justify-content: center;

    &:checked::before {
        content: '✔'; /* Display a checkmark character */
        display: block;
        text-align: center;
        font-size: 12px;
        color: #fff;
        width: 20px;
        height: 15px;
        background-color: var(--dark-purple); 
        border: 2px solid var(--dark-purple);
        border-radius: 50%;
    }
`;

