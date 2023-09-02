import React, {useState} from 'react';
import {Subtitle} from "../texts";
import {FileInputLabel, FileInput, MakeSide} from './style'

const InputFile = ({ onChange }) => {

    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setFileName(selectedFile ? selectedFile.name : '');
      onChange(event);
    };

  return (
    <div>
        <MakeSide>
            <FileInputLabel>
            <FileInput type="file" onChange={handleFileChange} />
              Escolha um arquivo
            </FileInputLabel>
            {fileName && <Subtitle style={{marginLeft:"2%"}}> Arquivo selecionado: {fileName}</Subtitle>}
        </MakeSide>
    </div>
    
  );
};

export default InputFile;