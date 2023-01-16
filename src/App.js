import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Board from "./Components/Board";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;


function App() {
  const [listOfBoards, setListOfBoards] = useState(/* GET ALL BOARDS */);
  const addNewBoard = () => {
    // Get board data from POST request
    /* TODO */
  };

  const [currentBoard, setCurrentBoard] = useState(/* TODO */);
  const updateCurrentBoard = () => {
    // PROP
    // Get board data. Current board is the board matching
    // the id from the GET request
    const getBoard = (id) => {
      // for board in listOfBoards
      if (board.id === id) {
        return board;
      }
    });

  };

  return (
    <main className="App">
      <Header
        listOfBoards={listOfBoards}
        newBoard={addNewBoard}
        updateCurrentBoard={updateCurrentBoard}
      ></Header>
      <Board currentBoard={currentBoard}></Board>
    </main>
  );
}

export default App;
