import React from "react";
import './App.css';
import Dictionay from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className=''>Dictionary App</h1>
      </header>
      <main>
        <Dictionay />
      </main>
      <br/>
      <footer>This was coded by Shammi Aktari and open source on GitHub.</footer>
    </div>
  );
}

export default App;
