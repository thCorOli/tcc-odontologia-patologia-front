import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/layout/index";
import "../../../../../constants/colors.css";
import { Subtitle, SubtitleSection, TextCard} from "../../../../../components/texts/index";
import { useParams } from "react-router-dom";
import {getPatientById, getHistoryFormsPatient} from "../../../../../services/dentista/index"
import styled from "styled-components";
import {
    ListCardContainer,
    AlignContent,
  } from "../../../../../constants/containers/index";
import "../../../../../constants/colors.css";

const EachPatient = () => {

    const Card = styled.div`
    background-color: var(--white);
    width: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2%;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 5%;
`;

    const { id } = useParams(); // Use useParams para acessar o ID da rota
    const [Patient, setPatient] = useState({});
    const [formSubmissions, setFormSubmissions] = useState([]);

    useEffect(() => {
        getPatientById(id,(response) => {
            setPatient(response.data.patient)
        });
        getHistoryFormsPatient(id,(response) => {
            setFormSubmissions(response.data)
        });
      }, [id]);

    const BdToDateElements = (dateElement) => {
        const date = new Date(dateElement);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const fullDate = day + "/" + month + "/" + year;
        return fullDate;
    }

    const renderFormsPatient = formSubmissions.map((eachFormPatient, index) => {
        const formElements = [];
        formElements.push(<div key={index}><TextCard>{BdToDateElements(eachFormPatient.created_at)}</TextCard></div>);
        for (const [key, value] of Object.entries(eachFormPatient.form_values)) {
            if (value.length !== 0) {
                formElements.push(
                    <TextCard>{key}: {value}</TextCard>
                );
            }
        }
        return <Card key={index}>{formElements}</Card>;
    });

    return (
        <Layout titlePage="Detalhes do Paciente">
            <Subtitle>Nome: {Patient.name} - CPF: {Patient.cpf} - Prontuário: {Patient.prontuario}</Subtitle>
            <Subtitle>Lista de formulários preenchidos</Subtitle>
            <ListCardContainer>
                <AlignContent>
                    {renderFormsPatient}
                </AlignContent>
            </ListCardContainer>
        </Layout>
        );
    };
    
export default EachPatient;