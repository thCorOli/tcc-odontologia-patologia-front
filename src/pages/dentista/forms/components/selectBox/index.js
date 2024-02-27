import React from 'react';
import styled, { css } from "styled-components";
import "../../../../../constants/colors.css";


const SelectBoxWrapper = styled.select``;
const Option = styled.option``;


const SelectBox = ({ options, value, onChange }) => {

    return (
        <SelectBoxWrapper value={value} onChange={onChange}>
            {options.map((option) => (
                <Option key={option.id} value={option.id}>
                    {option.name}
                </Option>
            ))}
        </SelectBoxWrapper>
    );
};

export default SelectBox;
