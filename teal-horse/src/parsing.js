import XMLToReact from '@condenast/xml-to-react';

export const parserFunction = (xmlString) => {
    let xmlElements = []
    let parser = new DOMParser();
    const androidDOM = parser.parseFromString(xmlString, "text/xml");

    //Code checks if their is an error in the code you've entered
    if(androidDOM.activeElement.textContent.includes("XML Parsing Error")){
      console.log(androidDOM.activeElement.textContent);
      return "XML Parsing Error"
    }

    //Grabs the lists of parsed elements 
    const nodeList = androidDOM.firstChild.childNodes;
    //console.log(String(nodeList.item(0)) === '[object Text]');

    for(var i = 0; i < nodeList.length; i++ ){
      //Loops through the parsed elements and grabs what is usable and appends it to the array of xmlElements
      if(String(nodeList.item(i)) !== '[object Text]') xmlElements.push(nodeList.item(i).outerHTML);
    }
    console.log(String(xmlElements[0].outerHTML));
    
    //Returns a string containing each element seperated by two new line characters
    return xmlElements.join("\r\n\n");
  }

  export const translateFunction = (xmlString) => {
    return 'nothing'
  }