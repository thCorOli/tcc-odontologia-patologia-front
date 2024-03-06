export const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (ev) => resolve(ev.target.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
    });
}


export const downloadFile = (base64Data, fileName) => {
    // Converte o base64 em um blob
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);

    // Cria um link para o blob e simula um clique nele para iniciar o download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
};


export const downloadFiles = (filesArray) => {
    filesArray.forEach((base64Data, index) => {
        const fileName = `file_${index + 1}`; 
        downloadFile(base64Data, `${fileName}`);
    });
};

