import './App.css';
// import axios from 'axios';
// import Board from './componenets/Board';
// import Card from './componenets/Card';
// import CardList from './componenets/CardList';
import NewCard from './components/NewCard';
import NewBoard from './components/NewBoard';
// import { useState } from 'react';


function App() { 

  const handleCardSubmit=(data)=>{
    console.log("data",data)
    //calling the API?
    //call api, updating the new cards on the board
    //console log the"data" to see if 
    //add submit in the newcard submit
    //handle card submit to do whatever is needed to be done to add a new card
    //onBoardSubmit={handleBoardSubmit}
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
        <div>
          <h2> New Board</h2>
          <NewBoard onBoardSubmit={handleBoardSubmit} />
          <h2> New Card</h2>
          <NewCard onCardSubmit={handleCardSubmit}/>
          <h2>Boards</h2>
        </div>
        
    </div>
  );
}

export default App;
