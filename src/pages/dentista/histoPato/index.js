import React , {useState} from "react";
import Button from "../../../components/button/index";
import form from "./form.json"
import useFormOptions from "../../../hooks/useFormOptions/index"
import {Option, SubtitleSection, TitleSectionForm} from "../../../components/texts/index"
import { MakeSideContainer, ContentContainer } from "../../../constants/containers/index";
import Layout from "../../../components/layout";
import InputFile from "../../../components/inputFile";
import {submitExam} from "../../../services/patient/index"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import {isObjectEmpty} from '../../../services/general/security'
import {CheckBox} from "../../../components/inputs/index";


const FormHistoPato = () => {
    const initialValues = Object.values(form.Form).reduce((acc, field) => {
      return { ...acc, [field.title]: [] };
    }, {});
    let file = ''
    const handleFileChange = (event) => {
      file = event.target.files[0];
    };
  

    const { value, onChangeHandler,clearForm, onChangeHandlerTextArea } = useFormOptions(initialValues);
    const [open, setOpen] = React.useState(false);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleCloseModal = () => {
      setModal(false);
    }
  
    const handleOpenModal = () => {
      setModal(true);
    }

    return (
      <Layout titlePage="Formulário HistoPatologico">
      <ContentContainer
        backgroundColor={"var(--white)"}
        borderRadius={"2%"}
        style={{ padding: "2%", width: "70%" }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(value);
            clearForm();
            /*if (!isObjectEmpty(value)) {
              submitExam({ form_measurement: value, file }, (response) => {
                if (response.status >= 200 && response.status <= 299) {
                  setTitle("Formulário enviado com sucesso");
                  handleClickOpen();
                  clearForm();
                } else {
                  setTitle(response.data.errors);
                  handleClickOpen();
                }
              });
            } else {
              setTitle("Erro: Formulário vazio!");
              handleClickOpen();
              console.log(value);
            }*/
          }}
        >
          <TitleSectionForm>Tipo Material:</TitleSectionForm>
          {Object.values(form.Form).map((field) => (
  <div key={field.title}>
    <SubtitleSection>{field.title}:</SubtitleSection>
    <MakeSideContainer>
      {field.textarea ? (
        <MakeSideContainer>
          <textarea
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

            
            <InputFile onChange={handleFileChange}/>
            <Button 
              style={{ marginBottom: "2%"}} 
              color="var(--medium-purple)"
              backgroundColor="var(--white)"
              hoverColor="var(--white)" 
              hoverBackGround="var(--medium-purple)" >
                Enviar
            </Button>
          </form>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogActions>
            <button onClick={handleClose} color="primary" autoFocus>
                Ok
              </button>
            </DialogActions>
          </Dialog>
        </ContentContainer>
      </Layout>
    );
  }
  
  export default FormHistoPato;
  