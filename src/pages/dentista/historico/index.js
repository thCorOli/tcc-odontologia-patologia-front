import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { formHistoryCistoPat } from "../../../services/patient/index";
import EmptyHistory from "./components/emptyHistory/index";
import ContentHistory from "./components/contentHistory/index";
import LoadingHistory from "./components/loadingHistory/index";
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
    <Subtitle>Confira aqui o histórico de envio</Subtitle>
    {History === 0 ? (
      <LoadingHistory />
    ) : History.length === 0 ? (
      <EmptyHistory />
    ) : (
      <ContentHistory History={History} />
    )}
    </Layout>
  );
};

export default History;