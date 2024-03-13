import React from 'react';
import styled from "styled-components";
import "../../../../../../../constants/colors.css";


const SelectBoxWrapper = styled.select`
    margin-bottom: 45px;
    width: 50%;
    align-self: flex-start;
    font-size: 1em;
    border-radius: 10px;
    padding: 1% 0 1% 2%;
`;

const Option = styled.option`

`;


const SelectBox = ({ options, value, onChange }) => {

    console.log(options);
    return (
        <SelectBoxWrapper value={value} onChange={onChange}>
            {options.map((option) => (
                <Option key={option.id} value={option.name}>
                    {option.name}
                </Option>
            ))}
        </SelectBoxWrapper>
    );
};

export default SelectBox;