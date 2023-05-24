import React from "react";
import FormFieldSistema from "../../../../components/formfieldSistema/index";
import { Accordion, AccordionSummary, Typography } from "@material-ui/core";
import { Text, TextCard } from "../../../../components/texts/index";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Card, FormFieldContainer, Padding, SizeInput, SideBySide } from "./style.js";


function CardWith2Inputs({
  value1,
  value2,
  onChangeHandler,
  placeholder1,
  placeholder2,
  fieldName,
  name1,
  text,
  date,
  name2,
  nameDate,
  Mapa
}) {
  return (
    <Card>
      <Accordion id={"pressao"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{fieldName}</Typography>
        </AccordionSummary>
        <Padding>
          <Text>{fieldName}</Text>
          <TextCard>{text}</TextCard>
          <FormFieldContainer>
            <SideBySide>
              <SizeInput>
                <FormFieldSistema
                  placeholder={placeholder1}
                  value={value1}
                  name={name1}
                  onChange={onChangeHandler}
                  type={"number"}
                />
              </SizeInput>
              <Text>x</Text>
              <SizeInput>
                <FormFieldSistema
                  placeholder={placeholder2}
                  value={value2}
                  name={name2}
                  type={"number"}
                  onChange={onChangeHandler}
                />
              </SizeInput>
            </SideBySide>
            {Mapa ? <a href={Mapa} target='_blank' rel='noopener noreferrer' style={{ marginBottom: "20px" }}>Guia de Localização das medidas</a> : <></>}
            <FormFieldSistema
              value={date}
              name={nameDate}
              onChange={onChangeHandler}
              type={"date"}
            />
          </FormFieldContainer>
        </Padding>
      </Accordion>
    </Card>
  )



}


export default CardWith2Inputs;