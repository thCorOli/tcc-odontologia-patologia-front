const stringToInt = (value) => {
  // eslint-disable-next-line no-useless-escape
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
  return NaN;
};

export const isEmpty = (object) => {
  let cont = 1;
  for (let i = 1;i < Object.keys(object).length; i++) {   
    if((object[i].value==="" || object[i].value === 0)){
        cont++;
    }
  }
  if (cont === object.length) {
    alert("Preencha ao menos 1 campo.");
    return true;
  } else {
    return false;  
  }
};

export const  CreateImc = (height,weight) => {
if(height==="" || weight==="") return 0;
return (parseFloat(weight)/ Math.pow(parseFloat(height), 2)).toFixed(2);
};

export const subtract = (number1,number2) => {
if(number1 === "" || number2 ==="") return 0;
return (stringToInt(number1) - stringToInt(number2));
}

export const validatePressure = (min,max,nameMin,nameMax,dateIn) => {
if (max === "" && min === "") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${nameMin} ${nameMax}`);
  return false;
} 
  if ((max !== "" && min === "") || (max === "" && min !== "")) {
    return alert(`Preencha os dois campos! ${nameMin} ou ${nameMax}`);
  } else if (!(stringToInt(max) >= 70 && stringToInt(max) <= 300)) {
    return alert(`A ${nameMax} deve estar entre 70 e 300`);
  } else if (!(stringToInt(min) >= 40 && stringToInt(min) <= 200)) {
    return alert(`A ${nameMin} deve estar entre 40 e 200`);
  }
  return true;
};

export const validatePressure40300 = (min,max,nameMin,nameMax,dateIn) => {
if ((max === "" && min === "") || dateIn ==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${nameMin} e ${nameMax}`);
  return false;
} 
if ((max !== "" && min === "") || (max === "" && min !== "")) {
  return alert(`Preencha os dois campos! ${nameMin} ou ${nameMax}`);
} else if (!(stringToInt(max) >= 40 && stringToInt(max) <= 300)) {
  return alert(`A ${nameMax} deve estar entre 40 e 300`);
} else if (!(stringToInt(min) >= 40 && stringToInt(min) <= 300)) {
  return alert(`A ${nameMin} deve estar entre 40 e 300`);
}
return true;
};

export const validateBetween30and300 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;  
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
} 
if (((stringToInt(valueIn) >= 30) && (stringToInt(valueIn) <= 300))) {
    return true;
} else {
  return alert(`Coloque valores entre 30 e 300 no campo ${name}`);
}
};

export const validateBetween40and300 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if (((stringToInt(valueIn) >= 40) && (stringToInt(valueIn) <= 300))) {
    return true;
} else {
  return alert(`Coloque valores entre 40 e 300 no campo ${name}`);
}
};

export const validateBetween50and200 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
} 
if (((stringToInt(valueIn) >= 50) && (stringToInt(valueIn) <= 200))) {
    return true;
} else {
  return alert(`Coloque valores entre 50 e 200 no campo ${name}`);
}
};

export const validateHeight = (value,dateIn) => {
if(value==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) altura`);
  return false;
}
if(parseFloat(value) >= 1.40 && parseFloat(value) <= 2.4 )return true
alert("Digite uma Altura valida por favor.");
return false;
};

export const validateBetween30and200 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;  
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if (((stringToInt(valueIn) >= 30) && (stringToInt(valueIn) <= 200))) {
    return true;
} else {
  return alert(`Coloque valores entre 30 e 200 no campo ${name}`);
}
};

export const validateBetween10and50 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 10) && (stringToInt(valueIn) <= 50))) {
    return true;
} else {
  return alert(`Coloque valores entre 10 e 50 no campo ${name}`);
}
};

export const validateBetween10and60 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 10) && (stringToInt(valueIn) <= 60))) {
    return true;
} else {
  return alert(`Coloque valores entre 10 e 60 no campo ${name}`);
}
};

export const validateBetween100and400 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
} 
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 100) && (stringToInt(valueIn) <= 400))) {
    return true;
} else {
  return alert(`Coloque valores entre 100 e 400 no campo ${name}`);
}
};

export const validateBetween50and400 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 50) && (stringToInt(valueIn) <= 400))) {
    return true;
} else {
  return alert(`Coloque valores entre 50 e 400 no campo ${name}`);
}
};

export const validateBetween20and100 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 20) && (stringToInt(valueIn) <= 100))) {
    return true;
} else {
  return alert(`Coloque valores entre 20 e 100 no campo ${name}`);
}
};

export const validateBetween50and999 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 50) && (stringToInt(valueIn) <= 999))) {
    return true;
} else {
  return alert(`Coloque valores entre 50 e 999 no campo ${name}`);
}
};

export const validateBetween100and200 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 100) && (stringToInt(valueIn) <= 200))) {
    return true;
} else {
  return alert(`Coloque valores entre 100 e 200 no campo ${name}`);
}
};

export const validateBetween2and10 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 2) && (stringToInt(valueIn) <= 10))) {
    return true;
} else {
  return alert(`Coloque valores entre 2 e 10 no campo ${name}`);
}
};

export const validateBetween2and20 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 2) && (stringToInt(valueIn) <= 20))) {
    return true;
} else {
  return alert(`Coloque valores entre 2 e 20 no campo ${name}`);
}
};

export const validateBetween10and200 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === "") {
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 10) && (stringToInt(valueIn) <= 200))) {
    return true;
} else {
  return alert(`Coloque valores entre 10 e 200 no campo ${name}`);
}
};

export const validateBetween10and100 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
} 
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 10) && (stringToInt(valueIn) <= 100))) {
    return true;
} else {
  return alert(`Coloque valores entre 10 e 100 no campo ${name}`);
}
};


export const validateBetween5and20 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false
}
if(valueIn==="") return true;  
if (((stringToInt(valueIn) >= 5) && (stringToInt(valueIn) <= 20))) {
    return true;
} else {
  return alert(`Coloque valores entre 5 e 20 no campo ${name}`);
}
};


export const validateBetween40and999 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(valueIn==="") return true;  
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false;
} 
if (((stringToInt(valueIn) >= 40) && (stringToInt(valueIn) <= 999))) {
    return true;
} else {
  return alert(`Coloque valores entre 40 e 999 no campo ${name}`);
}
};


export const validateBetween3and10 = (valueIn,dateIn,name) => {
if(valueIn==="" && dateIn==="") return true;
if(valueIn==="") return true;  
if(dateIn === ""){
  alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
  return false
} 
if (((stringToInt(valueIn) >= 3) && (stringToInt(valueIn) <= 10))) {
    return true;
} else {
  return alert(`Coloque valores entre 3 e 10 no campo ${name}`);
}
};

export const validateExam = (object, name) => {
  let cont = 0;
  for(let i = 0; i < object.length; i ++){
    console.log(object[i].value);
    if((object[i].value !=="") && object[i].value !==0){
      cont++;
    }
    console.log(cont);
  }
  console.log(name,cont,object.length,object);
  if(cont >= 1 && cont < object.length){
      alert(`Preencha a tudo do exame ${name}`);
      return false;
  }
  return true;

};

export const validateBetween30and50 = (valueIn,dateIn,name) => {
  if(valueIn==="" && dateIn==="") return true;
  if(valueIn==="") return true;  
  if(dateIn === ""){
    alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
    return false;
  } 
  if (((stringToInt(valueIn) >= 30) && (stringToInt(valueIn) <= 50))) {
      return true;
  } else {
    return alert(`Coloque valores entre 40 e 999 no campo ${name}`);
  }
  };

  
export const validateBetween80and100 = (valueIn,dateIn,name) => {
  if(valueIn==="" && dateIn==="") return true;
  if(valueIn==="") return true;  
  if(dateIn === ""){
    alert(`Insira a data em que foi feita a ultima medição do(a) seu(a) ${name}`);
    return false;
  } 
  if (((stringToInt(valueIn) >= 80) && (stringToInt(valueIn) <= 100))) {
      return true;
  } else {
    return alert(`Coloque valores entre 40 e 999 no campo ${name}`);
  }
  };