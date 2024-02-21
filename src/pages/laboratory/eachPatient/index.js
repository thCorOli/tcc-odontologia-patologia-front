import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import {getPatientById} from "../../../services/laboratory/index" ;

const EachPatient = (props) => {
    const { id } = props.match.params; 
    const [paciente, setPaciente] = useState(null);

    useEffect(() => {
        const pacienteInfo = getPatientById(id);
        setPaciente(pacienteInfo);
    }, [id]);

    if (!paciente) {
        return <div>Carregando informações do paciente...</div>;
    }

    return (
        <Layout titlePage="Detalhes do Paciente">
            <div>Nome: {paciente.name}</div>
            <div>CPF: {paciente.cpf}</div>
            <div>Outras informações</div>
        </Layout>
    );
};

export default EachPatient;