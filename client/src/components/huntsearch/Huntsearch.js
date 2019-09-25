import React, {useState, useContext} from 'react';
import { HuntContext } from '../huntcontext/HuntContext';
import Select from 'react-select';
import './Huntsearch.css';

const Huntsearch = () => {
  const [hunts] = useContext(HuntContext)
  const [selected, setSelected] = useState('');

  const onSelect = (value) => setSelected(value)

  return (
    <div className="Huntsearch container">
      <div className="tagline">
        <h2>Enter your hunt and we'll do the rest.</h2>
      </div>
      <form>
        <Select options={hunts} 
                value={selected} 
                onChange={onSelect} placeholder={"Hunt name..."} 
                isMulti={false} 
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id}/>
      </form>
    </div>
  );
};

export default Huntsearch;