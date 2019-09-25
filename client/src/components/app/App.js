import React from 'react';
import Nav from '../nav/Nav';
import Huntsearch from '../huntsearch/Huntsearch';
import './App.css';
import { HuntProvider } from '../huntcontext/HuntContext';

function App() {
  return (
    <div className="App">
      <HuntProvider>
        <Nav/>
        <main>
          <Huntsearch />
        </main>
      </HuntProvider>
    </div>
  );
}

export default App;
