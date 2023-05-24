import React, { useState, useContext } from 'react';
import { FirmsContext } from '../../Context/FirmsContext';
import Autosuggest from 'react-autosuggest';

const Autocomplete = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState('');
    const {allFirms, setFirms} = useContext(FirmsContext);
  
  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : allFirms.filter(firm =>
      firm.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  

  const getSuggestionValue = suggestion => suggestion.name;
  

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );
    const onChange = (event, { newValue}) => {
        setValue(newValue);
        };
    
    
     
      const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
        };
    
      const onSuggestionsClearRequested = () => {
        setSuggestions([]);
        };
    
      const onKeyDown = (event) => {
        if (event.key === 'Enter' && value !== '') {
          setFirms(suggestions);
        }
      }

    const inputProps = {
        placeholder: 'Digite aqui',
        value,
        onChange: onChange,
        onKeyDown: onKeyDown
      
      };
      
    return(
        <>
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            focusInputOnSuggestionClick={false} />
        </>
    );
};

export default Autocomplete;