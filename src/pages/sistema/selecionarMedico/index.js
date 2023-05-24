import React, { useState, useRef } from "react";
import Layout from "../../../components/layout/index";
import ListDoctor from "./components/listDoctor/index";
import DoctorPerfil from "./components/doctorPerfil/index";
import SemAcesso from "../semAcesso/index";
import FirstLogin from "../firstLogin/index";


const SelectDoctor = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const useMountedRef = useRef(null);

  if (user && user.allowed !== false) {
    return (
      <Layout titlePage="Selecionar Médico">
        {user.patient.doctor_id === null ? (
          <>
            <ListDoctor user={user} setUser={setUser} mounted={useMountedRef} />
          </>
        ) : (
            <DoctorPerfil user={user} setUser={setUser} mounted={useMountedRef} />
          )}

      </Layout>
    );
  } else if (user && user.allowed === false) {
    return <FirstLogin />;
  } else {
    return <SemAcesso />;
  }
};
export default SelectDoctor;
