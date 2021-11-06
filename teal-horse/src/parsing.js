import XMLToReact from '@condenast/xml-to-react';

export const parserFunction = (xmlString) => {
    let xmlElements = []
    let parser = new DOMParser();
    const androidDOM = parser.parseFromString(xmlString, "text/xml");
    console.log(androidDOM);
    //Code checks if their is an error in the code you've entered
    if(androidDOM.activeElement.textContent && androidDOM.activeElement.textContent.includes("XML Parsing Error")){
      console.log(androidDOM.activeElement.textContent);
      return "XML Parsing Error"
    }

    //Grabs the lists of parsed elements 
    const nodeList = androidDOM.firstChild.childNodes;
    //console.log(String(nodeList.item(0)) === '[object Text]');

    console.log(nodeList)
    for(var i = 0; i < nodeList.length; i++ ){
      //Loops through the parsed elements and grabs what is usable and appends it to the array of xmlElements
      if(String(nodeList.item(i)) !== '[object Text]') xmlElements.push(nodeList.item(i));
    }
    //console.log(String(xmlElements[0].outerHTML));
    
    //Returns a string containing each element seperated by two new line characters
    var s = new XMLSerializer();
    console.log(s.serializeToString(xmlElements[0]))
    return xmlElements
  }

  export const translateFunction = (elementArray) => {
    var arraylength = elementArray.length
    const xmlToReact = new XMLToReact({
      Example: (attrs) => ({ type: 'ul', props: attrs }),
      Item: (attrs) => ({ type: 'li', props: attrs })
    });
    

    if(elementArray === 'XML Parsing Error'){
      window.alert('Invalid Entry')
      return 'Invalid Entry'
    }
    else{
      for(let i = 0; i<arraylength; i++){
        console.log(elementArray[i].localName)
      }
      const reactTree = xmlToReact.convert(`
      <Example name="simple">
      </Example>
      `);
      return reactTree     
      //return elementArray.join("\r\n\n");
    }
  }

  function myConverter(attributes) {
    return {
      type: 'div',
      props: {
        className: 'test'
      }
    }
  }

  export const sampleXML = () => {
      return `
    <?xml version="1.0" encoding="utf-8"?>
    <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:id="@+id/container"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:paddingLeft="@dimen/activity_horizontal_margin"
        android:paddingTop="@dimen/activity_vertical_margin"
        android:paddingRight="@dimen/activity_horizontal_margin"
        android:paddingBottom="@dimen/activity_vertical_margin"
        tools:context=".ui.login.LoginActivity">
    
        <EditText
            android:id="@+id/username"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginTop="96dp"
            android:hint="@string/prompt_email"
            android:inputType="textEmailAddress"
            android:selectAllOnFocus="true"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toTopOf="parent" />

        <EditText
            android:id="@+id/password"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_marginTop="8dp"
            android:hint="@string/prompt_password"
            android:imeActionLabel="@string/action_sign_in_short"
            android:imeOptions="actionDone"
            android:inputType="textPassword"
            android:selectAllOnFocus="true"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/username" />
    
        <Button
            android:id="@+id/login"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="start"
            android:layout_marginTop="16dp"
            android:layout_marginBottom="64dp"
            android:enabled="false"
            android:text="@string/action_sign_in"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="parent"
            app:layout_constraintStart_toStartOf="parent"
            app:layout_constraintTop_toBottomOf="@+id/password"
            app:layout_constraintVertical_bias="0.2" />
    
        <ProgressBar
            android:id="@+id/loading"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:layout_marginTop="64dp"
            android:layout_marginBottom="64dp"
            android:visibility="gone"
            app:layout_constraintBottom_toBottomOf="parent"
            app:layout_constraintEnd_toEndOf="@+id/password"
            app:layout_constraintStart_toStartOf="@+id/password"
            app:layout_constraintTop_toTopOf="parent"
            app:layout_constraintVertical_bias="0.3" />
    
    </androidx.constraintlayout.widget.ConstraintLayout>
      `
  }