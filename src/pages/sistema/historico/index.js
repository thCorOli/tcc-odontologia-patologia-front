import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { MeasurementsHistory } from "../../../services/index";
import EmptyHistory from "./components/emptyHistory/index";
import ContentHistory from "./components/contentHistory/index";
import LoadingHistory from "./components/loadingHistory/index";
import FirstLogin from "../firstLogin/index";
import SemAcesso from "../semAcesso/index";
import { Subtitle } from "../../../components/texts";


const History = () => {
  const [History, setHistory] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));


  // useEffect(() => {
    
  // }, []);
  useEffect(() => {
    MeasurementsHistory((response) => {
      //let graphData = response.data.user.forEach( (val) => Object.entries(val).forEach( (pair) => `${pair[0]}` in graph ? graph[`${pair[0]}`].push(pair[1]) : graph[`${pair[0]}`] = [pair[1]]) )
      setHistory(Array.from(response.data.user.reverse()));
    
    });
  }, []);
  if (user && user.allowed !==false) {
    return (
      <Layout titlePage="Histórico">
        <Subtitle>Confira aqui o histórico das medidas, datas e os resultados dos exames fornecidos no formulário de exames e medidas</Subtitle>
        {History === 0 ? (
          <LoadingHistory />
        ) : History.length === 0 ? ( //when history is not 0 it means that there's response from server
          <EmptyHistory />
        ) : (
              //if history length > 0
              <ContentHistory History={History} />
            )}
      </Layout>
    );
  } else if (user && user.allowed === false) {
    return <FirstLogin />;
  } else return <SemAcesso />;
};

export default History;