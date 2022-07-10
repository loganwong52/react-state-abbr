import React from 'react';
import './App.css';
import { useState } from 'react'

// components
import StateDropdown from './components/StateDropdown';
import StateAbbrDisplay from './components/StateAbbrDisplay';

function App() {
  // state values
  // create these when the data changing impacts the rendering
  const [stateAbbr, setStateAbbr] = useState("")

  return (
    <div className="App">
      <h1>State Abbreviation App</h1>
      <hr />
      <StateDropdown setStateAbbr={setStateAbbr} />
      <StateAbbrDisplay stateAbbr={stateAbbr} />
    </div>
  );
}

export default App;
