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
            setPatients(Array.from(response.data.reverse()));
        });
      }, []);
    

    const filteredPatients = Patients.filter((patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout titlePage="Lista de pacientes">
            <input placeholder="Pesquisar por nome"
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