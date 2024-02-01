import React from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { Subtitle, SubtitleSection} from "../../../components/texts";
import { useHistory } from "react-router-dom";
import { Card, Img, CardContainer } from "./components/index";
import ListPatientsIcon from "../../../assets/imgs/icones/ListPatientsIcon.png";
import RegisterPatientsIcon from "../../../assets/imgs/icones/RegisterPatientsIcon.png";
import { ContentContainer } from "../../../constants/containers/index";

const Patients = () => {
    const history = useHistory();

    const handleFormSelection = (path) => {
        history.push(path);
    }

    return (
        <Layout titlePage="Seus Pacientes">
            <Subtitle>Escolha um formulário</Subtitle>
            <ContentContainer
                backgroundColor={"var(--white)"}
                borderRadius={"2%"}
            >
                <CardContainer>
                    <Card onClick={() => handleFormSelection("/dentista/listarPacientes")}>
                        <Img src={ListPatientsIcon} />
                        <SubtitleSection>Lista de pacientes</SubtitleSection>
                    </Card>
                    <Card onClick={() => handleFormSelection("/dentista/cadastrarPaciente")}>
                        <Img src={RegisterPatientsIcon} /> 
                        <SubtitleSection>Registrar Paciente</SubtitleSection>
                    </Card>
                </CardContainer>
            </ContentContainer>
        </Layout>
    );
};

export default Patients;