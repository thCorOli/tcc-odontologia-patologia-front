import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { formHistoryCistoPat } from "../../../services/dentista/index";
import EmptyHistory from "../patients/components/emptyPatient/index";
import ContentHistory from "../patients/components/contentPatient/index";
import LoadingHistory from "../patients/components/loadingPatient/index";
//import FirstLogin from "../firstLogin/index";
//import SemAcesso from "../semAcesso/index";
import { Subtitle } from "../../../components/texts";


const History = () => {
  const [History, setHistory] = useState([]);

    useEffect(() => {
      formHistoryCistoPat((response) => {
        setHistory(Array.from(response.data.user.reverse()));
      });
    }, []);
  return (
    <Layout titlePage="Histórico">
      {History === 0 ? (
        <LoadingHistory />
      ) : History.length === 0 ? (
        <EmptyHistory />
      ) : (
        <div>
          <Subtitle>Confira aqui o histórico de envio</Subtitle>
          <ContentHistory History={History} />
        </div>
    )}
        </Layout>
      );
};

      export default History;