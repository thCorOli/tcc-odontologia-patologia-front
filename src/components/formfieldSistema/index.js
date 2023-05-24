import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../../constants/colors.css";

const WrapperFormField = styled.div`
  position: relative;
  width: 100%;
  transform: translateX(-2.5%);
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;
const Label = styled.label``;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 15px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  padding: 16px 16px;
  margin-bottom: 45px;
  resize: none;
  border-radius: 10px;
  transition: border-color 0.3s;
  background-color: var(--input);
`;

function FormFieldSistema({
  placeholder,
  type,
  name,
  value,
  onChange,
  maxLength,
  minLength,
  pattern,
  id,
  onInputHandler,
  readOnly
}) {
  const isTextArea = type === "textarea";
  const fieldId = `id_${name}`;
  const tag = isTextArea ? "textarea" : "input";
  // const hasValue = Boolean(value.length);
  return (
    <WrapperFormField>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          onInput={onInputHandler}
          autoComplete={"off"}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </Label>
    </WrapperFormField>
  );
}

FormFieldSistema.defaultProps = {
  type: "text",
  value: "",
};

FormFieldSistema.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  pattern: PropTypes.string,
  id: PropTypes.string,
  onInputHandler: PropTypes.func,
  readOnly: PropTypes.bool,
};

export default FormFieldSistema;
