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
import {fileToBase64} from "../../../../services/general/utils/utils";


const FormHistoPato = () => {
  const initialValues = Object.values(form.Form).reduce((acc, field) => {
    return { ...acc, [field.title]: [] };
  }, {});

  const [files, setFiles] = useState([]);

  const [Patients, setPatients] = useState([]);
  const [Labs, setLabs] = useState([]);
  const { value, onChangeHandler, clearForm, onChangeHandlerTextArea } = useFormOptions(initialValues);
  const [open, setOpen] = React.useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [selectedLaboratory, setSelectedLaboratory] = useState({});
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

   useEffect(() => {
      (listLabs((response)=> {
        setLabs(Array.from(response.data));
        setSelectedLaboratory(response.data[0] || '');
      }));
      (listPatient((response)=> {
        setPatients(Array.from(response.data));
        setSelectedPatient(response.data[0] || '');
      }));
    },[]);

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

  const transformFiles = async (files) => {
    try {
        const base64Array = await Promise.all(files.map(fileToBase64));
        return base64Array
    } catch (error) {
        console.error("Erro ao transformar arquivos:", error);
    }
};

  const objectControy = async () => {
    const base64Files = await transformFiles(files);
      const formSubmissionData = {
      form_submission: {
        files: base64Files,
        patient_id: selectedPatient.id,
        lab_id: selectedLaboratory.id,
        form_id: 1,
        dentist_id: getId(),
        form_values: value
      }
    };
    return formSubmissionData
  }

  const handleConfirmSubmit = async (e) => {
    try {
      const form_submission = await objectControy();
      
      if (selectedPatient !== null && selectedLaboratory !== null) {
        submitForm(form_submission, (response) => {
          if (response.status >= 200 && response.status <= 299) {
            handleOpenSuccessModal();
            clearForm();
            setFiles([]);
          } else {
            setTitle(`${response.status} : ${response.statusText}`);
            handleOpenError(true);
          }
          
          if(response.status >= 500){
            setTitle(`Erro ${response.status}: Erro Interno de Servidor`);
            handleOpenError(true);
          }
        });
      } else {
        setTitle("Erro ao selecionar o Paciente ou o Laboratorio");
        handleOpenError(true);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setTitle('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
      handleOpenError(true);
    }
  };  

    const validateForm = () => {
      if(isObjectEmpty(value)) {
        setTitle('Preencha ao menos 1 campo!');
        handleOpenError();
        return false;
      }
      return true;
    };

    const openConfirmationDialog = () => {
      handleClickOpen();
    };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
          openConfirmationDialog();
      }
  };

  return (
    <Layout titlePage="Formulário Citopatológico">
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

export default FormHistoPato;
