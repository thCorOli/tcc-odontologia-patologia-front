import React, { useState } from "react";
import Layout from "../../../components/layout/index";
import SemAcesso from "../semAcesso/index";
import { Text, TextCard } from "../../../components/texts/index";
import { Card } from "./components/index";
import styled from "styled-components";
import "../../../constants/colors.css";
import ButtonPage from "../../../components/button/index";
import useID from "../../../hooks/formID/index";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import { PacientIdentifier } from "../../../services/index";

const RadioButton = styled.input`
`;

const CheckBoxButton = styled.input`
`;

const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7px 0;
    margin-bottom:25px;
`;

const RadioContainerInner = styled.div`
    padding: 3px 0;
    font-family:roboto condensed;
`;

const FormIdUser = () => {
    const history = useHistory();
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [open, setOpen] = React.useState(false);

    const [title, setTitle] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSuccess = () => {
        handleClose();
        history.push("/home/patient");
    };

    const { value, onChangeHandler } = useID({
        gender: "",
        civil_state: "",
        race: "",
        scholarity: "",
        pressure_measurement_device: "",
        high_pressure_medication: "",
        tabagism: "",
        cardiovascular_risk: "",
        alcool_consumption: "",
        has_below_diseases: "",
        uses_high_pressure_medication: "",
        dac_family_history: ""
    });

    const isEmpty = (value) => {
        if (
            value.gender === "" ||
            value.civil_state === "" ||
            value.race === "" ||
            value.scholarity === "" ||
            value.pressure_measurement_device === "" ||
            value.high_pressure_medication === "" ||
            value.tabagism === "" ||
            value.alcool_consumption === "" ||
            value.has_below_diseases === "" ||
            value.uses_high_pressure_medication === "" ||
            value.dac_family_history === "" ||
            value.cardiovascular_risk === "") {
            setTitle("Preencha todos os campos!");
            handleClickOpen();
            return false;
        } else return true;
    }

    if (user && user.allowed === false) {
        return (
            <Layout titlePage="Formulário de Identificação">
                <Card>
                    <form style={{ width: "100%" }} onSubmit={(e) => {
                        e.preventDefault();
                        if (isEmpty(value)) {
                            PacientIdentifier({ identifier: value }, (response) => {
                                if (response.status >= 200 && response.status <= 299) {
                                    setTitle("Formulário enviado com sucesso.");
                                    let userUpdate = JSON.parse(localStorage.getItem("user"));
                                    userUpdate.allowed = true;
                                    localStorage.setItem("user", JSON.stringify(userUpdate));
                                    handleClickOpen();
                                } else {
                                    setTitle(response.data.errors);
                                    handleClickOpen();
                                }
                            });
                        }

                    }}>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Sexo:</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="male" name="gender" value="1" />
                                <label for="male">Masculino</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="female" name="gender" value="2" />
                                <label for="female">Feminino</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="femaleTransgender" name="gender" value="3" />
                                <label for="femaleTransgender">Transgênero (sexo biológico feminino)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="maleTransgender" name="gender" value="4" />
                                <label for="maleTransgender">Transgênero (sexo biológico masculino)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed1" name="gender" value="5" />
                                <label for="notInformed1">Não quero informar</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Cor:</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="black" name="race" value="1" />
                                <label for="black">Preto</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="white" name="race" value="2" />
                                <label for="white">Branco</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="other" name="race" value="3" />
                                <label for="other">Não preto/Não branco</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed2" name="race" value="4" />
                                <label for="notInformed2">Não quero informar</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Estado Civil:</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="single" name="civil_state" value="1" />
                                <label for="single">Solteiro</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="married" name="civil_state" value="2" />
                                <label for="married">Casado/União Estável</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="divorced" name="civil_state" value="3" />
                                <label for="divorced">Divorciado</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="widow" name="civil_state" value="4" />
                                <label for="widow">Viúvo</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed3" name="civil_state" value="5" />
                                <label for="notInformed3">Não quero informar</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Escolaridade:</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="illiterate" name="scholarity" value="1" />
                                <label for="illiterate">Analfabeto</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="literate" name="scholarity" value="2" />
                                <label for="literate">Alfabetizado</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="fundamental" name="scholarity" value="3" />
                                <label for="fundamental">1° Grau (Fundamental)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="highSchool" name="scholarity" value="4" />
                                <label for="highSchool">2° Grau (Médio)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="graduate" name="scholarity" value="5" />
                                <label for="graduate">3° Grau (Formação Universitária/Técnico)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed4" name="scholarity" value="6" />
                                <label for="notInformed4">Não quero informar</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Medida da Pressão Arterial sentado:</Text>
                            <TextCard style={{ fontSize: '1rem', lineHeight: '1.25rem' }}>Qual é o aparelho usado para a medida da pressão?</TextCard>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="wristDevice" name="pressure_measurement_device" value="1" />
                                <label for="wristDevice">Aparelho automático de punho</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="armDevice" name="pressure_measurement_device" value="2" />
                                <label for="armDevice">Aparelho automático de braço</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="stethoscope" name="pressure_measurement_device" value="3" />
                                <label for="stethoscope">Aparelho aneroide (medida feita usando o estetoscópio)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="smartWatch" name="pressure_measurement_device" value="4" />
                                <label for="smartWatch">Dispositivo vestível (Apple ou Samsumg Watch)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="other2" name="pressure_measurement_device" value="6" />
                                <label for="other2">Outro</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Você tem algum dos fatores de risco abaixo?</Text>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="HDL" name="high_pressure_medication" />
                                <label for="HDL">HDL-Baixo</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="microalbuminuria" name="high_pressure_medication" />
                                <label for="microalbuminuria">Microalbuminuria</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="nothing" name="high_pressure_medication" />
                                <label for="nothing">Nenhuma</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Tabagismo:</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="never" name="tabagism" value="1" />
                                <label for="never">Nunca</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="lessFive" name="tabagism" value="2" />
                                <label for="lessFive">Parou {"<"} 5 anos</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="moreFive" name="tabagism" value="3" />
                                <label for="moreFive">Parou {">"}/= 5 anos</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="currently" name="tabagism" value="4" />
                                <label for="currently">Atualmente</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed5" name="tabagism" value="6" />
                                <label for="notInformed5">Não quero informar</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notKnow" name="tabagism" value="6" />
                                <label for="notKnow">Não sabe</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Você tem algum dos fatores de risco cardiovasculares abaixo?</Text>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="obesity" name="cardiovascular_risk" />
                                <label for="obesity">Sobrepeso/Obesidade</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="abdominal" name="cardiovascular_risk" />
                                <label for="abdominal">Obesidade Abdominal</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="HAS" name="cardiovascular_risk" />
                                <label for="HAS">Hipertensão Arterial Sistêmica</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="DM" name="cardiovascular_risk" />
                                <label for="DM">Diabetes (ou disglicemia)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="hipercolesterolemia" name="cardiovascular_risk" />
                                <label for="hipercolesterolemia">Hipercolesterolemia</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="hipertrigliceridemia" name="cardiovascular_risk" />
                                <label for="hipertrigliceridemia">Hipertrigliceridemia</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="sedentary" name="cardiovascular_risk" />
                                <label for="sedentary">Sedentarismo</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="nothing3" name="cardiovascular_risk" />
                                <label for="nothing3">Nenhuma</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Consumo de Álcool?</Text>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="never2" name="alcool_consumption" value="1" />
                                <label for="never2">Nunca</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="stop" name="alcool_consumption" value="2" />
                                <label for="stop">Passado, mas atualmente nunca</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="moderate" name="alcool_consumption" value="3" />
                                <label for="moderate">Consumo moderado({"<"}15mg/d Mulher; {"<"}30mg/d Homem)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="highConsume" name="alcool_consumption" value="4" />
                                <label for="highConsume">Consumo importante({">"}15mg/d Mulher; {">"}30mg/d Homem)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notInformed6" name="alcool_consumption" value="6" />
                                <label for="notInformed6">Não quero informar</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="radio" id="notKnow2" name="alcool_consumption" value="6" />
                                <label for="notKnow2">Não sabe</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Você teve alguma das doenças abaixo?</Text>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="AVC" name="has_below_diseases" />
                                <label for="AVC">AVC ou Ataque isquêmico transitório</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="heartAttack" name="has_below_diseases" />
                                <label for="heartAttack">Infarto agudo do miocárdio</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="cateterismo" name="has_below_diseases" />
                                <label for="cateterismo">Cateterismo com presença de obstrução em artérias coronárias</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="safena" name="has_below_diseases" />
                                <label for="safena">Cirurgia de revascularização miocárdica (ponte de safena)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="angioplastia" name="has_below_diseases" />
                                <label for="angioplastia">Angioplastia</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="cardiacInsufficiency" name="has_below_diseases" />
                                <label for="cardiacInsufficiency">Insuficiência cardíaca</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="hemo" name="has_below_diseases" />
                                <label for="hemo">Insuficiência renal ou necessidade de hemodiálise</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="aneurisma" name="has_below_diseases" />
                                <label for="aneurisma">Aneurisma de aorta</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="arteria" name="has_below_diseases" />
                                <label for="arteria">Doença arterial obstrutiva periférica (obstrução em artérias das pernas)</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="retinopatia" name="has_below_diseases" />
                                <label for="retinopatia">Retinopatia hipertensiva</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <CheckBoxButton type="checkbox" id="nothing2" name="has_below_diseases" />
                                <label for="nothing2">Nenhuma</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Você faz uso de medicamentos para pressão alta?</Text>
                            <RadioContainerInner>
                                <RadioButton type="Radio" id="yes" name="uses_high_pressure_medication" value="1" />
                                <label for="yes">Sim</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="Radio" id="no" name="uses_high_pressure_medication" value="0" />
                                <label for="no">Não</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <RadioContainer onChange={onChangeHandler}>
                            <Text style={{ fontSize: '1rem', lineHeight: '1rem' }}>Possui algum historico familiar de doença arterial coronariana?</Text>
                            <RadioContainerInner>
                                <RadioButton type="Radio" id="yes2" name="dac_family_history" value="1" />
                                <label for="yes2">Sim</label>
                            </RadioContainerInner>
                            <RadioContainerInner>
                                <RadioButton type="Radio" id="no2" name="dac_family_history" value="0" />
                                <label for="no2">Não</label>
                            </RadioContainerInner>
                        </RadioContainer>

                        <ButtonPage style={{ marginBottom: "20px" }} type={"submit"}>Entrar</ButtonPage>
                    </form>
                </Card>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                    <DialogActions>
                        {title === "Formulário enviado com sucesso." ? (
                            <Button onClick={handleSuccess} color="primary" autoFocus>
                                OK
                            </Button>
                        ) : (
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    OK
                                </Button>
                            )}
                    </DialogActions>
                </Dialog>
            </Layout>
        );
    } else {
        return <SemAcesso />;
    }
};
export default FormIdUser;
