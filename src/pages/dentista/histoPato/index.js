import React, { useState } from "react";
import ButtonPage from "../../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../../hooks/useFormOptions/index"
import { Option, SubtitleSection, TitleSectionForm } from "../../../components/texts/index"
import { MakeSideContainer, ContentContainer } from "../../../constants/containers/index";
import Layout from "../../../components/layout";
import InputFile from "../../../components/inputFile";
import { submitExam } from "../../../services/patient/index"
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { isObjectEmpty } from '../../../services/general/security'
import { CheckBox, TextArea } from "../../../components/inputs/index";


const FormHistoPato = () => {
  const initialValues = Object.values(form.Form).reduce((acc, field) => {
    return { ...acc, [field.title]: [] };
  }, {});
  let file = ''
  const handleFileChange = (event) => {
    file = event.target.files[0];
  };


  const { value, onChangeHandler, clearForm, onChangeHandlerTextArea } = useFormOptions(initialValues);
  const [open, setOpen] = React.useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedLaboratory, setSelectedLaboratory] = useState("");
  const [error, setError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModal(false);
    handleClose();
  }

  const handleOpenSuccessModal = () => {
    setSuccessModal(true);
  }

  const handleOpenError = () => {
    setError(true);
  }

  const handleCloseError = () => {
    setError(false);
  }

  const handleConfirmSubmit = () => {
    submitExam({ form_measurement: value, file, patient: selectedPatient, laboratory: selectedLaboratory }, (response) => {
      if (response.status >= 200 && response.status <= 299) {
        handleOpenSuccessModal();
        clearForm();
      } else {
        console.log(response.data.errors);
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isObjectEmpty(value)) {
      handleClickOpen();
    } else {
      handleOpenError();
    }
  }

  return (
    <Layout titlePage="Formulário HistoPatologico">
      <ContentContainer
        backgroundColor={"var(--white)"}
        borderRadius={"2%"}
        style={{ padding: "2%", width: "70%" }}
      >
        <form onSubmit={handleSubmit}>
          <TitleSectionForm>Tipo Material:</TitleSectionForm>
          {Object.values(form.Form).map((field) => (
            <div key={field.title}>
              <SubtitleSection>{field.title}:</SubtitleSection>
              <MakeSideContainer>
                {field.textarea ? (
                  <MakeSideContainer style={{ width: "100%" }}>
                    <TextArea
                      name={field.title}
                      value={value[field.title] || ''}
                      onChange={onChangeHandlerTextArea}
                    />
                  </MakeSideContainer>
                ) : (
                  field.options.map((option) => (
                    <MakeSideContainer key={option}>
                      <CheckBox
                        type="checkbox"
                        name={field.title}
                        value={option}
                        checked={value[field.title]?.includes(option) || false}
                        onChange={onChangeHandler}
                      />
                      <Option> {option} </Option>
                    </MakeSideContainer>
                  ))
                )}
              </MakeSideContainer>
            </div>
          ))}


          <InputFile onChange={handleFileChange} />
          <ButtonPage
            style={{ marginBottom: "2%" }}
            color="var(--medium-purple)"
            backgroundColor="var(--white)"
            hoverColor="var(--white)"
            hoverBackGround="var(--medium-purple)" >
            Enviar
          </ButtonPage>
        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Selecione Paciente e Laboratório</DialogTitle>
          <div>
            <div>
              <select
                value={selectedPatient}
                onChange={(e) => setSelectedPatient(e.target.value)}
              >
                <option value="patient1">Paciente 1</option >
                <option value="patient2">Paciente 2</option >
                {/* Adicione mais opções de paciente conforme necessário */}
              </select>
            </div>
            <div>
              <select
                value={selectedLaboratory}
                onChange={(e) => setSelectedLaboratory(e.target.value)}
              >
                <option value="lab1">Laboratório 1</option >
                <option value="lab2">Laboratório 2</option >
                {/* Adicione mais opções de laboratório conforme necessário */}
              </select>
            </div>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleConfirmSubmit} color="primary" autoFocus>
              Confirmar
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={successModal}
          onClose={handleCloseSuccessModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Formulário enviado com sucesso</DialogTitle>
          <DialogActions>
            <button onClick={handleCloseSuccessModal} color="primary" autoFocus>
              Ok
            </button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={error}
          onClose={handleCloseError}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Preencha ao menos 1 campo</DialogTitle>
          <DialogActions>
            <button onClick={handleCloseError} color="primary" autoFocus>
              Ok
            </button>
          </DialogActions>
        </Dialog>
      </ContentContainer>
    </Layout>
  );
}

export default FormHistoPato;
