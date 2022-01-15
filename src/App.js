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
        <Dictionay defaultKeyword="star"/>
      </main>
      <br/>
      <small>This was coded by Shammi Aktari and open source on GitHub.</small>
    </div>
  );
}

export default App;
