import React from 'react';
import Nav from '../nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
        <h1>Yre's clan hunts</h1>
        <form>
          <label htmlFor="name"></label>
          <input type="text" name="name"/>
        </form>
      </main>
    </div>
  );
}

export default App;
