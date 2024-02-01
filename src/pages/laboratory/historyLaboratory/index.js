import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { Subtitle } from "../../../components/texts";


const HistoryLaboratory = () => {
  const [History, setHistory] = useState([]);
  
  /*
    useEffect(() => {
      formHistoryCistoPat((response) => {
        setHistory(Array.from(response.data.user.reverse()));
      });
    }, []);

    */
  return (
    <Layout titlePage="Histórico">
        </Layout>
    );
};

export default HistoryLaboratory;