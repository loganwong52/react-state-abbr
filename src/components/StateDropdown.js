import React from 'react';
import UsaStateData from '../statedata/data'
// data.js in statedata is a list of objects, and I'm naming it UsaStateData

function StateDropdown(props) {
    // event handler
    // in the return value, you could replace 
    // (evt) => props.setStateAbbr(evt.currentTarget.value)
    // with simply handleChange
    function handleChange(evt) {
        props.setStateAbbr(evt.currentTarget.value)
    }

    //render
    const populateStateDropdown = () => {
        let elements = []
        for (let i = 0; i < UsaStateData.length; i++) {
            let stateKey = `state-${i}`
            let stateAbbrValue = UsaStateData[i]["alpha-2"]
            let stateNameValue = UsaStateData[i]["name"]
            elements.push(
                <option key={stateKey} value={stateAbbrValue}>
                    {stateNameValue}
                </option>
            )
        }
        return elements
    }


    // annonymous function passed in onChange
    return (
        <select onChange={
            (evt) => props.setStateAbbr(evt.currentTarget.value)
        }>
            {populateStateDropdown()}
        </select>
    )
}

export default StateDropdown;