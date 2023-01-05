import './App.css';
// import axios from 'axios';
// import Board from './componenets/Board';
// import Card from './componenets/Card';
// import CardList from './componenets/CardList';
import NewCard from './components/NewCard';
// import NewBoard from './componenets/NewBoard';
// import { useState } from 'react';


function App() {
  const handleCardSubmit=(data)=>{
    //call api, updating the new cards on the board
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
        <div>
          <h2>Create New Board</h2>
          <h2>Create New Card</h2>
          <NewCard handleCardSubmit={handleCardSubmit}/>
          <h2>Boards</h2>
        </div>
        
    </div>
  );
}

export default App;
