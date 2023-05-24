import { useState } from "react";

export default function useID(defaultCategoryValues) {
    const [value, setValue] = useState(defaultCategoryValues);

    const setValues = (key, inValue) => {
        setValue({ ...value, [key]: inValue });
    };

    const onChangeHandler = (eventName) => {
        if (eventName.target.getAttribute("type") === "checkbox") {
            let checkboxList = eventName.target.parentNode.parentNode.querySelectorAll("input");
            let valueCheck="";
            for (let index = 0; index < checkboxList.length; index++) {
                (checkboxList[index].checked?valueCheck=valueCheck+"1":valueCheck=valueCheck+"0")
            }
            setValues(eventName.target.getAttribute("name"), valueCheck);
        }
        else
            setValues(eventName.target.getAttribute("name"), eventName.target.value);
    };

    const onChangeHandlerO = (eventName) => {
        setValues(eventName.target.getAttribute("name"), eventName.target.value);
    };

    const clearForm = () => {
        setValue(defaultCategoryValues);
    };

    const filterText = (text) => {
        this.setState({
            text: text.replace(/([^\d\s/-])/g, ""),
        });
    };

    return {
        onChangeHandler,
        value,
        clearForm,
        filterText,
        onChangeHandlerO,
    };
}
