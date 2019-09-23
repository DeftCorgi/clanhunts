import React, {useState} from 'react';
import './Huntsearch.css';
import Select from 'react-select';

const huntList = [
  { label: 'Swedish', value: 'sv' },
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swedish', value: 'sv' },
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'Swedish', value: 'sv' },
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  
];

const Huntsearch = () => {
  const [name, setName] = useState('')
  const [hunts] = useState(huntList)
  const [selected, setSelected] = useState('sv');

  const onSelect = (value) => setSelected(value)

  return (
    <div className="Huntsearch container">
      <div className="tagline">
        <h2>Enter your hunt and we'll do the rest.</h2>
      </div>
      <form>
        <Select options={hunts} onChange={onSelect} placeholder={"Hunt name..."}/>
      </form>
    </div>
  );
};

export default Huntsearch;