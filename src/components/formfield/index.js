import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import "../../constants/colors.css";

const WrapperFormField = styled.div`
  position: relative;
  width: 100%;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
  margin-bottom: 45px;
`;
const Label = styled.label``;

Label.Text = styled.span`
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  font-family: "Roboto Condensed";
  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  transition: 0.1s ease-in-out;
  color: var(--black);
  
  
  @media screen and (max-width: 960px) {
    font-size: 15px;
    height: 10px;
    left: 0;
    top: 20px;
  }

`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 15px;
  font-size: 1.2em;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  padding: 16px 16px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  resize: none;
  border-radius: 10px;
  transition: border-color 0.3s;
  background-color: var(--input);

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  @media screen and (max-width: 960px) {
    font-size: 1em;
    height: 10px;
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

const Alert = styled.p`
  margin: 5px 5px 0 0;
  font-family: "Roboto Condensed";
  color:var(--black);
  font-weight: bold;

   @media screen and (max-width: 960px) {
    font-size: 0.75em;
  }
`;

function FormField({
  label,
  type,
  name,
  value,
  onChange,
  maxLength,
  minLength,
  pattern,
  onInputHandler,
  alert,
  max
}) {
  const isTextArea = type === "textarea";
  const fieldId = `id_${name}`;
  const tag = isTextArea ? "textarea" : "input";
  const hasValue = Boolean(value.length);
  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          onInput={onInputHandler}
          autoComplete="off"
          max={max}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
      <Alert>{alert}</Alert>
    </WrapperFormField>
  );
}

FormField.defaultProps = {
  type: "text",
  value: "",
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onInput: PropTypes.func,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
};

export default FormField;
