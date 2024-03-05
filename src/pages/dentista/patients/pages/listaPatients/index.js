import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layout/index";
import "../../../../../constants/colors.css";
import EmptyPatient from "./components/emptyPatient/index";
import ContentPatient from "./components/contentPatient/index";
import LoadingPatient from "./components/loadingPatient/index";
import { Subtitle } from "../../../../../components/texts";
import {listPatient} from "../../../../../services/dentista/index"


const ListPatients = () => {
    const [Patients, setPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
  
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setIsSearching(true);
      };
    
      const handleSearchEnd = () => {
        setIsSearching(false);
      };
    
      useEffect(() => {
        listPatient((response) => {
            const sortedPatients = Array.from(response.data).sort((a, b) => {
                // Converta os nomes para minúsculas antes de comparar para garantir uma ordenação sem distinção entre maiúsculas e minúsculas
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
    
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setPatients(sortedPatients);
        });
    }, []);
    

    const filteredPatients = Patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.prontuario.includes(searchTerm) 
    );

    return (
        <Layout titlePage="Lista de pacientes">
            <input placeholder="Pesquisar por nome ou pelo prontuário"
            value={searchTerm}
            onChange={handleSearchChange}
            onBlur={handleSearchEnd}/>
            {Patients === 0 ? (
                <LoadingPatient />
            ) : Patients.length === 0 ? (
                <EmptyPatient />
            ) : (
                <div>
                    <Subtitle>Confira aqui os seus pacientes</Subtitle>
                    <ContentPatient Patients={filteredPatients} isSearching={isSearching} searchTerm={searchTerm}/>
                </div>
            )}
        </Layout>
    );
};

export default ListPatients;