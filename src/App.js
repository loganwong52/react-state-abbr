import React from 'react';
import './App.css';
import './statedata/index'
// index.js in statedata is a list of objects

function App() {
  return (
    <div className="App">
      <h1>State Abbreviation App</h1>
      <hr />
      <select>
        <option value="1">Donuts</option>
        <option value="2">Bagels</option>
        <option value="3">Peach Ring</option>
      </select>
      <div id="div-state-abbr">
        CA
      </div>
    </div>
  );
}

export default App;
