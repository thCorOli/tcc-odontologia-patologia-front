import React from "react";
import { AlignContent } from "../../../../constants/containers/index";
import { Text } from "../../../../components/texts";
import Loader from "../../../../components/loader/index";

const LoadingHistory = () => {
  return (
    <AlignContent>
      <Text>Carregando...</Text>
      <Loader/>
    </AlignContent>
  );
};

export default LoadingHistory;
