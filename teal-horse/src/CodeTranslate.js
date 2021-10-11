import React, {useState} from 'react'

function CodeTranslate(){
  // Declare State Variables for input/output functionality
  const [textInput, updateInput] = useState();
  const handleClick = (e) => {
    console.log("Translating Code...");
    updateInput({textInput: e.target.value});
    console.log(textInput)
  }

  const handleInput = (e) => {
    updateInput(e.target.value)
  }

  return(
    <div className="main">
      <textarea placeholder="Enter Android XML layout Code..." rows="30" cols="50" onChange={handleInput}>
        
      </textarea>
      <button onClick={handleClick}>
        Translate
      </button>
      <textarea placeholder="React Native Code Output..." rows="30" cols="50">
        {textInput}
      </textarea>
    </div>
  );
}
export default CodeTranslate;