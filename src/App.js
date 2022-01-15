import React from "react";
import './App.css';
import Dictionay from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1><img src="https://img.icons8.com/fluency/48/000000/books.png" alt="Dictionaryimage"/>
        Dictionary App</h1>
      </div>
      <main>
        <Dictionay defaultKeyword="shadow"/>
      </main>
      <br/>
      <small className="links">This was coded by <a href="https://www.linkedin.com/in/shammiaktari/">Shammi Aktari</a> and <a href="https://github.com/ShammiAktari/react-dictionary-app">open source</a> on GitHub.</small>
    </div>
  );
}

export default App;
