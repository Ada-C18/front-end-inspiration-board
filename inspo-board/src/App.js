import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
// import boardData from "..boardData.json";
import BoardList from "./components/BoardList";
import axios from "axios";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");

  const URL = "http://127.0.0.1:5000/boards";

  const getAllBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const selectBoard = (board_id, title, owner) => {
    const board = { board_id, title, owner };
    setSelectedBoard(board);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <h2>Boards</h2>
        <BoardList boards={boards} onSelectBoard={selectBoard} />
        <div>
          <h2>Selected Board</h2>
          <h4>
            {selectedBoard
              ? `${selectedBoard.title} - ${selectedBoard.owner}`
              : "Select a board from the list"}
          </h4>
        </div>
      </main>
    </div>
  );
}

export default App;
