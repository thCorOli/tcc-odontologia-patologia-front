import React from "react";
import FormFieldSistema from "../../../../components/formfieldSistema/index";
import { Accordion, AccordionSummary, Typography } from "@material-ui/core";
import { Text, TextCard } from "../../../../components/texts/index";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Card, FormFieldContainer, Padding } from "./style.js";

function CardAccordion({
  value,
  onChangeHandler,
  placeholder,
  fieldName,
  name,
  text,
  type,
  date,
  nameDate,
  readOnly,
  video
}) {
  return (
    <Card>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <Padding>
          <Text>{name}</Text>
          <TextCard>{text}</TextCard>
          <FormFieldContainer>
            <FormFieldSistema
              placeholder={placeholder}
              value={value}
              name={fieldName}
              onChange={onChangeHandler}
              type={type}
              readOnly={readOnly}
            />
          {video ? <a href={video} target='_blank' rel='noopener noreferrer' style={{marginBottom:"20px"}}>Como medir?</a>:<></>}
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
  );
}

export default CardAccordion;
