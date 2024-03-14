import { useState } from "react";

export default function useFormOptions(defaultCategoryValues) {
  const [value, setValue] = useState(defaultCategoryValues);

  const setValues = (key, inValue) => {
    setValue((prevValue) => ({
      ...prevValue,
      [key]: inValue,
    }));
  };

  const toggleCheckboxValue = (key, option) => {
    if (Array.isArray(value[key]) && value[key].includes(option)) {
      setValues(
        key,
        value[key].filter((item) => item !== option)
      );
    } else {
      setValues(key, [...(value[key] || []), option]);
    }
  };

  const onChangeHandler = (eventName) => {
    const { name, value: checkedValue, type, checked } = eventName.target;

    if (type === 'checkbox') {
      toggleCheckboxValue(name, checkedValue);
    } else {
      setValues(name, checked ? checkedValue : '');
    }
  };

  const clearForm = () => {
    setValue(defaultCategoryValues);
  };

  const onChangeHandlerText = (eventName) => {
    setValues(eventName.target.getAttribute("name"), eventName.target.value);
  };

  return {
    onChangeHandler,
    value,
    clearForm,
    onChangeHandlerText,
  };
}
