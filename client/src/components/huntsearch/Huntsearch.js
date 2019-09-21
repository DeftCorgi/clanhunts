import React, {useState} from 'react';

const Huntsearch = () => {
  const [name, setName] = useState('')
  const changeName = (e) => {
    setName(e.target.value)
  }
  return (
    <div className="container">
      <h1>Yre's clan hunts</h1>
      <form>
        <label htmlFor="name">Hunt name</label>
        <input type="text" name="name" value={name} onChange={changeName} />
      </form>
    </div>
  );
};

export default Huntsearch;