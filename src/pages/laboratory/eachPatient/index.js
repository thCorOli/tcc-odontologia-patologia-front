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

    // Renderiza cada campo do paciente
    const renderPatientFields = () => {
        return Object.entries(paciente).map(([key, value]) => {
            if (typeof value === "object") {
                // Se for um objeto, iterar sobre suas propriedades
                return (
                    <div key={key}>
                        <strong>{key}:</strong>{" "}
                        {Object.entries(value).map(([subKey, subValue]) => (
                            <div key={subKey}>
                                <strong>{subKey}:</strong> {subValue}
                            </div>
                        ))}
                    </div>
                );
            } else {
                // Renderizar diretamente se for um valor primitivo
                return (
                    <div key={key}>
                        <strong>{key}:</strong> {value}
                    </div>
                );
            }
        });
    };

    return (
        <Layout titlePage="Detalhes do Paciente">
            <div>
                {renderPatientFields()}
            </div>
        </Layout>
    );
};

export default EachPatient;
