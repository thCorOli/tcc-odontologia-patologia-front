import React from "react";
import { AlignContent } from "../../../../constants/containers/index";
import { Text } from "../../../../components/texts";
import "../../../../../components/loader/loader.css";

const LoadingHistory = () => {
  return (
    <AlignContent>
      <Text>Carregando...</Text>
      <div className="loader" />
    </AlignContent>
  );
};

export default LoadingHistory;
