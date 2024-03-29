import React, { useState, useEffect } from "react";
import ButtonPage from "../../../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../../../hooks/useFormOptions/index"
import { Option, SubtitleSection, TitleSectionForm } from "../../../../components/texts/index"
import { MakeSideContainer, ContentContainer } from "../../../../constants/containers/index";
import Layout from "../../../../components/layout";
import InputFile from "../../../../components/inputFile";
import { submitForm, listLabs, listPatient, getId } from "../../../../services/dentista/index"
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { isObjectEmpty } from '../../../../services/general/security'
import { CheckBox, TextArea } from "../../../../components/inputs/index";
import SelectBox from "../components/selectBox/index"

const FormOsseo = () => {
  const initialValues = Object.values(form.Form).reduce((acc, field) => {
    return { ...acc, [field.title]: [] };
  }, {});

  const [files, setFiles] = useState([]);

  const [Patients, setPatients] = useState([]);
  const [Labs, setLabs] = useState([]);
  const { value, onChangeHandler, clearForm, onChangeHandlerTextArea } = useFormOptions(initialValues);
  const [open, setOpen] = React.useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedLaboratory, setSelectedLaboratory] = useState(null);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

   useEffect(() => {
      (listLabs((response)=> {
        setLabs(Array.from(response.data));
        setSelectedLaboratory(Labs[0]);
      
      }));
      (listPatient((response)=> {
        setPatients(Array.from(response.data));
        setSelectedPatient(Patients[0])
      }));
    },[Labs,Patients]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(Array.from(selectedFiles));
  };
  
  

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

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  const handleLabChange = (e) => {
    setSelectedLaboratory(e.target.value);
  };

  const handleConfirmSubmit = () => {
    if ((selectedPatient !== null && selectedLaboratory !== null) && (selectedPatient.id !== undefined && selectedLaboratory.id !== undefined)) {
      submitForm(
        {
          file: files,
          patient_id: selectedPatient.id,
          lab_id: selectedLaboratory.id,
          form_id: 2,
          dentist_id: getId(),
          form_values: value
        },
        (response) => {
          if (response.status >= 200 && response.status <= 299) {
            handleOpenSuccessModal();
            clearForm();
            setFiles([]);
          } else {
            setTitle(response.data.errors);
            handleOpenError(true);
           }
         if(response.status >= 500){
           setTitle(`Erro ${ response.status }:Erro Interno de Servidor` );
           handleOpenError(true);
         }
        }
      );
    } else {
      setTitle("Erro ao selecionar o Paciente ou o Laboratorio");
      handleOpenError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isObjectEmpty(value)) {
      handleClickOpen();
    } else {
      setTitle("Preencha ao menos 1 campo!")
      handleOpenError();
    }
  }

  return (
    <Layout titlePage="Formulário Histopatológico Tecidos Duros">
      <ContentContainer
        backgroundColor={"var(--white)"}
        borderRadius={"2%"}
        style={{ padding: "2%", width: "70%" }}
      >
        <form onSubmit={handleSubmit}>
          <TitleSectionForm>Questionário de lesão intra-óssea odontológico:</TitleSectionForm>
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
            <SelectBox
                  options={Patients} 
                  value={selectedPatient}
                  onChange={handlePatientChange} 
                />
            <SelectBox
                  options={Labs}
                  value={selectedLaboratory} 
                  onChange={handleLabChange} 
                />
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
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
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

export default FormOsseo;
