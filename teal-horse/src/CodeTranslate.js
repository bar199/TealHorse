import React, {useState} from 'react'
import {parserFunction,sampleXML,translateFunction} from './parsing.js'


function CodeTranslate(){
  // Declare State Variables for input/output functionality
  const [textInput, updateInput] = useState();
  const [textOutput, updateOutput] = useState();
  const handleClick = (e) => {
    let tempParse = parserFunction(textInput);
    let tempTranslate = translateFunction(tempParse);
    updateOutput(String(tempTranslate));
    //console.log(textOutput);
  }
  const handleInput = (e) => {
    updateInput(e.target.value)
  }
  const handleTest = (e) => {
    console.log(sampleXML())
    updateInput(sampleXML());
  }

  return(
    <div className="main">
      <textarea placeholder="Enter Android XML layout Code..." rows="35" cols="70" onChange={handleInput}/>
        <button onClick={handleClick}>Translate</button>
        {/* <button onClick={handleTest}>Test</button> */}
      <textarea placeholder="React Native Code Output..." rows="35" cols="70" value={textOutput}/>
    </div>
  );
}
export default CodeTranslate;