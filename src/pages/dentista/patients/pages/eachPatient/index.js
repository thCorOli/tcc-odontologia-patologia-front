import React from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { Subtitle, SubtitleSection} from "../../../components/texts";
import { useHistory } from "react-router-dom";
import { Card, Img, CardContainer } from "./components/index";
import ListPatientsIcon from "../../../assets/imgs/icones/ListPatientsIcon.png";
import RegisterPatientsIcon from "../../../assets/imgs/icones/RegisterPatientsIcon.png";
import { ContentContainer } from "../../../constants/containers/index";

const EachPatient = () => {
    const pacienteId = match.params.id;
    //const paciente = obterDetalhesDoPaciente(pacienteId);
    /*if (!paciente) {
        return <div>Paciente não encontrado.</div>;
    }*/

    return (
        <Layout titlePage="Detalhes do Paciente">


        </Layout>
        );
    };
    
export default EachPatient;