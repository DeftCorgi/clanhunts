import React, {useState} from 'react';
import Nav from '../nav/Nav';
import Huntsearch from '../huntsearch/Huntsearch';
import './App.css';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      <Nav/>
      <main>
        <Huntsearch />
      </main>
    </div>
  );
}

export default App;
