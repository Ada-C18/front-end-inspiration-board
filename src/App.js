import Board from "./components/Board";
import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import axios from "axios";
import { useState, useEffect } from "react";

// const BaseUrl = "http://localhost:5000";

function App() {
  const [boardsData, setBoardsData] = useState([]);

  const createNewBoard = (newBoardData) => {
    axios
      .post("http://localhost:5000/boards", newBoardData)
      .then((response) => {
        const newBoards = [...boardsData];
        // const newId = Math.max(...newBoards.map(board => board.id))+1
        newBoards.push({
          // id: newId,
          board_id: response.data.id,
          title: response.data.title,
          owner: response.data.owner,
          ...boardsData,
        });
        setBoardsData(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewBoardForm createNewBoard={createNewBoard} />
        <Board>Board</Board>
      </header>
    </div>
  );
}

export default App;
