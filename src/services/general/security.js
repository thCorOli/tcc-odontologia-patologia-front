export const hasEmptyFields = (obj) =>{
    for (let key in obj) {
      if (!obj[key]) {
        return true;
      }
    }
    return false;
}

function blockSQLInjection(input) {
    const sqlKeywords = ["SELECT", "UPDATE", "INSERT", "DELETE", "DROP", "ALTER"];
    const regex = new RegExp(sqlKeywords.join("|"), "i");
    return regex.test(input);
}

export const hasSqlStrings = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            if(typeof obj[key]  === 'string'){
                blockSQLInjection(obj[key]);
            }
        }
    }
}

export const isEqual = (password, password_confirmation) => {
    if (password === password_confirmation) return true;
    else {
      return false;
    }
};

export const isDateValid = (date) => {
    let today = new Date();
    let fildDate = new Date(date.split('/').reverse());
    if(date === ""){
      return false
    }
    
    if(fildDate.getTime() >= today.getTime()){
      return false;
    }
    return true;
}

export const isCpfValid = (cpf) => {
    console.log(cpf)
    if (typeof cpf !== "string") return false;
    cpf = cpf.replace(/[\s.-]*/gim, "");
    if (
      !cpf ||
      cpf.length !== 11 ||
      cpf === "00000000000" ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999"
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return false;
    }
    return true;
};

