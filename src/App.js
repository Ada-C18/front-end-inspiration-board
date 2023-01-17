import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import CardsList from './components/CardsList';
import Card from './components/Card';

function App() {

  // const [boardsData, setBoardsData] = useState([]);
  // const [selectedBoard, setSelectedBoard] = useState({
  //   title: '',
  //   owner: '',
  //   board_id: null
  // });

  // useEffect(() => {
  //   axios.get("https://lucky7-inspiration-board-api.herokuapp.com/boards")}, {
  //   }).then((response) => {
  //     setBoardsData(response.data);
  //   }, []);

  // const selectBoard = (board) => { setSelectedBoard(board) };

  // const boardsElements = boardsData.map((board) => {
  //   return (<li>
  //     <Board board={board} onBoardSelect={selectBoard}></Board>
  //   </li>)
  // });




  const boardData = {
    board_id: 92,
    owner: "Ada L.",
    title: "Pick-me-up Quotes",
  };
  
  const cardData = [
    {card_id: 188, likes_count: 3, message: "Effort won't betray you. 💖"},
    {card_id: 186, likes_count: 6, message: "You're like a cup of tea: green! 😍"}
  ];

  const newBoardData = {board_id: null, owner: "", title: ""};


  return (
    <div className="App">
      <header className="App-header">
        <h1>INSPIRATION BOARD</h1>
        
      </header>
      <main>
          <div className="selectedBoard">
            <h2>{boardData["title"]}</h2> 
          </div>

          <div className ="cardsContainer">
            <p className = "cardMessage">
      
              {cardData[0]["message"]}
            
              <CardsList>{CardsList}</CardsList>
            </p>
            <p className = "cardMessage">
              {cardData[1]["message"]}
            </p>
          </div>
        
        <section className = "createNew">
          <div className="boardContainer">
            
            <p className = "createBoard">
              <h2>Create New Board</h2>
              <NewBoardForm></NewBoardForm>
            </p>
            
          
          </div>
          <div className="newCardContainer">

            <p className = "newCardBoard">
              <h2>Create New Card</h2>
              <NewCardForm>{NewCardForm}</NewCardForm>
      
            </p>
          
          </div>
        </section>

      </main>
    </div>
  );

}

export default App;
