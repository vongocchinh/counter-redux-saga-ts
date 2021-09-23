import React from 'react';
import './App.css';
import Pokemon from './pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <Pokemon />
      </header>
    </div>
  );
}

export default App;
