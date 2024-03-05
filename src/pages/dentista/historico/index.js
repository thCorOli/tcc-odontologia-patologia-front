import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import EmptyHistory from "./components/emptyHistory/index";
import ContentHistory from "./components/contentHistory/index";
import LoadingHistory from "./components/loadingHistory/index";
import { Subtitle } from "../../../components/texts";
import {getHistoryFormsPatient} from "../../../services/dentista/index";


const History = () => {
  const [History, setHistory] = useState([]);
  
    useEffect(() => {
      getHistoryFormsPatient((response) => {
        setHistory(Array.from(response.data.reverse()));
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
          <Subtitle>Confira aqui o histórico de submissão</Subtitle>
          <ContentHistory History={History} />
        </div>
    )}
        </Layout>
      );
};

export default History;