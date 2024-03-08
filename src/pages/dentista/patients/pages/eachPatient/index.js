import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/layout/index";
import "../../../../../constants/colors.css";
import { Subtitle, TextCard} from "../../../../../components/texts/index";
import { useParams } from "react-router-dom";
import {getPatientById, getHistoryFormsPatient} from "../../../../../services/dentista/index"
import styled from "styled-components";
import {
    ListCardContainer,
    AlignContent,
    LineContainer
} from "../../../../../constants/containers/index";
import "../../../../../constants/colors.css";
import {downloadFiles } from "../../../../../services/general/utils/utils" ;
import { useHistory } from "react-router-dom";

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

    const { id } = useParams(); 
    const [Patient, setPatient] = useState({});
    const [formSubmissions, setFormSubmissions] = useState([]);
    const [selectedFormId, setSelectedFormId] = useState(null);
    const history = useHistory();

    useEffect(() => {
        getPatientById(id, (response) => {
            setPatient(response.data.patient)
        });
        getHistoryFormsPatient(id, (response) => {
            setFormSubmissions(response.data)
        });
    }, [id]);

    const handleOnClick = () => {
        history.push("dentista/laudo")
    }

    const BdToDateElements = (dateElement) => {
        const date = new Date(dateElement);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const fullDate = day + "/" + month + "/" + year;
        return fullDate;
    }

    const handleFormIdChange = (event) => {
        setSelectedFormId(event.target.value); 
    }

    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth() + 1;
        const diaAtual = hoje.getDate();
        const mesNascimento = nascimento.getMonth() + 1;
        const diaNascimento = nascimento.getDate();
        
        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
            idade--;
        }
        
        return idade;
    }
   
    const age = calcularIdade(Patient.birthday);
    
    const renderFormsPatient = formSubmissions.map((eachFormPatient, index) => {
        const selectedFormIdInt = selectedFormId !== null ? parseInt(selectedFormId) : null;
        if (selectedFormId === null || eachFormPatient.form_id === selectedFormIdInt) {
            const formElements = [];
            formElements.push(<div key={index}><TextCard>{BdToDateElements(eachFormPatient.created_at)}</TextCard></div>);
            for (const [key, value] of Object.entries(eachFormPatient.form_values)) {
                if (value.length !== 0) {
                    formElements.push(
                        <TextCard key={key}>{key}: {value}</TextCard>
                    );
                }
            }
            if(eachFormPatient.files.length > 0){
                console.log(eachFormPatient.files)
                formElements.push(<button onClick={() => downloadFiles(eachFormPatient.files)}>Download arquivos</button>)
            }
            return <Card key={index}>{formElements} <button onClick={()=> handleOnClick} style={{marginBottom:"2%"}}>Gerar Laudo</button></Card>;
        }
        return null;
    });
    
    const hasMatchingForms = renderFormsPatient.some(form => form !== null);

    return (
        <Layout titlePage="Detalhes do Paciente">
            <Subtitle>Nome: {Patient.name} - CPF: {Patient.cpf} - Prontuário: {Patient.prontuario} - Idade:{age} </Subtitle>
            <Subtitle>Lista de formulários preenchidos</Subtitle>
            <LineContainer style={{width: "50%", alignSelf:"center"}}>
                <input style={{margin: 0, marginBottom: "2%", marginRight: "2%"}} type="radio" id="form_id_1" name="form_id" value="1" onChange={handleFormIdChange} />
                <Subtitle style={{marginRight: "2%"}}htmlFor="form_id_1">Formulário Citopatológico</Subtitle>
                <input style={{margin: 0, marginBottom: "2%", marginRight: "2%"}} type="radio" id="form_id_2" name="form_id" value="2" onChange={handleFormIdChange} />
                <Subtitle htmlFor="form_id_2">Formulário Histopatologico</Subtitle>
            </LineContainer>
            <ListCardContainer>
                <AlignContent>
                    {hasMatchingForms ? (
                        renderFormsPatient
                    ) : (
                        <Subtitle style={{ textAlign: "center" }}>Nenhum formulário disponível</Subtitle>
                    )}
                </AlignContent>
            </ListCardContainer>
        </Layout>
    );
};

export default EachPatient;