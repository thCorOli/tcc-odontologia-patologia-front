import React from 'react';
import styled from "styled-components";
import "../../../../../../../constants/colors.css";


const SelectBoxWrapper = styled.select`
    margin-bottom: 2%;
`;
const Option = styled.option``;


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