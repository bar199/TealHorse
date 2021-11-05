import React, {useState} from 'react'
import {parserFunction} from './parsing.js'


function CodeTranslate(){
  // Declare State Variables for input/output functionality
  const [textInput, updateInput] = useState();
  const [textOutput, updateOutput] = useState();
  const handleClick = (e) => {
    let temp = parserFunction(textInput);
    updateOutput(temp);
    //console.log(textOutput);
  }
  const handleInput = (e) => {
    updateInput(e.target.value)
  }
  const handleClear = (e) => {
    updateOutput(' ');
    updateInput(' ');
  }

  return(
    <div className="main">
      <textarea placeholder="Enter Android XML layout Code..." rows="35" cols="70" onChange={handleInput}>
        
      </textarea>
      <span>
        <button onClick={handleClick}>
          Translate
        </button>
        <button onClick={handleClear}>
          Clear
        </button>
      </span>
      <textarea placeholder="React Native Code Output..." rows="35" cols="70" value={textOutput}>
      </textarea>
    </div>
  );
}
export default CodeTranslate;