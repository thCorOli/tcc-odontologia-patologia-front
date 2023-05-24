import React from "react";
import Layout from "../../../../components/layout/index";
import ButtonPage from "../../../../components/button/index";
import { ListCardContainer } from "../../../../constants/containers/index";
import { Text } from "../../../../components/texts/index";
import { Card, SizeButton } from "./components/index";
import {
  DownloadMeasurements,
  DownloadMedications,
} from "../../../../services/index";
import SemAcesso from "../../semAcesso/index";

const Export = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));

  const downloadMeasurements = (key) => {
    if (key === 1)
      DownloadMeasurements((response) => {
        if (response.status >= 299) {
          alert(response.message);
        }
      });
  };

  const downloadMedications = (key) => {
    if (key === 2)
      DownloadMedications((response) => {
        if (response.status >= 299) {
          alert("Erro no servidor");
        }
      });
  };

  if (admin) {
    return (
      <Layout titlePage="Exportar dados">
        <ListCardContainer>
          <Card>
            <Text>Exporta dados da Medição </Text>
            <SizeButton>
              <ButtonPage onClick={() => downloadMeasurements(1)}>
                Exportar
            </ButtonPage>
            </SizeButton>
          </Card>
          <Card>
            <Text>Exporta dados da Medicação </Text>
            <SizeButton>
              <ButtonPage onClick={() => downloadMedications(2)}>
                Exportar
            </ButtonPage>
            </SizeButton>
          </Card>
        </ListCardContainer>
      </Layout>
    );
  } else return <SemAcesso />;
};

export default Export;
