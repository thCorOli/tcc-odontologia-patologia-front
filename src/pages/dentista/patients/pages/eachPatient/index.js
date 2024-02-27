import React, { useState, useEffect } from "react";
import Layout from "../../../../../components/layout/index";
import "../../../../../constants/colors.css";
import { Subtitle, SubtitleSection} from "../../../../../components/texts";
import { useHistory } from "react-router-dom";
import ListPatientsIcon from "../../../../../assets/imgs/icones/ListPatientsIcon.png";
import RegisterPatientsIcon from "../../../../../assets/imgs/icones/RegisterPatientsIcon.png";
import { ContentContainer } from "../../../../../constants/containers/index";
import { useParams } from "react-router-dom";
import {getPatientById} from "../../../../../services/dentista/index"

const EachPatient = () => {
    const { id } = useParams(); // Use useParams para acessar o ID da rota
    const [Patient, setPatient] = useState({});
    const [formSubmissions, setFormSubmissions] = useState([]);

    useEffect(() => {
        getPatientById(id,(response) => {
            setPatient(response.data.patient)
            setFormSubmissions(response.data.form_submissions)
        });
      }, []);

    return (
        <Layout titlePage="Detalhes do Paciente">
            <Subtitle>{Patient.name} - {Patient.cpf}</Subtitle>

        </Layout>
        );
    };
    
export default EachPatient;