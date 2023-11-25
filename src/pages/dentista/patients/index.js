import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { listPatient } from "../../../services/dentista/index";
import EmptyPatient from "./components/emptyPatient/index";
import ContentPatient from "./components/contentPatient/index";
import LoadingPatient from "./components/loadingPatient/index";
//import FirstLogin from "../firstLogin/index";
//import SemAcesso from "../semAcesso/index";
import { Subtitle } from "../../../components/texts";


const Patients = () => {
    const [Patients, setPatients] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));
    /*
      useEffect(() => {
        listPatient((response) => {
            setPatients(Array.from(response.data.user.reverse()));
        });
      }, []);
    */
    return (
        <Layout titlePage="Lista de pacientes">
            {Patients === 0 ? (
                <LoadingPatient />
            ) : Patients.length === 0 ? (
                <EmptyPatient />
            ) : (
                <div>
                    <Subtitle>Confira aqui os seus pacientes</Subtitle>
                    <ContentPatient Patients={Patients} />
                </div>
            )}
        </Layout>
    );
};

export default Patients;