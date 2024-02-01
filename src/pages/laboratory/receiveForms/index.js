import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import EmptyPatients from "./components/emptyPatient/index";
import ContentPatients from "./components/contentPatient/index";
import LoadingPatient from "./components/loadingPatient/index";
import { Subtitle } from "../../../components/texts";


const ReceiveForms = () => {
  const [Patients, setPatient] = useState([]);

  useEffect(() => {
    setPatient([
    {
      "id": 1,
      "name": "João Silva",
      "age": 30,
      "sex": "Masculino",
      "value": "Hipertensão",
      "date": "2023-01-10T11:00:00Z"
    },
    {
      "id": 2,
      "name": "Maria Oliveira",
      "age": 45,
      "sex": "Feminino",
      "value": "Diabetes tipo 2",
      "date": "2023-01-10T11:00:00Z"
    },
    {
      "id": 3,
      "name": "Carlos Ferreira",
      "age": 60,
      "sex": "Masculino",
      "value": "Doença cardíaca",
      "date": "2023-01-10T11:00:00Z"
    },
    {
      "id": 4,
      "name": "Ana Souza",
      "age": 28,
      "sex": "Feminino",
      "value": "Asma",
      "date": "2023-01-10T11:00:00Z"
    },
    {
      "id": 5,
      "name": "Pedro Lima",
      "age": 50,
      "sex": "Não informado",
      "value": "Artrite",
      "date": "2023-01-10T11:00:00Z"
    }
  ]);
  }, []);
  
  const novoVector = {
      form_measurement: [
        {
          "id": 1,
          "name": "João Silva",
          "age": 30,
          "sex": "Masculino",
          "value": "Hipertensão",
          "date": "2023-01-10T11:00:00Z"
        },
        {
          "id": 2,
          "name": "Maria Oliveira",
          "age": 45,
          "sex": "Feminino",
          "value": "Diabetes tipo 2",
          "date": "2023-01-10T11:00:00Z"
        },
        {
          "id": 3,
          "name": "Carlos Ferreira",
          "age": 60,
          "sex": "Masculino",
          "value": "Doença cardíaca",
          "date": "2023-01-10T11:00:00Z"
        },
        {
          "id": 4,
          "name": "Ana Souza",
          "age": 28,
          "sex": "Feminino",
          "value": "Asma",
          "date": "2023-01-10T11:00:00Z"
        },
        {
          "id": 5,
          "name": "Pedro Lima",
          "age": 50,
          "sex": "Não informado",
          "value": "Artrite",
          "date": "2023-01-10T11:00:00Z"
        }
      ]
    }

  return (
    <Layout titlePage="Formulários Recebidos de pacientes">
      <input placeholder="Sugestão"></input>
      {Patients === 0 ? (
        <LoadingPatient />
      ) : Patients.length === 0 ? (
        <EmptyPatients />
      ) : (
        <div>
          <Subtitle>Lista de formulários recebidos</Subtitle>
          <ContentPatients Patients={novoVector} />
        </div>
    )}
        </Layout>
      );
};

export default ReceiveForms;