import React , {useState} from "react";
import Button from "../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../hooks/useFormOptions/index"
import {Option} from "../../components/texts/index"
import { MakeSide } from "../../components/layout/style";
import Layout from "../../components/layout";

const FormHistoPato = () => {
    const initialValues = Object.values(form.Form).reduce((acc, field) => {
      return { ...acc, [field.title]: [] };
    }, {});
  
    const { value, onChangeHandler } = useFormOptions(initialValues);
  
    return (
      <Layout>

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
      }}>
        <h3>Tipo Material:</h3>
        {Object.values(form.Form).map(field => (
          <div key={field.title}>
            <label>{field.title}: </label>
            <MakeSide>
            {field.options.map(option => (
              <MakeSide key={option}>
                <input
                  type="checkbox"
                  name={field.title}
                  value={option}
                  checked={value[field.title].includes(option)}
                  onChange={onChangeHandler}
                  />
                <Option> {option} </Option> 
              </MakeSide>
            ))}
          </MakeSide>
          </div>
        ))}
        <input type="file"/>
        <Button type={"submit"}>Enviar</Button>
      </form>
      </Layout>
    );
  }
  
  export default FormHistoPato;
  