import React, {useState} from 'react';
import './Huntsearch.css';

const Huntsearch = () => {
  const [name, setName] = useState('')
  const changeName = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="Huntsearch container">
      <form>
        <label htmlFor="name">Hunt name:</label>
        <input className="searchfield" type="text" name="name" value={name} onChange={changeName} />
      </form>
    </div>
  );
};

export default Huntsearch;