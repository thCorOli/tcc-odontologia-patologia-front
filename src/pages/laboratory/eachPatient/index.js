import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { getPatientById } from "../../../services/laboratory/index";
import { TextCard} from "../../../components/texts/index";
import styled from "styled-components";
import {
    ListCardContainer,
    AlignContent,
  } from "../../../constants/containers/index";
import "../../../constants/colors.css";

const EachPatient = (props) => {
    const { id } = props.match.params; 
    const [forms, setForms] = useState(null);

    const Card = styled.div`
    background-color: var(--white);
    width: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2%;
    text-decoration: none;
    border-radius: 2%;
    padding-left: 5%;
`;

    useEffect(() => {
        getPatientById(id, (response) => {
            setForms(response.data);
        });
        
    }, [id]);

    if (!forms) {
        return <div>Carregando informações do paciente...</div>;
    }
      
    const BdToDateElements = (dateElement) => {
        const date = new Date(dateElement);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const fullDate = day + "/" + month + "/" + year;
        return fullDate;
    }

    const renderFormsPatient = forms.map((eachFormPatient, index) => {
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
            <ListCardContainer>
                <AlignContent>
                    {renderFormsPatient}
                </AlignContent>
            </ListCardContainer>
        </Layout>
    );
};

export default EachPatient;
