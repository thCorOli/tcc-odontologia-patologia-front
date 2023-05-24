import React from "react";
import styled from "styled-components";
import "../../constants/colors.css";
import PropTypes from "prop-types";

const Input = styled.input`
  background-color: var(--second-gray);
  border: none;
  border-radius: 20px;
  height: 4vh;
  width: 30vw;
  font-size: 1.5rem;
  padding: 0 15px;
  outline: none;
  position: absolute;
  top: 15%;
`;

const SearchBar = (onChange, type, name, placeholder, value) => {
  return (
    <Input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
};

SearchBar.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default SearchBar;
