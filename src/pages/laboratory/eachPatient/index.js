import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/index";
import "../../../constants/colors.css";
import { getPatientById } from "../../../services/laboratory/index";

const EachPatient = (props) => {
    const { id } = props.match.params; 
    const [forms, setForms] = useState(null);

    useEffect(() => {
        getPatientById(id, (response) => {
            setForms(response.data);
        });
        
    }, [id]);

    if (!forms) {
        return <div>Carregando informações do paciente...</div>;
    }
      
    const BdToDateElements = (dateElement) => {
        const date = new Date(dateElement);
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const fullDate = day + "/" + month + "/" + year;
        return fullDate;
    }

    const renderFormsPatient = forms.map((eachFormPatient) => {
        const formElements = [];
        formElements.push(<div>{BdToDateElements(eachFormPatient.created_at)}</div>)
        for (const [key, value] of Object.entries(eachFormPatient.form_values)) {
            if (value.length !== 0) {
                formElements.push(
                    <div>
                        <div key={key}> 
                            {key}: {value}
                        </div>
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
