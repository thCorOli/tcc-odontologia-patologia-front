import React from "react";
import { ContentContainer } from "../../../constants/containers/index";
import Layout from "../../../components/layout";
import { Subtitle } from "../../../components/texts";
import { useHistory } from "react-router-dom";
import { Card, Img, CardContainer } from "./components/index"; // Componentes atualizados
import CitologiaFormIcon from "../../../assets/imgs/icones/CitologiaFormIcon.png";
import OdontoOsseoIcon from "../../../assets/imgs/icones/OdontoOsseoIcon.png";

const Forms = () => {
    const history = useHistory();

    const handleFormSelection = (path) => {
        history.push(path);
    }

    return (
        <Layout titlePage="Selecione um formulário">
            <Subtitle>Escolha um formulário</Subtitle>
            <ContentContainer
                backgroundColor={"var(--white)"}
                borderRadius={"2%"}
            >
                <CardContainer>
                    <Card onClick={() => handleFormSelection("/dentista/cistoPatologico")}>
                        <Img src={CitologiaFormIcon} />
                        <p>Formulário CistoPatologico</p>
                    </Card>
                    <Card onClick={() => handleFormSelection("/dentista/odontoOsseo")}>
                        <Img src={OdontoOsseoIcon} /> 
                        <p>Formulário Ósseo Odontológico</p>
                    </Card>
                </CardContainer>
            </ContentContainer>
        </Layout>
    );
}

export default Forms;
