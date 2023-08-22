import React , {useState} from "react";
import Button from "../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../hooks/useFormOptions/index"
import {Option, Subtitle, TitleSectionForm} from "../../components/texts/index"
import { MakeSide } from "../../components/layout/style";
import Layout from "../../components/layout";
import InputFile from "../../components/inputFile";

const FormHistoPato = () => {
    const initialValues = Object.values(form.Form).reduce((acc, field) => {
      return { ...acc, [field.title]: [] };
    }, {});
    let file = ''
    const handleFileChange = (event) => {
      file = event.target.files[0];
    };
  

    const { value, onChangeHandler } = useFormOptions(initialValues);
  
    return (
      <Layout titlePage="Formulário HistoPatologico">

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(value,file);
      }}>
        <TitleSectionForm>Tipo Material:</TitleSectionForm>
        {Object.values(form.Form).map(field => (
          <div key={field.title}>
            <Subtitle>{field.title}: </Subtitle>
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
        <InputFile onChange={handleFileChange}/>
        <Button type={"submit"}>Enviar</Button>
      </form>
      </Layout>
    );
  }
  
  export default FormHistoPato;
  