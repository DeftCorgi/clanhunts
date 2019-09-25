import React, {useState} from 'react';
import './Huntsearch.css';
import Select from 'react-select';
import axios from 'axios';

const Huntsearch = () => {
  const [name, setName] = useState('')
  const [hunts, setHunts] = useState({})
  const [selected, setSelected] = useState('sv');

  const loadHunts = async () => {
    const result = await axios.get('/api/hunts');
    setHunts(result);
  }

  // loadHunts();

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