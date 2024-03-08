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
    if (value[key].includes(option)) {
      setValues(
        key,
        value[key].filter((item) => item !== option)
      );
    } else {
      setValues(key, [...value[key], option]);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value, checked } = e.target;

    if (checked && value === "Outro") {
      setValue((prevState) => ({
        ...prevState,
        [name]: [value],
        [name + "_outro"]: "",
      }));
    } else {
      setValue((prevState) => ({
        ...prevState,
        [name]: checked
          ? [...(prevState[name] || []), value]
          : prevState[name]?.filter((item) => item !== value),
        [name + "_outro"]: "",
      }));
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
