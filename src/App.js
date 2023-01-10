import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Board from "./Components/Board";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

function App() {
  const [listOfBoards, setListOfBoards] = useState(/* TODO */);
  const addNewBoard = () => {
    /* TODO */
  };

  const [currentBoard, setCurrentBoard] = useState(/* TODO */);
  const updateCurrentBoard = () => {
    /* TODO */
  };

  return (
    <div className="App">
      <Header
        listOfBoards={listOfBoards}
        newBoard={addNewBoard}
        updateCurrentBoard={updateCurrentBoard}
      ></Header>
      <Board currentBoard={currentBoard}></Board>
    </div>
  );
}

export default App;
