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
      "nome": "João Silva",
      "idade": 30,
      "sexo": "Masculino",
      "diagnostico": "Hipertensão"
    },
    {
      "id": 2,
      "nome": "Maria Oliveira",
      "idade": 45,
      "sexo": "Feminino",
      "diagnostico": "Diabetes tipo 2"
    },
    {
      "id": 3,
      "nome": "Carlos Ferreira",
      "idade": 60,
      "sexo": "Masculino",
      "diagnostico": "Doença cardíaca"
    },
    {
      "id": 4,
      "nome": "Ana Souza",
      "idade": 28,
      "sexo": "Feminino",
      "diagnostico": "Asma"
    },
    {
      "id": 5,
      "nome": "Pedro Lima",
      "idade": 50,
      "sexo": "Masculino",
      "diagnostico": "Artrite"
    }
  ]);
  }, []);
  
  const novoVector = {
      form_measurement: [
        {
          id: 1,
          name: "Paciente 1",
          value: "Dados do formulário",
          date: "2023-01-10T10:00:00Z"
        },
        {
          id: 2,
          name: "Paciente 2",
          value: "Dados do formulário",
          date: "2023-01-10T11:00:00Z"
        }
      ]
    }

  return (
    <Layout titlePage="Formulários Recebidos de pacientes">
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