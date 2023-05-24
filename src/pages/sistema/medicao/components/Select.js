import React from 'react'
import { Select } from "@material-ui/core";
import { Links } from "./style"

export default function MySelect() {
  return (
    <Select defaultValue={"DEFAULT"}>
      <option value="DEFAULT" disabled>
        Escolha a opção que deseja preencher...
          </option>
      <Links href="#pressao" value={1}>
        Pressão
          </Links>
      <Links href="#circunferenciaAbdominal" value={3}>
        Circunferência Abdominal
          </Links>
      <Links href="#pescoço" value={4}>
        Circunferência do pescoço
          </Links>
      <Links href="#altura" value={5}>
        Altura
          </Links>
      <Links href="#peso" value={5}>
        Peso
        </Links>
      <Links href="#frequencia" value={26}>
            Frequência Cardíaca
      </Links>
      <Links href="#imc" value={6}>
        IMC
          </Links>
      <Links href="#hematrocito" value={7}>
        Hematócrito
          </Links>
      <Links href="#hemoglobina" value={8}>
        Hemoglobina
          </Links>
      <Links href="#glicemia" value={9}>
        Glicemia
          </Links>
      <Links href="#hemoglobinaG" value={10}>
        Hemoglobina Glicosilada
          </Links>
      <Links href="#colesterolTotal" value={11}>
        Colesterol Total
          </Links>
      <Links href="#LDL" value={12}>
        Colesterol LDL
          </Links>
      <Links href="#HDL" value={13}>
        Colesterol HDL
          </Links>
      <Links href="#triglicerideos" value={14}>
        Triglicerídeos
          </Links>
      <Links href="#sodio" value={15}>
        Sódio
          </Links>
      <Links href="#potassio" value={16}>
        Potássio
          </Links>
      <Links href="#acidoUrico" value={17}>
        Ácido úrico
          </Links>
      <Links href="#ureia" value={18}>
        Ureia
          </Links>
      <Links href="#creatinina" value={19}>
        Creatinina
          </Links>
      <Links href="#vitaminaD" value={20}>
        Vitamina D
          </Links>
      <Links href="#MAPA" value={21}>
        Exames MAPA
          </Links>
      <Links href="#MRPA" value={22}>
        Exames MRPA
          </Links>
      <Links href="#ECO" value={23}>
        Exames ECO
          </Links>
      <Links href="#mapaAop" value={24}>
        Exames MAPA AOP
          </Links>
      <Links href="#testeErgometrico" value={25}>
        Testes Ergometricos
          </Links>
    </Select>
  )
}
