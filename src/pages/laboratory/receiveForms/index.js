import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import EmptyPatients from "./components/emptyPatient/index";
import ContentPatients from "./components/contentPatient/index2";
import LoadingPatient from "./components/loadingPatient/index";
import { Subtitle } from "../../../components/texts";
import { getListForms, getPatientInfo } from "../../../services/laboratory/index";

const ReceiveForms = () => {
  const [patients, setPatients] = useState([]);
  const [patientsLoaded, setPatientsLoaded] = useState(false); // Novo estado para controlar se os pacientes foram carregados
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
  getListForms((response) => {
    const uniquePatients = {};
    response.data.forEach((form) => {
      if (!uniquePatients[form.patient_id]) {
        uniquePatients[form.patient_id] = form;
        getPatientInfo(form.patient_id, (patientResponse) => {
          setPatients(prevPatients => {
            const updatedPatients = prevPatients.map((patient) => {
              if (patient.id === form.patient_id) {
                return {
                  ...patient,
                  details: patientResponse.data, 
                };
              }
              return patient;
            });
            setPatientsLoaded(true);
            return updatedPatients;
          });
        });
      }
    });
    setPatients(Object.values(uniquePatients));
  });
}, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setIsSearching(true);
  };

  const handleSearchEnd = () => {
    setIsSearching(false);
  };

  console.log(patients.length);
  console.log(patientsLoaded)

  return (
    <Layout titlePage="Formulários Recebidos de pacientes">
      <input
        placeholder="Pesquisar por nome"
        value={searchTerm}
        onChange={handleSearchChange}
        onBlur={handleSearchEnd}
      />
      {!patientsLoaded ? ( // Verifica se os pacientes foram carregados
        <LoadingPatient />
      ) : (
        <>
          <Subtitle>Lista de formulários recebidos</Subtitle>
          {patients.length === 0 ? (
            <EmptyPatients />
          ) : (
            <ContentPatients
              patients={patients}
              isSearching={isSearching}
              searchTerm={searchTerm}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default ReceiveForms;
