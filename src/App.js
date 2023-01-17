import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Board from "./Components/Board";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;

function App() {
  const [listOfBoards, setListOfBoards] = useState([]);
  const addNewBoard = (newBoard) => {
    /* TODO */
    axios.post(`${BACKEND_URL}/boards`, newBoard).then((response) => {
      // const boards = [...listOfBoards];
      // console.log("Response:", response.data.board);
      getBoardList()
      // boards.push(response.data.board);
      // setListOfBoards(boards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new board.');
    });

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

  const getCurrentBoardName = () => {
    if (currentBoard) {
      const current = listOfBoards.find(
        (element) => parseInt(element.id) === currentBoard
      );
      return current.name;
    } else {
      return null;
    }
  };

  useEffect(() => getBoardList, []);

  return (
    <main className="App">
      <Header
        listOfBoards={listOfBoards}
        newBoard={addNewBoard}
        updateCurrentBoard={updateCurrentBoard}
      ></Header>
      {/* <BoardForm newBoard={addNewBoard}></BoardForm>  */}
      <Board
        currentBoard={currentBoard}
        currentBoardName={getCurrentBoardName()}
      ></Board>
    </main>
  );
}
export default App;
