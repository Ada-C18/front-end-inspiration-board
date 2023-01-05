import "./App.css";
import { useState, useEffect } from "react";
import BoardList from "./components/BoardList.js";
import CardList from "./components/CardList.js";
//import CreateBoard from "./components/CreateBoard.js";
import axios from "axios";

import MOCK_BOARD from "./data/mockBoard.json";
import MOCK_BOARD_LIST from "./data/mockBoardList.json";

//const apiUrl = process.env.REACT_APP_BACKEND_URL;
const apiUrl = false;

const getAllBoards = () => {
  if (!apiUrl)
    return new Promise((resolve, reject) => resolve(MOCK_BOARD_LIST));
  else
    return axios
      .get(`${apiUrl}/boards`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
};

const getBoard = (board_id) => {
  if (!apiUrl) return new Promise((resolve, reject) => resolve(MOCK_BOARD));
  else
    return axios
      .get(`${apiUrl}/board/${board_id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
};

function App() {
  const [boardList, setBoardList] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    getAllBoards().then((allBoards) => {
      setBoardList(allBoards);
      setSelectedBoard(0);
    });
  }, []);

  useEffect(() => {
    console.log(selectedBoard);
    if (selectedBoard !== undefined) {
      getBoard(selectedBoard.id).then((boardData) =>
        setCardList(boardData.board.cards)
      );
    }
    //setCardList(MOCK_BOARD.board.cards);
  }, [selectedBoard]);

  const selectBoard = (event) => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Boards</h1>
      </header>
      <main>
        <BoardList boards={boardList} selectBoard={selectBoard}></BoardList>
        <h2>
          Board:{" "}
          {boardList[selectedBoard] ? boardList[selectedBoard].title : "None"}
        </h2>
        <CardList cards={cardList}></CardList>
      </main>
    </div>
  );
}

export default App;
