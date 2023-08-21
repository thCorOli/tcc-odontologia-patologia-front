import React , {useState} from "react";
import Layout from "../../../components/layout/index";
import Button from "../../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../../hooks/useFormOptions/index";

const FormHistoPato = () => {
    const initialValues = Object.values(form.Form).reduce((acc, field) => {
      return { ...acc, [field.title]: [] };
    }, {});
  
    const { value, onChangeHandler } = useFormOptions(initialValues);
  
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
      }}>
        <h3>Tipo Material:</h3>
        {Object.values(form.Form).map(field => (
          <div key={field.title}>
            <label>{field.title}: </label>
            {field.options.map(option => (
              <label key={option}>
                <input
                  type="checkbox"
                  name={field.title}
                  value={option}
                  checked={value[field.title].includes(option)}
                  onChange={onChangeHandler}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <Button type={"submit"}>Teste</Button>
      </form>
    );
  }
  
  export default FormHistoPato;
  