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
    //call the api endpoints here
   
    //onBoardSubmit={handleBoardSubmit}
  }
    const handleBoardSubmit=(data)=>{
      //console.log("data",data)
      //call the api endpoints here
      
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
