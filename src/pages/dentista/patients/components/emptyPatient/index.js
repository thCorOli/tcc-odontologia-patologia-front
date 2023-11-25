import React from "react";
import { AlignContent } from "../../../../../constants/containers/index";
import { Text } from "../../../../../components/texts";

const EmptyHistory = () => {
  return (
    <AlignContent>
      <Text>Sem pacientes registrados</Text>
    </AlignContent>
  );
};

export default EmptyHistory;
