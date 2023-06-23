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
                console.log(obj[key]);
                blockSQLInjection(obj[key]);
            }
        }
    }
}
