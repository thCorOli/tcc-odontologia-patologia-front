import React, { useState, useEffect } from "react";
import { AlignContent } from "../../../../../constants/containers/index";
import { Text } from "../../../../../components/texts";
import ButtonPage from "../../../../../components/button/index";
import styled from "styled-components";
import {
  getAcceptedDoctors,
  SelectDoctorById,
} from "../../../../../services/index";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import { Subtitle } from "../../../../../components/texts/index";


const Card = styled.div`
  width: 70%;
  height: 91px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

const ButtonSizeCard = styled.div`
  width: 20%;

  @media screen and (max-width: 960px) {
    width: auto;
  }
`;

const SearchBar = styled.input`
  background-color: #e2e2e2;
  border: none;
  border-radius: 20px;
  height: 4vh;
  width: 30vw;
  font-size: 1.5rem;
  padding: 0 15px;
  outline: none;
  height: 50px;
`;

const ListDoctor = (props) => {
  const [DoctorsList, setDoctorsList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const history = useHistory();
  let setUser = props.setUser;
  let isMounted = props.mounted;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getAcceptedDoctors((response) => {
      if (isMounted) {
        setDoctorsList(Array.from(response.data.doctors));
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const [searchTerm, setSearchTerm] = React.useState("");

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const dynamicSearch = () => {
    return DoctorsList.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <AlignContent>
      {/* <Text>Digite o nome do médico abaixo para o selecionar:</Text> */}
      <div style={{ width: "75%", position: "absolute", marginTop: "2.1%", top: "15%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Subtitle>Selecione aqui o médico para o qual deseja permitir o acesso aos seus dados de saúde</Subtitle>
        <SearchBar onChange={editSearchTerm} placeholder="Pesquisar Médico" />
      </div>

      {searchTerm !== "" ? (
        dynamicSearch().map((eachDoctor) => (
          <Card key={eachDoctor.id}>
            <Text>{eachDoctor.name}</Text>
            <ButtonSizeCard>
              <ButtonPage
                onClick={() => {
                  const id = eachDoctor.id;
                  SelectDoctorById(id, (response) => {
                    if (response.status >= 200 && response.status <= 299) {
                      let token = JSON.parse(localStorage.getItem("user"))
                        .token;
                      localStorage.setItem(
                        "user",
                        JSON.stringify({
                          token: token,
                          patient: response.data.patient,
                        })
                      );
                      setUser(response.data);
                      setTitle("Medico Vinculado com Sucesso");
                      handleClickOpen();
                    } else {
                      setTitle(response.data.message);
                      handleClickOpen();
                    }
                  });
                }}
              >
                Selecionar
              </ButtonPage>
            </ButtonSizeCard>
          </Card>
        ))
      ) : (
          <div style={{ width: "45%" }}>
            <ButtonPage onClick={() => history.push("/naoAcheiMedico")}>Não achei meu médico</ButtonPage>
          </div>
        )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </AlignContent>
  );
};

export default ListDoctor;
