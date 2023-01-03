import axios from 'axios'
import './App.css';
import Board from './componenets/Board'
import Card from './componenets/Card'
import CardList from './componenets/CardList'
import NewCard from './componenets/NewCard'
import NewBoard from './componenets/NewBoard'
import { useState } from 'react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
