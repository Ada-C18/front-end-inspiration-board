import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Board from "./Components/Board";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

function App() {
  const [listOfBoards, setListOfBoards] = useState([]);
  const addNewBoard = () => {
    /* TODO */
  };
  const getBoardList = () => {
    axios.get(`${BACKEND_URL}/boards`).then((result) => {
      setListOfBoards(result.data);
    });
  };

  const [currentBoard, setCurrentBoard] = useState(null);
  const updateCurrentBoard = (id) => {
    setCurrentBoard(id ? parseInt(id) : null);
  };

  useEffect(() => getBoardList, []);

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
