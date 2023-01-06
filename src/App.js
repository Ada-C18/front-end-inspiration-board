import './App.css';
// import axios from 'axios';
import Board from './components/Board';
// import Card from './componenets/Card';
// import CardList from './componenets/CardList';
import NewCard from './components/NewCard';
import NewBoard from './components/NewBoard';
import { useState } from 'react';


function App() {

  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  },[]);

  const selectBoard = (board) => {
    setSelectedBoard(board)
  };

  const boardsElements = boardsData.map((board) => {
    return (
      <li>
        <Board board={board} onBoardSelect={selectBoard}></Board>
      </li>
    )
  });

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible)
  };

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
        <div className="board__container">
          <section>
            <h2> New Board</h2>
            {isBoardFormVisible ? <NewBoard onBoardSubmit={handleBoardSubmit}></NewBoard> : ""}
          </section>
          <section>
            <h2> New Card</h2>
            <NewCard onCardSubmit={handleCardSubmit}/>
          </section>
          <section>
            <h2>Boards</h2>
            <ul className="boards__list">
            {boardsElements}
            </ul>
          </section>
          <section>
            <h2>Selected Board</h2>
          </section>
        </div>
        
    </div>
  );
}

export default App;
