import React, { useState } from "react";
import Layout from "../../../components/layout/index";
import { ListCardContainer } from "../../../constants/containers/index";
import {ButtonContainer} from "./components/style";
import CardAccordion from "./components/CardAccordion";
import ButtonPage from "../../../components/button/index";
import {Subtitle} from "../../../components/texts/index";
import useForm from "../../../hooks/useForm/index";
import SemAcesso from "../semAcesso";
import { submitMeasurements } from "../../../services/index";
import "../../../components/loader/loader.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "./components/Select";
import {CreateImc,
subtract,
isEmpty,
validatePressure,
validatePressure40300,
validateHeight,
validateBetween30and200,
validateBetween50and200,
validateBetween10and50,
validateBetween10and60,
validateBetween100and200,
validateBetween100and400,
validateBetween10and100,
validateBetween20and100,
validateBetween2and10,
validateBetween2and20,
validateBetween50and400,
validateBetween50and999,
validateBetween3and10,
validateBetween40and999,
validateBetween5and20,
validateBetween30and50,
validateBetween80and100,
validateExam
} from "./validates";
import CardWith2Inputs from "./components/CardWith2Inputs";
import BackToTop from "../../../components/BackToTop/index";
import FirstLogin from "../firstLogin/index";
import Loader from "../../../components/loader/index";
import Mapa1 from "../../../assets/pdf/Mapa1.pdf";
import Mapa2 from "../../../assets/pdf/Mapa2.pdf";
import Mapa3 from "../../../assets/pdf/Mapa3.pdf";
import Mapa4 from "../../../assets/pdf/Mapa4.pdf";
import video from "../../../assets/videos/CircunferenciaAbdominal.mp4";

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


const Medicao = () => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(false);
  const [animationData, setAnimationData] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const {value,onChangeHandler,clearForm} = useForm({  
    pressureSistolica:"",
    pressureDiastolica:"",
    ppCalculado:"",
    weight:"",
    height:"",
    imc:"",
    waistCircumference:"",
    neckCircumference:"",
    hematocrit:"",
    hemoglobin:"",
    bloodGlucose:"",
    glycosylatedHemoglobin:"",
    totalCholesterol:"",
    LDL:"",
    HDL:"",
    triglycerides:"",
    sodium:"",
    potassium:"",
    uricAcid:"",
    urea:"",
    creatinine:"",
    ckdepi:"",
    vitaminD:"",
    mediaPas24h:"",
    mediaPad24h:"",
    mediaPasVigilia:"",
    mediaPadVigilia:"",
    mediaPasSono:"",
    mediaPadSono:"",
    descensoNoturnoPas:"",
    descensoNoturnoPad:"",
    mediaPas:"",
    mediaPad:"",
    massaVe:"",
    indiceMassaVe:"",
    medidaVeSistole:"",
    medidaVeDiastole:"",
    medidaSeptoInterventricular:"",
    medidaParedePosteriorVE:"",
    medidaAtrioEsquerdo:"",
    areaAtrioEsquerdo:"",
    medidaAorta:"",
    fracaoEjecaoVE:"",
    pasPeriferica:"",
    padPeriferica:"",
    ppPeriferica:"",
    pasCentral:"",
    padCentral:"",
    ppCentral:"",
    augmentationIndex:"",
    resistenciaVascular:"",
    indiceCardiaco:"",
    velocidadeOndaPulso:"",
    duracaoTotalPeriodoEsforco:"",
    totalMetAlcancado:"",
    pasRepouso:"",
    padRepouso:"",
    pasPicoEsforco:"",
    padPicoEsforco:"",
    deltaPas:"",
    deltaPad:"",
    deltaPasMet:"",
    deltaPadMet:"",
    fcRepouso:"",
    fcPicoEsforco:"",
    fcPrimeiroMinutoRecuperacao:"",
    indiceFuncaoCronotropica:"",
    heartRate:"",
    saturation:"",
    temperature:"",
    datePressureMax: "",
    datePressureMin:"",
    datePPCalculado: today,
    dateHeartRate: "",
    dateAbdominalCircumference: "",
    dateNeck: "",
    dateWeight: "",
    dateHeight: "",
    dateImc: today,
    dateHematrocito: "",
    dateHemoglobina: "",
    dateGlicemia: "",
    dateHemoglobinaG: "",
    dateColesterolT: "",
    dateLDL: "",
    dateHDL: "",
    dateTriglicerideos: "",
    dateSodio: "",
    datePotassio: "",
    dateUrico: "",
    dateUreia: "",
    dateCreatinina: "",
    dateCKDEPI: "",
    dateVitaminaD: "",
    dateMediaPAS24h: "",
    dateMediaPAD24h: "",
    dateMediaPASVigilia: "",
    dateMediaPADVigilia: "",
    dateMediaPASSono: "",
    dateMediaPADSono: "",
    dateDescensoNoturnoPAS: "",
    dateDescensoNoturnoPAD: "",
    dateMediaPAS: "",
    dateMediaPAD: "",
    dateMassaVE: "",
    dateIndiceMassaVE: "",
    dateMedidaVESistole: "",
    dateMedidaVEDiastole: "",
    dateMedidaSeptoInterventricular: "",
    dateMedidaParedePosteriorVE: "",
    dateMedidaAtrioEsq: "",
    dateAreaAtrioEsq: "",
    dateMedidaAorta: "",
    dateFraçãoEjeçãoVE: "",
    datePASperiférica: "",
    datePADperiférica: "",
    datePPperiférica: today,
    datePAScentral: "",
    datePADcentral: "",
    datePPCentral: today,
    dateAugmentationIndex: "",
    dateResistenciaVascular: "",
    dateÍndiceCardiaco: "",
    dateVelocidadeOndaPulso: "",
    dateDuracaoTotalPeriodoEsforço: "",
    dateTotalMETAlcançado: "",
    datePASRepouso: "",
    datePADRepouso: "",
    datePASPicoEsforço: "",
    datePADPicoEsforço: "",
    dateDeltaPas: today,
    dateDeltaPAD: today,
    dateDeltaPASMet: "",
    dateDeltaPADMet: "",
    dateFCRepouso: "",
    dateFCPicoEsforço: "",
    dateFCPrimeiroMinutoRe: "",
    dateErgometricoÍndiceCronotrópica: "",
    dateFunçãoCronotrópica: today,
    dateMapa: "",
    dateEco: "",
    dateMapaAop:"",
    dateErgometrico: "",
    dateSaturation: "",
    dateTemperature:"",
  })

    
  const form_measurement = [
      { id:1  ,value:value.pressureDiastolica, date: value.datePressureMax},
      { id:2  ,  value:value.pressureSistolica, date: value.datePressureMax},
      { id:3  ,  value:value.ppCalculado, date: value.datePPCalculado},
      { id:4  ,  value: value.weight, date: value.dateWeight},
      { id:5  ,  value: value.height, date: value.height},
      { id:6  ,  value:value.imc, date: value.dateImc },
      { id:7  ,  value: value.waistCircumference, date: value.dateAbdominalCircumference},
      { id:8  ,  value: value.neckCircumference, date: value.dateNeck},
      { id:9  ,  value:value.hematocrit , date: value.dateHematrocito},
      { id:10 , value:value.hemoglobin , date: value.dateHemoglobina},
      { id:11 , value:value.bloodGlucose , date: value.dateGlicemia},
      { id:12 , value:value.glycosylatedHemoglobin , date: value.dateHemoglobinaG},
      { id:13 , value:value.totalCholesterol , date: value.dateColesterolT},
      { id:14 , value:value.LDL , date: value.dateLDL},
      { id:15 , value:value.HDL , date: value.dateHDL},
      { id:16 , value:value.triglycerides , date: value.dateTriglicerideos},
      { id:17 , value:value.sodium , date: value.dateSodio},
      { id:18 , value:value.potassium , date: value.datePotassio},
      { id:19 , value:value.uricAcid , date: value.dateUrico},
      { id:20 , value:value.urea , date: value.dateUreia},
      { id:21 , value:value.creatinine , date: value.dateCreatinina},
      { id:22 , value:value.ckdepi , date: value.dateCKDEPI},
      { id:23 , value:value.vitaminD , date: value.dateVitaminaD},
      { id:24 , value:value.mediaPas24h , date: value.dateMapa},
      { id:25 , value:value.mediaPad24h , date: value.dateMapa},
      { id:26 , value:value.mediaPasVigilia , date: value.dateMapa},
      { id:27 , value:value.mediaPadVigilia , date: value.dateMapa},
      { id:28 , value:value.mediaPasSono, date: value.dateMapa},
      { id:29 , value:value.mediaPadSono , date: value.dateMapa},
      { id:30 , value:value.descensoNoturnoPas , date: value.dateMapa},
      { id:31 , value:value.descensoNoturnoPad , date: value.dateMapa},
      { id:32 , value:value.mediaPas , date: value.dateMediaPAD},
      { id:33 , value:value.mediaPad , date: value.dateMediaPAD},
      { id:34 , value:value.massaVe , date: value.dateEco},
      { id:35 , value:value.indiceMassaVe , date: value.dateEco},
      { id:36 , value:value.medidaVeSistole , date: value.dateEco},
      { id:37 , value:value.medidaVeDiastole , date: value.dateEco},
      { id:38 , value:value.medidaSeptoInterventricular , date: value.dateEco},
      { id:39 , value:value.medidaParedePosteriorVE , date: value.dateEco},
      { id:40 , value:value.medidaAtrioEsquerdo , date: value.dateEco},
      { id:41 , value:value.areaAtrioEsquerdo , date: value.dateEco},
      { id:42 , value:value.medidaAorta , date: value.dateEco},
      { id:43 , value:value.fracaoEjecaoVE , date: value.dateEco},
      { id:44 , value:value.pasPeriferica , date: value.dateMapaAop},
      { id:45 , value:value.padPeriferica , date: value.dateMapaAop},
      { id:46 , value:value.ppPeriferica , date: value.dateMapaAop},
      { id:47 , value:value.pasCentral , date: value.datePPCentral},
      { id:48 , value:value.padCentral , date: value.dateMapaAop},
      { id:49 , value:value.ppCentral , date: value.dateMapaAop},
      { id:50 , value:value.augmentationIndex , date: value.dateMapaAop},
      { id:51 , value:value.resistenciaVascular , date: value.dateMapaAop},
      { id:52 , value:value.indiceCardiaco , date: value.dateMapaAop},
      { id:53 , value:value.velocidadeOndaPulso , date: value.dateMapaAop},
      { id:54 , value:value.duracaoTotalPeriodoEsforco , date: value.dateErgometrico},
      { id:55 , value:value.totalMetAlcancado , date: value.dateErgometrico},
      { id:56 , value:value.pasRepouso , date: value.dateErgometrico},
      { id:57 , value:value.padRepouso , date: value.dateErgometrico},
      { id:58 , value:value.pasPicoEsforco , date: value.dateErgometrico},
      { id:59 , value:value.padPicoEsforco , date: value.dateErgometrico},
      { id:60 , value:value.deltaPas , date: value.dateDeltaPAD},
      { id:61 , value:value.deltaPad , date: value.dateDeltaPAD},
      { id:62 , value:value.deltaPasMet , date: value.dateErgometrico},
      { id:63 , value:value.deltaPadMet , date: value.dateErgometrico},
      { id:64 , value:value.fcRepouso , date: value.dateErgometrico},
      { id:65 , value:value.fcPicoEsforco , date: value.dateErgometrico},
      { id:66 , value:value.fcPrimeiroMinutoRecuperacao , date: value.dateErgometrico},
      { id:67 , value:value.indiceFuncaoCronotropica , date: value.dateFunçãoCronotrópica},
      { id:68 , value:value.heartRate, date: value.dateHeartRate},
      { id:69 , value:value.temperature, date:value.dateTemperature},
      { id:70 , value:value.saturation, date:value.dateSaturation}
  ];

  const MAPA = [
      { id:1 , value:value.mediaPas24h , date: value.dateMapa},
      { id:2 , value:value.mediaPad24h , date: value.dateMapa},
      { id:3 , value:value.mediaPasVigilia , date: value.dateMapa},
      { id:4 , value:value.mediaPadVigilia , date: value.dateMapa},
      { id:5 , value:value.mediaPasSono, date: value.dateMapa},
      { id:6 , value:value.mediaPadSono , date: value.dateMapa},
      { id:7 , value:value.descensoNoturnoPas , date: value.dateMapa},
      { id:8 , value:value.descensoNoturnoPad , date: value.dateMapa},
];


const MAPAAOP = [
  { id:44 , value:value.pasPeriferica , date: value.datePADperiférica},
  { id:45 , value:value.padPeriferica , date: value.datePADperiférica},
  { id:46 , value:value.ppPeriferica , date: value.datePPperiférica},
  { id:47 , value:value.pasCentral , date: value.datePADcentral},
  { id:48 , value:value.padCentral , date: value.datePADcentral},
  { id:49 , value:value.ppCentral , date: value.datePPCentral},
  { id:50 , value:value.augmentationIndex , date: value.dateAugmentationIndex},
  { id:51 , value:value.resistenciaVascular , date: value.dateResistenciaVascular},
  { id:52 , value:value.indiceCardiaco , date: value.dateÍndiceCardiaco},
  { id:53 , value:value.velocidadeOndaPulso , date: value.dateVelocidadeOndaPulso},
];

const ECO = [
      { id: 1 , value:value.massaVe , date: value.dateMassaVE},
      { id: 2, value:value.indiceMassaVe , date: value.dateIndiceMassaVE},
      { id: 3, value:value.medidaVeSistole , date: value.dateMedidaVESistole},
      { id: 4, value:value.medidaVeDiastole , date: value.dateMedidaVEDiastole},
      { id: 5, value:value.medidaSeptoInterventricular , date: value.dateMedidaSeptoInterventricular},
      { id: 6, value:value.medidaParedePosteriorVE , date: value.dateMedidaParedePosteriorVE},
      { id: 7, value:value.medidaAtrioEsquerdo , date: value.dateMedidaAtrioEsq},
      { id: 8, value:value.areaAtrioEsquerdo , date: value.dateAreaAtrioEsq},
      { id: 9, value:value.medidaAorta , date: value.dateMedidaAorta},
      { id: 10, value:value.fracaoEjecaoVE , date: value.dateFraçãoEjeçãoVE},
];

const ERGOMETRICO = [
      { id: 1, value:value.duracaoTotalPeriodoEsforco , date: value.dateDuracaoTotalPeriodoEsforço},
      { id: 2, value:value.totalMetAlcancado , date: value.dateTotalMETAlcançado},
      { id: 3, value:value.pasRepouso , date: value.datePASRepouso},
      { id: 4, value:value.padRepouso , date: value.datePADRepouso},
      { id: 5, value:value.pasPicoEsforco , date: value.datePADPicoEsforço},
      { id: 6, value:value.padPicoEsforco , date: value.datePADPicoEsforço},
      { id: 7, value:value.deltaPas , date: value.dateDeltaPas},
      { id: 8, value:value.deltaPad , date: value.dateDeltaPAD},
      { id: 9, value:value.deltaPasMet , date: value.dateDeltaPADMet},
      { id: 10, value:value.deltaPadMet , date: value.dateDeltaPADMet},
      { id: 11, value:value.fcRepouso , date: value.dateFCRepouso},
      { id: 12, value:value.fcPicoEsforco , date: value.dateFCPicoEsforço},
      { id: 13, value:value.fcPrimeiroMinutoRecuperacao , date: value.dateFCPrimeiroMinutoRe},
      { id: 14, value:value.indiceFuncaoCronotropica , date: value.dateFCPrimeiroMinutoRe},
];

  const removeEmpty = (vetor) => {      
    Object.keys(vetor).forEach((key) =>{
      if((vetor[key].value === "" || vetor[key].value  === 0) || vetor[key].date === "")  delete vetor[key]
    });
  };

  let user = JSON.parse(localStorage.getItem("user"));

  value.imc = CreateImc(value.height,value.weight);
  value.ppCalculado = subtract(value.pressureSistolica,value.pressureDiastolica);
  value.ppPeriferica = subtract(value.pasPeriferica,value.padPeriferica);
  value.ppCentral = subtract(value.pasCentral,value.padCentral);
  value.deltaPas = subtract(value.pasRepouso,value.pasPicoEsforco);
  value.deltaPad = subtract(value.padRepouso,value.padPicoEsforco)
  value.indiceFuncaoCronotropica = subtract(value.fcPicoEsforco,value.fcPrimeiroMinutoRecuperacao);

  if (user && user.allowed !==false) {
    return (
      <Layout titlePage="Formulário de Exames e Medidas">
        <Subtitle>Preencha aqui com as medidas, data e os resultados dos exames realizados</Subtitle>
        <Select/>
        <ListCardContainer>
          <form
            style={{
              width: "100%",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              if(!isEmpty(form_measurement)){
                if(validatePressure(value.pressureSistolica,value.pressureDiastolica,"Pressão Diastolica","Pressão Sistolica",value.datePressureMax)&&
                validatePressure40300(value.mediaPad,value.mediaPas,"Media PAD","Media PAS",value.dateMapa) &&
                validatePressure40300(value.mediaPadVigilia,value.mediaPasVigilia,"Media Pad Vigilia","Media Pas Vigilia",value.dateMapa) &&
                validatePressure40300(value.mediaPadSono,value.mediaPasSono,"Media Pad Sono","Media Pas Sono",value.dateMapa)&&
                validateHeight(value.height,value.dateHeight)&&
                validateBetween30and200(value.heartRate,value.dateHeartRate,"Frequência Cardíaca")&&
                validateBetween30and200(value.fcPicoEsforco,value.dateFCPicoEsforço,"Frequência Cardíaca no Pico de Esforço") &&
                validateBetween30and200(value.fcPrimeiroMinutoRecuperacao,value.dateFCPrimeiroMinutoRe,"Frequência Cardíaca no Primeiro Minuto")&&
                validateBetween30and200(value.fcRepouso,value.dateFCRepouso,"Frequência Cardíaca no Repouso")&&
                validateBetween50and200(value.waistCircumference,value.dateAbdominalCircumference,"Circunferencia Abdominal")&&
                validateBetween10and50(value.neckCircumference,value.dateNeck,"Cirunferencia do Pescoço")&&
                validateBetween10and60(value.hematocrit,value.dateHematrocito,"Hematrocito")&&
                validateBetween40and999(value.bloodGlucose,value.dateGlicemia,"Glicemia")&&
                validateBetween100and400(value.totalCholesterol,value.dateColesterolT,"Colesterol Total") &&
                validateBetween50and400(value.LDL,value.dateLDL,"LDL")&&
                validateBetween20and100(value.HDL,value.dateHDL,"HDL")&&
                validateBetween50and999(value.triglycerides,value.dateTriglicerideos,"Triglicerideos")&&
                validateBetween100and200(value.sodium,value.dateSodio,"Sódio") &&
                validateBetween2and10(value.potassium,value.datePotassio,"Potássio")&&
                validateBetween2and20(value.urea,value.dateUreia,"Ureia")&&
                validateBetween10and100(value.vitaminD,value.dateVitaminaD,"Vitamina D")&&
                validateBetween3and10(value.glycosylatedHemoglobin,value.dateHemoglobinaG,"Hemoglina Glicolisada")&&
                validateBetween5and20(value.hemoglobin,value.dateHemoglobina,"Hemoglonima") &&
                validateBetween30and50(value.temperature,value.dateTemperature,"Temperatura") &&
                validateBetween80and100(value.saturation,value.dateSaturation,"Saturação") &&
                validateExam(MAPA,"MAPA") &&
                validateExam(MAPAAOP,"MAPA AOP") &&
                validateExam(ERGOMETRICO,"Teste Ergométrico") &&
                validateExam(ECO,"ECO")
                ){
                  removeEmpty(form_measurement);
                  setAnimationData(true);
                  submitMeasurements({form_measurement},(response)=>{
                    
                    if(response.status >= 200 && response.status <= 299){
                      setTitle("Medição enviada com sucesso.");
                      handleClickOpen();
                      clearForm();
                      setAnimationData(false);
                    }
                    else {
                      setTitle(response.errors);
                      setAnimationData(false);
                    }
                  })
                }
              }
              
            }}
          >
            <CardWith2Inputs
            name1={"pressureSistolica"}
            value1={value.pressureSistolica}
            name2={"pressureDiastolica"}
            value2={value.pressureDiastolica}
            date={value.datePressureMax}
            nameDate={"datePressureMax"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Pressão Arterial (mmHg)"}
            fieldName={"Pressão Arterial"}
            onChangeHandler={onChangeHandler}
            id="pressao"
            />
            <div id="circunferenciaAbdominal"/>  
            <CardAccordion
              id="circunferenciaAbdominal"
              value={value.waistCircumference}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"waistCircumference"}
              name={"Circunferência Abdominal"}
              text={"Circunferência Abdominal (cm)"}
              type={"number"}
              date={value.dateAbdominalCircumference}
              nameDate={"dateAbdominalCircumference"}
              video={video}
            />
            <div id="pescoço"/>  
            <CardAccordion
              id="pescoço"
              value={value.neckCircumference}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"neckCircumference"}
              name={"Circunferência do Pescoço"}
              text={"Circunferência do Pescoço (cm)"}
              type={"number"}
              date={value.dateNeck}
              nameDate={"dateNeck"}
            />

            <CardAccordion
            value={value.saturation}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"saturation"}
            name={"Saturação"}
            text={"Saturação em SO²"}
            type={"number"}
            date={value.dateSaturation}
            nameDate={"dateSaturation"}
            />

            <CardAccordion
            value={value.temperature}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 34"}
            fieldName={"temperature"}
            name={"Temperatura"}
            text={"Temperatura em °C"}
            type={"number"}
            date={value.dateTemperature}
            nameDate={"dateTemperature"}
            />

            <div id="peso"/>  
            <CardAccordion
              id="peso"
              value={value.weight}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80kg"}
              fieldName={"weight"}
              name={"Peso"}
              text={"Peso (Kg)"}
              type={"number"}
              date={value.dateWeight}
              nameDate={"dateWeight"}
            />
            <div id="altura"/>  
            <CardAccordion
              value={value.height}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 1,60 m"}
              fieldName={"height"}
              name={"Altura"}
              text={"Altura (m)"}
              type={"number"}
              id="altura"
              date={value.dateHeight}
              nameDate={"dateHeight"}
            />
            <div id="imc"/>  
            <CardAccordion
              id="imc"
              value={value.imc}
              fieldName={"imc"}
              name={"IMC"}
              text={"IMC"}
              date={value.dateImc}
              nameDate={"dateImc"}
              readOnly={true}
            />

            <div id="frequencia"></div>
            <CardAccordion
            id="fc"
            value={value.heartRate}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"heartRate"}
            name={"Frequência Cardíaca"}
            text={"Frequência Cardíaca"}
            type={"number"}
            date={value.dateHeartRate}
            nameDate={"dateHeartRate"}
            />
              
             
            <div id="hematrocito"/>  
            <CardAccordion
              id="hematrocito"
              value={value.hematocrit}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"hematocrit"}
              name={"Hematócrito"}
              text={"Hematócrito"}
              type={"number"}
              date={value.dateHematrocito}
              nameDate={"dateHematrocito"}
            />
            <div id="hemoglobina"/>  
            <CardAccordion
              id="hemoglobina"
              value={value.hemoglobin}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"hemoglobin"}
              name={"Hemoglobina"}
              text={"Hemoglobina"}
              type={"number"}
              date={value.dateHemoglobina}
              nameDate={"dateHemoglobina"}
            />
            <div id="glicemia"/>  
            <CardAccordion
              id="glicemia"
              value={value.bloodGlucose}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"bloodGlucose"}
              name={"Glicemia"}
              text={"Glicemia"}
              type={"number"}
              date={value.dateGlicemia}
              nameDate={"dateGlicemia"}
            />
            <div id="hemoglobinaG"/>  
            <CardAccordion
              id="hemoglobinaG"
              value={value.glycosylatedHemoglobin}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"glycosylatedHemoglobin"}
              name={"Hemoglobina Glicosilada"}
              text={"Hemoglobina Glicosilada"}
              type={"number"}
              date={value.dateHemoglobinaG}
              nameDate={"dateHemoglobinaG"}
            />
            <div id="colesterolTotal"/>  
            <CardAccordion
              id="colesterolTotal"
              value={value.totalCholesterol}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"totalCholesterol"}
              name={"Colesterol Total"}
              text={"Colesterol Total"}
              type={"number"}
              date={value.dateColesterolT}
              nameDate={"dateColesterolT"}
            />
            <div id="LDL"/>  
            <CardAccordion
              id="ldl"
              value={value.LDL}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"LDL"}
              name={"LDL"}
              text={"LDL"}
              type={"number"}
              date={value.dateLDL}
              nameDate={"dateLDL"}
            />
            <div id="HDL"/>  
            <CardAccordion
              id="HDL"
              value={value.HDL}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"HDL"}
              name={"HDL"}
              text={"HDL"}
              type={"number"}
              date={value.dateHDL}
              nameDate={"dateHDL"}
            />
            <div id="triglicerideos"/>  
            <CardAccordion
              id="triglicerideos"
              value={value.triglycerides}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"triglycerides"}
              name={"Triglicerídeos"}
              text={"Triglicerídeos"}
              type={"number"}
              date={value.dateTriglicerideos}
              nameDate={"dateTriglicerideos"}
            />
            <div id="sodio"/>  
            <CardAccordion
              id="sodio"
              value={value.sodium}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"sodium"}
              name={"Sódio"}
              text={"Sódio"}
              type={"number"}
              date={value.dateSodio}
              nameDate={"dateSodio"}
            />
            <div id="potassio"/>  
            <CardAccordion
              id="potassio"
              value={value.potassium}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"potassium"}
              name={"Potássio"}
              text={"Potássio"}
              type={"number"}
              date={value.datePotassio}
              nameDate={"datePotassio"}
            />
            <div id="acidoUrico"/>  
            <CardAccordion
              id="acidoUrico"
              value={value.uricAcid}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"uricAcid"}
              name={"Ácido úrico"}
              text={"Ácido úrico"}
              type={"number"}
              date={value.dateUrico}
              nameDate={"dateUrico"}
            />
            <div id="ureia"/>  
            <CardAccordion
              id="ureia"
              value={value.urea}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"urea"}
              name={"Ureia"}
              text={"Ureia"}
              type={"number"}
              date={value.dateUreia}
              nameDate={"dateUreia"}
            />
            <div id="creatinina"/>  
            <CardAccordion
              id="creatinina"
              value={value.creatinine}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"creatinine"}
              name={"Creatinina"}
              text={"Creatinina"}
              type={"number"}
              date={value.dateCreatinina}
              nameDate={"dateCreatinina"}
            />

            <div id="vitaminaD"/>  
            <CardAccordion
              id="vitaminaD"
              value={value.vitaminD}
              date={value.dateVitaminaD}
              nameDate={"dateVitaminaD"}
              onChangeHandler={onChangeHandler}
              placeholder={"Ex 80"}
              fieldName={"vitaminD"}
              name={"Vitamina D"}
              text={"Vitamina D"}
              type={"number"}
            />

            <div id="MAPA"/>  
            <CardWith2Inputs
            id="MAPA"
            name1={"mediaPad24h"}
            value1={value.mediaPad24h}
            name2={"mediaPas24h"}
            value2={value.mediaPas24h}
            date={value.dateMapa}
            nameDate={"dateMapa"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Média Pressão Arterial em 24 horas(mmHg)"}
            fieldName={"MAPA: média da Pressão Arterial em 24 horas"}
            onChangeHandler={onChangeHandler}
            Mapa={Mapa1}
            />
           
         
            <CardWith2Inputs
            id="vigilia"
            name1={"mediaPadVigilia"}
            value1={value.mediaPadVigilia}
            name2={"mediaPasVigilia"}
            value2={value.mediaPasVigilia}
            date={value.dateMapa}
            nameDate={"dateMapa"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            fieldName={"MAPA: média da Pressão Arterial Vigilia"}
            text={"Média da Pressão Arterial Vigilia (mmHg)"}
            onChangeHandler={onChangeHandler}
            Mapa={Mapa2}
            />
        
            <CardWith2Inputs
            id="mediaSono "
            name1={"mediaPasSono"}
            value1={value.mediaPasSono}
            name2={"mediaPadSono"}
            value2={value.mediaPadSono}
            date={value.dateMapa}
            nameDate={"dateMapa"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Média da Pressão Arterial durante o sono(mmHg)"}
            fieldName={"MAPA: média da Pressão Arterial durante o sono"}
            onChangeHandler={onChangeHandler}
            Mapa={Mapa3}
            />
          
            <CardWith2Inputs
            id="descenso"
            name1={"descensoNoturnoPad"}
            value1={value.descensoNoturnoPad}
            name2={"descensoNoturnoPas"}
            value2={value.descensoNoturnoPas}
            date={value.dateMapa}
            nameDate={"dateMapa"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Descenso Noturno da Pressão Arterial (mmHg)"}
            fieldName={"MAPA: descenso Noturno Arterial"}
            onChangeHandler={onChangeHandler}
            Mapa={Mapa4}
            />
          
          <div id="MRPA"/>  
          <CardWith2Inputs
            id="MRPA"
            name1={"mediaPad"}
            value1={value.mediaPad}
            name2={"mediaPas"}
            value2={value.mediaPas}
            date={value.dateMediaPAD}
            nameDate={"dateMediaPAD"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Média da Pressão Arterial (mmHg)"}
            fieldName={"MRPA: média da Pressão Arterial"}
            onChangeHandler={onChangeHandler}
            />
          
            <div id="ECO"/>            
            <CardAccordion
            id="ECO"
            value={value.massaVe}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"massaVe"}
            name={"ECO: massa VE"}
            text={"Massa VE"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

            <CardAccordion
            id="indiceMassaVe"
            value={value.indiceMassaVe}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"indiceMassaVe"}
            name={"ECO: índice massa VE"}
            text={"Indice Massa VE"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />
          
            <CardAccordion
            id="medidaVe"
            value={value.medidaVeSistole}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaVeSistole"}
            name={"ECO: medida VE sístole"}
            text={"Medida VE sístole"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />
            <CardAccordion
            value={value.medidaVeDiastole}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaVeDiastole"}
            name={"ECO: medida VE diástole"}
            text={"Medida VE diástole"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />
            <CardAccordion
            id="medidaSeptoInterventricular"
            value={value.medidaSeptoInterventricular}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaSeptoInterventricular"}
            name={"ECO: medida do Septo Interventricular"}
            text={"Medida do Septo Interventricular"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

          <CardAccordion
            id="medidaParedePosterior"
            value={value.medidaParedePosteriorVE}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaParedePosteriorVE"}
            name={"ECO: medida Parede Posterior VE"}
            text={"Medida Parede Posterior VE"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

          <CardAccordion
            id="medidaAtrioEsquerdo"
            value={value.medidaAtrioEsquerdo}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaAtrioEsquerdo"}
            name={"ECO: medida do Átrio Esquerdo"}
            text={"Medida do Átrio Esquerdo"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

          <CardAccordion
            id="areaAtrioEsquerdo"
            value={value.areaAtrioEsquerdo}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"areaAtrioEsquerdo"}
            name={"ECO: área do átrio esquerdo"}
            text={"Área do átrio esquerdo"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

            <CardAccordion
            id="medidaAorta"
            value={value.medidaAorta}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"medidaAorta"}
            name={"ECO: medida da Aorta"}
            text={"Medida da Aorta"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />
          <CardAccordion
            id="fraçãoEjeçãoVE"
            value={value.fracaoEjecaoVE}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"fracaoEjeçãoVE"}
            name={"ECO: fração Ejeção VE"}
            text={"Fração Ejeção VE"}
            type={"number"}
            date={value.dateEco}
            nameDate={"dateEco"}
          />

        <div id="mapaAop"></div>
        <CardWith2Inputs
            name1={"pasPeriferica"}
            value1={value.pasPeriferica}
            name2={"padPeriferica"}
            value2={value.padPeriferica}
            date={value.datePADperiférica}
            nameDate={"datePADperiférica"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Pressão Arterial Periférica(mmHg)"}
            fieldName={"MAPA AOP: pressão Arterial Periférica"}
            onChangeHandler={onChangeHandler}
            />

          <CardAccordion
            id="ppPeriferica"
            value={value.ppPeriferica}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"ppPeriferica"}
            name={"MAPA AOP: pp periférica"}
            text={"PP periférica"}
            type={"number"}
            date={value.datePPperiférica}
            nameDate={"datePPperiférica"}
          />
    
          <CardWith2Inputs
            id="pressaoCentral"
            name1={"pasCentral"}
            value1={value.pasCentral}
            name2={"padCentral"}
            value2={value.padCentral}
            date={value.datePADcentral}
            dateName={"datePADcentral"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Pressão Arterial Central(mmHg)"}
            fieldName={"MAPA AOP: pressão Arterial Central"}
            onChangeHandler={onChangeHandler}
          />

          <CardAccordion
            value={value.ppCentral}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"ppCentral"}
            name={"MAPA AOP: pp Central"}
            text={"PP Central"}
            type={"number"}
            date={value.datePPCentral}
            nameDate={"datePPCentral"}
          />

          <CardAccordion
            value={value.augmentationIndex}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"augmentationIndex"}
            name={"MAPA AOP: augmentation Index"}
            text={"Augmentation Index"}
            type={"number"}
            date={value.dateAugmentationIndex}
            nameDate={"dateAugmentationIndex"}
          />

          <CardAccordion
            id="resistenciaVascular"
            value={value.resistenciaVascular}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"resistenciaVascular"}
            name={"MAPA AOP: resistência vascular"}
            text={"Resistência vascular"}
            type={"number"}
            date={value.dateResistenciaVascular}
            nameDate={"dateResistenciaVascular"}
          />
          
          <CardAccordion
            id="indiceCardiaco"
            value={value.indiceCardiaco}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"indiceCardiaco"}
            name={"MAPA AOP: índice cardíaco"}
            text={"Índice Cardiaco"}
            type={"number"}
            date={value.dateÍndiceCardiaco}
            nameDate={"dateÍndiceCardiaco"}
            />

            <CardAccordion
            id="velocidadeOndaPulso"
            value={value.velocidadeOndaPulso}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"velocidadeOndaPulso"}
            name={"MAPA AOP: velocidade da Onda do Pulso"}
            text={"Velocidade da Onda do Pulso"}
            type={"number"}
            date={value.dateVelocidadeOndaPulso}
            nameDate={"dateVelocidadeOndaPulso"}
            />

          <div id="testeErgometrico"/>
          <CardAccordion
            id="testeErgometrico"
            value={value.duracaoTotalPeriodoEsforco}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"duracaoTotalPeriodoEsforco"}
            name={"Teste Ergométrico: duração Total do Periodo de Esforço"}
            text={"Duração Total do Periodo de Esforço"}
            type={"number"}
            date={value.dateErgometrico}
            dateName={"dateErgometrico"}
            />
            
          <CardAccordion
            id="totalMetAlcancado"
            value={value.totalMetAlcancado}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"totalMetAlcancado"}
            name={"Teste Ergométrico: total MET Alcançado"}
            text={"Total MET Alcançado"}
            type={"number"}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            />
            
      
            <CardWith2Inputs
            id="pressaoRepouso"
            name1={"pasRepouso"}
            value1={value.pasRepouso}
            name2={"padRepouso"}
            value2={value.padRepouso}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Pressão Arterial em Repouso(mmHg)"}
            fieldName={"Teste Ergométrico: pressão Arterial em Repouso"}
            onChangeHandler={onChangeHandler}
            />    
        
            <CardWith2Inputs
            id="pressaoPicoEsforco"
            name1={"padPicoEsforco"}
            value1={value.padPicoEsforco}
            name2={"pasPicoEsforco"}
            value2={value.pasPicoEsforco}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Pressão Arterial no Pico de Esforço(mmHg)"}
            fieldName={"Teste Ergométrico: pressão Arterial no Pico de Esforço"}
            onChangeHandler={onChangeHandler}
            />
            
            <CardWith2Inputs
            id="delta"
            name1={"deltaPad"}
            value1={value.deltaPad}
            name2={"deltaPas"}
            value2={value.deltaPas}
            date={value.dateErgometrico}
            dateName={"dateErgometrico"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Delta da Pressão Arterial(mmHg)"}
            fieldName={"Teste Ergométrico: delta da Pressão Arterial"}
            onChangeHandler={onChangeHandler}
            />

            <CardAccordion
            id="fcRepouco"
            value={value.fcRepouso}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"FCRepouso"}
            name={"Teste Ergométrico: frêquencia cardíaca Repouso"}
            text={"Frêquencia Cardíaca Repouso"}
            type={"number"}
            date={value.dateErgometrico}
            dateName={"dateErgometrico"}
            />

            <CardAccordion
            id="fcPicoEsforco"
            value={value.fcPicoEsforco}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"fcPicoEsforco"}
            name={"Teste Ergométrico: frêquencia cardíaca no Pico de Esforço "}
            text={"Frêquencia Cardíaca no Pico de Esforço "}
            type={"number"}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            />

            <CardAccordion
            id="fcPrimeiroMinuto"
            value={value.fcPrimeiroMinutoRecuperacao}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"fcPrimeiroMinutoRecuperacao"}
            name={"Teste Ergométrico: frêquencia cardíaca no Primeiro Minuto"}
            text={"Frêquencia Cardíaca no Primeiro Minuto"}
            type={"number"}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            />

            <CardAccordion
            id="indiceFuncaoCronotropica"
            value={value.indiceFuncaoCronotropica}
            onChangeHandler={onChangeHandler}
            placeholder={"Ex 80"}
            fieldName={"indiceFuncaoCronotropica"}
            name={"Teste Ergométrico: função Cronotrópica"}
            text={"Função Cronotrópica"}
            type={"number"}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            />
          
          <CardWith2Inputs
            id="deltaMet"
            name1={"deltaPadMet"}
            value1={value.deltaPadMet}
            name2={"deltaPasMet"}
            value2={value.deltaPasMet}
            date={value.dateErgometrico}
            nameDate={"dateErgometrico"}
            placeholder1={"Ex:120"}
            placeholder2={"Ex:80"}
            text={"Delta da Pressão Arterial MET(mmHg)"}
            fieldName={"Teste Ergométrico: delta da Pressão Arterial MET"}
            onChangeHandler={onChangeHandler}
            />


            <BackToTop />

            {animationData === true ? (
              <Loader/>
            ) : (
                <div></div>
              )}
            <ButtonContainer>
              <ButtonPage>Enviar</ButtonPage>
            </ButtonContainer>
          </form>
        </ListCardContainer>
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
      </Layout>
    );
  } else if (user && user.allowed === false) {
    return <FirstLogin />;
  } else {
    return <SemAcesso />;
  }
};

export default Medicao;