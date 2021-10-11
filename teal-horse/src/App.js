import './App.css';
import CodeTranslate from './CodeTranslate.js'
import TealHorse from './images/TealHorse.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={TealHorse} className="App-logo" alt="logo"/>
        <h3>Project Teal Horse</h3>
      </header>
      <CodeTranslate/>
    </div>
  );
}

export default App;
