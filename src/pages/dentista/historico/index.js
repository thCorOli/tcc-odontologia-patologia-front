import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { formHistoryCistoPat } from "../../../services/patient/index";
import EmptyHistory from "../patients/components/emptyPatient/index";
import ContentHistory from "../patients/components/contentPatient/index";
import LoadingHistory from "../patients/components/loadingPatient/index";
//import FirstLogin from "../firstLogin/index";
//import SemAcesso from "../semAcesso/index";
import { Subtitle } from "../../../components/texts";


const History = () => {
  const [History, setHistory] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  /*
    useEffect(() => {
      formHistoryCistoPat((response) => {
        //let graphData = response.data.user.forEach( (val) => Object.entries(val).forEach( (pair) => `${pair[0]}` in graph ? graph[`${pair[0]}`].push(pair[1]) : graph[`${pair[0]}`] = [pair[1]]) )
        setHistory(Array.from(response.data.user.reverse()));
      
      });
    }, []);
  */
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