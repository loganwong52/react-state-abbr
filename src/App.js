import React from 'react';
import './App.css';
import UsaStateData from './statedata/data'
// index.js in statedata is a list of objects
import { useState } from 'react'

function App() {
  // state values
  // create these when the data changing impacts the rendering
  const [stateAbbr, setStateAbbr] = useState("")

  // event handlers
  const onSelectState = (evt) => {
    // print out the selected state's abbr
    // console.log(evt.currentTarget.value)

    setStateAbbr(evt.currentTarget.value)
    // console.log(stateAbbr)    // this lags behind 1
  }

  //render
  const populateStateDropdown = () => {
    let elements = []
    for (let i = 0; i < UsaStateData.length; i++) {
      elements.push(
        <option key={`state-${i}`} value={UsaStateData[i]["alpha-2"]}>
          {UsaStateData[i]["name"]}
        </option>
      )
    }
    return elements
  }

  return (
    <div className="App">
      <h1>State Abbreviation App</h1>
      <hr />
      {/* pass in function, but not calling it right away */}
      <select onChange={onSelectState}>
        {populateStateDropdown()}
      </select>
      <div id="div-state-abbr">
        {stateAbbr}
      </div>
    </div>
  );
}

export default App;
