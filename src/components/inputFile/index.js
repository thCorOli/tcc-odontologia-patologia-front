import React, {useState} from 'react';
import {Subtitle} from "../texts";
import {FileInputLabel, FileInput, MakeSide} from './style'

const InputFile = ({ onChange }) => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
      const files = event.target.files;
      setSelectedFiles(Array.from(files));
      onChange(event);
    };

  return (
    <div>
        <MakeSide>
            <FileInputLabel>
            <FileInput type="file" multiple onChange={handleFileChange} />
              Escolha um arquivo
            </FileInputLabel>
            <Subtitle style={{ marginLeft: "2%" }}> Arquivo(s) selecionado(s):</Subtitle>
            {selectedFiles.map((item, index) => (
                <li key={index}>{item.name}</li>
            ))}
        </MakeSide>
    </div>
    
  );
};

export default InputFile;