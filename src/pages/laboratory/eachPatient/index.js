import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { getPatientById } from "../../../services/laboratory/index";

const EachPatient = (props) => {
    const { id } = props.match.params; 
    const [paciente, setPaciente] = useState(null);

    useEffect(() => {
        getPatientById(id, (response) => {
            setPaciente(response.data);
        });
        
    }, []);

    if (!paciente) {
        return <div>Carregando informações do paciente...</div>;
    }


    const renderFormsPatient = paciente.map((eachFormPatient) => {
        console.log(eachFormPatient);
        const formElements = [];
        formElements.push(<div>{eachFormPatient.created_at}</div>)
        for (const [key, value] of Object.entries(eachFormPatient.form_values)) {
            if (value.length != 0) {
                console.log(key,value)
                formElements.push(
                    <div>

                    
                <div key={key}> {key}: {value}</div>
                    </div>
                );
            }
        }
        return formElements;
    });


 

    return (
        <Layout titlePage="Detalhes do Paciente">
         {renderFormsPatient}
        </Layout>
    );
};

export default EachPatient;
