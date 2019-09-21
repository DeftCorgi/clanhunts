import React, {useState} from 'react';
import './Huntsearch.css';
import SelectSearch from 'react-select-search';

const huntList = [
  { name: 'Swedish', value: 'sv' },
  { name: 'English', value: 'en' },
  { name: 'Spanish', value: 'es' },
];

const Huntsearch = () => {
  const [name, setName] = useState('')
  const [hunts] = useState(huntList)
  const [focus, setFocus] = useState(true)

  const renderOption = (option, state, props) => {
    const style = {
      display: focus || 'none' 
    }
    return <div className="option" style={style}>{option.name}</div>
  }

  const onFocus = () => setFocus(true)
  const onBlur = () => setFocus(false)

  const changeName = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="Huntsearch container">
      <form>
        <SelectSearch className="searchfield" 
                      type="text" 
                      name="name" 
                      options={hunts} 
                      placeholder="Hunt search..." 
                      multiple={false} 
                      autofocus={true} 
                      renderOption={renderOption}
                      onFocus={onFocus}
                      onBlur={onBlur}  
                      />
      </form>
    </div>
  );
};

export default Huntsearch;